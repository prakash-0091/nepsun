import { Stack } from '@mui/material'
import React from 'react'
import NestedList from '../../common/list/List'

const BodyLeft = () => {
  return (
    <Stack spacing={2} alignItems='center'  >
      <NestedList/>
    </Stack>
  )
}

export default BodyLeft