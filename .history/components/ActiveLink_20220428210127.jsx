import Link from "next/link"
import { useRouter } from "next/router"

const style = {
  color: '#0070f3',
  textDecoration:'underline'
}

export const ActiveLink = ({text, href}) => {
  useRouter
  return (
    <Link href={href}>
      <a style={style}>{text}</a>
    </Link>
  )
}
