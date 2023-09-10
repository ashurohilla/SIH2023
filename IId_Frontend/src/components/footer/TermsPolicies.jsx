import React from "react";
import Navbar from '../navbar/index'; // Update the import
import Footer from '../footer/index'; // Update the import
import TermsPolicy from '../../assets/TermsPolicies.png';
const TermsPolicies = () => {
    return (
        <div >
            <Navbar />
            <div className=" pt-8 bg-lightPrimary ">
                <div className="flex flex-cols ss:flex-row flex-wrap items-center justify-between p-2">
                    <div>
                        <div className="text-4xl text-blue-800 ml-10"><b>Terms and Policies</b></div>
                        <br></br>
                        <div className="text-lg text-blue-800 ml-10">So you think you are at the right place? If yes, every collaboration has its own terms of use. Here’s our terms and policies.</div>
                    </div>
                    <div>
                        <img src={TermsPolicy}></img>
                    </div>

                </div>
                <div className="grid grid-cols-1 leading-7 mx-10 pb-10 text-base p-5 gap-6">
                    <p>All missions accepted by Kartexa  (hereinafter, “The Company”) shall be governed by the present General Terms and Conditions. Unless The Company expressly accepts the Client’s conditions in writing, the present terms and conditions supersede all other terms and conditions in the event of a conflict.</p>

                    <p>Client shall pay The Company’s fees under the payment terms mentioned in the specific conditions. All fees are calculated according to the rate in effect at The Company, plus VAT or equivalent taxes.</p>

                    <p>If the Candidate introduced by The Company is not hired by the Client or if he rejects the employment (or collaboration) offered by the Client, and if the Candidate is subsequently employed by (or collaborates with) the Client within a period of 18 months following the date of the first introduction of the résumé of the Candidate to the Client, then the Client shall pay fees to The Company as stipulated in paragraph 2 above.</p>


                    <p>
                        If the Client introduces a Candidate selected for him by The Company to an other person or company, and if the Candidate is hired by (or collaborates with) said person or said company within a period of 18 months following the date of the first introduction of the résumé of the Candidate to the Client, then the Client shall pay the fees to The Company as stipulated in paragraph 2 above.


                    </p>
                    <p>
                       If, for a given mission, the Client decides to recruit (or to collaborate with) more than one of the Candidates introduced by The Company, instead of just the one contractually agreed upon, then the Client shall pay The Company fees for each of the Candidates thus hired as stipulated in paragraph 2 above.
                    </p>

                    <p>
                       The Client shall inform The Company of the hiring of any Candidate(s) in accordance with the present terms and conditions within 30 days and, specifically, of the terms and conditions of the employment contract agreed to by the Candidate(s) hired.

                    </p>
                    <p>The Company places an advertising service at the Client’s disposal and whose expenses shall be for the Client’s account. Cancellation of an advertisement will be effective if The Company receives written notice from the Client before the closing date indicated on the Passed for Press slip. The Client shall pay advertising expenses within 30 days from invoice date.
                    </p>

                    <p>The Candidate’s transportation and other expenses incurred while going to an interview with the Client are for the Client’s account.

                    </p>
                    <p>If the Client or the initial Candidate cancels the employment contract during the warranty period starting upon the signing of the working agreement, The Company will use its best efforts to find a replacement without any additional expenses for the Client (except for advertising expenses mutually agreed upon by the Company and the Client beforehand), under the express conditions that:
                        <br></br>
                        a) all sums due by the Client have been paid in accordance with the present general terms and conditions,
                        <br></br>
                        b) the Client has notified The Company in writing within seven days of termination that employment has been terminated,
                        <br></br>
                        c) the Client or one of its subsidiaries or an other company of the group has not hired the Candidate within a period of 12 months following the end of the contract.
                        <br></br>
                        d) the end of the contract is not a result of an economic lay-off or from a modification of the position (or of the function) exercised by the Candidate or from a restructuring by the Client.
                        <br></br>
                        e) the position is identical.
                        <br></br>
                        f) moreover, if the Candidate’s salary is higher than the former one, The Company will invoice the difference to the Client.<br></br>
                    </p>
                    <p>The Client shall be responsible for all medical examinations and for all steps necessary in obtaining work permits or authorisations for the Candidate. Furthermore, the Client shall ensure that he is in perfect accordance with all employment legislation in effect.
                    </p>

                    <p>The Company shall use its best efforts to ensure the aptitude of the Candidates introduced to the Client and to maintain a high quality of service and integrity, but it does not guarantee expressively or implicitly the aptitude of the Candidates introduced to the Client
                    </p>

                </div>

            </div>
            <Footer />
        </div>
    )
}

export default TermsPolicies;
