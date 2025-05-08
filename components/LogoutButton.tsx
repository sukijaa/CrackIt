'use client';

import { useRouter } from 'next/navigation';
import { logout } from '@/lib/actions/auth.action';

export function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push('/sign-in'); // redirect to sign-in page after logout
  };

  return (
    <button
    onClick={handleLogout}
    className="font-bold hover:underline"
    style={{
      fontFamily: 'Mona Sans, sans-serif',
      color: '#d6e0ff', // Replace this hex with the exact one from your global.css if it's not plain white
    }}
    >
      Logout
    </button>
  );
}
