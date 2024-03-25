import React, {useState} from 'react'
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', body: 'Decription'},
        {id: 2, title: 'Javascript 2', body: 'Decription'},
        {id: 3, title: 'Javascript 3', body: 'Decription'},
    ])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}/>
            <div>
                <select>
                    <option value="value1">По названию</option>
                    <option value="value1">По описанию</option>
                </select>
            </div>
            {posts.length
                ?
                <PostList remove={removePost} posts={posts} title="Посты про JS"/>
                :
                <h1 style={{textAlign: "center",color: "var(--tg-theme-text-color)"}}>Посты не найдены!</h1>
            }
        </div>
    );
}

export default App;
