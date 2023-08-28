import DispatchContext from '../DispatchContext'
import ThemeContext from './ThemeContext'
import './vedio.css'
import { useContext, useEffect } from 'react'

function Video({title,channel="Coder Dost",views,time,verification,children,id,editvideo})
{
useEffect(()=>
{
const idx = setInterval(()=>
{
console.log('video playing', id)
},3000)
return()=>clearInterval(idx)

},[id])

    const theme = useContext(ThemeContext)  
    const dispatch = useContext(DispatchContext)
return (
    <>
    <div className={`container ${theme}`} >
    <button className='btn' onClick={()=> dispatch({type:'ADD',payload:id})}>X</button>
    <button className='edit' onClick={()=>editvideo(id)}>edit</button>
    <div className="pic">
    <img src={`https://picsum.photos/id/${id}/160/90`} alt="Katherine Johnson" />
    </div>
    <div className='title'>{title}</div>
    <div  className="channel">{channel} {(verification )&&  '✅'}</div>
    <div className="views">
      {views} viewsssss <span>.</span>{time}
<div>{channel}</div>
<div>{children}</div>
    </div>
    </div>
    </>

)
}
export default Video