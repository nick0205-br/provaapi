import { con } from '../connection'


export async function inserirAnime(anime){
    const comando = 'INSERT INTO TB_ANIME (id_anime, nm_anime)'
                                  VALUES (1, 'Naruto')

    const [resposta] = await con.query (comando, [anime.nome, anime.id]), anime = resposta;

    return anime;
}