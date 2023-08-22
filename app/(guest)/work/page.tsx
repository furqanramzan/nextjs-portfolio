import Image from 'next/image';

const projects = [
  {
    title: 'Smart Bank App',
    category: 'App Development',
    image: '/projects/project-1.png',
  },
];

export default function Work() {
  return (
    <div className="flex w-full flex-col gap-8">
      <h2 className="text-5xl font-medium">PORTFOLIO</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
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
