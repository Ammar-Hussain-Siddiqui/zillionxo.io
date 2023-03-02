import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import teamimg1 from "../../../Image/img14.jpg"
import teamimg2 from "../../../Image/img15.jpg";
import teamimg3 from "../../../Image/img16.jpg";
import teamimg4 from "../../../Image/img17.jpeg";
import "./index.css";

const Team = () => {
  return (
    <div className="bg_imgsecond" style={{ backgroundColor: "rgb(14, 14, 22)" }}>
      <h1
        style={{
          textAlign: "center",
          color: "white",
          paddingTop: "50px",
          paddingBottom: "10px",
          fontFamily:'Times New Roman, Times, serif'

        }}
      >
     TEAM MEMBERS
      </h1>
      <Container>
        <Grid container className="team_main" style={{paddingBottom:'30px'}}>
          <Grid item lg={2.5} md={3.8} sm={4.8} xs={11} className="team_img">
            <img src={teamimg3} alt="" />
            <h2 style={{ color: "white", textAlign: "center" }}>
              Mr.Anil Yadav
            </h2>
            <h3
              style={{
                color: "white",
                textAlign: "center",
                marginTop: "-10px",
              }}
            >
              <b>CEO</b>
            </h3>
          </Grid>
          <Grid item lg={2.5} md={3.8} sm={4.8} xs={11} className="team_img">
            <img src={teamimg2} alt="" />
            <h2 style={{ color: "white", textAlign: "center" }}>
              Mr.Mintu Yadav
            </h2>
            <h3
              style={{
                color: "white",
                textAlign: "center",
                marginTop: "-10px",
              }}
            >
              <b>COO</b>
            </h3>
          </Grid>

          <Grid item lg={2.5} md={3.8} sm={4.8} xs={12} className="team_img">
            <img src={teamimg4} alt="" />
            <h2 style={{ color: "white", textAlign: "center" }}>
              Mr.Parveen Rai
            </h2>
            <h3
              style={{
                color: "white",
                textAlign: "center",
                marginTop: "-10px",
              }}
            >
              <b>Director</b>
            </h3>
          </Grid>
          <Grid item lg={2.5} md={3.8} sm={4.8} xs={12} className="team_img">
            <img src={teamimg1} alt="" />
            <h2 style={{ color: "white", textAlign: "center" }}>
              Mr.Ujjawal
            </h2>
            <h3
              style={{
                color: "white",
                textAlign: "center",
                marginTop: "-10px",
              }}
            >
              <b>CMO</b>
            </h3>
          </Grid>
        </Grid>
      </Container>
      <div style={{ borderBottom: "1px solid white" }}></div>

    </div>
  );
};

export default Team;
