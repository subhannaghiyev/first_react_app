import React from "react";
import './index.css';

const Header = () => {
    return(
        <>
        <div className="navbar">
            <h1 className="title">SB UI Kit Pro</h1>
        <nav>
            <ul className="list">
                <li className="into-list">Home</li>
                <li className="into-list">Landing</li>
                <li className="into-list">Pages</li>
                <li className="into-list">Documentation</li>
                <button className="">Buy Now</button>
            </ul>
        </nav>
        </div>
    <div className="first">
        <div className="image">
            <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT5THd_Jv3-__ZmLqz3iLIYTsgbcAPa7it10fjsY8Jzy7hkclLO" alt="" />
        </div>
        <div className="text">
        <h2>Welcome to my portfolio!</h2>
        <p>I am a graphic artist, illustrator, and UI designer specializing in modern, creative design based in Wildemount, TX</p>
        </div>
    </div>
    </>
    )
}

export default Header;
