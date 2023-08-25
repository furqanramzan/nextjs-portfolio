import Image from '@/components/Image';
import { getRepository } from '@/utils/repository';

function getServices() {
  return getRepository('service').getMany();
}

export default async function Home() {
  const { items: services } = await getServices();

  return (
    <div className="flex w-full flex-col gap-8">
      <h2 className="text-5xl font-medium">ABOUT ME</h2>
      <p className="text-justify leading-7">
        Hello there! I am thrilled to welcome you to my portfolio. I am a
        passionate and versatile full-stack developer with a keen interest in
        exploring the latest cutting-edge technologies. My journey in the world
        of web development has been nothing short of exhilarating, and I
        constantly strive to enhance my skills and embrace emerging trends in
        the industry.
      </p>
      <h2 className="text-4xl font-medium">What I do!</h2>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.id}
            className="rounded-3xl bg-gray-100 p-6 hover:bg-primary-200  dark:bg-gray-900 dark:hover:bg-primary-800"
          >
            <h6 className="flex flex-wrap gap-x-3 text-2xl font-semibold">
              <Image
                loading="lazy"
                width="32"
                height="32"
                src={service.icon}
                alt={service.title}
              />
              {service.title}
            </h6>
            <p className="text-justify">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
