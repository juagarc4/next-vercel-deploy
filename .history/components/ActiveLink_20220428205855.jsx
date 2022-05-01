import Link from "next/link"

export const ActiveLink = ({text, href}) => {
  return (
    <Link href={href}><a>{text}</a></Link>
  )
}
