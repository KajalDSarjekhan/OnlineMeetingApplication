import React, { useRef, useState } from 'react';

const App = () => {
  const [play, setPlay] = useState(false);
  const ref = useRef();

  function stream() {
    const nextIsPlay = !play;
    setPlay(nextIsPlay);

    if (nextIsPlay) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
          const video = ref.current;
          if (video) {
            video.srcObject = stream;
            video.play().catch((err) => console.error('Error playing video:', err));
          }
        })
        .catch((err) => console.error('Error accessing camera:', err));
    } else {
      const video = ref.current;
      if (video) {
        video.pause();
      }
    }
  }
  function streams(){
    let video= document.querySelector('video')
    let option ={video:true}
    window.navigator.mediaDevices.getDisplayMedia(option)
    .then((res)=>video.srcObject=res)
 
 }
 

  return (
    <div >
      <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
      <img src="data:image/png;base64,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" height={'100px'} style={{margin:'10px'}}/>
      <h1>Meeting App</h1>
      </div>
      <video ref={ref} muted onPlay={() => setPlay(true)} height={'400px'} width={'100%'}></video>
      <h1 style={{display:'flex', alignItems:'center', justifyContent:'center', marginTop:'10px'}}>Ready to join ?</h1>
      <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
      <button style={{marginLeft:'20px',marginTop:'20px',display:'flex', alignItems:'center', justifyContent:'center',border:'orange' ,backgroundColor:'orange', height:'30px', width:'70px', fontSize:'20px'}} onClick={stream} >{play ? 'Pause' : 'Play'}</button>
 
      </div>
    </div>
  );
};

export default App;


