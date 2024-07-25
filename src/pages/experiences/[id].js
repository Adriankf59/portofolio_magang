import { useRouter } from 'next/router';
import Head from 'next/head';
import Layout from '@/components/Layout';

export async function getServerSideProps({ params }) {
  try {
    const res = await fetch(`http://127.0.0.1:8055/items/experiences/${params.id}`);

    if (!res.ok) {
      console.error('Failed to fetch experience:', res.statusText);
      return {
        props: {
          experience: null,
        }
      };
    }

    const data = await res.json();

    if (!data || !data.data) {
      console.error('Experience data is undefined or null');
      return {
        props: {
          experience: null,
        }
      };
    }

    const experience = {
      id: data.data.id || null,
      title: data.data.title || null,
      organization: data.data.organization || null,
      description: data.data.description || null,
      date: data.data.date || null,
      content: data.data.content || null
    };

    return {
      props: {
        experience,
      }
    };
  } catch (error) {
    console.error('Error fetching experience:', error);
    return {
        props: {
        experience: null,
      }
    };
  }
}

const ExperienceDetail = ({ experience }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <p>Loading...</p>;
  }

  if (!experience) {
    return <p>Experience not found</p>;
  }

  return (
    <>
      <Head>
        <title>{experience.title} - Adrian Kuman Firmansah</title>
      </Head>
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-4">{experience.title}</h1>
          <h2 className="text-xl font-semibold mb-4">{experience.organization}</h2>
          <h3 className="text-md font-medium text-gray-600 mb-2">{experience.date}</h3>
          <p className="text-gray-700 mb-4">{experience.description}</p>
          <div className="prose" dangerouslySetInnerHTML={{ __html: experience.content || '' }} />
        </div>
      </Layout>
    </>
  );
};

export default ExperienceDetail;