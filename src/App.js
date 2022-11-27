import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useRef, useState } from 'react'
import useFetch from './Hook/useFetch'

const App = () => {
  const data = useFetch('https://apizingmp3.herokuapp.com/api/song?id=ZWZB969E')
  const audioRef = useRef()
  const handlerPlay = () => {
    audioRef.current.play()
  }
  console.log(data?.data)
  return (
    <div className="App">
      <audio
        src="https://vnso-zn-24-tf-mp3-s1-m-zmp3.zmdcdn.me/c4c886c78e8367dd3e92/1276772325897429276?authen=exp=1669708295~acl=/c4c886c78e8367dd3e92/*~hmac=73b605324d219b573a61abe16060b6b4"
        ref={audioRef}
      />
      <button onClick={handlerPlay}>Play</button>
    </div>
  )
}

export default App
