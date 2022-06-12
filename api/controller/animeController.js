import { consultarAnimesPorID, inserirAnime } from "../Repository/animeRepository.js";
import { Router } from 'express'
const server = Router();

server.post('/anime/', async (req, resp) => {
    try{
        const { animes } = req.body;
        const animeInserido = await inserirAnime(animes);
        resp.send(animeInserido);
    } catch(err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.get('/consulta/:id', async (req, resp) => {
    try{
        const id = req.params.id;
        const consultaAnime = await consultarAnimesPorID(id)
        resp.send(consultaAnime);
    } catch(err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})

export default server;
