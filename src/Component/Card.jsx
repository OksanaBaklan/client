import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import './Card.css'

export default function Card(props){
const {post} = props;


return (<div className="cards" key={post._id}>
<h4>Title: {post.title}</h4>
<h4>Message: {post.content}</h4>
<h4>Creator: {post.owner.firstName}</h4>

<hr />
<button className="deletebtn" onClick={()=>{}}>
  <FontAwesomeIcon icon={faTrash} />
</button>

<button
  className="update-icon"
  onClick={() => {}}
>
  <FontAwesomeIcon icon={faPen} />
</button>
</div>)
}