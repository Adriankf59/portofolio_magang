import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';

// Fetch data from API
export async function getServerSideProps() {
    try {
        const res = await fetch('http://127.0.0.1:8055/items/projects');
        
        if (!res.ok) {
            console.error('Failed to fetch projects:', res.statusText);
            return {
                props: {
                    projects: []
                }
            };
        }

        const data = await res.json();

        if (!data || !data.data) {
            console.error('Projects data is undefined or null');
            return {
                props: {
                    projects: []
                }
            };
        }

        // Optional: Map the data if you need specific formatting
        const projects = data.data.map(project => ({
            id: project.id,
            thumbnail: project.thumbnail,
            projectName: project.projectName,
            description: project.description,
            date: project.date,
            status: project.status,
            category: project.category
        }));

        return {
            props: {
                projects
            }
        };
    } catch (error) {
        console.error('Error fetching projects:', error);
        return {
            props: {
                projects: []
            }
        };
    }   
}

// Component for each project card
const ProjectsCard = ({ id, projectName, description, date, status }) => (
    <Link href={`/projects/${id}`}>
        <div
            className="bg-white shadow-lg rounded-lg p-6 mb-6 transition-transform transform cursor-pointer
                h-80 w-full flex flex-col justify-between hover:scale-105 active:scale-95"
        >
            <div>
                <h3 className="text-xl font-bold mb-1">{projectName}</h3>
                <h4 className="text-md font-semibold text-gray-600 mb-2">{status}</h4>
                <h5 className="text-sm font-medium text-gray-500 mb-2">{date}</h5>
                <p className="text-gray-700">{description}</p>
            </div>
        </div>
    </Link>
);

// Main component for displaying projects
export default function Projects({ projects }) {
    return (
        <>
            <main className="flex flex-col items-center text-dark w-full min-h-screen relative bg-light">
                <Layout className="pt-0">
                    <div className="flex flex-col items-center justify-center w-full h-full">
                        <AnimatedText text="My Projects" className="text-dark text-4xl font-bold text-center mb-8" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 px-4 w-full">
                            {projects.map((project) => (
                                <ProjectsCard
                                    key={project.id}
                                    id={project.id}
                                    projectName={project.projectName}
                                    description={project.description}
                                    date={project.date}
                                    status={project.status}
                                />
                            ))}
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    );
}