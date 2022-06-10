import { inserirAnime, consultarAnime } from '../repository/animerepository.js'
import { Router } from 'express'


const server = Router();


server.post('/anime', async (req, resp) => {
    try{
        const animeinserir = req.body;
        
        const anime = await inserirAnime (animeinserir);
        
        resp.send({
            anime: anime
        });
    }
    catch(err){
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.get('/anime', async (req, resp) => {
    try{
        const re = await consultarAnime()

        resp.send({
            anime: re
        })
    }
    catch(err){
        resp.status(404).send({
            erro: err.message
        })
    }
})

export default server;
