import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import img11 from "../../../Image/img11.png";
import "./index.css";

const BenefitsZillion = () => {
  return (
    <div style={{ backgroundColor: "rgb(14, 14, 22)" }} id='benefits'>
      <h1
        style={{
          textAlign: "center",
          color: "white",
          paddingTop: "50px",
          fontFamily: "Times New Roman, Times, serif",
        }}
      >
        Benefits Of <br></br>Zillion Anchor Xo
      </h1>
      <Container>
        <Grid container className="benefits_zillion">
          <Grid item lg={4} md={5} sm={6.8} xs={12} className="benefits_img">
            <img src={img11} />
            <p
              style={{
                color: "white",
                marginTop: "-22%",
                padding: "15px",
                marginLeft: "3%",
              }}
            >
              There are many variations of passages of Lorem 
            </p>
          </Grid>

          <Grid item lg={4} md={5} sm={6.8} xs={12} className="benefits_img">
            <img src={img11} />
            <p
              style={{
                color: "white",
                marginTop: "-22%",
                padding: "15px",
                marginLeft: "3%",
              }}
            >
              There are many variations of passages of Lorem
            </p>
          </Grid>

          <Grid item lg={4} md={5} sm={6.8} xs={12} className="benefits_img">
            <img src={img11} />
            <p
              style={{
                color: "white",
                marginTop: "-22%",
                padding: "15px",
                marginLeft: "12%",
              }}
            >
              There are many variations of passages of Lorem 
            </p>
          </Grid>

          <Grid item lg={4} md={5} sm={6.8} xs={12} className="benefits_img">
            <img src={img11} />
            <p
              style={{
                color: "white",
                marginTop: "-22%",
                padding: "15px",
                marginLeft: "12%",
              }}
            >
              There are many variations of passages of Lorem 
            </p>
          </Grid>

          <Grid item lg={4} md={5} sm={6.8} xs={12} className="benefits_img">
            <img src={img11} />
            <p
              style={{
                color: "white",
                marginTop: "-22%",
                padding: "15px",
                marginLeft: "12%",
              }}
            >
              There are many variations of passages of Lorem 
            </p>
          </Grid>

          <Grid item lg={4} md={5} sm={6.8} xs={12} className="benefits_img">
            <img src={img11} />
            <p
              style={{
                color: "white",
                marginTop: "-22%",
                padding: "15px",
                marginLeft: "12%",
              }}
            >
              There are many variations of passages of Lorem 
            </p>
          </Grid>

          <Grid item lg={4} md={5} sm={6.8} xs={12} className="benefits_img">
            <img src={img11} />
            <p
              style={{
                color: "white",
                marginTop: "-22%",
                padding: "15px",
                marginLeft: "12%",
                marginBottom: "50px",
              }}
            >
              There are many variations of passages of Lorem
            </p>
          </Grid>
        </Grid>
      </Container>
      <div style={{ borderBottom: "1px solid white" }}></div>


    </div>
  );
};

export default BenefitsZillion;
