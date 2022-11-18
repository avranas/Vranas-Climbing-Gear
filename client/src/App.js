import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import DetailedHeader from './components/Headers/DetailedHeader';
import SimpleHeader from'./components/Headers/SimpleHeader';
import HomePage from './routes/HomePage/HomePage';
import RegisterPage from './routes/FormPage/RegisterPage';
import LoginPage from './routes/FormPage/LoginPage';
import ProductListPage from './routes/ProductListPage/ProductListPage';
import ProfilePage from './routes/ProfilePage';
import Notification from './components/Notification/Notification';
import { useSelector } from 'react-redux';
import { selectNotifications } from './slices/notificationSlice';
import {
  Routes,
  Route,
  useSearchParams
} from "react-router-dom";
import Logout from './routes/Logout';
import ProductPage from './routes/ProductPage/ProductPage';
import Cart from './routes/Cart/Cart';

function App() {

  const [searchParams] = useSearchParams({ search: "" });
  const notifications = useSelector(selectNotifications);
  
  return (
    <div className="App">
      <Routes>
        <Route
          path='/'
          element={<DetailedHeader />}
        />
        <Route
          path='/product'
          element={<DetailedHeader />}
        />
        <Route
          path='/cart'
          element={<DetailedHeader />}
        />
        <Route
          path='/profile'
          element={<DetailedHeader />}
        />
        <Route
          path='/products'
          element={<DetailedHeader />}
        />
        <Route
          path='/product/:id'
          element={<DetailedHeader />}
        />
        <Route
          path="/added-to-cart"
          element={<DetailedHeader/>}
        />
        <Route
          path="/cart"
          element={<DetailedHeader/>}
        />
        <Route
          path='/register'
          element={<SimpleHeader />}
        />
        <Route
          path='/login'
          element={<SimpleHeader />}
        />
        <Route
          path='/logout'
          element={<SimpleHeader />}
        />
      </Routes>

      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/register"
          element={<RegisterPage />}
        />
        <Route
          path="/login"
          element={<LoginPage />}
        />
        <Route
          path="/logout"
          element={<Logout />}
        />
        <Route
          path="/profile"
          element={<ProfilePage />}
        />
        <Route
          path="/products"
          element={<ProductListPage category={searchParams.get("category")}/>}
        />
        <Route
          path="/product/:id"
          element={<ProductPage/>}
        />
        <Route
          path="/cart"
          element={<Cart/>}
        />
      </Routes>
      {
        notifications.map((i, key) => <Notification message={i.message} id={i.id} key={key}/>)
      }
      <footer>
        <p>
          Made with ❤️ by <a href="https://github.com/avranas">Alex Vranas</a>
        </p>
      </footer>
    </div>
  );
}

export default App;

//TODO: Time to checkout and place orders!
