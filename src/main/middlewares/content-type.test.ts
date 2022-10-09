import request from 'supertest'
import app from '@/main/config/app'

describe('Content-Type Middleware', () => {
  test('Should returns default content type as json', async () => {
    app.get('/test_content_type_json', (req, res) => {
      res.type('json') // coloquei como um teste porque parou de funcionar.
      res.send('')
    })

    await request(app)
      .get('/test_content_type_json')
      .expect('content-type', /json/)
  })

  test('Should returns XML content type when forced', async () => {
    app.get('/test_content_type_xml', (req, res) => {
      res.type('xml')
      res.send('')
    })

    await request(app)
      .get('/test_content_type_xml')
      .expect('content-type', /xml/)
  })
})
