import { useRouter } from "next/router"
import Link from "next/link"

const style = {
  color: '#0070f3',
  textDecoration:'underline'
}

export const ActiveLink = ({text, href}) => {
  copnst router = useRouter
  return (
    <Link href={href}>
      <a style={style}>{text}</a>
    </Link>
  )
}
