import { BASE_URL } from "../constants/constants";
import { ImageItem } from "../models/image.item.dto";



export async function getRandomImage(): Promise<ImageItem[]> {
  const storage = require('node-persist');
  const items = await storage.getItem('preLoadedImages');
  if (items.length < 5) { loadImages() }
  const randomItems = items.sort(() => Math.random() - Math.random()).slice(0, 5);
  const filteredArray = items.filter((ar: { id: string; }) => !randomItems.find((rm: { id: string; }) => (rm.id === ar.id)));
  await storage.setItem('preLoadedImages', filteredArray);
  return new Promise<ImageItem[]>((resolve) => {
    resolve(randomItems);
  });
}


export const loadImages = async () => {
  const fetch = require('node-fetch');
  const storage = require('node-persist');
  await storage.init();
  fetch(BASE_URL)
    .then((response: { json: () => any; }) => response.json())
    .then(async (data: any) => {
      await storage.setItem('preLoadedImages', data);
    })
    .catch((err: any) => console.log)
}










