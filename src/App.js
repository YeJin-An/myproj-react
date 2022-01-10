import Login from './pages/accounts/Login';
import Profile from './pages/accounts/Profile';
import ReviewList from 'pages/reviews/ReviewList';
import { Navigate, Route, Routes } from 'react-router-dom';
import TopNav from './pages/components/TopNav';
import Components from 'pages/examples/Components';

import './App.css';
import PageBlog from 'pages/blog/PageBlog';

function App() {
  return (
    <div className="app">
      <TopNav />
      <Routes>
        <Route path="/" element={<Navigate to="/reviews/" />} />
        <Route path="/accounts/login/" element={<Login />} />
        <Route path="/accounts/profile/" element={<Profile />} />
        <Route path="/reviews/" element={<ReviewList />} />
        <Route path="examples.components" element={<Components />} />
        <Route path="/blog/" element={<PageBlog />} />
      </Routes>
    </div>
  );
}

export default App;
