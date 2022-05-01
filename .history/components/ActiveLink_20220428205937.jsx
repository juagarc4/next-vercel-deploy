import Link from "next/link"

export const ActiveLink = ({text, href}) => {

  const styles = {
    color: <div id="0070f3"></div>
  }
  return (
    <Link href={href}>
      <a>{text}</a>
    </Link>
  )
}
