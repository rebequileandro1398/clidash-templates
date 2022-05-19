import { useState } from 'react';
import './App.scss';
import { Dates } from './components/Dates/Dates';
import { Files } from './components/Files/Files';
import { MultiPhotos } from './components/MultiPhotos/MultiPhotos';
//testing
function App() {
  const [edit, setEdit] = useState(false)
  const array = [{name: 'a', date: '12-01-2020'}, {name: 'b', date: '30-01-2021'}, {name: 'c', date: '22-01-2022'}, {name: 'd', date: '12-03-2020'}, {name: 'e', date: '12-05-2020'}, {name: 'f', date: '12-04-2020'}]

  return (
    <div className="App">
      {
        array?.map(e => (
          <div className='line'>
            <p>{e.name}</p>
            <Dates edit={edit} initialState={e.date}/>
            <Files edit={edit}/>
            <MultiPhotos edit={edit}/>
          </div>
        ))
      }
      <button onClick={()=> setEdit(!edit)}>{!edit ? 'Editar' : 'Listo'}</button>
    </div>
  );
}

export default App;
