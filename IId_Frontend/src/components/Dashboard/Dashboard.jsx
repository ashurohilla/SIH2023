import  { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../navbar/index";
import DashApi from "../../dashboardapis/api";

const Dashboard = () => {
  const [medicines, setMedicines] = useState([]);
  const [selectedMedicines, setSelectedMedicines] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");

  const [patient_name, setPatientName] = useState("");
  const [patient, setPatient] = useState("gulabo");

  const [date_prescribed, setDate] = useState("");

  const [originalMedicines, setOriginalMedicines] = useState([]);

  useEffect(() => {
    const fetchMedicines = async () => {
      try {
        const response = await DashApi.Medicines();
        setMedicines(response.data);
        setOriginalMedicines(response.data);
      } catch (err) {
        console.error(err);
        if (err.response) {
          setError(err.response.data.msg);
        } else {
          setError("There has been an error.");
        }
      }
    };

    fetchMedicines();
  }, []);

  useEffect(() => {
    // Filter medicines when searchTerm changes
    const filteredMedicines = originalMedicines.filter((medicine) =>
      medicine.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setMedicines(filteredMedicines);
  }, [searchTerm, originalMedicines]);

  const handleAddMedicine = (medicine) => {
    setSelectedMedicines([...selectedMedicines, medicine]);
  };

  const handleSubmit = () => {
    const formData = {
      patient_name,
      date_prescribed,
      patient,
      medicines: selectedMedicines.map((medicine) => medicine.id),
    };
    console.log(formData);

    axios
      .post('YOUR_API_ENDPOINT', formData)
      .then((response) => {
        console.log('Medicines submitted successfully!', response.data);
        // You can reset the form fields and selected medicines here if needed.
      })
      .catch((error) => {
        console.error('Error submitting medicines:', error);
        // Handle the error and show an error message if necessary.
      });
  };

  const handleRemoveMedicine = (id) => {
    const updatedSelectedMedicines = selectedMedicines.filter((medicine) => medicine.id !== id);
    setSelectedMedicines(updatedSelectedMedicines);
  };

  return (
    <div className="container mx-auto p-4 ">
      <Navbar />
      <h1 className="text-2xl font-semibold mt-20 mb-4">give Medicines</h1>
      <div className="mb-4">
        <label htmlFor="patientName" className="block font-medium">
          Patient Name
        </label>
        <input
          type="text"
          id="patientName"
          className="w-full border rounded py-2 px-3"
          value={patient_name}
          onChange={(e) => setPatientName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="date" className="block font-medium">
          Date
        </label>
        <input
          type="date"
          id="date"
          className="w-full border rounded py-2 px-3"
          value={date_prescribed}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="search" className="block font-medium">
          Search Medicines
        </label>
        <input
          type="text"
          id="search"
          className="w-full border rounded py-2 px-3"
          placeholder="Search for medicines"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {/* Display search results here */}
      <div className="mb-4">
        <h2 className="text-lg font-medium mb-2">Search Results</h2>
        <ul className="flex mx-4" >
          {medicines.map((medicine) => (
            <li  className="mt-4 mx-3  px-4 py-2 bg-blue-500 w-[200px] text-white rounded" key={medicine.id}>
              {medicine.name}
              <button
                className="ml-2  flex float-right px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                onClick={() => handleAddMedicine(medicine)}
              >
                Add
              </button>
            </li>
          ))}
        </ul>
      </div>
      {/* Add selected medicines here */}
      <div className="mb-4">
  <h2 className="text-lg font-medium mb-2">Selected Medicines</h2>
  <ul className="flex flex-wrap">
    {selectedMedicines.map((medicine) => (
      <li className="mt-4 mx-3 px-4 py-2 bg-blue-500 w-[200px] text-white rounded" key={medicine.id}>
        {medicine.name}
        <button
          className="ml-2  flex float-right px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={() => handleRemoveMedicine(medicine.id)}
        >
          Remove
        </button>
      </li>
    ))}
  </ul>
</div>
<button
  className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
  onClick={handleSubmit}
>
  Submit
</button>
{error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default Dashboard;
