import prismadb from '@/lib/prismadb';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { FC } from 'react';

interface layoutProps {
  children: React.ReactNode;
}

const SetupLayout: FC<layoutProps> = async ({ children }) => {
  const { userId } = auth();

  if (!userId) {
    redirect('/sign-in');
  }

  const store = await prismadb.store.findFirst({
	where: {
		userId
	}

  });

  if (store) {
	redirect(`/${store.id}`);
  }


  return (
	<div>{children}</div>

  )
};

export default SetupLayout;
