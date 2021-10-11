import "./List.css";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {FaEdit} from 'react-icons/fa';

// Listen status und
const List = ({ list }) => {
  const [name, setName] = useState();
  const [listEle,setListEle]=useState();
  const [editItem,setEditItem]=useState("");

  useEffect(()=>{
    setListEle(list);
  },[list])

  const clickHandler = () => {
    setName(name);
    console.log(name);
  };

  //Editing a particular item

  const editList=(id)=>{
    console.log(list);
    setEditItem(list.find(item=>item.id===id).name);
    setListEle(list.filter(item=>item.id!==id));
    document.getElementById("edit-div").classList.remove("edit-hidden");
  }

  //Updating the list and the localstorage

  const updateList=()=>{
    if(editItem.trim()==="") alert("Don't leave the input field empty!");
    else{
      setListEle([...listEle,{name: editItem, id: uuidv4()}]);
      localStorage.setItem("listDataStore",JSON.stringify([{name: editItem, id: uuidv4()},...listEle]));
      setEditItem("");
      document.getElementById("edit-div").classList.add("edit-hidden");
    }
  }

  return (
    <>
    <ul className="boxForItems">
      {
      listEle
      ?
      listEle
        .sort(function (a, b) {
          if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return -1;
          }
          if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return 1;
          }
          return 0;
        })
        .map((item) => (
          <button
            className="foodListItems"
            key={item.id}
            onClick={clickHandler}
            type="submit">
            {item.name}<FaEdit 
            style={{color:"white", marginLeft:"10px", fontSize:"16px"}}
            onClick={()=>{
              editList(item.id);
            }}/>
            {/*<button type="submit" id="delete" name="delete" />*/}
          </button>
        ))
        :
        null
      }
      {/* Edit-item div */}
    <div className="edit-div edit-hidden" id="edit-div">
    <input className="edit-inp" type="text" value={editItem} onChange={(e)=>setEditItem(e.target.value)} />
    <button className="edit-button" onClick={updateList}>Done</button>
    </div>
    </ul>
    </>
  );
};

export default List;
