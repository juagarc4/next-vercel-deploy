import { FC } from 'react'

interface Props {
  children?: React.ReactNode | undefined
}
export const DarkLayout: FC<pro = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: '5px',
        padding: '10px',
      }}
    >
      <h3>Dark Layout</h3>
      <div>{children}</div>
    </div>
  )
}
