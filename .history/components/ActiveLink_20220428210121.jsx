import Link from "next/link"

const style = {
  color: '#0070f3',
  textDecoration:'underline'
}

export const ActiveLink = ({text, href}) => {
  
  return (
    <Link href={href}>
      <a style={style}>{text}</a>
    </Link>
  )
}
