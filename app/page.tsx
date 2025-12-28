import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24 bg-green-300">
      <span className='text-5xl'>Hola Mundo</span>
      <Link href="/about" className="mt-10 text-2xl underline">Go to About Page</Link>
    </main>
  )
}
