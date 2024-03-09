import React, { useState } from 'react';
import './_categoriesBar.scss';
import { getVideosByCategory } from '../../redux/actions/videos.action';
import { useDispatch } from 'react-redux';

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

const CategoriesBar = () =>  {
  const [activeElement, setActiveElement] = useState('All')
  const dispatch = useDispatch();

  const handleClick = (value) => {
    setActiveElement(value)
    dispatch(getVideosByCategory(value))
  }

  return <div className="categories-bar">
    { keywords.map((value,i) => {
      return <span className={ activeElement === value ? 'active' : ''} onClick={() => handleClick(value)} key ={i}>{value}</span>
    })}
  </div>
}

export default CategoriesBar