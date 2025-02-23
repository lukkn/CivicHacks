import './App.css';
import { Outlet, Route, Routes } from "react-router-dom";
import { Main, Login, Signup, Home, MyProjects, BrowseProjects } from './pages';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route element={<Layout />}>
            <Route path="/home" element = {<Home />} />
            <Route path="/my_projects" element = {<MyProjects />} />
            <Route path="/browse_projects" element = {<BrowseProjects />} />
          </Route>
        </Routes>
    </div>
  );
}

function Layout() {
  const navigate = useNavigate();
  const [cookies, setCookies, removeCookie] = useCookies([]);
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const verifyCookie = async () => {
      const { data } = await axios.post(
        process.env.REACT_APP_SERVER_URL,
        {},
        { withCredentials: true }
      );
      const { status, userinfo } = data;
      console.log(status)
      setUserInfo(userinfo);
      return status
        ? console.log(userinfo)
        : (removeCookie("token"), navigate("/login"));
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  const Logout = () => {
    removeCookie("token");
    navigate("/login");
  };

  return (
    <div className="layout">
      <Navbar logout={Logout}/>
      <div className="layout-content">
        <Sidebar />
        <main>
          <Outlet context={[userInfo, setUserInfo]} />
        </main>
      </div>
    </div>
  )
}

export default App;
