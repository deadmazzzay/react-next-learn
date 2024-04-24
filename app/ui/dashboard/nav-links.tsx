'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];

const BASE_CLASS_NAME = [
  'flex h-[48px] grow items-center justify-center gap-2',
  'rounded-md bg-gray-50 p-3 text-sm font-medium',
  'hover:bg-sky-100 hover:text-blue-600 md:flex-none',
  'md:justify-start md:p-2 md:px-3'
].join(' ');

const SELECTED_CLASS_NAME = 'bg-sky-100 text-blue-600';

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        const linkClassName = clsx(
          BASE_CLASS_NAME,
          {[SELECTED_CLASS_NAME]: link.href === pathname}
        );

        return (
          <Link
            key={link.name}
            href={link.href}
            className={linkClassName}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
