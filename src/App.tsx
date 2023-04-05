import './App.css';
import Navbar from './components/navigation/navbar';
import { useLocation } from "react-router-dom"
import Toastr from './components/toast';
import { routes } from 'shared/routes';
import { RouteComponent } from './components';

function App() {

  const { pathname } = useLocation();

  return (
    <div className='my-app'>
      {pathname != routes.login && <Navbar />}
      <Toastr />
      <RouteComponent />
    </div>
  );
}

export default App;
