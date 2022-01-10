import { Navigate, Routes, Route } from 'react-router-dom';
import Profile from 'pages/accounts/Profile';
import ReviewList from 'pages/accounts/reviews/ReviewList';
import Login from 'pages/accounts/Login';
import TopNav from 'components/TopNav';
import Components from 'pages/examples/Components';
import './App.css';

function App() {
  return (
    <div className="app">
      <TopNav />
      <Routes>
        <Route path="/" element={<Navigate to="/reviews/" />} />
        <Route path="/accounts/login/" element={<Login />} />
        <Route path="/accounts/profile/" element={<Profile />} />
        <Route path="/reviews/" element={<ReviewList />} />
        <Route path="/examples/components/" element={<Components />} />
      </Routes>
    </div>
  );
}

export default App;
