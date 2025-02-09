
import logo from '@/images/logo.svg'
import Image from 'next/image'

export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <div className="h-14 flex items-center text-2xl justify-center">
      <Image src={logo} alt="Devhub Logo" className="h-14 w-fit mr-1" unoptimized />
    </div>
  )
}
