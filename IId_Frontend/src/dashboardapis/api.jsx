import axios from "./index";


class DashApi {
 static employeedata = () => {
    const token = localStorage.getItem("token");
    return axios.get(`${base2}/Employes`,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  static newsdata = (query) => {
    const token = localStorage.getItem("token");
    return axios.get(`${base2}/Newssearch?q=${query}`,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  static employedata = (query) => {
    const token = localStorage.getItem("token");
    return axios.get(`${base2}/searchemploye?q=${query}`,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };
  static latestnews = () => {
    const token = localStorage.getItem("token");
    return axios.get(`${base2}/latestNews`,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  static Medicines = () => {
    const token = localStorage.getItem("token");
    return axios.get(`${base2}/medicines`,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };



}

let base = "dashboard";
let base2 ="users"

export default DashApi;