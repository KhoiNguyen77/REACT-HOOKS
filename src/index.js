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
import UseMemo from './pages/Hooks/UseCallBack/UseMemoDemo/UseMemo';
import UseRef from './pages/Hooks/UseRefDemo/UseRef';
import DemoHookRedux from './pages/Hooks/HookRedux/DemoHookRedux';
import { Provider } from 'react-redux';
import { store } from './Redux/configStore';
import UseNavigateDemo from './pages/Hooks/UseNavigateDemo';
import Profile from './pages/Hooks/Profile';
import ForgotPass from './pages/Hooks/ForgotPass';
import UseSearch from './pages/Hooks/UseSearchParamDemo/UseSearch';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
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
          <Route path='usememo' element={<UseMemo></UseMemo>}></Route>
          <Route path='useref' element={<UseRef></UseRef>}></Route>
          <Route path='hookredux' element={<DemoHookRedux></DemoHookRedux>}></Route>
          <Route path='usenavigate' element={<UseNavigateDemo></UseNavigateDemo>}></Route>
          <Route path='profile' element={<Profile></Profile>}></Route>
          <Route path='forgotpass' element={<ForgotPass></ForgotPass>}></Route>
          <Route path='usesearchparam' element={<UseSearch></UseSearch>}></Route>
          <Route path='detail'>
            <Route path=':id' element={<Detail></Detail>}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>

);

