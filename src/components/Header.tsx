import Link from 'next/link'
import { clsx } from 'clsx'

export default function Header() {
  return (
    <header className="bg-gray-50 py-4">
      <nav className="container mx-auto flex justify-between">
        <Link href="/" className="text-lg font-bold">Content Catalyst</Link>
        <ul className="flex items-center gap-4">
          <li>
            <Link href="/dashboard" className="text-sm font-medium">Dashboard</Link>
          </li>
          <li>
            <Link href="/content" className="text-sm font-medium">Content</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}