import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import { Dates } from './components/Modules/Dates/Dates';
import { Files } from './components/Modules/Files/Files';
import { MultipleImage } from './components/Modules/MultipleImage/MultipleImage';
import { NavBar } from './components/NavBar/NavBar';
import { getData } from './components/redux/Actions';
import { Text } from './components/Modules/Text/Text'
import { Select } from './components/Modules/Select/Select';
import {MultiSelect} from './components/Modules/Select/MultiSelect'
import { Image } from './components/Modules/Image/Image';
import { ImageAndText } from './components/Modules/ImageAndText/ImageAndText';
import { CheckBox } from './components/Modules/CheckBox/CheckBox';
import { Number } from './components/Modules/Number/Number';
import Paginated from './components/Paginated/Paginated';
//testing
function App() {
  const dispatch = useDispatch()
  useEffect(() => {dispatch(getData())},[dispatch])
  const getAllElemets = useSelector(state => state.table)
  const [edit, setEdit] = useState(false)
  
      //paginated
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);
    
  const indexOfLast = currentPage * postPerPage;
  const indexOfFirst = indexOfLast - postPerPage
  const currentPosts = getAllElemets?.slice(indexOfFirst, indexOfLast) 
  const options = [
    {
      text: 'completado',
     color: 'purple'
    },
    {
      text: 'en distribucion',
      color: 'green'
    },
    {
      text: 'pagado',
      color: 'green-apple'
    },
    {
      text: 'en espera',
      color: 'yellow'
    },
    {
      text: 'cancelado',
      color: 'purple'
    }
  ]
  return (
    <div className="App">
      <NavBar 
        setPostPerPage={setPostPerPage} 
        postPerPage={postPerPage} 
        selectNumber={getAllElemets}/>

      <div className='container-table'>
        {currentPosts?.map(e => (
              <div key={e.id} className='container-line'>

                <Text 
                  state={e.name}
                  id={e.id} 
                  />

                <Number 
                  state={e.number}
                  id={e.id}
                  />

                <Select 
                  state={e.status}
                  id={e.id}
                  options={options}
                  />

                <MultiSelect 
                  edit={edit} 
                  state={e.multiple}
                  options={options}
                  id={e.id}
                  />

                <Image 
                  setEdit={setEdit}
                  edit={edit} 
                  state={e.image}
                  id={e.id}
                  />

                <MultipleImage
                  state={e.images}
                  edit={edit}
                  id={e.id}
                  />


                <ImageAndText
                  state={e.profile}
                  id={e.id}
                />

                <Files 
                  state={e.file}
                  id={e.id}
                  />
                <CheckBox/>
                <Dates 
                  edit={edit} 
                  state={e.date}/>
              </div>
            ))
        }
      </div>
      <Paginated
          postsPerPage={postPerPage}
          totalPosts={getAllElemets.length}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
      />
    </div>
  );
}

export default App;
