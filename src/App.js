import Login from './pages/accounts/Login';
import Profile from './pages/accounts/Profile';
import ReviewList from 'pages/reviews/ReviewList';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/accounts/login" element={<Login />} />
        <Route path="/accounts.profile" element={<Profile />} />
        <Route path="/reviews" element={<ReviewList />} />
      </Routes>
    </div>
  );
}

export default App;
