'use client';

import { Modal } from '@/components/ui/modal';
import { useStoreModal } from '@/hooks/useStoreModal';
import { UserButton } from '@clerk/nextjs';
import React, { useEffect } from 'react';

export default function SetupPage() {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
	if (!isOpen) {
	  onOpen();
	}
  }, [isOpen, onOpen]);

  return (
    <div className='p-4'>
      {/* <UserButton afterSignOutUrl='/'/> */}
      Root page
    </div>
  );
}
