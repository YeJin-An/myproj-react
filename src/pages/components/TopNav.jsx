import { Link } from 'react-router-dom';

function TopNav() {
  return (
    <div claaName="my-3">
      <ul className="app">
        <li>
          <MyLink to="/accounts/Login">로그인</MyLink>
        </li>
        <li>
          <MyLink to="/accounts/Profile">프로필</MyLink>
        </li>
        <li>
          <MyLink to="/reviews/">리뷰</MyLink>
        </li>
      </ul>
    </div>
  );
}
function MyLink({ to, children }) {
  return (
    <Link
      to={to}
      className="pb-1 text-gray-500 
      hover:text-red-500 
      hover:border-b-4 
      border red-500
      ;"
    >
      {children}
    </Link>
  );
}

export default TopNav;
