import './VideoPlayer.css'
import vide0 from '../../assets/effect.mp4'
import { useRef } from 'react'

const VideoPlayer = ({playState, setPlayState}) => {
    const player = useRef(null);
    const closePlayer = (e)=>{
        if(e.target === player.current){
            setPlayState(false)
        }
    }
  return (
    <div className={`video ${ playState ? '' : 'hide' }`} ref={player} onClick={closePlayer}>
        <video src={vide0} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer;