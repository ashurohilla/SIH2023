import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import PrivateRoutes from "./components/utils/PrivateRoutes";
import Loginpage from "./components/authentication/Loginpage";
import Dashboard from "./components/Dashboard/Dashboard";
import PopupPage from "./components/Dashboard/Popup";
import Register from "./components/authentication/Register";
import NotFound from "./components/NotFound";
import Profile from "./components/profile/Profile";
import CreateProfile from "./components/profile/Profilepage";
import Profiledetail from "./components/profile/SeeProfile";
import TermsPolicies from "./components/footer/TermsPolicies";

import Biometric from "./components/Biometric/Biometric"
import SearchingMatching from "./components/Biometric/SearchingMatching"
import SecuritySetting from "./components/Setting/SecuritySetting"
function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" exact />
          <Route element={<Register />} path="/register" exact />
          <Route path="/login" element={<Loginpage />} exact />
          <Route element={<PrivateRoutes />}>

                <Route element={<Dashboard />} path="/dashboard" />


                <Route element={<TermsPolicies />} path="/TermsPolicies" exact />
                <Route element={<PopupPage />} path="/popuppage" exact />

                <Route path="/Profile" element={<Profile />}>
                  <Route index element={<Profiledetail />} />
                  <Route path="profilepage" element={<Profiledetail />} />
                  <Route path="createprofile" element={<CreateProfile />}></Route>
                </Route>

                <Route element={<Biometric/>} path="/Biometric" exact />
                <Route element={<SearchingMatching/>} path="/SearchingMatching" exact />
                <Route element={<SecuritySetting/>} path="/SecuritySetting" exact />



            </Route>
            <Route path="*" element={<NotFound />} />
        
          
           </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
