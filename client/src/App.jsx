import { Routes, Route } from "react-router-dom";
import './App.css';
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import Layout from "./Layout";
import RegisterPage from "./pages/RegisterPage";
import axios from "axios";
import { UserContextProvider } from "./UserContext";
import { useEffect } from "react";
import AccountPage from "./pages/ProfilePage";
import PlacesPage from "./pages/PlacesPage";
import PlacesFormPage from "./pages/PlacesFormPage";
import ProfilePage from "./pages/ProfilePage";
axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;
function App() {

  // useEffect(() => {
  //   if (!user) {
  //     axios.get('/profile')
  //   }
  // }, [])
  return (
    <UserContextProvider>

      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/account" element={<ProfilePage />} />
          <Route path="/account/places" element={<AccountPage />} />
          <Route path="/account/places/new" element={<PlacesFormPage />} />



        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
