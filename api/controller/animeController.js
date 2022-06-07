import { inserirAnime } from '../repository/animerepository'
import { Router } from 'express'


const server = Router();


server.post('/anime', async (req, resp) => {
    try{
        const inserirAnime = req.body;
        const anime = await inserirAnime (inserirAnime);
        resp.send({
            anime
        });
    }
    catch(err){
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.get('/anime', (req, resp) => {
    try{
        const anime = req.query.anime;

        resp.send({
            anime: anime
        })
    }
    catch(err){
        resp.status(404).send({
            erro: err.message
        })
    }
})

export default server;