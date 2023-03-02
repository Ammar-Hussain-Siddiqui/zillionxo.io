import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import img1 from "../../Image/img1.png";
import img2 from "../../Image/img2.png";
import img3 from "../../Image/img3.png";
import img4 from "../../Image/img4.png";
import img5 from "../../Image/img6.png";
import img8 from '../../Image/img8.png'
import "./index.css";
const ZaxPrice = () => {
  return (
    <div>
      <div className="bg_zax_price" id='price'>
        <h1
          style={{
            textAlign: "center",
            color: "white",
            paddingTop: "50px",
            fontFamily: "Times New Roman, Times, serif",
          }}
        >
          Current Zax Price
        </h1>
        <Container>
          <Grid container className="zax_price_text">
            <Grid item lg={0.8} md={0.8} sm={0.8} xs={1.5}>
              <img src={img2} className="zax_price_img" />
              <p
                style={{
                  color: "white",
                  textAlign: "center",
                  fontSize: "20px",
                }}
              >
                <b>0</b>
              </p>
            </Grid>

            <Grid item lg={0.8} md={0.8} sm={0.8} xs={1.5}>
              <img src={img4} className="zax_price_img" />
              <p
                style={{
                  color: "white",
                  textAlign: "center",
                  fontSize: "20px",
                }}
              >
                <b>0</b>
              </p>
            </Grid>

            <Grid item lg={0.8} md={0.8} sm={0.8} xs={1.5}>
              <img src={img3} className="zax_price_img" />
              <p
                style={{
                  color: "white",
                  textAlign: "center",
                  fontSize: "20px",
                }}
              >
                <b>0</b>
              </p>
            </Grid>

            <Grid item lg={0.8} md={0.8} sm={0.8} xs={1.5}>
              <img src={img1} className="zax_price_img" />
              <p
                style={{
                  color: "white",
                  textAlign: "center",
                  fontSize: "20px",
                }}
              >
                <b>0</b>
              </p>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item lg={5} md={6} sm={6} xs={11.7} className="zillion_aakar_text">
              <h1>What is ZILLION AAKAR XO (ZAX)?</h1>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use
              </p>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source.
              </p>
              <br></br>
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
            <Grid item lg={1} md={1} sm={0.5}></Grid>
            <Grid item lg={5} md={5} sm={5.5} xs={11} className="zerrion_aakar_img">
              <img src={img5} alt="" className="vert-move" />
            </Grid>
          </Grid>
        </Container>
      </div>

      {/* How Does it work */}

      <div className="how_does_bg" style={{backgroundColor:'rgb(14, 14, 22)'}} id='workDoes'>
       <Container>
        <Grid container>
            <Grid item lg={5} md={6} sm={6.5} xs={12} className='how_does_text'>
            <h1>How Does It Work</h1>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage </p>

            <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibu
            </p><br></br>
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
            <Grid item lg={1.5} md={1} sm={0.5}></Grid>
            <Grid item lg={5} md={5} sm={5} xs={12} className='how_does_img'>
             <img src={img8} alt='' className="vert-move" />
            </Grid>
        </Grid>
       </Container>
      </div>
    </div>
  );
};

export default ZaxPrice;
