import {React, useState, useEffect} from 'react';
import axios from 'axios';


const Fatchapi = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    
    //fetch data api without Axios
    // const fatchPosts = async() => {
    //     fetch (`https://jsonplaceholder.typicode.com/posts`).then(response => response.json()).then((json) => setPosts(json));
    //     setLoading(false);
    // }


    const fatchPosts = async() => {
        try {
            const getPosts = await axios.get (`https://jsonplaceholder.typicode.com/posts`);
            setPosts(getPosts.data);
            setLoading(false);

        } catch (error) {
           document.write("this is api error")
        }
    }

    useEffect(() => {
        fatchPosts();
    }, [])

  return (
    <>  

        <div className='container'>
            {loading ? <div class="spinner-border"></div> : 
            <div>
                 {
                posts.map((post, index) => 

                <div className='dialog-box mb-4 pb-4 border-bottom' key={index}>
                <h5>{post.id}. {post.title}</h5>
                <div className='card-body'>{post.body}</div>
                </div>

            )}
            </div>
            }
           
           
        </div>
    </>
  )
}

export default Fatchapi