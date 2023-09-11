import React from 'react'
import laptop from '../images/appliances.jpg'
import tablet from '../images/tablets.jpg'
import smartwatch from '../images/smartwatch.jpg'
import monitor from '../images/monitors.jpg'
import Card from './Card'
function Electronic() {
  const items = [
    {title:'Smartwatches & fitness trackers',img:smartwatch},
    {title:'Monitors',img:monitor},
    {title:'Laptops',img:laptop},
    {title:'Tablet',img:tablet}
  ]
  return (
    <Card title='Electronics devices for home office' items={items} />
  )
}

export default Electronic