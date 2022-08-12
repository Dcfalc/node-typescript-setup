import { NextFunction, Request, Response } from 'express';

export default async function otherMid(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const { headers } = request;

  console.log(headers);

  return next();
}
