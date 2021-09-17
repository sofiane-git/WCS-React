import './App.css';
import WilderComponent from "./components/Wilder"
import AddWilder from './components/AddWilder'
// import wildersList from './datas/wildersList'
import axios from 'axios'
import { useEffect, useState } from 'react';



function App() {
  const [wilders, setWilders] = useState([])

  const fetchWilders = async () => {
    try {
      const result = await axios.get("http://localhost:3000/api/wilder")
      setWilders(result.data.result)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchWilders()
  }, [wilders])


  return (
    <div className="bg-gray-600">
      <header>
        <div>
          <h1>Wilders Book</h1>
        </div>
      </header>
      <main className="flex flex-wrap">
        { wilders.map((wilder, index) => {
          return (
            <WilderComponent 
              key={index}
              name={wilder.name}
              city={wilder.city}
              skills={wilder.skills}
            />
          )
        })}
        <AddWilder />
      </main>

      <footer>
          <div>
            <p>&copy; 2020 Wild Code School</p>
          </div>
      </footer>

    </div>
  );
}

export default App;
