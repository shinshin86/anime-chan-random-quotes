import Layout from '../components/Layout';

interface Props {
  quote: string;
  character: string;
  anime: string;
  title: string;
  description: string;
}

const IndexPage: React.FC<Props> = ({
  quote,
  character,
  anime,
  title,
  description,
}) => (
  <Layout title={title} description={description}>
    <h1>
      {anime} - {character}
    </h1>
    <h2>{quote}</h2>
  </Layout>
);

export async function getServerSideProps() {
  const url = 'https://animechanapi.xyz/api/quotes/random';
  const res = await fetch(url);
  const apiResponse = await res.json();

  if (apiResponse.statusCode !== 200) {
    throw new Error('Fetch data error');
  }

  const { quote, character, anime } = apiResponse.data[0];

  const title = `Random quote in anime | ${anime} - ${character}`;
  const description = `This is a quote from charactor of ${character} in anime of ${anime}.`;
  return {
    props: {
      quote,
      character,
      anime,
      title,
      description,
    },
  };
}

export default IndexPage;
