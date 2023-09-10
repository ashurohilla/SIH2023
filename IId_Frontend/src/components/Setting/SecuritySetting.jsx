import React from "react";
const SecuritySetting = () => {
    
    return (
        <div className="container">
            <div className="text-White-100 text-4xl text-center ml-[13%] p-5 font-bold">Security and Setting</div>
            <div className="flex w-full max-w-screen-xl border-2 mt-[10%] shifted items-center ml-[12%] rounded-[20px]" >

                <table className='justify-center w-full bg-darkBlue-500 mx-10 my-5 leading-8 text-White-100'>
                    <tr className="font-bold text-xl">
                        User Roles:
                    </tr>
                    <tr classname="text-base">
                        <label>
                            <input
                                type="radio"
                                value="User"
                            // checked={}
                            // onChange={}
                            />
                            Admin
                        </label>
                    </tr>
                    <tr classname="text-base">
                        <label>
                            <input
                                type="radio"
                                value="User"
                            // checked={}
                            // onChange={}
                            />
                            Sub Admin
                        </label>
                    </tr>
                    <tr classname="text-base">
                        <label>
                            <input
                                type="radio"
                                value="User"
                            // checked={selectedOption === 'option1'}
                            // onChange={handleOptionChange}
                            />
                            User
                        </label>
                    </tr>

                    <tr>
                        <td>IP Whitelisting
                            <input
                                type="text"
                                // value={textInputValue}
                                // onChange={handleInputChange}
                                className="w-[500px] ml-5 text-darkBlue-500"
                            /></td>
                        <td><button className="text-lightBlue-500 w-[160px]  pt-2 pb-2 pl-5 pr-5 bg-White-100 border-2 border-lightBlue-500 rounded-[10px] font-medium items-center" >
                            Add
                        </button></td>
                    </tr>
                    <tr>
                        <td>IP Address Configuration
                            <input
                                type="text"
                                // value={textInputValue}
                                // onChange={handleInputChange}
                                className="w-[500px] ml-5 text-darkBlue-500"
                            /></td>
                        <td><button className="text-lightBlue-500 w-[160px] pt-2 pb-2 pl-5 pr-5 bg-White-100 border-2 border-lightBlue-500 rounded-[10px] font-medium items-center" >
                            Change
                        </button></td>
                    </tr>
                    <tr classname="text-base">
                        <label>
                            <input
                                type="radio"
                                value="profile"
                            // checked={}
                            // onChange={}
                            />
                            Allow Profile Visibility
                        </label>
                    </tr>
                    <tr>
                        <label>
                            <input
                                type="radio"
                                value="enable_b"
                            // checked={selectedOption === 'option1'}
                            // onChange={handleOptionChange}
                            />
                            Enable Biometric Authentication
                        </label>
                    </tr>
                    <tr>
                        <label>
                            <input
                                type="radio"
                                value="enable_d"
                            // checked={selectedOption === 'option1'}
                            // onChange={handleOptionChange}
                            />
                            Enable Device Tracking
                        </label>
                    </tr>
                    <tr>
                        <label>
                            <input
                                type="radio"
                                value="email_notification"
                            // checked={selectedOption === 'option1'}
                            // onChange={handleOptionChange}
                            />
                            Allow Email Notification
                        </label>
                    </tr>
                    <tr className="font-bold text-xl">
                        Languages Preferences:
                    </tr>
                    <tr classname="text-base">
                        <label>
                            <input
                                type="checkbox"
                            // checked={isChecked}
                            // onChange={handleCheckboxChange}
                            />
                            English
                        </label>
                    </tr>
                    <tr classname="text-base">
                        <label>
                            <input
                                type="checkbox"
                            // checked={isChecked}
                            // onChange={handleCheckboxChange}
                            />
                            Hindi
                        </label>
                    </tr>
                    <tr><td>Current Timestamp :
                    <input
                                type="text"
                                // value={textInputValue}
                                // onChange={handleInputChange}
                                className="w-[500px] ml-5 text-darkBlue-500"
                            />
                            </td>
                            <td><button className="text-lightBlue-500 w-[160px] pt-2 pb-2 pl-5 pr-5 bg-White-100 border-2 border-lightBlue-500 rounded-[10px] font-medium items-center" >
                            Reset
                        </button></td>
                    </tr>
                    <tr>
                        <label>
                            <input
                                type="radio"
                                value="configure"
                            // checked={selectedOption === 'option1'}
                            // onChange={handleOptionChange}
                            />
                            Configure Log retention
                        </label>
                    </tr>
                </table>


            </div>
            <div className="grid justify-center ml-[13%]"><button className=" text-lightBlue-500  pt-2 pb-2 pl-5 pr-5 bg-White-100 border-2 border-lightBlue-500 rounded-[10px] font-medium items-center w-[160px]" >
                Update
            </button></div>
            <div className="grid justify-center ml-[13%]"><button className=" text-lightBlue-500  pt-2 pb-2 pl-5 pr-5 bg-White-100 border-2 border-lightBlue-500 mt-5 rounded-[10px] font-medium items-center w-[160px]" >
                Logout
            </button></div>
            <div className="grid justify-center ml-[13%]"><button className=" text-lightBlue-500  pt-2 pb-2 pl-5 pr-5 bg-White-100 border-2 border-lightBlue-500 mt-5 rounded-[10px] font-medium items-center w-[160px]" >
                Delete Account
            </button></div>
        </div>
    )
}
export default SecuritySetting;
