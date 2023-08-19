import type { LinkItem } from './SidebarLink';
import SidebarLink from './SidebarLink';

export default function Sidebar({ links }: { links: LinkItem[] }) {
  return (
    <aside
      className="fixed left-0 top-0 z-40 mt-16 h-screen w-64 -translate-x-full border-r border-gray-200 bg-white py-6 transition-transform dark:border-gray-700 dark:bg-gray-800 md:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full overflow-y-auto bg-white px-3 dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          {links.map((link, index) => (
            <SidebarLink key={index} link={link} />
          ))}
        </ul>
      </div>
    </aside>
  );
}
