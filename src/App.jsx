
import './App.css'
import Cardinfo from './Component/Digitar+Card/Cardinfo'
import DigitalTools from './Component/Digitar+Card/DigitalTools'
import Homebar from './Component/HomePage/Homebar'
import Homepage from './Component/HomePage/Homepage'
import Pricing from './Component/HomePage/Pricing'
import Steps from './Component/HomePage/Steps'
import Navbar from './Component/Navbar/Navbar'
import { useEffect,useState } from 'react'
function App() {
  const [productData, setProductData] = useState([])
  useEffect(() => {
    fetch("Cardinfo.json")
      .then(res => res.json())
      .then(data => setProductData(data))
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
        <Pricing></Pricing>
      </main>
    </div>

  )
}

export default App
