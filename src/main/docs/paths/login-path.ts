export const loginPath = {
  post: {
    tags: ['Login'],
    summary: 'API para autenticar usuários',
    requestBody: {
      description: 'Api para o login',
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/loginParams'
          }
        }
      }
    },
    responses: {
      200: {
        description: 'Sucesso',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/account'
            }
          }
        }
      },
      400: {
        description: 'Bad Request'
      }
    }
  }
}
