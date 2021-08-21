import React from 'react'
import './App.scss'
import GhostFilter from './Filter'
import GhostList from './GhostList'

function App() {
  return (
    <div className="App">
      <div className="filterRow">
        <h1>Ghost filter</h1>
        <GhostFilter />
      </div>
      <div className="ghostRow">
        <h2>All ghosts</h2>
        <GhostList />
      </div>
    </div>
  )
}

export default App
