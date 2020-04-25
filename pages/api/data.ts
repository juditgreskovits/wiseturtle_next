import { NextApiRequest, NextApiResponse } from 'next';
import mocks from '../../mocks';

export default (_request: NextApiRequest, response: NextApiResponse) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'application/json');
  response.end(JSON.stringify(mocks));
};
