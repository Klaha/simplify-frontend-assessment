import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../../public/logo.svg'

export default function ListLayout({
  children
}: {
  children: React.ReactNode,
}) {
  return (
    <main className="container mx-auto">
      <div>
        <header className="bg-[#1F2937] h-80 rounded-tl-lg rounded-tr-lg px-10">
          <nav className='border-b border-[#374151] w-full pt-4 flex items-center pb-3'>
            <Image
              src={logo}
              alt="Company Logo"
              className='inline mr-8'
            />
            <Link className='mr-10 py-2 px-4 bg-[#111827] rounded' href="#">Dashboard</Link>
            <Link className='mr-10' href="#">Browse</Link>
            <Link className='mr-10' href="#">Cart</Link>
          </nav>
          <h1 className='text-3xl mt-10 font-bold'>Dashboard</h1>
        </header>
        <article className='px-10'>
          <section className='bg-white rounded-lg mt-10 relative -top-40 shadow-md'>
            {children}
          </section>
        </article>
      </div>
    </main>
  )
}