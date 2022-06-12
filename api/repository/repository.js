import { con } from "./connection.js"

export async function inserirAnime(anime){
    const comando = 
    `
    INSERT INTO TB_ANIME(nm_anime)
    VALUES(?);
    `
    const [resposta] = await con.query(comando, [anime])
    
    return resposta;
}

export async function consultarAnimesPorID(id){
    const comando = 
    `
    SELECT * FROM TB_ANIME 
    WHERE id_anime= ?;
    `
    const [resposta] = await con.query(comando, [id])
    return resposta;
}
