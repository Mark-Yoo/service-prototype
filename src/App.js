import './App.css';
import { Redirect, Route } from 'react-router-dom';
import CommonHeader from './components/Header';
import ServicePage from './pages/ServicePage';
import SignUp from './pages/SignUp';
import { useSelector } from 'react-redux';
import SignIn from './pages/SignIn';

function App() {
  const { token } = useSelector((state) => state.postInfo);

  return (
    <>
      <CommonHeader />
      <Route path="/" component={ServicePage} exact={true} />
      <Route path="/login" component={SignIn}>
        {token && <Redirect to="/" />}
      </Route>
      <Route path="/sign-up" component={SignUp}>
        {token && <Redirect to="/" />}
      </Route>
    </>
  );
}

export default App;
