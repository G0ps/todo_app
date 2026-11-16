import { useEffect, useState } from 'react'

import Register from './components/authentication/Register'
import api from './api';

function App() {
  const [posts , setPosts] = useState([]);
  const [input_string , setString] = useState("");
  const [re_render , setRe_render] = useState(false)

  useEffect(() => {
    
    const fetch_posts = async () => {
      const posts = await api.get("/posts");
      setPosts(posts.data.posts)
      console.log("posts , " , posts)
    }
    fetch_posts();
  } , [re_render]);

  function populateTodos(){
    if(posts.length === 0) {
      return <> There is no todos </>
    }
  

    let postComponents = [];

    posts.forEach((post , index) => {
      if(post.is_ticked == false)
      {
        postComponents.push(<div className="not_ticked" key={post._id}><span>{post.content_text}</span><button onClick={() => {handle_tick(post._id)}}>tick</button></div>)
      }
      else{
         postComponents.push(<div className="ticked" key={post._id}><p><s>{post.content_text}</s></p></div>)
      }
    })

    return postComponents;

  }

  async function handle_submit(){

    const respinse = await api.post("/posts" , {"content_string" : input_string})
    if(respinse.data.status == "success")
    {
      alert("Saved successfully")
    }
    else{
      alert("failed to save")
    }

    setRe_render(!re_render)
  }

  async function handle_tick(id)
  {
    await api.patch(`/posts/${id}` , {"is_ticked" : true})
    setRe_render(!re_render);
  }


  return (
    <>
      <input id="input" onChange={(even) => {setString(even.target.value)}} placeholder='enter a todo'></input>

      <button onClick={() => {handle_submit()}}> Add todo </button>

    {
     populateTodos()
    }
    </>
  )
}

export default App
