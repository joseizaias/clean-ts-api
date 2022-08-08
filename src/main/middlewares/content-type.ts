// import { Request, Response, NextFunction } from 'express'

// export const cors = (request: Request, response: Response, next: NextFunction): void => {
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const contentType = (_request, response, next) => {
  response.type('json')
  next()
}
