import React from 'react'
import Basics from './Basics'
import Cookware from './Cookware'
import Deals from './Deals'
import Electronic from './Electronic'
import Fashion from './Fashion'
import Variety from './Variety'
function Categories() {
  return (
    <div className="container">
        <div className="row py-5">
            <div className="col-12 h3 mb-5">Shop from a wide range of categories...</div>
            <Electronic/>
            <Fashion/>
            <Deals/>
            <Variety/>
            <Basics/>
            <Cookware/>
        </div>
    </div>
  )
}

export default Categories