import Navbar from '../navbar/index';
import Footer from '../footer/index';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import DashApi from '../../dashboardapis/api';
import { useState, useEffect } from "react";

const BrowseALL = () => {
    const [Employedata, setEmployedata] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Pagination variables
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8; // Number of items to display per page

    useEffect(() => {
        setLoading(true);

        const Employeedata = async (event) => {
          try {
            const response = await DashApi.employeedata();
            console.log(response);
    
            if (response.data && response.status === true) {
              setError(response.data.msg);
            } else {
             
                const sortedData = response.data.sort((a, b) => a.id - b.id);
                setEmployedata(sortedData);
                return setLoading(false);
            }

    
            setLoading(false);
          } catch (err) {
            console.error(err);
    
            setLoading(false);
    
            if (err.response) {
              setError(err.response.data.msg);
            } else {
              setError('There has been an error.');
            }
          }
           

            setLoading(false);
        };

        Employeedata();
    }, []);

    // Calculate the total number of pages
    const totalPages = Math.ceil(Employedata.length / itemsPerPage);

    // Function to handle page change
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    // Calculate the range of items to display on the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const itemsToDisplay = Employedata.slice(startIndex, endIndex);

    return (
        <div className='page-container' >
            <Navbar />
            <div className='content-container'>
                <div className="pt-8 m-5 rounded-[10px] mt-20 overflow-auto rounded-lg shadow hidden md:block ">
                    {/* Your Fetch Latest button */}
                    {loading && <p>Loading...</p>}
                    {error && <p>Error: {error}</p>}
                    <div className="pt-5 relative overflow-x-auto">
                        {itemsToDisplay.length > 0 ? (
            <table className='justify-center w-full m-2 bg-darkBlue-500'>
           <thead className="bg-gray-300 text-darkBlue-500">
      <tr>
        <th className='whitespace-no-wrap text-sm font-semibold tracking-wide text-left  p-4 '>ID</th>
        <th className='whitespace-no-wrap text-sm font-semibold tracking-wide text-left  p-4'>Sector</th>
        <th className='whitespace-no-wrap text-sm font-semibold tracking-wide text-left  p-4'>Company</th>
        <th className='whitespace-no-wrap text-sm font-semibold tracking-wide text-left  p-4'>Address</th>
        <th className='whitespace-no-wrap text-sm font-semibold tracking-wide text-left p-4'>Employee Type</th>
        <th className='whitespace-no-wrap text-sm font-semibold tracking-wide text-left  p-4'>Email</th>
        <th className='whitespace-no-wrap text-sm font-semibold tracking-wide text-left  p-4'>Phone_no</th>
        <th className='whitespace-no-wrap text-sm font-semibold tracking-wide text-left p-4'>Country</th>
        <th className='whitespace-no-wrap text-sm font-semibold tracking-wide text-left p-4'>City</th>
        <th className='whitespace-no-wrap text-sm font-semibold tracking-wide text-left p-4'>State</th>
        <th className='whitespace-no-wrap text-sm font-semibold tracking-wide text-left p-4'>Pincode</th>
        <th className='whitespace-no-wrap text-sm font-semibold tracking-wide text-left'>Complete Address</th>
      </tr>
    </thead>
                               
       <tbody className='divide-y divide-red-100 ' >
         {itemsToDisplay.map((data, index) => (
          <tr key={index} className='text-White-100' >
          <td  className='whitespace-nowrap text-left p-4 text-sm '>{data.id}</td>  
          <td  className='whitespace-nowrap text-left p-4 text-sm '>{data.sector}</td>
          <td  className='whitespace-nowrap text-left p-4 text-sm '>{data.company}</td>
          <td  className='whitespace-nowrap text-left p-4 text-sm '>{data.address}</td>
          <td  className='whitespace-nowrap text-left p-4 text-sm '>{data.employetype}</td>
          <td  className='whitespace-nowrap text-left p-4 text-sm '>{data.email}</td>
          <td  className='whitespace-nowrap text-left p-4 text-sm '>{data.phone_no}</td>
          <td  className='whitespace-nowrap text-left p-4 text-sm '>{data.country}</td>
          <td  className='whitespace-nowrap text-left p-4 text-sm '>{data.city}</td>
          <td  className='whitespace-nowrap text-left p-4 text-sm '>{data.state}</td>
          <td  className='whitespace-nowrap p-4 text-sm '>{data.pincode}</td>
          <td  className='whitespace-nowrap p-4 text-sm '>{data.complete_address}</td>
           </tr>
        ))}
      </tbody>
      </table>
                        ) : (
                            <p>No data found</p>
                        )}
                    </div>

                    {/* Pagination controls */}
                    <div className="flex justify-center p-5">
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index}
                                onClick={() => handlePageChange(index + 1)}
                                className={`${
                                    currentPage === index + 1
                                        ? 'bg-lightBlue-500 text-White-100'
                                        : 'bg-lightBlue-100 text-White-100'
                                } pt-2 pb-2 pl-5 pr-5 ml-2 border-2 border-lightBlue-500 rounded-[10px] font-medium`}
                            >
                                {index + 1}/{totalPages}
                            </button>
                        ))}
                    </div>
                </div>

            </div>
            <Footer />

        </div>
    );
};

export default BrowseALL;
