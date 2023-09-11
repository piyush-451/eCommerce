import React from 'react'
import wfh from '../images/wfh.jpg'
import breakfast from '../images/breakfast.jpg'
import clothing from '../images/clothing.jpg'
import viewall from '../images/viewall.jpg'
import Card from './Card'
function Electronic() {
  const items = [
    {title:'Clothinges & fitness trackers',img:clothing},
    {title:'Discover',img:viewall},
    {title:'Study tables',img:wfh},
    {title:'Breakfast',img:breakfast}
  ]
  return (
    <Card title='Explore all the beauty projects....' items={items} />
  )
}

export default Electronic