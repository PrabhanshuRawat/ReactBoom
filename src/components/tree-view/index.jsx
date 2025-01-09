import MenuList from "./menu-list";
import './styles.css'

export default function TreeView({ menus = [] }) {
  return (
    <div className="tree-view-container">
      <MenuList list={menus} />
    </div>
  );
}




/*
import Menu-list from "./Menu-list"
    
   export default function TreeView({menus=[]})
{
   <div>
        <Menus list={Menu.item}/>
   </div>
}



import Menu-item from "Menu-item"

export default function Menu-list({item=[]})
{
return <ul>
     <Menu-item item={Menu-item}/>
</ul>}




import Menu-list from "Menu-list"

export default function Menu-Item({item})
{

const [displayChild, setDisplayChile] = useState({})

return <li>
    <div> 
    <p>{item.label}</p>
    { item && item.length ? <span className="plus-minus">
     {
        displayChild.id === item.id ? - : +
     }:null}
    </div>
    {item && item.length && item.children >0 ? <MainList list={displayItem} : null}
</li>}






*/