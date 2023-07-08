import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUiExpress from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.1.0',
    info: {
      title: 'TP Backend',
      description: 'Esta API se encarga de manejar información de películas.',
      version: '1.0.0',
    },
    servers: [
      { url: 'http://localhost:8080/' },
    ],
  },
  apis: ['src/utils/specification.yaml'],
};

const swaggerSpec = swaggerJSDoc(options);

export default (path: any, app: any) => app.use(path, swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerSpec));
