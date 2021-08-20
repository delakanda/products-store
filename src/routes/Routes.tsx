import React from 'react'
import { Route } from 'react-router-dom'
import Products from '@app/pages/Products'

function Routes () {
  return (
    <>
      <Route path='/' component={Products} />
    </>
  )
}

export default Routes
