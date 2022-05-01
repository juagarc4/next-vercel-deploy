import { FC } from 'react'

import { useRouter } from 'next/router'
import Link from 'next/link'

const style = {
  color: '#0070f3',
  textDecoration: 'underline',
}
interface Props {
  children?: React.ReactNode | undefined,
}
export const ActiveLink: FC = ({ text, href }) => {
  const { asPath } = useRouter()

  return (
    <Link href={href}>
      <a style={asPath === href ? style : null}>{text}</a>
    </Link>
  )
}
