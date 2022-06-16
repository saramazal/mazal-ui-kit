import React, {FC} from 'react'
import './MyButton.css'

export interface MyButtonProps {
  title: string;
  color: string;
  big?: boolean;
}

const MyButton: FC<MyButtonProps> = ({title, color, big, ...props}) => {
  const rootClasses = ['green-btn']
  if (big) {
    rootClasses.push('big-btn')
  }

  return (
    <button {...props} className={rootClasses.join(' ')} style={{color}}>
      {title}
    </button>
  )
}
export default MyButton;
