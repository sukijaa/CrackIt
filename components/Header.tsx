'use client';

import { usePathname } from 'next/navigation';
import { LogoutButton } from './LogoutButton';

export function Header() {
  const pathname = usePathname();

  // Hide LogoutButton on these paths
  const hideOnPaths = ['/sign-in', '/sign-up'];

  if (hideOnPaths.includes(pathname)) {
    return null;
  }

  return (
    <nav className="w-full p-4 flex justify-end">
      <LogoutButton />
    </nav>
  );
}
