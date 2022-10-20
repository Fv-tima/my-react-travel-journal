import React from 'react'
import Header from './components/Header'
import Card from './components/Card'
import data from "./components/Data"
export default function App() {
  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        item={item} />
    )
  })
  return (
    <div>
      <Header />
      {cards}
    </div>
  )
}
