// EXTERNAL
import React, { FunctionComponent } from 'react'

// INTERNAL
import Header from '~/components/Header/Header'

const IndexLayout: FunctionComponent = ({ children }) => (
  <div className="container mx-auto p-4">
    <Header />
    {children}
  </div>
)

export default IndexLayout
