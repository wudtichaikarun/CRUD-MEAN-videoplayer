import Videos from './model';

const VideosController = {  
    getAll(req, res) {
        res.json({ videos: Videos.findAll() })
    }


}

export default VideosController
