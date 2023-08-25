import { useCallback, useEffect, useMemo, useRef, useState } from "react";


function Counter()
{console.log('Function Render')
    const [number,setnumber] = useState(36);
    let n = number
const num = useRef(0)
function updateui(e)
{
e.stopPropagation()
setnumber(number=>number+1)
setnumber(number=>number+1)
num.current++;
console.log(num.current)
}
const fibx =   useCallback((function fib(n)
{
if(n===1 || n===2) return 1;
return fib(n-1)+fib(n-2);
}
),[])
useMemo(()=>fibx(number),[number,fibx])

return (
<>
<h1>{num.current}   |\/| {fibx(number)}</h1>
<button onClick={updateui}>ADD</button>
</>
    )
}
export default Counter