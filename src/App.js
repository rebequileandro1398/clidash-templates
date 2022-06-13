import { useEffect, useRef, useState } from 'react';
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
import { NewLine } from './components/NewLine/NewLine';
import { ToggleSwitch } from './components/Modules/ToggleSwitch/ToggleSwitch';
//testing
function App() {
  const dispatch = useDispatch()
  const [newLine, setNewLine] = useState(false)
  useEffect(() => {dispatch(getData())},[dispatch])
  useEffect(() => {
    newLine && anchor.current.scrollIntoView({behavior: 'smooth'})
  }, [newLine])
  
  const getAllElemets = useSelector(state => state.table)
  const getSearch = useSelector(state => state.search)
  const anchor = useRef()
      //paginated
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);
  const indexOfLast = currentPage * postPerPage;
  const indexOfFirst = indexOfLast - postPerPage
  let currentPosts = getAllElemets?.slice(indexOfFirst, indexOfLast) 
  if(getSearch.length){
    currentPosts = getSearch?.slice(indexOfFirst, indexOfLast) 
  }

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
        newLine={newLine}
        setNewLine={setNewLine}
        anchor={anchor}
        setPostPerPage={setPostPerPage} 
        postPerPage={postPerPage} 
        selectNumber={getAllElemets}/>
      <div className='container-table'>
        {newLine && <>
          <div className='anchor' ref={anchor}/>
          <NewLine selectOptions={options} setNewLine={setNewLine}/>
        </>}
        { currentPosts?.map(e => (
            <>
              <div key={e.id} className='container-line'>
                <div className='text'>
                  <Text
                    mobileViewLabel={'Texto'}
                    state={e.name}
                    id={e.id} 
                    />
                </div>
                <div className='number'>
                  <Number 
                     mobileViewLabel={'Numeros'}
                    state={e.number}
                    id={e.id}
                    />
                </div>
                <div className='select'>
                  <Select 
                    mobileViewLabel={'Select'}
                    state={e.status}
                    id={e.id}
                    options={options}
                    />   
                </div>
                <div className='muiltiselect'>
                  <MultiSelect 
                    mobileViewLabel={'Multiselect'}
                    state={e.multiple}
                    options={options}
                    id={e.id}
                    />
                </div>
                <div className='image'>
                  <Image
                     mobileViewLabel={'Imagen'}
                    state={e.image}
                    id={e.id}
                    />
                </div>
                <div className='multipleimage'>
                  <MultipleImage
                     mobileViewLabel={'Multi Imagenes'}
                    state={e.images}
                    id={e.id}
                    />
                </div>
                <div className='image-text'>
                  <ImageAndText
                     mobileViewLabel={'Imagen y Texto'}
                    state={e.profile}
                    id={e.id}
                  />
                </div>
                <div className='files'>
                  <Files
                    mobileViewLabel={'Archivo'}
                    state={e.file}
                    id={e.id}
                    />
                </div>
                <div className='checkbox'>
                  <CheckBox
                    id={e.id} 
                    />
                </div>
                <div className='dates'>
                  <Dates 
                     mobileViewLabel={'Fechas'}
                    id={e.id}
                    state={e.date}
                    />
                </div>
                <div className='toggle'>
                  <ToggleSwitch
                    id={e.id}
                    status={e.state}
                  />
                </div>
              </div>
              <hr/>
            </>
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
