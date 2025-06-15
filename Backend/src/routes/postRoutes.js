import { Router } from 'express'
import {
  getPostsController,
  createPostController,
  updatePostController,
  deletePostController
} from '../controllers/postController.js'

const router = Router()

router.get('/posts', getPostsController)
router.post('/posts', createPostController)
router.put('/posts/like/:id', updatePostController)
router.delete('/posts/:id', deletePostController)

export default router
