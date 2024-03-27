import React, {useMemo,useState} from 'react'
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'аа', body: 'бб'},
        {id: 2, title: 'гг 2', body: 'аа'},
        {id: 3, title: 'вв 3', body: 'яя'},
    ])

    const [filter, setFilter] = useState({sort: '', query: ''})

    const sortedPosts = useMemo(() => {
        if(filter.sort) {
            // Создаем новый отсортированный массив и возвращаем его
            return [...posts].sort((a, b) => {
                // Добавляем проверку на наличие нужного свойства
                const propA = a[filter.sort] || '';
                const propB = b[filter.sort] || '';
                return propA.localeCompare(propB);
            });
        }
        // Если сортировка не применяется, возвращаем исходный массив постов
        return [...posts];
    }, [filter.sort, posts]);


    const sortedAndSearchedPosts = useMemo( () => {
            return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
    }, [filter.query,sortedPosts])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            <MyModal>Niggers</MyModal>
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}/>
            <div>
                <PostFilter
                    filter={filter}
                    setFilter={setFilter}
                />
            </div>
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Посты про JS"/>
        </div>
    );
}

export default App;
