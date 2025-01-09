import Tabs from "./tabs";
import './styles.css';

function RandomComponent() {
  return <h1>Some random content</h1>;
}

export default function TabTest() {
  const tabs = [
    {
      label: "Tab 1",
      content: <div>This is content for Tab 1</div>,
    },
    {
      label: "Tab 2",
      content: <div>This is content for Tab 2</div>,
    },
    {
      label: "Tab 3",
      content: <RandomComponent />,
    },
  ];

  function handleChange(currentTabIndex) {
    console.log(currentTabIndex);
  }

  return <Tabs tabsContent={tabs} onChange={handleChange} />;
}



/*
    import {useState} from 'react'
      export default function Tabs({tabsContent, onChange}){
        const [currentTabindex, setCurrentTabIndex] = useState()
         function handleClicktab(index){
          setCurrentIndex(index)
          onChange(currentTabIndex)}
         return(
            <div>
            <div> 
                 {tabsContents.map((tabItem)=>
                    <div className=Tabs onClick={()=>{handlTabClick(index)}}>
                 <span className="Tab-heading">
                    {tabsItem.label}
                 </span>
                 </div>)}
            </div>
            <div>
                  <h3>{tabsContent.[currentTabIndex] && tabsContent.[currentTabIndex].content}</h3>
            </div>
            </div>
         )
      }   


    import Tabs from "./Tabs"
    import {useState} from 'react;

    export default function tabsContent(){
    const tabs = [{
    label:"tab1",
    content:"This is content for lable tab 1"},
    {
    label:"tab2",
    content:"This is content for lable tab 1"},
    {
    label:"tab3",
    content:"This is content for lable tab 1"},
    {
    label:"tab4",
    content:"This is content for lable tab 1"},]

    function handleChane(getCurrentIndex){
    }
    
    return <Tabs onChange={handleChange}
    }

*/