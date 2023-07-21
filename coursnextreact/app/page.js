import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
export default function Home() {
  return (
    <main >
      <Link href ='/'>Acceuille</Link>
      <Link href='/cv'>CV</Link>
      <Link href = '/contact'>contact</Link>
    </main>
  )
}
