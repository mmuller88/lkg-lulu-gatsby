import { size } from 'lodash'
import React from 'react'
import './Logo.css'

export default () => (
  <div
    className="Logo"
    style={{
      backgroundImage: `url(/images/logo.png)`,
      // backgroundSize: '150% 150%'
      // backgroundImage: `url(/favicon.ico)`
    }}
  />
)
