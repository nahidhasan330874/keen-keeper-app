import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-horizontal footer-center bg-primary text-primary-content p-10">
        <aside>
            <h2 className="text-5xl font-bold">KeenKeeper</h2>
          <p className="">
            Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
          </p>
        </aside>
        <nav>
          <h2 className="text-lg font-bold">Social Links</h2>
          <div className="grid grid-flow-col gap-4">
            
          </div>
        </nav>
         <div className="flex justify-between gap-60 border-t pt-10 border-gray-600">
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
