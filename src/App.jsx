import './App.css'
import DigitalTools from './Component/Digitar+Card/DigitalTools'
import Footer from './Component/Footer/Footer'
import Homebar from './Component/HomePage/Homebar'
import Homepage from './Component/HomePage/Homepage'
import Pricing from './Component/HomePage/Pricing'
import Steps from './Component/HomePage/Steps'
import Workflow from './Component/HomePage/Workflow'
import Navbar from './Component/Navbar/Navbar'
import { useEffect, useState } from 'react'

function App() {
  const [productData, setProductData] = useState([])
  const [subscription, setsubscription] = useState([])
  const [card, setCard] = useState(0)

  useEffect(() => {
    fetch("Cardinfo.json")
      .then(res => res.json())
      .then(data => setProductData(data))
  }, [])

  useEffect(() => {
    fetch("SubsCription.json")
      .then(res => res.json())
      .then(data => setsubscription(data))
  }, [])

  return (
    <div>
      <header>
        <Navbar card={card} />
      </header>

      <main>
        <Homepage />
        <Homebar />
        <DigitalTools 
          productData={productData} 
          card={card} 
          setCard={setCard} 
        />

        <Steps />
        <Pricing subscription={subscription} />
        <Workflow />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App