import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import { Dates } from './components/Modules/Dates/Dates';
import { Files } from './components/Modules/Files/Files';
import { MultipleImage } from './components/Modules/MultipleImage/MultipleImage';
import { NavBar } from './components/NavBar/NavBar';
import { getData } from './components/redux/Actions';
import { Text } from './components/Modules/Text/Text'
import { Categories } from './components/Modules/Categories/Categories';
import {MultiSelect} from './components/Modules/MultiSelect/MultiSelect'
import { Image } from './components/Modules/Image/Image';
import { ImageAndText } from './components/Modules/ImageAndText/ImageAndText';
import { CheckBox } from './components/Modules/CheckBox/CheckBox';
import { Number } from './components/Modules/Number/Number';
import Paginated from './components/Paginated/Paginated';
//testing
function App() {

  useEffect(() => {dispatch(getData())}, [])
  const dispatch = useDispatch()
  const getAllElemets = useSelector(state => state.table)
  const [edit, setEdit] = useState(false)
  
      //paginado
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);
    
  const indexOfLast = currentPage * postPerPage;
  const indexOfFirst = indexOfLast - postPerPage
  const currentPosts = getAllElemets?.slice(indexOfFirst, indexOfLast) 
  const paginado = (pageNum) => {
        setCurrentPage(pageNum)
    }
  return (
    <div className="App">
      <NavBar 
        setPostPerPage={setPostPerPage} 
        postPerPage={postPerPage} 
        selectNumber={getAllElemets}/>

      <div className='container-table'>
        {currentPosts?.map(e => (
              <div key={e.id} className='container-line' onContextMenu={(e) => {
                e.preventDefault();
                setEdit(true)
              }}>
                <Text 
                  setEdit={setEdit}
                  edit={edit} 
                  state={e.name}
                  id={e.id} />
                <Number 
                  edit={edit} 
                  state={e.id}/>
                <Categories 
                  edit={edit} 
                  state={e.categoria}/>
                <MultiSelect 
                  edit={edit} 
                  state={e.status}/>
                <Image 
                  setEdit={setEdit}
                  edit={edit} 
                  state={e.image}
                  id={e.id}/>
                <MultipleImage
                  state={e.images}
                  edit={edit}/>
                <ImageAndText/>
                <Files 
                  edit={edit}/>
                <CheckBox/>
                <Dates 
                  edit={edit} 
                  state={e.date}/>
              </div>
            ))
        }
      </div>

      <button onClick={()=> setEdit(!edit)}>{!edit ? 'Editar' : 'Listo'}</button>
      <Paginated
          postsPerPage={postPerPage}
          totalPosts={getAllElemets.length}
          paginado={paginado}
      />
    </div>
  );
}

export default App;
