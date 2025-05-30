import Link from 'next/link'

export function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="inline-block rounded-lg px-2 py-1 text-sm text-gray-300 hover:bg-gray-100 hover:text-gray-900"
    >
      {children}
    </Link>
  )
}
