import Link from "next/link"

export const ActiveLink = ({text, href}) => {

  const styles = {
    
  }
  return (
    <Link href={href}>
      <a>{text}</a>
    </Link>
  )
}
