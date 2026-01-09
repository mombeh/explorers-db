// import React from "react"
const Footer = () => {
    return(
        <footer>
            <div className="footer"> 
                <div>
                    <h3>Company</h3>
                    <p>About</p>
                    <p>Careers</p>
                </div>
                <div>
                    <h3>Need Help</h3>
                    <p>Visit Help Center</p>
                    <p>Share Feedback</p>
                </div>
                <div>
                    <h3>View Website in</h3>
                    <button className="arrors">
                        <img src="/images/check (1).png" alt=""/>
                        <h2 className="english">English</h2>
                        <img src="/images/down.png" alt="" />
                    </button>
                </div>
                <div>
                    <h3>Social Media</h3>
                    <div className="media">
                        <img src="/images/instagram (1).png" alt="" />
                        <img src="/images/social-media.png" alt="" />
                    </div>
                </div>
                <div>
                    <h3>Download Our App</h3>
                    <div>
                    <img src="/images/store.png" alt="" className="get-it"/>
                    </div>
                    <div>
                    <img src="/images/google.png" alt="" className="google"/>
                    </div>
                </div>
            </div>
            <hr />
            <div className="policies">
               <ul>
                <li>2023 STREAM X. All Rights Reserved.</li>
                <li>Terms Of Use</li>
                <li>Privacy Policy</li>
                <li>FAQ</li>
               </ul>
               <img src="/images/Group.png" alt="" className="ex"/>
            </div>
        </footer>
    )
}
export default Footer