import Navbar from '@/components/Navbar';
import prismadb from '@/lib/prismadb';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { FC } from 'react';

interface layoutProps {
  children: React.ReactNode;
  params: { storeId: string };
}

const DashboardLayout: FC<layoutProps> = async ({ children, params }) => {
  const { userId } = auth();
  if (!userId) {
    redirect('/sign-in');
  }

  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
      userId,
    },
  });

  if (!store) {
    redirect('/');
  }
  return (
    <>
    <Navbar/>
		{children}
    </>
  );
};

export default DashboardLayout;
