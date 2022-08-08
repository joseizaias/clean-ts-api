// import { Request, Response, NextFunction } from 'express'

// export const cors = (request: Request, response: Response, next: NextFunction): void => {
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const cors = (_request, response, next) => {
  response.set('access-control-allow-origin', '*')
  response.set('access-control-allow-methods', '*')
  response.set('access-control-allow-headers', '*')
  next()
}
