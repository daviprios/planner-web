import { useState } from 'react'
import './index.sass'

const Dropdown = (props: {
  children: JSX.Element | JSX.Element[],
  text: string
}) => {
  const { children, text } = props

  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <div className='dropdownContainer'>
      <button className='dropdownContainerButton' onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        {text}
      </button>
      <ul className='dropdownContainerList' style={{ display: isDropdownOpen ? '' : 'none' }}>
        {children}
      </ul>
    </div>
  )
}

export default Dropdown
