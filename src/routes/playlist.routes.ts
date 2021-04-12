import { Router } from 'express';
import { PlaylistController } from '../store/controllers/playlist.controller';

const playlistRouter = Router();

playlistRouter.get('/getPlayList', function (req, res) {
    const playlistController = new PlaylistController();
    playlistController.getPlayList(res)
});

playlistRouter.post('/insertVideo', function (req, res) {
    if (!req.body) {
        return res.status(400).json({
            status: 'error',
            error: 'req body cannot be empty',
        });
    }
    const playlistController = new PlaylistController();
    playlistController.saveNewVideoID(req, res);

});


export { playlistRouter };
