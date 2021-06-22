import './App.css';
import { Redirect, Route } from 'react-router-dom';
import CommonHeader from './components/Header/index';
import ServicePage from './pages/Servicepage/index';
import SignUp from './pages/Signup/index';
import { useSelector } from 'react-redux';
import SignIn from './pages/Signin/index';
import Mypage from './pages/Mypage/index';
import MypageDetail from './pages/MypageDetail/index';

function App() {
  const { token } = useSelector((state) => state.postInfo);

  return (
    <>
      <CommonHeader />
      <Route path="/" component={ServicePage} exact={true} />
      <Route path="/mypage/order" component={Mypage} exact={true}>
        {!token && <Redirect to="/login" />}
      </Route>
      <Route path="/mypage/order/:id" component={MypageDetail} />
      <Route path="/login" component={SignIn}>
        {token && <Redirect to="/" />}
      </Route>
      <Route path="/sign-up" component={SignUp}>
        {token && <Redirect to="/" />}
      </Route>
      <Route path="/logout" component={ServicePage} />
      <Route path="/purchased">{!token && <Redirect to="/login" />}</Route>
    </>
  );
}

export default App;
