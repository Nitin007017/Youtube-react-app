
import { useState } from 'react';
import './Droupdown.css'

function Droupdown({options,addcountry})
{
const  intialstate = {
  name:'',
  value: "IN"
}
const[country,setCountry]= useState(intialstate);
  function handlechange(e)
  {
  setCountry({...country,
  [e.target.name]:e.target.value})
  }
  console.log(country)
function handelsubmit()
{
addcountry(country);
setCountry(intialstate);
}
return (
<>

<label>
Choose Your countries
<select className='artributes'> 
{
  
options.map((options)=>(<option
className='elements'
key={options.id}
>
{options.name}
</option>))
}
</select>
</label>
<form><input placeholder='country' type='text' onChange={handlechange} name='name' value={country.name}  ></input></form>
<button onClick={handelsubmit} >ADD Country</button>

</>
)
}
 export default Droupdown;