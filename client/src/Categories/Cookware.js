import React from 'react'
import tableware from '../images/tableware.jpg'
import kitchen from '../images/kitchen.jpg'
import gasstoves from '../images/gasstoves.jpg'
import cookware from '../images/cookware.jpg'
import Card from './Card'
function Cookware() {
  const items = [
    {title:'Gas stoves',img:gasstoves},
    {title:'Tableware',img:tableware},
    {title:'Cookware',img:cookware},
    {title:'Kitchen Storage',img:kitchen}
  ]
  return (
    <Card title='Cookware & dinning' items={items} />
  )
}

export default Cookware