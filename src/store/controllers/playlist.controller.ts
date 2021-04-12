import * as mongoose from 'mongoose';
import { PlaylistSchema } from '../schemas/playlist.scehma';
import { Request, Response } from 'express';
import { emitEvent } from '../../index';
import { EMIT_ITEM } from '../../constants/constants';


const PlayListsModel = mongoose.model('YouTubeIds', PlaylistSchema);

export class PlaylistController {

    public saveNewVideoID(req: Request, res: Response) {
        let playlistItem = new PlayListsModel(req.body);
        playlistItem.save((err, item) => {
            if (err) {
                res.status(400)
                return res.send(err);
            }
            res.json(item);
            res.status(201)
            emitEvent(EMIT_ITEM, req.body.id);
        });
    }

    public getPlayList(res: Response) {
        PlayListsModel.find({}, null, (err, totalRows) => {
            if (err) {
                res.send(err);
                res.status(400)
            }
            res.json(totalRows);
        }).distinct('id');
    }
}