import { Request, Response } from 'express';

export const getTodos = (req: Request, res: Response): void => {
  res.status(200).json({ message: 'Get todos' });
};

export const setTodo = (req: Request, res: Response): void => {
  res.status(201).json({ message: 'Set todo' });
};

export const updateTodo = (req: Request, res: Response): void => {
  res.status(200).json({ message: `Update todo ${req.params.id}` });
};

export const deleteTodo = (req: Request, res: Response): void => {
  res.status(200).json({ message: `Delete todo ${req.params.id}` });
};
