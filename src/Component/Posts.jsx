   
import axios from "axios";
import Card from "./Card";
import { useEffect, useState } from "react";
import CreatePost from "./CreatePost";


   
   export default function Posts(){
          const [posts, setPosts] = useState([]);
        
          async function getPosts() {
            try {
              const response = await axios.get(`${process.env.REACT_APP_BE_URL}/api/posts/all-posts`)
           
              setPosts(response.data)
            } catch (error) {
              console.log(error);
            }
          }
        
          useEffect(() => {
            getPosts()
          }, []);

        
          return (
            <div>
              <h2>All Posts</h2>
              {
               posts.map((singlePost) => (
                 <Card
                   post={singlePost}
                   key={singlePost._id}
                 />   
                 ))
              }
            </div>
          );
    }