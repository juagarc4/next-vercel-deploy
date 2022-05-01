import Link from "next/link"

export const ActiveLink = ({text, href}) => {

  const styles = {
    color: '#0070f3',
    textDecoration:'underline'
  }
  return (
    <Link href={href}>
      <a style={style}>{text}</a>
    </Link>
  )
}
