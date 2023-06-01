import axios from "axios";
import React from "react";
import { useState } from "react";
export default function CreatePost (props){

    const {handleSubmit} = props
    const [errorMessage, setErrorMessage] = useState("")

    const submitHandler = async (e) =>{
      e.preventDefault()
      const newPost = {
        title:e.target["title"].value,
        description:e.target["description"].value,
        content:e.target["content"].value,
      }

      try{
        const response = await axios.post(`${process.env.REACT_APP_BE_URL}/api/posts/create-post`)
      }
      catch(err){
        console.log(err.message)
      }
    }
    return(
      <>
      <form onSubmit={submitHandler}>
        <div className="block">
          <input
            type="text"
            name="title"
            required
            placeholder="Title"
          />
        </div>

        <div className="block">
          <input
            placeholder="Description"
            type="text"
            name="description"
            required
          />
        </div>

        <div className="block">
          <input
            placeholder="Content Details"
            type="text"
            name="content"
            required
          />
        </div>

        <button className={"submitbtn"} type = "submit">Post </button>
        <button className="cancelbtn" type="reset">Cancel</button>
      </form>
      {errorMessage && <p style={{color:"red"}}>{errorMessage}</p>}
      </>
      )
}