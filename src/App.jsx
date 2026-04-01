
import './App.css'
import Cardinfo from './Component/Digitar+Card/Cardinfo'
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
  useEffect(() => {
    fetch("Cardinfo.json")
      .then(res => res.json())
      .then(data => setProductData(data))
  }, [])
  const [subscription, setsubscription] = useState([])
  useEffect(() => {
    fetch("SubsCription.json")
      .then(res => res.json())
      .then(data => setsubscription(data))
  }, [])
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Homepage></Homepage>
        <Homebar></Homebar>
        <DigitalTools></DigitalTools>
        <Cardinfo productData={productData}></Cardinfo>
        <Steps></Steps>
        <Pricing subscription={subscription}></Pricing>
        <Workflow></Workflow>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>

  )
}

export default App
