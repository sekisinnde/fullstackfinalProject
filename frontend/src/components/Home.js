import React from "react";
import background from '../furby.jpg'
import music from '../furbyAnies.mp3';
import useSound from 'use-sound';

const Home = () => {
    
    const [sound, {stop}] = useSound(music);

    return(
        <div className="home">
            <img className="jp" src={background} alt="japanese furby" onMouseEnter={() => sound()} onMouseLeave={() => stop()}></img>
        </div>
    )
}

export default Home;