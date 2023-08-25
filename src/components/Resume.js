import React from "react";
import './resume.css'
function Resume({image, name, experience,skills,education})
{
let picture = "img"
return (
<>
<div><img src={image} className={picture}></img></div>
<hr></hr>
<div><h1>{name}</h1></div>
<hr></hr>
 <div> <h2>experience =  {experience[0].company}</h2>
 <h3>Post = {experience[0].post}</h3>
    <h3>Time = {experience[0].Time}</h3>
 </div>
 <hr></hr>
 <div> <h2>experience =  {experience[1].company}</h2>
 <h3>Post = {experience[1].post}</h3>
    <h3>Time = {experience[1].Time}</h3>
 </div>
 <hr></hr>
 <div><h3>skills::{skills}</h3></div>
 <div><h3> education::{education} </h3> </div>

</>
)
}
export default Resume;