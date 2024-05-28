// import { useState } from 'react'
import SearchBar from './components/Search/Search';
import Card from './components/Card/Card';
import Cards from './components/Cards/Cards';
import characters, {Rick} from './data';
import './App.css'

function App() {
  return (
    <>
      <div className='App'>
         <SearchBar onSearch={(characterID) => window.alert(characterID)} />
         <Cards characters={characters} />
         <Card
            id={Rick.id}
            name={Rick.name}
            status={Rick.status}
            species={Rick.species}
            gender={Rick.gender}
            origin={Rick.origin.name}
            image={Rick.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
         />
      </div>
    </>
  )
};

export default App;
