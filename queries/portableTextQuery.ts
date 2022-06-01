import { groq } from 'next-sanity';
import { assetQuery } from './imageQuery';

export const portableTextQuery = ({ name }: { name: string }) => {
  return groq`
  ${name}[] {
    ...,
    _type == 'buttons' => {
      ...,
    },
    _type == 'image' => {
      ${assetQuery()}
    }
  }
`;
};
