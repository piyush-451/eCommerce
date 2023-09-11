import React from 'react'
import wheat from '../images/wheat.jpg'
import protein from '../images/protein.jpg'
import surf from '../images/surf.jpg'
import fruits from '../images/fruits.jpg'
import Card from './Card'
function Basics() {
  const items = [
    {title:'Upto 40% off | Detergents',img:surf},
    {title:'Fresh fruits',img:fruits},
    {title:'Upto 20% off | Fluor',img:wheat},
    {title:'Nutrients | Whey protein',img:protein}
  ]
  return (
    <Card title='All that you need everyday..' items={items} />
  )
}

export default Basics