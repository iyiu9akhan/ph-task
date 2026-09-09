import Container from "./Container";
import header_logo from "../assets/navbar/header_logo.png";
import header_coin from "../assets/navbar/header_coin.png";

function NavBar() {
  return (
    <>
      <Container>
        <div className="header flex justify-between items-center mt-12.5 mb-6">
          <img src={header_logo} alt="header_logo" />
          <div className="header-menu flex justify-between gap-12 items-center">
            <div className="header-menu-item capitalize font-primary text-[16px] text-[#131313]/70 flex gap-12">
              <a href="#" className="hover:text-[#131313]">
                home
              </a>
              <a href="#" className="hover:text-[#131313] ">
                fixture
              </a>
              <a href="#" className="hover:text-[#131313] ">
                teams
              </a>
              <a href="#" className="hover:text-[#131313]">
                schedules
              </a>
            </div>
            <div className="header-menu-coin flex items-center gap-2.5 px-5 py-4 rounded-xl border border-[#131313]/10">
              <p className="font-semibold text-[16px] capitalize">0 coin</p>
              <img src={header_coin} alt="header_coin" />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default NavBar;
