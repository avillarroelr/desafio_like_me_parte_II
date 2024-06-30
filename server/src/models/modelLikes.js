import pool from "../../database/dbconfig.js";

// LISTAR CON GET
export const getLikesModel = async () => {
    const queryGetLikes = { text: 'SELECT * FROM posts' };
    try {
        const result = await pool.query(queryGetLikes);
        console.log('Resultados de la consulta:', result.rows);
        return result.rows;
    } catch (error) {
        console.log('Error en la consulta:', error);
        throw new Error('Error al obtener datos de la base de datos');
    }
};

// INGRESAR REGISTROS CON POST
export const addLikesModel = async ({ titulo, img, descripcion }) => {
    const queryAddLike = {
        text: 'INSERT INTO posts (titulo, img, descripcion) VALUES ($1, $2, $3) RETURNING *',
        values: [titulo, img, descripcion]
    };
    try {
        const result = await pool.query(queryAddLike);
        return result.rows[0];
    } catch (error) {
        console.error('Error al insertar nuevo post:', error);
        throw new Error('Error al insertar nuevo post');
    }
};