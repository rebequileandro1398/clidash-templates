import { useState } from 'react';
import './App.scss';
import { Dates } from './components/Modules/Dates/Dates';
import { Files } from './components/Modules/Files/Files';
import { MultiPhotos } from './components/Modules/MultiPhotos/MultiPhotos';
import { NavBar } from './components/NavBar/NavBar';
//testing
function App() {
  const [edit, setEdit] = useState(false)
  const array = [{name: 'a', date: '12-01-2020'}, {name: 'b', date: '30-01-2021'}, {name: 'c', date: '22-01-2022'}, {name: 'd', date: '12-03-2020'}, {name: 'e', date: '12-05-2020'}, {name: 'f', date: '12-04-2020'}]

  return (
    <div className="App">
      <NavBar/>
      <div>
          {
            array?.map(e => (
              <div className='container-table'>
                <p>{e.name}</p>
                <Dates edit={edit} initialState={e.date}/>
                <Files edit={edit}/>
                <MultiPhotos edit={edit}/>
              </div>
            ))
          }
      </div>
      <button onClick={()=> setEdit(!edit)}>{!edit ? 'Editar' : 'Listo'}</button>
    </div>
  );
}

export default App;
