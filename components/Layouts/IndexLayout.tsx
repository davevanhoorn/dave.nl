// EXTERNAL
import React, { FunctionComponent } from 'react'

// INTERNAL
import Header from '~/components/Header/Header'

const IndexLayout: FunctionComponent = ({ children }) => (
  <>
    <Header />
    <div className="max-w-screen-lg mx-auto p-4">
      {children}
    </div>
  </>
)

export default IndexLayout
