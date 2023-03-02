import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import logo from "../../Image/logo.png";
import { useNavigate } from "react-router-dom";
import "./index.css";
const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
      <nav
        class="navbar navbar-expand-lg navbar-light fixed-top"
        style={{ backgroundColor: "white" }}
        id="box_shadow_header"
      >
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            {/* <Container> */}
            <Grid container style={{ paddingTop: "10px" }}>
              <Grid item lg={0.3}></Grid>
              <Grid item lg={1.3} md={1.5} sm={1.5} xs={8}>
                <img src={logo} alt="" className="logo_img" />
              </Grid>
              <Grid item lg={1.1} md={0.9} sm={1.5} xs={12}>
           
                <p
                  style={{ color: "black", cursor: "pointer" }}
                  id="header_text_resp"
                  onClick={() => navigate("/home")}
                >
                  <b>HOME</b>
                </p>
              </Grid>
              <Grid item lg={1.1} md={0.9} sm={1.5} xs={12}>
                <p style={{ color: "black" }} id="header_text_resp">
                  <a
                    style={{
                      textDecoration: "none",
                      color: "black",
                      cursor: "pointer",
                    }}
                    onClick={() => navigate("/stack")}
                  >
                    <b>STACK</b>
                  </a>
                </p>
              </Grid>
              <Grid item lg={1.8} md={1.9} sm={2.5} xs={12}>
                <p style={{ color: "black" }} id="header_text_resp">
                  <a
                    href="#bit_game"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <b>HOW IT WORKS</b>
                  </a>
                </p>
              </Grid>
              <Grid item lg={1.7} md={1.6} sm={2.5} xs={12}>
                <p style={{ color: "black" }} id="header_text_resp">
                  <a
                    href="#benifts"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <b>TOKENOMICS</b>
                  </a>
                </p>
              </Grid>
              <Grid item lg={1.7} md={1.7} sm={2} xs={12}>
                <p style={{ color: "black" }} id="header_text_resp">
                  <a
                    href="#raod_map"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <b>WHITE PAPER</b>
                  </a>
                </p>
              </Grid>
              <Grid item lg={1.5} md={1.5} sm={2} xs={12}>
                <p style={{ color: "black" }} id="header_text_resp">
                  <a
                    href="#raod_map"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <b>ROAD MAP</b>
                  </a>
                </p>
              </Grid>
              <Grid item lg={1.5} md={1.5} sm={2} xs={12}>
                <button class="button"> Buy Zax</button>
              </Grid>
            </Grid>
            {/* </Container> */}
            {/* <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
