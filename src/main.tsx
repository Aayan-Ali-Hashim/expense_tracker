import ReactDOM from 'react-dom/client';

import { RouterProvider } from 'react-router-dom';
import router from './routes.tsx';
import MainPage from './pages/MainPage/MainPage.tsx';
import Signup from './pages/SignupPage/Signup.tsx';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <RouterProvider router={router}/>
);