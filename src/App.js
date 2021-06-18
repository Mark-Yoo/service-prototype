import './App.css';
import { Route } from 'react-router-dom';
import CommonHeader from './components/Header';
import ServicePage from './pages/ServicePage';
import SignUp from './pages/SignUp';

function App() {
  return (
    <>
      <CommonHeader />
      <Route path="/" component={ServicePage} exact={true} />
      <Route path="/login" component={ServicePage} />
      <Route path="/sign-up" component={SignUp} />
    </>
  );
}

export default App;
