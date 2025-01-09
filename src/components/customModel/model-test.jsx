
import ModelShow from './mode'
import {useState} from 'react'
export default function Model(){

    const [showModel, setShowModel] = useState(false)
    function handleClick(){
        setShowModel((prev) => !prev)
    }
    return(
       <div className="wrapper">
        <button onClick={handleClick} className="button"> { showModel? "Close Model" : "Open Model"}</button>
        {showModel && <ModelShow body={<div>Custom Body</div>}/>}
       </div>
    )
}