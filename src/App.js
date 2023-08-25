import { useContext, useEffect, useReducer, useRef, useState } from 'react';
import './App';
import Playbutton from './components/Playbutton';
import Video from './components/Video';
import videosdb from './data/Data';
import './App.css'
// import Droupdown from './components/Droupdown';
// import countries from './data/Datacountries'
import Counter from './components/Counter'
// import { useState } from 'react';
import AddVideo from './components/AddVideo';
import ThemeContext from './components/ThemeContext';
import VideoContext from './hooks/Videocontext';
import axios from 'axios';
import DispatchContext from './DispatchContext';
// import Resume from './Resume';

function App() {

  // const [countrydb,setcountry] =useState(countries)
  // function addcountry(country)
  // {
  // setcountry([...countrydb,{...country,id:countrydb.length+1}])
  // }
  // const [videos, setVideos] = useState(videosdb)
  const [videos,dispatch] = useReducer(videoreducer,videosdb)
  const theme = useContext(ThemeContext)
  const [mode,setMode] = useState('darkMode');
  const [editablevideo,setEditablevideo] = useState(null);
const inputref = useRef(null)
  function videoreducer(videos,action)
  {
  switch (action.type)
  {
  case 'LOAD':
    return action.payload
  case 'ADD' :
    return ([...videos,{...action.payload,id: videos.length + 1 }])
    
  case 'DELETE': return(videos.filter(video => video.id !== action.payload))
  case 'UPDTAE':
    const newvideo = [...videos];
    const index = videos.findIndex(v=>v.id===dispatch.payload.id)
    newvideo.splice(index,1,dispatch.payload.id);
    return newvideo;
    default:
      return videos
  }
  
  }
  

  // function addvideo(video) {
  //   dispatch({type:'ADD',payload:video})
  //   // setVideos([...videos,{...video,id: videos.length + 1 }])
  //   console.log(video)
  // }
  // function deletevideo(id) {
  //   dispatch({type:'DELETE',payload:id})
  //   // setVideos(videos.filter(video => video.id !== id))
  //   console.log(id)
  // }
  function editvideo(id) {
   setEditablevideo((videos.find(video => video.id === id)))
   console.log(videos);
  }
//   function upadatevideo(video)
//   {
// dispatch({type:'UPDATE',payload:video})
//   const newvideo = [...videos];
//   const index = videos.findIndex(v=>v.id===video.id)
//   newvideo.splice(index,1,video)
// //  setVideos(newvideo)
  // }
  //****Feching Data From Website */
  // const url ="https://my.api.mockaroo.com./json?key=706ed0a0"
  // const [videos,setVideos] = useState([])
  
// useEffect(async ()=>
//   {
//   const res =  await axios.get(url);
//   console.log(res.data);
//   dispatch({type:'LOAD', payload:res.data})

//   },[videos])
//*************************************** */
  return (
    <>
      {/* <div>
<Droupdown select ="select.." options={countries} addcountry={addcountry}></Droupdown>
    </div> */}


<ThemeContext.Provider value={mode}>
<VideoContext.Provider value={videos}>
<DispatchContext.Provider value={dispatch}>
<>
<button  onClick={()=>
{
setMode(mode==='darkMode'?'LightMode':'darkMode')
}} >Change Theme</button>
      <div className={`App ${mode}`} onClick={() => console.log('App')}>
      <button onClick={()=>{inputref.current.focus()}}>Focus</button>
        <AddVideo editablevideo={editablevideo} ref={inputref} ></AddVideo>
        <div>Videos</div>
        {
          videosdb.map((video) =>{return  (<Video
            key={video.id}
            title={video.title}
            views={video.views}
            time={video.time}
            channel={video.channel}
            verified={video.verified}
            id={video.id}
            //I created a dispatch context Which is Globally access by Video Component
            editvideo={editvideo}
          ><Playbutton onplay={() => console.log('Video Play', video.title)}
            onpause={() => console.log('Video Pause', video.title)} >
              {video.title}
            </Playbutton>
          </Video>) })
        }
        <div>
        </div>
        <Counter></Counter>
      </div>
    </>
    </DispatchContext.Provider>
    </VideoContext.Provider>
      </ThemeContext.Provider> 
  
    </>
  );
      }

export default App;



//my work in vedio
{/* <Vedio title='React js Mastery cousers' channel="coder-dost" views='30M' time='2 months ago' image="https://img.freepik.com/free-psd/3d-illustration-person-with-rainbow-sunglasses_23-2149436196.jpg?size=626&ext=jpg" ></Vedio>
<Vedio title='React js Mastery cousers' channel="coder-dost" views='30M' time='2 months ago' image="https://img.freepik.com/free-photo/man-red-suit-with-blue-shirt-tie_1340-36720.jpg?size=626&ext=jpg" ></Vedio>
<Vedio title='React js Mastery cousers' channel="coder-dost" views='30M' time='2 months ago' image="https://img.freepik.com/free-psd/3d-illustration-person-with-rainbow-sunglasses_23-2149436196.jpg?size=626&ext=jpg" ></Vedio>
 */}





//Assiement 2 code 
// // const obj=
// {
// image:'https://dashboard.aragon.ai/_next/static/media/5.0da29593.jpeg',
// name : 'Nitin Pandey',
// experience: [{company: 'Google' , post : 'Data Scientist', Time:'3 Years'},{company: 'Microsoft' , post : 'Product Manger', Time:'2 Years'}],
// skills :['React js','Nodejs' ,'Mysql','C++','Python'],
// education:['UIET, Panjab Universty', 'MBA Havord UNIVERSITY']
// }