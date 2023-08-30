import type { Metadata } from 'next';
import Image from '@/components/Image';
import { getRepository } from '@/utils/repository';
import { getTitle } from '@/utils/title';

function getProjects() {
  return getRepository('project').getMany();
}

export default async function Work() {
  const { items: projects } = await getProjects();

  return (
    <div className="flex w-full flex-col gap-8">
      <h2 className="text-5xl font-medium">PORTFOLIO</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col rounded-xl bg-primary-200 p-3 text-black hover:shadow-2xl"
          >
            <Image
              className="mb-1 rounded-xl"
              src={project.image}
              alt={project.title}
              width="480"
              height="300"
            />
            <p className="text-sm">{project.category}</p>
            <h6 className="text-lg font-medium">{project.title}</h6>
          </div>
        ))}
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: getTitle('Work'),
  description:
    'Explore my journey through the world of web development on this page. From innovative projects to collaborative endeavors.',
};
