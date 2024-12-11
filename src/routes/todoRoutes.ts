import { Router } from 'express';
import { getTodos, setTodo, updateTodo, deleteTodo } from '../controllers/todosController';

const router = Router();

router.route('/')
  .get(getTodos)
  .post(setTodo);

router.route('/:id')
  .put(updateTodo)
  .delete(deleteTodo);

export default router;
