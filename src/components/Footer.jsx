import Image from "next/image";
import React from "react";
import InsImg from "@/assets/facebook.png";
import FbImg from "@/assets/instagram.png";
import xImg from "@/assets/twitter.png";
import LogoImg from "@/assets/logo-xl.png";
const Footer = () => {
  return (
    <div>
      <footer className="footer footer-horizontal footer-center bg-[#244D3F] text-primary-content p-10">
        <aside>
          <Image src={LogoImg} alt="keen keeper" width={300} height={300} />
          <p className="">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
        </aside>
        <nav className="space-y-1">
          <h2 className="text-lg font-bold">Social Links</h2>
          <div className="grid grid-flow-col gap-3">
            <Image src={InsImg} alt="keen keeper" width={35} height={25} />
            <Image src={FbImg} alt="keen keeper" width={35} height={25} />
            <Image src={xImg} alt="keen keeper" width={35} height={25} />
          </div>
        </nav>
        <div className=" grid grid-cols-1 md:grid-cols-2  justify-between gap-5 md:gap-60 border-t pt-10 border-gray-600">
          <div>
            <p>© 2026 KeenKeeper. All rights reserved.</p>
          </div>
          <div className="flex gap-5">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookies</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
