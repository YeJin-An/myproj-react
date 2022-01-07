import { Link } from 'react-router-dom';

function TopNav() {
  return (
    <>
      <ul>
        <li>
          <Link to="/accounts/Login">로그인</Link>
        </li>
        <li>
          <Link to="/accounts/Profile">프로필</Link>
        </li>
        <li>
          <Link to="/reviews/">리뷰</Link>
        </li>
      </ul>
    </>
  );
}

export default TopNav;
