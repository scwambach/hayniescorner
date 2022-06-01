import { Layout } from '@components';
import { River } from '@components/blocks/River';
import { riverData } from '../../data/dummyRiver';

type Props = {};

const RiverPage = (_props: Props) => {
  return (
    <Layout>
      <h2 className="text-5xl px-10 py-5 font-display">River</h2>
      <River {...riverData} />
    </Layout>
  );
};

export default RiverPage;
