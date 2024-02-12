import React, { useState } from 'react';
import './_categoriesBar.scss';

const keywords = [
  'All',
  'React js',
  'Angular js',
  'Angular Directives',
  'Typescript',
  'Javascript',
  'ES6',
  'Coding',
  'UI Design',
  'Visual studio code',
  'HTML',
  'SCSS',
  'CSS',
  'React Native',
  'use of API',
  'Redux',
  'Music',
  'React Router',
]

function CategoriesBar() {
  const [activeElement, setActiveElement] = useState('All')

  const handleClick = (value) => {
    setActiveElement(value)
  }

  return <div className="categories-bar">
    { keywords.map((value,i) => {
      return <span className={ activeElement === value ? 'active' : ''} onClick={() => handleClick(value)} key ={i}>{value}</span>
    })}
  </div>
}

export default CategoriesBar