import React from 'react'

import { rhythm, scale } from '../utils/typography'

const availableFormats = ['pdf', 'epub', 'fb2']

const FileLinks = ({ filename }) => (
  <ul>
    {availableFormats.map(format => {
      return (
        <li
          style={{
            ...scale(-1 / 5),
            display: 'inline',
            marginRight: rhythm(0.5),
          }}
        >
          <a href={`/files/${filename}/${filename}.${format}`}>{format}</a>
        </li>
      )
    })}
  </ul>
)

export default FileLinks
