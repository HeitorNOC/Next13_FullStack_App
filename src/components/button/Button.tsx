import { Url } from "next/dist/shared/lib/router/router";
import styles from "./button.module.css";
import Link from "next/link";

interface ButtonProps {
  text: String
  url: Url
}

export default function Button({ text, url }: ButtonProps) {
  return (
    <Link href={url}>
      <button className={styles.container}>{text}</button>
    </Link>
  )
}