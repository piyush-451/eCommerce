import React from 'react'
import smartwatch from '../images/smartwatch.jpg'
import furniture from '../images/furniture.jpg'
import bags from '../images/bags.jpg'
import yoga from '../images/yoga.jpg'
import Card from './Card'
function Deals() {
  const items = [
    {title:'American tourister',img:bags},
    {title:'Yoga sheets',img:yoga},
    {title:'Smart watch',img:smartwatch},
    {title:'Dulex | Furniture',img:furniture}
  ]
  return (
    <Card title='Dont miss deals of the day...' items={items} />
  )
}

export default Deals