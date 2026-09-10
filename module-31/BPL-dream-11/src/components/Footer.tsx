import Container from "./Container";
import footer_logo from "../assets/footer/footer_logo.png";
// import footer_logo2 from "../assets/footer/footer_logo2.png";

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
          <img src={footer_logo} alt="footer_logo" className="mb-[64px]"/>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
