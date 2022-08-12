import { NextFunction, Request, Response } from 'express';

export default async function authenticated(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const token = request.headers.authorization;

  if (!token) {
    return response.status(401).send({ message: 'Unauthorized' });
  }

  const [, user] = token.split(' ');

  console.log(user);

  if (user === 'token') {
    return next();
  }

  return response.status(401).json({ message: 'Unauthorized' });
}
