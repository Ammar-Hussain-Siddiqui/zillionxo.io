import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import img6 from "../../../Image/img6.png";
import "./index.css";

const WatchOur = () => {
  return (
    <div className="bg_three" style={{ backgroundColor: "rgb(14, 14, 22)" }}>
      <h1
        style={{
          textAlign: "center",
          color: "white",
          paddingTop: "50px",
          fontFamily: "Times New Roman, Times, serif",
        }}
      >
        <b>
          Watch Our <br></br>Zillion Anchor Xo Trailer
        </b>
      </h1>
      <Container>
        <Grid container style={{justifyContent:'center'}}>
          <Grid item lg={5.3} md={5.6} sm={6} xs={12} style={{marginTop:'40px'}}> 
          <iframe style={{width:'100%'}} height="315" src="https://www.youtube.com/embed/FZZcZ7tORnc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

          </Grid>
        </Grid>
      </Container>
      <Container>
        <Grid container style={{ marginTop: "50px" }}>
          <Grid item lg={5} md={5} sm={6} xs={12}>
            <h3
              style={{
                color: "white",
                fontFamily: "Times New Roman, Times, serif",
              }}
            >
              About Zax As A Utility Token
            </h3>
            <br></br>
            <p style={{ color: "white" }}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page
            </p>
            <br></br>
            <p style={{ color: "white" }}>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined
            </p>

            <Button
              style={{
                backgroundColor: "rgb(0,153,255)",
                color: "white",
                marginBottom: "50px",
              }}
            >
              Buy Token
            </Button>
          </Grid>
          <Grid item lg={1} md={1} sm={1}></Grid>
          <Grid item lg={5} md={5} sm={5} xs={12}>
            <img src={img6} alt="" className="about_zax_img"/>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default WatchOur;
