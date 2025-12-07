import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      List of users
      <ul className="mt-10">
        <li><Link href="/dashboard/user/1">user1</Link></li>
        <li><Link href="/dashboard/user/2">user2</Link></li>
        <li><Link href="/dashboard/user/3">user3</Link></li>
        <li><Link href="/dashboard/user/4">user4</Link></li>
      </ul>
    </div>
  )
}

export default page
