import { pool } from '../../config/config.js'
import { v4 as uuidv4 } from 'uuid'

// GET
export const getPostsModel = async () => {
  try {
    const sql = { text: 'SELECT * FROM posts' }
    const result = await pool.query(sql)
    return result.rows
  } catch (error) {
    console.error('Error al obtener posts:', error)
    throw new Error('Error en la query para obtener posts')
  }
}
// POST
export const createPostModel = async ({ titulo, url, descripcion, likes }) => {
  const sqlQuery = {
    text: 'INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4) RETURNING *',
    values: [titulo, url, descripcion, likes]
  }
  try {
    const result = await pool.query(sqlQuery)
    return result.rows[0]
  } catch (error) {
    console.error('Error al crear el post en el modelo:', error)
    throw new Error('Error creando el post en la base de datos')
  }
}
// PUT
export const updatePostModel = async (id) => {
  const sqlQuery = {
    text: 'UPDATE posts SET likes = likes + 1 WHERE id = $1 RETURNING *',
    values: [id]
  }
  try {
    const result = await pool.query(sqlQuery)
    return result.rows[0]
  } catch (error) {
    console.error('Error al incrementar likes en el modelo:', error)
    throw new Error('Error de base de datos al incrementar likes')
  }
}

// DELETE
export const deletePostModel = async (id) => {
  const sqlQuery = {
    text: 'DELETE FROM posts WHERE id = $1 RETURNING *',
    values: [id]
  }
  try {
    const result = await pool.query(sqlQuery)
    return result.rows[0]
  } catch (error) {
    console.error('Error al eliminar el post en el modelo:', error)
    throw new Error('Error eliminando el post de la base de datos')
  }
}
