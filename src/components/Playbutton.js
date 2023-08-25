import React, { useState } from "react";
import './Playbutton.css'
function Playbutton({onplay,children,onpause})
{
    const [playing,setplaying] = useState(false);
function clickhandle(e)
{
console.log(e);
e.stopPropagation()         
if(playing)onpause();
else onplay();
setplaying(!playing)
}
return (
<>
<button className="button" onClick={clickhandle}>{children}{playing?'▶️':'⏯️'}</button>
</>
)
}
 export default Playbutton