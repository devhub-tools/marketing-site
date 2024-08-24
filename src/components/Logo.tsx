
import logo from '@/images/logo.webp'
import Image from 'next/image'

export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <div className="h-14 flex items-center text-2xl justify-center">
      <Image src={logo} alt="DevHub Logo" className="h-14 w-14 mr-1" unoptimized />
      <span className="font-extrabold text-sky-300">Dev</span><span className="font-medium text-gray-200">Hub</span>
    </div>
  )
}
