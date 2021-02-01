import { BASE_URL } from "../constants/constants";
import { ImageItem } from "../models/image.item.dto";



export async function getRandomImage(): Promise<ImageItem[]> {
  const storage = require('node-persist');
  const items = await storage.getItem('preLoadedImages');
  const getRandomItems = () => {
    return items.sort(() => Math.random() - Math.random()).slice(0, 5)

  }
  return new Promise<ImageItem[]>((resolve) => {
    resolve(getRandomItems());
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










