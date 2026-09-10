import Container from "./Container";
import footer_logo from "../assets/footer/footer_logo.png";

function Footer() {
  return (
    <footer className="bg-[#06091A] relative pt-53 pb-16">
      <Container>
        {/* Newsletter Box */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-330 h-85 bg-[url('/newsletter_bg2.png')] bg-cover bg-no-repeat flex flex-col items-center justify-center">
          <p className="font-primary font-bold text-[32px] text-[#131313] mb-4 text-center">
            Subscribe to our Newsletter
          </p>
          <p className="font-secondary font-medium text-[20px] text-[#131313]/70 mb-6 text-center">
            Get the latest updates and news right in your inbox!
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-100 h-14 rounded-xl bg-base-100 outline-0"
            />
            <button className="btn h-14 px-8 font-primary font-bold text-[16px] border-none text-black rounded-xl bg-linear-to-r from-pink-400 via-rose-300 to-amber-300 hover:opacity-90">
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer Logo */}
        <div className="flex flex-col items-center justify-center pt-14.5">
          <img src={footer_logo} alt="footer_logo" className="mb-16" />
        </div>

        {/* Footer Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8 pb-12">
          {/* About Us */}
          <div>
            <h3 className="font-primary font-bold text-white text-[20px] mb-4">
              About Us
            </h3>
            <p className="font-secondary text-white/60 text-[16px] leading-relaxed">
              We are a passionate team dedicated to providing the best
              services to our customers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-primary font-bold text-white text-[20px] mb-4">
              Quick Links
            </h3>
            <ul className="font-secondary text-white/60 text-[16px] space-y-3">
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-white/60" />
                <a href="#" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-white/60" />
                <a href="#" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-white/60" />
                <a href="#" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-white/60" />
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="font-primary font-bold text-white text-[20px] mb-4">
              Subscribe
            </h3>
            <p className="font-secondary text-white/60 text-[16px] mb-4 leading-relaxed">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="flex items-center rounded-lg overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email"
                className="input h-12 flex-1 rounded-none bg-white text-black outline-0 border-none font-secondary text-[14px]"
              />
              <button className="btn h-12 px-6 font-primary font-bold text-[14px] border-none text-black rounded-none bg-linear-to-r from-pink-400 via-rose-300 to-amber-300 hover:opacity-90">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10" />

        {/* Copyright */}
        <div className="pt-8 text-center">
          <p className="font-secondary text-white/50 text-[14px]">
            @2024 Your Company All Rights Reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;