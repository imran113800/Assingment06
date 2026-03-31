
import './App.css'
import DigitalTools from './Component/Digitar+Card/DigitalTools'
import Homebar from './Component/HomePage/Homebar'
import Homepage from './Component/HomePage/Homepage'
import Navbar from './Component/Navbar/Navbar'
function App() {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Homepage></Homepage>
        <Homebar></Homebar>
        <DigitalTools></DigitalTools>
      </main>
    </div>
   
  )
}

export default App
