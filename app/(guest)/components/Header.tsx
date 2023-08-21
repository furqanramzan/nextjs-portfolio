import HeaderLink from './HeaderLink';

const links = [
  {
    title: 'Home',
    href: '/',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M22.262 10.468c-3.39-2.854-9.546-8.171-9.607-8.225L12 1.68l-.652.563c-.062.053-6.221 5.368-9.66 8.248A2.042 2.042 0 0 0 1 12a2 2 0 0 0 2 2h1v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6h1a2 2 0 0 0 2-2c0-.598-.275-1.161-.738-1.532zM14 20h-4v-5h4v5zm4-8l.002 8H15v-6H9v6H6v-8H2.999C5.764 9.688 10.314 5.773 12 4.32c1.686 1.453 6.234 5.367 9 7.681L18 12z"
        />
      </svg>
    ),
  },
  {
    title: 'Resume',
    href: '/resume',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6H6m0 2h7v5h5v11H6V4m2 8v2h8v-2H8m0 4v2h5v-2H8Z"
        />
      </svg>
    ),
  },
  {
    title: 'Work',
    href: '/work',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M20 6c.58 0 1.05.2 1.42.59c.38.41.58.86.58 1.41v11c0 .55-.2 1-.58 1.41c-.37.39-.84.59-1.42.59H4c-.58 0-1.05-.2-1.42-.59C2.2 20 2 19.55 2 19V8c0-.55.2-1 .58-1.41C2.95 6.2 3.42 6 4 6h4V4c0-.58.2-1.05.58-1.42C8.95 2.2 9.42 2 10 2h4c.58 0 1.05.2 1.42.58c.38.37.58.84.58 1.42v2h4M4 8v11h16V8H4m10-2V4h-4v2h4Z"
        />
      </svg>
    ),
  },
  {
    title: 'Contact',
    href: '/contact',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M9 22a1 1 0 0 1-1-1v-3H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6.1l-3.7 3.71c-.2.19-.45.29-.7.29H9m1-6v3.08L13.08 16H20V4H4v12h6m6-2H8v-1c0-1.33 2.67-2 4-2s4 .67 4 2v1m-4-8a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2Z"
        />
      </svg>
    ),
  },
];

export default function Header() {
  return (
    <header className="flex justify-end">
      <div className="rounded-3xl bg-gray-100 px-10 py-5 shadow-xl dark:bg-gray-800">
        <ul className="flex gap-5">
          {links.map((link) => (
            <li key={link.title}>
              <HeaderLink link={link} />
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
