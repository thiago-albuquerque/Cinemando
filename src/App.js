
import './App.css';

import Rotas from './rotas';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <div className="App">
      <Rotas/>
      <ToastContainer autoClose={2000}/>
    </div>
  );
}
