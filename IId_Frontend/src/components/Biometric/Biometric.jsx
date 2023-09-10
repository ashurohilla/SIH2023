const Biometric = () => {
    return (
        <div className="container">
            <div className="text-White-100 text-4xl text-center ml-[13%] p-5 font-bold">Biometric Data Capture</div>
            <div className="flex w-full max-w-screen-xl border-2 mt-[10%] shifted items-center ml-[12%] rounded-[20px]" >

                {/* Left column */}

                <div className="w-2/4 h-[250px] rounded-[20px] bg-White-100 p-5  m-4 flex flex-col items-center justify-center space-y-10">
                    <p className="text-xl md:text-4xl font-bold text-darkBlue-500" > Upload your Photograph </p>
                    <div >
                        <input type="file" />

                    </div>
                    <button className="text-lightBlue-100 pt-2 pb-2 pl-5 pr-5 bg-lightBlue-500 border-2 border-lightBlue-500 text-White-100 rounded-[10px] font-medium ml-4 items-center" >
                        Upload!
                    </button>
                </div>
                {/* Middle column */}
                <div className="w-2/4 h-[250px] rounded-[20px] bg-White-100 p-5  m-4 flex flex-col items-center justify-center space-y-10">
                    <p className="text-xl md:text-4xl font-bold text-darkBlue-500" > Upload your Signature </p>
                    <div >
                        <input type="file" />

                    </div>
                    <button className="text-lightBlue-100 pt-2 pb-2 pl-5 pr-5 bg-lightBlue-500 border-2 border-lightBlue-500 text-White-100 rounded-[10px] font-medium ml-4 items-center" >
                        Upload!
                    </button>
                </div>
                {/* Center column */}
                <div className="w-2/4 h-[250px] rounded-[20px] bg-White-100 p-5  m-4 flex flex-col items-center justify-center space-y-10">
                    <p className="text-xl md:text-4xl font-bold text-darkBlue-500" > Upload your Fingerprint </p>
                    <div >
                        <input type="file" />

                    </div>
                    <button className="text-lightBlue-100 pt-2 pb-2 pl-5 pr-5 bg-lightBlue-500 border-2 border-lightBlue-500 text-White-100 rounded-[10px] font-medium ml-4 items-center" >
                        Upload!
                    </button>
                </div>
                
                
            </div>
            <div className="grid justify-center items-center ml-[13%]"><button className="text-lightBlue-500  pt-2 pb-2 pl-5 pr-5 bg-White-100 border-2 border-lightBlue-500 rounded-[10px] font-medium items-center" >
                        Submit
                    </button></div>
        </div>
    )
}
export default Biometric;
