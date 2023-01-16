import Header from "./components/Header"
import Card from "./components/Card"
import data from "./data"

export default function App() {
  const cards = data.map(item => <Card {...item}/>)

  return (
    <div className="App">
      <Header/>
      <section className="card-list">
        {cards}
      </section>
    </div>
  )
}
