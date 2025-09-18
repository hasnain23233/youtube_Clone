import { useState } from 'react'
import './App.css'
import FullStackYoutubeFile from './FullStackYoutubeFile'
import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {

  return (
    <>
      <Router>
        <FullStackYoutubeFile />
      </Router>
    </>
  )
}

export default App
