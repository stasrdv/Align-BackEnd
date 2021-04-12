import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const PlaylistSchema = new Schema({
  id: {
    type: String
  }
});