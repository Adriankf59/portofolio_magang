import Head from 'next/head';

export default function About() {

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Head>
        <title>About Me - Adrian Kuman Firmansah</title>
      </Head>

      <section className="mb-8">
        <h1 className="text-4xl font-bold mb-2">About Me</h1>
        <h2 className="text-xl font-semibold mb-4">Get to know me better</h2>
        <p>
          Hello! I'm Adrian Kuman Firmansah, a passionate programmer and computer engineering student at Telkom University.
          Here's a little more about my journey and what drives me.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-3xl font-bold mb-2">Education</h3>
        <ul className="list-disc pl-5">
          <li>Bachelor of Computer Engineering, Telkom University, Class of 2021 (Currentlyin 7th semester).</li>
          <li>SMAN 3 Samarinda, Science Class</li>
          <li>SMPN 4 Samarinda</li>
          <li>SDN 016 Samarinda Ulu</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-3xl font-bold mb-2">Professional Journey</h3>
        <p>
          I'm currently interning at Braga Technologies, a company specializing in web GIS. This is my first internship, and it's
          been an incredible learning experience as I'm working on web projects for the first time. The 40-day internship has
          exposed me to new technologies and methodologies that have broadened my skill set.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-3xl font-bold mb-2">Hobbies and Interests</h3>
        <p>
          When I'm not coding, you can find me exploring the great outdoors with ASTACALA, the nature lovers club at my university.
          I also have a passion for music, especially playing the guitar. These activities help me stay balanced and inspired.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-3xl font-bold mb-2">Fun Facts</h3>
        <ul className="list-disc pl-5">
          <li>My middle name, Kuman, is a Dayak word that means 'eat'.</li>
          <li>I never imagined pursuing a degree in computer engineering until I actually started my studies.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-3xl font-bold mb-2">Values and Philosophy</h3>
        <p>
          I believe in continuous learning and improvement. My approach to work involves staying updated with the latest
          technologies, embracing challenges, and always striving for excellence.
        </p>
        <ul className="list-disc pl-5 mt-4">
          <li>Integrity: I believe in being honest and transparent in all my dealings.</li>
          <li>Innovation: I strive to bring new ideas and creative solutions to the table.</li>
          <li>Collaboration: I value teamwork and believe that great things are achieved together.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-3xl font-bold mb-2">Projects</h3>
        <ul className="list-disc pl-5">
          <li>
            <strong>GeoDashboard:</strong> A web GIS application for visualizing geospatial data, built with NextJS, Maplibre GL JS, and PostgreSQL.
          </li>
          <li>
            <strong>Spatial Research Tool:</strong> A tool for spatial data collection and analysis, utilizing Directus as a headless CMS and various APIs.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-3xl font-bold mb-2">Skills</h3>
        <ul className="list-disc pl-5">
          <li>Programming Languages: JavaScript, Node.js, PHP</li>
          <li>Technologies: HTML, CSS, NextJS/ViteJS, Directus, Maplibre GL JS, PostgreSQL, Docker</li>
          <li>Other Skills: Full-Stack Development, Geospatial Analysis, Web and Mobile Development</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-3xl font-bold mb-2">Contact Information</h3>
        <p>If you'd like to get in touch with me, feel free to reach out via email or connect with me on LinkedIn.</p>
        <ul className="list-disc pl-5">
          <li>Email: adrian@example.com</li>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/adrian-kuman-firmansah" target="_blank" className="text-blue-500">linkedin.com/in/adrian-kuman-firmansah</a></li>
        </ul>
      </section>
    </div>
  );
}