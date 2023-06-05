import Image from 'next/image'
import styles from './page.module.css'
import Hero from 'public/hero.png'

export default function Home() {
  return (
    <div>
      <div className={styles.texts}>
        <h1>Better design for your digital.</h1>
      </div>
      <div className={styles.imgContainer}>
        <Image src={Hero} alt='Hero' className={styles.img}/>
      </div>
    </div>
  )
}
