import React from 'react'
import beauty from '../images/appliances.jpg'
import footwear from '../images/footwear.jpg'
import womenfashion from '../images/women-fashion.jpg'
import fashionjwellery from '../images/fashion-jwellery.jpg'
import Card from './Card'
function Fashion() {
  const items = [
    {title:'women-fashion',img:womenfashion},
    {title:'fashion-jwellerys',img:fashionjwellery},
    {title:'beauty-products',img:beauty},
    {title:'footwear & handbags',img:footwear}
  ]
  return (
    <Card title='Fashion for all ... Shop now' items={items} />
  )
}

export default Fashion