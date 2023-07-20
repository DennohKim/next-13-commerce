import { UserButton } from '@clerk/nextjs'
import React from 'react'
export default function SetupPage() {
  return (
    <div>
		<UserButton afterSignOutUrl='/'/>
	</div>
  )
}
