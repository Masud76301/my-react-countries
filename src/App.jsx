
import { Suspense } from 'react';
import './App.css'
import Countries from './components/Countries/Countries'


const loadCountries = async () => {
  const url = 'https://openapi.programming-hero.com/api/all';
  const res = await fetch(url);
  return res.json();

}



function App() {

  const allCountries = loadCountries();
  return (
    <>
      <Suspense fallback={<p>Countries Are Loading ....</p>}>

        <Countries allCountries={allCountries}></Countries>

      </Suspense>

    </>
  )
}

export default App
