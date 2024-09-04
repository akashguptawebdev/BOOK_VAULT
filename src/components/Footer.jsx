import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-base-100 mt-10">
      <div className=" h-auto px-5 py-8 text-center sm:flex justify-between ">
        <div className="mb-5">
          <h1 className="text-2xl font-bold text-white">BookVault</h1>
          <p className="text-sm  mt-2">
            Explore and connect through BookVault together.
          </p>
        </div>

        <div className="mb-5">
          <ul className="flex justify-center gap-5">
            <li className="w-8">
              <Link
                to="https://www.facebook.com/profile.php?id=100010296425247&mibextid=ZbWKwL"
                aria-label="Facebook"
              >
                <img src="/facebook_2504903.png" alt="Facebook icon" />
              </Link>
            </li>
            <li className="w-8">
              <Link to="https://www.instagram.com" aria-label="Instagram">
                <img src="/instagram_2111463.png" alt="Instagram icon" />
              </Link>
            </li>
            <li className="w-8">
              <Link
                to="https://www.linkedin.com/in/akash-gupta-766026309?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                aria-label="LinkedIn"
              >
                <img src="/twitter_3670151.png" alt="LinkedIn icon" />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-sm text-gray-600 text-center mb-5 ">
        <p>&copy; {new Date().getFullYear()} BookVault. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
