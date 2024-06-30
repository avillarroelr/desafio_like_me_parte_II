import pool from "../../database/dbconfig.js";

export const getLikesModel = async () => {
    const queryGetLikes = { text: 'SELECT * FROM posts' };
    try {
        const result = await pool.query(queryGetLikes);
        return result.rows;
    } catch (error) {
        throw new Error('Error al obtener datos de la base de datos');
    }
};

export const addLikesModel = async ({ titulo, img, descripcion }) => {
    const queryAddLike = {
        text: 'INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, 0) RETURNING *',
        values: [titulo, img, descripcion]
    };
    try {
        const result = await pool.query(queryAddLike);
        return result.rows[0];
    } catch (error) {
        throw new Error('Error al insertar nuevo post');
    }
};

export const likePostModel = async (id) => {
    const queryLikePost = {
        text: 'UPDATE posts SET likes = likes + 1 WHERE id = $1 RETURNING *',
        values: [id]
    };
    try {
        const result = await pool.query(queryLikePost);
        return result.rows[0];
    } catch (error) {
        throw new Error('Error al actualizar los likes');
    }
};

export const updateLikesModel = async (id, { titulo, img, descripcion }) => {
    const queryUpdatePost = {
        text: 'UPDATE posts SET titulo = $1, img = $2, descripcion = $3 WHERE id = $4 RETURNING *',
        values: [titulo, img, descripcion, id]
    };
    try {
        const result = await pool.query(queryUpdatePost);
        return result.rows[0];
    } catch (error) {
        console.error('Error al actualizar el post:', error);
        throw new Error('Error al actualizar el post');
    }
};

export const deleteLikesModel = async (id) => {
    const queryDeletePost = {
        text: 'DELETE FROM posts WHERE id = $1',
        values: [id]
    };
    try {
        await pool.query(queryDeletePost);
    } catch (error) {
        console.error('Error al eliminar el post:', error);
        throw new Error('Error al eliminar el post');
    }
};

