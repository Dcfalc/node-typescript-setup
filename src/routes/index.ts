import { Router, Request, Response } from 'express';
import { v4 as uuid } from 'uuid';
import authenticated from '../middlewares/authenticated';

const router = Router();

interface IExamples {
  id: string;
  name: string;
  description: string;
}

const examples: IExamples[] = [
  {
    id: '01',
    name: 'Example name',
    description: 'Example Description',
  },
];

/**
 * @openapi
 * /examples/findByName:
 *  get:
 *    description: Search example by name
 *    tags:
 *      - Example
 *    produces:
 *      - application/json
 *    parameters:
 *      - $ref: '#/components/parameters/name'
 *    responses:
 *      200:
 *        description: Returns json list of Examples, can be blank
 */
router.get('/examples/findByName', (request: Request, response: Response) => {
  const { name } = request.query;
  const resp = examples.filter(e => e.name.includes(String(name)));
  return response.json(resp);
});

/**
 * @openapi
 * /examples/{id}:
 *  get:
 *    description: Search example by id
 *    produces:
 *      - application/json
 *    parameters:
 *      - name: id
 *        description: id .
 *        in: path
 *        required: true
 *        type: integer
 *    responses:
 *      200:
 *        description: Return example
 *      400:
 *        description: Example not found.
 */
router.get('/examples/:id', (request: Request, response: Response) => {
  const { id } = request.params;
  const resp = examples.find(e => e.id === id);

  if (!resp) {
    return response.status(400).json({ message: 'Example not found.' });
  }

  return response.json(resp);
});

/**
 * @openapi
 * /example:
 *  post:
 *    summary: Register example
 *    security:
 *      - bearerAuth: []
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            $ref: "#/components/schemas/example-json"
 *          example:
 *            name: Example name
 *            description: Example description
 *    responses:
 *      200:
 *        description: Returns registered example
 *      400:
 *        description: Example already exists
 *      401:
 *        description: Unauthorized
 */
router.post(
  '/example',
  authenticated,
  (request: Request, response: Response) => {
    const { name, description } = request.body;

    const example: IExamples = {
      id: uuid(),
      name,
      description,
    };

    const find = examples.find(e => e.name === example.name);

    if (find) {
      return response.status(400).json({ message: 'Example already exists.' });
    }

    examples.push(example);

    return response.json(example);
  },
);

/**
 * @openapi
 * /example/{id}:
 *  put:
 *    summary: Register example
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - $ref: '#/components/parameters/id'
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            $ref: "#/components/schemas/example-json"
 *          example:
 *            name: Example name
 *            description: Example description
 *    responses:
 *      200:
 *        description: Returns registered example
 *      400:
 *        description: Example already exists.
 *      401:
 *        description: Unauthorized
 */
router.put(
  '/example/:id',
  authenticated,
  (request: Request, response: Response) => {
    const { id } = request.params;
    const { name, description } = request.body;

    const exampleIndex = examples.findIndex(p => p.id === id);

    if (exampleIndex === -1) {
      return response.status(400).json({ message: "Example doesn't exist" });
    }

    const example: IExamples = { id, name, description };

    examples[exampleIndex] = example;

    return response.json(example);
  },
);

export default router;
