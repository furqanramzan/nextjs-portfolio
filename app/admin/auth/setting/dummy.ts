import { getRepository } from '@/utils/repository';

const settingData = [
  {
    key: 'name' as const,
    name: 'Name',
    content: 'Benjamin Kamau',
  },
  {
    key: 'designation' as const,
    name: 'Designation',
    content: 'Full-Stack Developer',
  },
  {
    key: 'about' as const,
    name: 'About me',
    content:
      'Hello there! I am thrilled to welcome you to my portfolio. I am a passionate and versatile full-stack developer with a keen interest in exploring the latest cutting-edge technologies. My journey in the world of web development has been nothing short of exhilarating, and I constantly strive to enhance my skills and embrace emerging trends in the industry.',
  },
  {
    key: 'phone' as const,
    name: 'Phone no',
    content: '+254723909353',
  },
  {
    key: 'email' as const,
    name: 'Email',
    content: 'benjaminkamau@demo.demo',
  },
  {
    key: 'location' as const,
    name: 'Location',
    content: 'Nairobi, Kenya',
  },
  {
    key: 'facebook' as const,
    name: 'Facebook Link',
    content: '/',
  },
  {
    key: 'linkedin' as const,
    name: 'LinkedIn Link',
    content: '/',
  },
  {
    key: 'twitter' as const,
    name: 'Twitter Link',
    content: '/',
  },
  {
    key: 'github' as const,
    name: 'GitHub Link',
    content: '/',
  },
];

export async function settings() {
  const items = await getRepository('setting').createMany(settingData);
  return items;
}
