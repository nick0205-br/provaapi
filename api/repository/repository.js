import { con } from './connection.js'


export async function inserirAnime(animeinserir){
    const comando = `INSERT INTO Tb_ANIME (nm_anime)
                                  VALUES (?)`;

    const [resposta] = await con.query (comando, [animeinserir.nome,]);
    animeinserir.id = resposta.insertId;

    return resposta;
}

export async function consultarAnime(){
    const comando = `SELECT * FROM tb_anime`;

    const [resposta] = await con.query (comando);

    return resposta;
}
