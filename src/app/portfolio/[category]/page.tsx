import Button from '@/components/button/Button'
import styles from './page.module.css'
import Image from 'next/image'
import { items, ItemsData } from './data'
import { notFound } from "next/navigation";

interface CategoryParams {
  params: {
    category: string
  }
}

function getData(cat: string) {
  const data = items[cat]

  if (data) {
    return data;
  }

  return notFound()
}


export default function Category({ params }: CategoryParams) {
  
  const data = getData(params.category);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>

      {data.map((item: ItemsData) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <Button text="See More" url="#" />
          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              fill={true}
              src={item.image}
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );
}