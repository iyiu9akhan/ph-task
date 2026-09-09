import Container from "./Container";
// import banner_bg from "../assets/banner/banner_bg.png";
import banner_logo from "../assets/banner/banner_logo_icon.png";

function Banner() {
  return (
    <>
      <Container>
        <div className="bg-[url('/banner_bg.png')] bg-cover bg-center bg-no-repeat px-2.5 py-16 rounded-3xl flex flex-col items-center">
          <img src={banner_logo} alt="banner_logo" className="mb-6" />
          <p className="font-primary font-bold text-[40px] leading-15 mb-4 text-[#ffffff]">
            Assemble Your Ultimate Dream 11 Cricket Team
          </p>
          <p className="font-secondary mb-6 font-medium text-[24px] text-[#ffffff]/70">
            Beyond Boundaries Beyond Limits
          </p>
          <a
            href="#"
            className="p-2 rounded-2xl border border-[#E7FE29]"
          >
            <span className="block font-primary font-bold text-[16px] text-[#131313] px-5 py-3.5 capitalize bg-[#E7FE29] rounded-xl">
              Claim Free Credit
            </span>
          </a>
        </div>
      </Container>
    </>
  );
}

export default Banner;
