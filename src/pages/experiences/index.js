import Head from 'next/head';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';

const ExperienceCard = ({ id, title, organization, description, date }) => (
  <Link href={`/experience/${id}`}>
    <div
      className="bg-white shadow-lg rounded-lg p-6 mb-6 transition-transform transform cursor-pointer
        h-80 w-full flex flex-col justify-between hover:scale-105 active:scale-95"
    >
      <div>
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <h4 className="text-md font-semibold text-gray-600 mb-2">{organization}</h4>
        <h5 className="text-sm font-medium text-gray-500 mb-2">{date}</h5>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  </Link>
);

export async function getServerSideProps() {
  try {
    const res = await fetch('http://127.0.0.1:8055/items/experiences');

    if (!res.ok) {
      console.error('Failed to fetch experiences:', res.statusText);
      return {
        props: {
          experiences: []
        }
      };
    }

    const data = await res.json();

    if (!data || !data.data) {
      console.error('Experiences data is undefined or null');
      return {
        props: {
          experiences: []
        }
      };
    }

    const experiences = data.data.map(exp => ({
      id: exp.id || null,
      title: exp.title || null,
      organization: exp.organization || null,
      description: exp.description || null,
      date: exp.date || null,
      content: exp.content || null
    }));

    return {
      props: {
        experiences
      }
    };
  } catch (error) {
    console.error('Error fetching experiences:', error);
    return {
      props: {
        experiences: []
      }
    };
  }
}

export default function Experience({ experiences }) {
  return (
    <>
      <Head>
        <title>Experience - Adrian Kuman Firmansah</title>
        <meta name="description" content="Discover the professional experiences of Adrian Kuman Firmansah, a programmer with a Bachelor's degree in Computer Engineering." />
      </Head>
      <main className="flex flex-col items-center text-dark w-full min-h-screen relative bg-light">
        <Layout className="pt-0">
          <div className="flex flex-col items-center justify-center w-full h-full">
            <AnimatedText text="My Experiences" className="text-dark text-4xl font-bold text-center mb-8" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 px-4 w-full">
              {experiences.map((exp) => (
                <ExperienceCard
                  key={exp.id}
                  id={exp.id}
                  title={exp.title}
                  organization={exp.organization}
                  description={exp.description}
                  date={exp.date}
                />
              ))}
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}