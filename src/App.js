import { Navigate, Routes, Route } from 'react-router-dom';
import PageProfile from 'pages/accounts/PageProfile';
import ReviewList from 'pages/accounts/reviews/ReviewList';
import PageLogin from 'pages/accounts/PageLogin';
import TopNav from 'components/TopNav';
import ReviewForm from './components/ReviewForm';
import Components from 'pages/examples/Components';
import PageBlog from './pages/PageBlog';
import './App.css';
import Clock from 'pages/examples/Clock';
import CssModule from 'pages/examples/CssMoudle';
import CssInJs from 'pages/examples/CssinJs';
import ContextApiSample from 'pages/examples/ContextApiSample';
import ContextApiSample2 from 'pages/examples/ContextApiSample2';
import PageNewsIndex from 'pages/news/PageNewIndex';
import PageNewsArticleDetail from 'components/news/PageNewsArticleDetail';
import PageNewsArticleForm from 'pages/news/PageNewsArticleForm';

function App() {
  return (
    <div className="app">
      <TopNav />
      <Routes>
        <Route path="/" element={<Navigate to="/blog/" />} />
        <Route path="/accounts/login/" element={<PageLogin />} />
        <Route path="/accounts/profile/" element={<PageProfile />} />
        <Route path="/blog/" element={<PageBlog />} />
        <Route path="/reviews/" element={<ReviewList />} />
        <Route path="/reviews/new/" element={<ReviewForm />} />
        <Route path="/reviews/:reviewId/edit/" element={<ReviewForm />} />
        <Route path="/examples/components/" element={<Components />} />
        <Route path="/examples/clock/" element={<Clock />} />
        <Route path="/examples/css-module/" element={<CssModule />} />
        <Route path="/examples/cssinjs/" element={<CssInJs />} />
        <Route
          path="/examples/contextapisample2/"
          element={<ContextApiSample2 />}
        />
        <Route path="/news/" element={<PageNewsIndex />} />
        <Route path="/news/new/" element={<PageNewsArticleForm />} />
        <Route path="/news/:articleId/" element={<PageNewsArticleDetail />} />
        <Route
          path="/news/:articleId/edit/"
          element={<PageNewsArticleForm />}
        />
      </Routes>
    </div>
  );
}

export default App;
