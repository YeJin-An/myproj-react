import { Routes, Route } from 'react-router-dom';
import Profile from 'pages/accounts/Profile';
import ReviewList from 'pages/accounts/reviews/ReviewList';
import Login from 'pages/accounts/Login';
import TopNav from 'components/TopNav';

function App() {
  return (
    <div>
      <TopNav />
      <Routes>
        <Route path="/accounts/login/" element={<Login />} />
        <Route path="/accounts/profile/" element={<Profile />} />
        <Route path="/reviews/" element={<ReviewList />} />
      </Routes>
    </div>
  );
}

export default App;
