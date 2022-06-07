import { con } from './connection.js'


export async function inserirAnime(anime){
    const comando = `INSERT INTO Tb_ANIME (id_anime, nm_anime)
                                  VALUES (?, ?);`

    const [resposta] = await con.query (comando, [anime.nome,]);
    anime.id = resposta.insertId;

    return anime;
}