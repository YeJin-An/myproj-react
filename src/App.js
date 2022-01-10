import { Navigate, Routes, Route } from 'react-router-dom';
import Profile from 'pages/accounts/Profile';
import ReviewList from 'pages/accounts/reviews/ReviewList';
import Login from 'pages/accounts/Login';
import TopNav from 'components/TopNav';
import ReviewForm from 'pages/reviews/ReviewForm';
import Components from 'pages/examples/Components';
import PageBlog from 'pages/blog/PageBlog';
import './App.css';

function App() {
  return (
    <div className="app">
      <TopNav />
      <Routes>
        <Route path="/" element={<Navigate to="/blog/" />} />
        <Route path="/accounts/login/" element={<Login />} />
        <Route path="/accounts/profile/" element={<Profile />} />
        <Route path="/blog/" element={<PageBlog />} />
        <Route path="/reviews/" element={<ReviewList />} />
        <Route path="/reviews/new/" element={<ReviewForm />} />
        <Route path="/reviews/:reviewId/edit/" element={<ReviewForm />} />
        <Route path="/examples/components/" element={<Components />} />
      </Routes>
    </div>
  );
}

export default App;
