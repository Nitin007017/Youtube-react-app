import { formToJSON } from 'axios';
import DispatchContext from '../DispatchContext';
import useVideoDispatchcustomhook from '../hooks/VideoDispatchcustomhook';
import './AddVideo.css';

import { forwardRef, useContext, useEffect, useReducer, useState } from 'react';

const  AddVideo = forwardRef(function  AddVideo ({ editablevideo },ref) {
    const initialState = {
    time: "1 month ago",
    channel: "Coder Dost",
    title: '',
    views: '',
    verification: false
  };

  const [video, setvideo] = useState(initialState);
  // const dispatch = useContext(DispatchContext);
  const dispatch = useVideoDispatchcustomhook();
  function handleChange(e) {
    e.stopPropagation();
    setvideo({
      ...video,
      [e.target.name]: e.target.value
    });
  }
  // const inputref = useRef(null)
  useEffect(() => {
    if (editablevideo) {
      setvideo(editablevideo)

    }

    // inputref.current.focus();
  }, [editablevideo])

  function handleSubmit(e) {
    e.preventDefault();
    if (editablevideo) {
      dispatch({ type: 'UPDATE', payload: video })
    }
    else dispatch({ type: 'ADD', payload: video })
    setvideo(initialState);
  }
 
  return (
    <>
      <form>
        <input ref={ref}  type="text" className="addvideo" name="title" onChange={handleChange} placeholder="Title" value={video.title}s
        />
        <input type="text" className="addvideo" name="views" onChange={handleChange} placeholder="Views" value={video.views} />
      </form>
     
      <button onClick={handleSubmit}>
        {(editablevideo) ? 'EDIT Video' : 'ADD Vedio'}
      </button>
    </>
  );
}
)

export default AddVideo;
