import Container from "./Container";
import header_logo from "../assets/navbar/header_logo.png";
import header_coin from "../assets/navbar/header_coin.png"

function NavBar() {
  return (
    <>
      <Container>
        <div className="header flex justify-between items-center">
          <img src={header_logo} alt="header_logo" />
          <div className="header-menu flex justify-between gap-12 items-center">
            <div className="header-menu-item">
                <a href="#">home</a>
                <a href="#">fixture</a>
                <a href="#">teams</a>
                <a href="#">schedules</a>
            </div>
            <div className="header-menu-coin">
                <img src={header_coin} alt="header_coin" />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default NavBar;
