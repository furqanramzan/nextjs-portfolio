import { getRepository } from '@/utils/repository';

const settingData = [
  {
    key: 'about',
    name: 'About me',
    content:
      'Hello there! I am thrilled to welcome you to my portfolio. I am a passionate and versatile full-stack developer with a keen interest in exploring the latest cutting-edge technologies. My journey in the world of web development has been nothing short of exhilarating, and I constantly strive to enhance my skills and embrace emerging trends in the industry.',
  },
  {
    key: 'phone',
    name: 'Phone no',
    content: '+254723909353',
  },
  {
    key: 'email',
    name: 'Email',
    content: 'benjaminkamau@demo.demo',
  },
  {
    key: 'location',
    name: 'Location',
    content: 'Nairobi, Kenya',
  },
  {
    key: 'facebook',
    name: 'Facebook Link',
    content: '/',
  },
  {
    key: 'linkedin',
    name: 'LinkedIn Link',
    content: '/',
  },
  {
    key: 'twitter',
    name: 'Twitter Link',
    content: '/',
  },
  {
    key: 'github',
    name: 'GitHub Link',
    content: '/',
  },
];

export async function settings() {
  const items = await getRepository('setting').createMany(settingData);
  return items;
}
