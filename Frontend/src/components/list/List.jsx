import './list.scss'
import Card from"../card/Card"
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function List({posts}){
  const { currentUser } = useContext(AuthContext);
  return (
    <div className='list'>
      {posts.map(item=>(
        <Card key={item.id} item={item} currentUser={currentUser} />
      ))}
    </div>
  )
}

export default List