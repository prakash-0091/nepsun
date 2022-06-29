import { Stack } from '@mui/material'
import React from 'react'
import NestedList from '../../common/list/List'
import Ad from './Ad'


const categories={
  'Automobiles':['car','bike','jeep'],
  'Real Estate':['house'],
  'Electronics':['accessories','mobiles','watches'],
  'Furniture':['low-bed','sofa'],
  'Home Appliances':['fan','rice cooker'],
  'Fashion & Beauty':['face wash','cream','mens wear'],
  'Foods':['drinks','fast foods'],
  'Antiques':['telephone'],
  'Books & Sports':['physics','ball'],
  'Travel & Tours':['mustang tour'],
  'Music Instruments':['guitar','piano'],
  'More':['extras']


}

const BodyLeft = () => {
  return (
    <Stack spacing={2} alignItems='center'  >
      {/* you can also use Accordion for this 
          and also tree view
      */}
      <NestedList categories={categories} /> 
      <Ad/>
    </Stack>
  )
}

export default BodyLeft