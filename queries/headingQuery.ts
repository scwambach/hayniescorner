import { groq } from 'next-sanity';
import { portableTextQuery } from './portableTextQuery';

export const headingQuery = () => {
  return groq`
    defined( heading ) => { heading },
    defined( subHeading ) => { subHeading },
    defined( message ) => { ${portableTextQuery({ name: 'message' })} }
  `;
};

export default headingQuery;
