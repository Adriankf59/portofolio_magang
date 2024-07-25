import Head from 'next/head';
import Layout from '@/components/Layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Adrian Kuman Firmansah - Explorer</title>
        <meta name="description" content="Adrian Kuman Firmansah's Portfolio - Programmer & Computer Engineer" />
      </Head>
      <main className="flex items-center justify-center text-dark w-full min-h-screen bg-light px-4 sm:px-8 md:px-16">
        <Layout className="pt-16 w-full">
          <div className="flex flex-col items-center justify-center w-full h-full text-center max-w-4xl mx-auto">
            <div className="flex flex-col items-center justify-center mt-4 sm:mt-6 md:mt-8">
              <img
                src="/images/profile/developer-pic-1.png"
                alt="Descriptive Alt Text"
                className="mb-4 w-1/2 max-w-xs sm:max-w-sm md:max-w-md"
              />
              <h1 className="text-dark text-2xl sm:text-3xl md:text-4xl font-bold text-center">
                Coding the Path, Connecting with Nature - Pioneering a New Era of Technological Exploration
              </h1>
              <p className="mt-2 text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed">
                {/* Add your paragraph content here */}
              </p>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
