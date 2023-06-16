import React from 'react'
import ReactDOM from 'react-dom/client'
import {CharacterRatings, CharacterCards} from './App.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('character-ratings')).render(
  <React.StrictMode>
    <CharacterRatings /> 
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('character-cards')).render(
  <React.StrictMode>
    <CharacterCards />
  </React.StrictMode>
)
