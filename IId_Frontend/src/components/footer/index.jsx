import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import mail from '../../assets/footer/mail.png';
import linkedin from '../../assets/footer/linkedin.png';
import facebook from '../../assets/footer/facebook.png';
import insta from '../../assets/footer/insta.jpg';
import twitter from '../../assets/footer/twitter.png';
import browser from '../../assets/footer/browser.png';
import youtube from '../../assets/footer/youtube.png';
const index = () => {
    return (
        <div className="footer-container flex flex-cols ss:flex-row flex-wrap items-center bg-White-100 justify-between backdrop-blur-xl dark:bg-[#000000] p-2 py-3 sticky">

            <div className=" footer-content grid grid-flow-row ">

                <div className="ml-10 text-gray-700">© 2023 Kartexa</div>
            </div>
            <div className="  footer-content grid grid-flow-cols grid-cols-1  md:grid-cols-7  lg:grid-cols-7">
                
                    <a href="mailto: support@kartexa.com">
                        <img src={mail} alt="my-gif" className="w-[30px] h-[30px]  rounded-[30px] mr-3 border-White-100 border border-2" /></a>
                    <a href="https://in.linkedin.com/company/kartexa">
                        <img src={linkedin} alt="my-gif" className="w-[30px] h-[30px]  rounded-[30px] mr-3 border-White-100 border border-2" /></a>
                    <a href="https://www.facebook.com/kartexaprime/">
                        <img src={facebook} alt="my-gif" className="w-[30px] h-[30px]  rounded-[30px] mr-3 border-White-100 border border-2" /></a>
                    <a href="https://www.instagram.com/mykartexa/?hl=en">
                        <img src={insta} alt="my-gif" className="w-[30px] h-[30px]  rounded-[30px] mr-3 border-White-100 border border-2" /></a>
                    <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Fmykartexa">
                        <img src={twitter} alt="my-gif" className="w-[30px] h-[30px] rounded-[30px] mr-3 border-White-100 border border-2" /></a>
                    <a href="https://career.kartexa.com/">
                        <img src={browser} alt="my-gif" className="w-[30px] h-[30px] rounded-[30px] mr-3 border-White-100 border border-2" /></a>
                    <a href="https://www.youtube.com/channel/UC2MBNhzFf_zpc6k1gfvP6cw/search">
                        <img src={youtube} alt="my-gif" className="w-[30px] h-[30px] rounded-[30px] mr-3 border-White-100 border border-2" /></a>
                
            </div>
            <div className="grid grid-flow-row  footer-content">

                <div className="mr-10 text-xl text-gray-700"><b><Link to="/TermsPolicies">Terms and Policies</Link></b></div>

            </div>
        </div>
    )
}
export default index;
