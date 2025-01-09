import { useState } from "react";
import data from "./data";
import "./styles.css"; // Adjust path based on your project structure

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMulti, setEnableMulti] = useState(false);
  const [multipleSelect, setMultipleSelect] = useState([]);

  function handleClick(id) {
    if (enableMulti) {
      // Toggle multi-select behavior
      if (multipleSelect.includes(id)) {
        setMultipleSelect(multipleSelect.filter((item) => item !== id));
      } else {
        setMultipleSelect([...multipleSelect, id]);
      }
    } else {
      // Single select behavior
      setSelected(selected === id ? null : id);
    }
  }

  return (
    <div className="wrapper">
      {/* Multi-select toggle button */}
      <button
        className="enable-button"
        onClick={() => setEnableMulti(!enableMulti)}
      >
        {enableMulti ? "Disable Multi-Select" : "Enable Multi-Select"}
      </button>

      {/* Accordion items */}
      {data && data.length > 0 ? (
        data.map((dataItem) => (
          <div className="item" key={dataItem.id}>
            <div className="title" onClick={() => handleClick(dataItem.id)}>
              <h3>{dataItem.question}</h3>
              <span>{selected === dataItem.id || multipleSelect.includes(dataItem.id) ? "-" : "+"}</span>
            </div>
            {selected === dataItem.id || multipleSelect.includes(dataItem.id) ? (
              <div>{dataItem.answer}</div>
            ) : null}
          </div>
        ))
      ) : (
        <div>No Data Present</div>
      )}
    </div>
  );
}


/*
     const[selected, setSelected] = useState(null);
     const[enableMulti, setEnableMulti] = useState(false);
     const[MultiSelect, setMultiSelect] = useState([]);

     const handleFunction(id){
      
     if(enableMulti){
       if(MultiSelect.includes(id).filter((item)=>{item!=id}))
       else{
         setMultiple([...Multiple, ,id])
       }
     }
      else{
      selected===id?null:id;
      }
     }

      <div className="wrapper">
         {
             <button className="enableButton" onClick={()=>setEnableMulti?false:true}>{
             enableMulti ? "Disable Multiple options" : "Enable Multiple Options" 
             }
             </button>
         }
             {
              
             data && data.length>0 ? 
            
             data.map((dataItem)=> (<div className="item"> 
             <div className="title" onClick={()=>{handleClick(dataItem.id)}}>
             <h3>{dataItem.answer}</h3>
            </div>
            {
                enableMulti || selected ? <span onClick={()=>{handleClick(dataItem.id)}}>+</span> : {
                MultipleSelect.includes(dataItem.id)||selected===dataItem.id?<span>-</span> }
            }
            {
                 selected===dataItem.id || MultiSelect.includes(dataItem.id)? <h4>{dataItem.answer}</h4> : null
            }
             </div>
             
             
             :<div> No Data to Show </div>
         
             }
      </div>    

*/