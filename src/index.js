import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeTemplate from './template/HomeTemplate';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Contact from './pages/Contact';
import UseState from './pages/Hooks/UseState';
import UseEffect from './pages/Hooks/UseEffect';
import Detail from './pages/Detail';
import UseCallBack from './pages/Hooks/UseCallBack/UseCallBack';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='' element={<HomeTemplate></HomeTemplate>}>
        <Route index element={<Home></Home>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='register' element={<Register></Register>}></Route>
        <Route path='contact' element={<Contact></Contact>}></Route>
        <Route path='usestate' element={<UseState></UseState>}></Route>
        <Route path='useeffect' element={<UseEffect></UseEffect>}></Route>
        <Route path='usecallback' element={<UseCallBack></UseCallBack>}></Route>
        <Route path='detail'>
          <Route path=':id' element={<Detail></Detail>}></Route>
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

