import Link from "next/link"

export const ActiveLink = ({text, href}) => {

  const styles = {
    color: '#0070f3'
    textDecoration:'undr'
  }
  return (
    <Link href={href}>
      <a>{text}</a>
    </Link>
  )
}
