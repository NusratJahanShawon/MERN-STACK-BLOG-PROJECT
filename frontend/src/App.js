import logo from './logo.svg'
import './App.css'
import Home from './Pages/HomePage'
import Login from './Pages/Login'
import Register from './Pages/Register'
import MyBlogs from './Pages/MyBlogs'
import CreatePost from './Pages/CreatePost'
import PostDetails from './Pages/PostDetails'
import EditPost from './Pages/EditPost'
import Profile from './Pages/Profile'
import { Route, Routes } from 'react-router-dom'
import UserContextProvider from './context/UserContext'
// import { BrowserRouter } from 'react-router-dom'


function App() {
  return (
<UserContextProvider>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/createpost" element={<CreatePost />} />
      <Route path="/post/post/:id" element={<PostDetails/>} />
      <Route path="/edit/:id" element={<EditPost />} />
      <Route path="/myblogs/:id" element={<MyBlogs />} />
      <Route path="/profile/:id" element={<Profile />} />
    </Routes>
    </UserContextProvider>
  );
}

export default App;
