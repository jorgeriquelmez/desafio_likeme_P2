SELECT * FROM posts;
INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4) RETURNING *;
UPDATE posts SET likes = likes + 1 WHERE id = $1 RETURNING *;
DELETE FROM posts WHERE id = $1 RETURNING *;||