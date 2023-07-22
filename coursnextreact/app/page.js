import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import React from 'react';
export default function Home() {
  return (
    <main >
      <Link href ='/'>Acceuille</Link>
      <Link href='/cv'>CV</Link>
      <Link href = '/contact'>contact</Link>
      <Link href = '/jeu'>Jeu</Link>
    </main>
  )
}
