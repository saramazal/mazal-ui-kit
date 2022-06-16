import React, {FC} from 'react'
import './MyButton.css'

export interface MyButtonProps {
  title: string;
  color: string;
  pink?: boolean;
}

const MyButton: FC<MyButtonProps> = ({
  title, 
  color, 
  pink, 
  ...props
}) => {
  const rootClasses = ['green-mazal-btn']
  if (pink) {
    rootClasses.push('pink-mazal-btn')
  }

  return (
    <button {...props} className={rootClasses.join(' ')} style={{color}} >
      {title}
    </button>
  )
}
export default MyButton;
