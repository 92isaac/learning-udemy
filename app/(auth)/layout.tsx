
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Auth page',
  description: '',
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='flex justify-center items-center h-full'>
      {children}
    </div>
  )
}
