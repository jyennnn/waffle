import "./App.css";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

function App() {
  return (
    <div
      className="waffle-app"
      style={{
        display: "flex",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#F8F8F8",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={5}>
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "80vh",
            }}
          >
            <img
              src="https://github.com/jyennnn/waffle/blob/main/waffle-react/src/assets/images/waffle-logo.png?raw=true"
              alt="Waffle Logo"
              style={{ width: "350px", padding: "50px 0 " }}
            />
            <Typography
              variant="h4"
              sx={{
                fontFamily: "poppins",
                fontWeight: "600",
                color: "#414141",
                fontSize: "30px",
              }}
            >
              The <span style={{ color: "#F9C044" }}>simple</span> solution
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#414141",
                fontFamily: "poppins",
                fontWeight: "300",
                paddingTop: "5px",
                paddingBottom: "50px",
                fontSize: "17px",
              }}
            >
              your entire business in a snapshot
            </Typography>
            <Button
              variant="contained"
              sx={{
                position: "relative",
                left: 75,
                color: "#414142",
                backgroundColor: "#EFEFEF",
                borderRadius: "30px",
                fontFamily: "poppins",
                textTransform: "none",
                height: "50px",
                width: "140px",
                fontWeight: "400",
                fontSize: "16px",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                "&:hover": {
                  backgroundColor: "#F9C044",
                  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                },
              }}
            >
              Get Demo
            </Button>
          </Container>
        </Grid>
        <Grid item xs={12} sm={12} md={7}>
          <div
            className="bento-layout"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gridTemplateRows: "repeat(4, 1fr)",
              height: "90vh",
              gridGap: "10px",
              width: "55vw",
            }}
          >
            <div
              className="welcome"
              style={{
                backgroundColor: "#E7E9EF",
                color: "#414141",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50px",
                gridColumn: "1/3",
                gridRow: "1",
                padding: "30px 50px",
              }}
            >
              <p style={{ alignSelf: "flex-start" }}>welcome,</p>
              <h2 style={{ fontSize: "35px" }}>Samantha_</h2>
            </div>
            <div
              className="insights"
              style={{
                // backgroundColor: "#E7E9EF",
                color: "#414141",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50px",
                gridColumn: "3/5",
                gridRow: "1/3",
                padding: "25px 40px",
              }}
            >
              <img
                src="https://github.com/jyennnn/waffle/blob/main/waffle-react/src/assets/images/charts.png?raw=true"
                alt="charts"
                style={{ width: "280px", paddingBottom: "20px" }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "0 30px",
                }}
              >
                <h3 style={{ fontSize: "16px" }}>
                  powerful <span style={{ color: "#EDB137" }}>insights</span>
                </h3>
                <p style={{ fontSize: "13px" }}>
                  A suite of features to help you thrive. <br />
                  CRM data at your fingertips
                </p>
              </div>
            </div>

            <div
              className="payments"
              style={{
                // backgroundColor: "#E7E9EF",
                color: "#414141",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                borderRadius: "50px",
                gridColumn: "1",
                gridRow: "2/4",
                padding: "30px 25px",
              }}
            >
              <h3
                style={{
                  textAlign: "center",
                  fontSize: "16px",
                  paddingBottom: "3px",
                }}
              >
                payment methods
              </h3>
              <img
                src="https://github.com/jyennnn/waffle/blob/main/waffle-react/src/assets/images/mastercard.png?raw=true"
                alt="master card"
                style={{ width: "80px", padding: "3px 0 " }}
              />
              <img
                src="https://github.com/jyennnn/waffle/blob/main/waffle-react/src/assets/images/visa.png?raw=true"
                alt="visa"
                style={{ width: "80px", padding: "3px 0 " }}
              />
              <img
                src="https://github.com/jyennnn/waffle/blob/main/waffle-react/src/assets/images/googlepay.png?raw=true"
                alt="google pay"
                style={{ width: "80px", padding: "3px 0 " }}
              />
              <img
                src="https://github.com/jyennnn/waffle/blob/main/waffle-react/src/assets/images/applepay.png?raw=true"
                alt="apple pay"
                style={{ width: "80px", padding: "3px 0 " }}
              />
              <img
                src="https://github.com/jyennnn/waffle/blob/main/waffle-react/src/assets/images/paynow.png?raw=true"
                alt="paynow"
                style={{ width: "80px", padding: "3px 0 " }}
              />
            </div>

            <div
              className="qr"
              style={{
                // backgroundColor: "#E7E9EF",
                color: "#414141",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50px",
                gridColumn: "2",
                gridRow: "2",
              }}
            >
              <img
                src="https://github.com/jyennnn/waffle/blob/main/waffle-react/src/assets/images/scanme.png?raw=true"
                alt="scan me"
                style={{
                  width: "80px",
                  alignSelf: "flex-end",
                  position: "relative",
                  top: "-10px",
                  right: "10px",
                }}
              />
              <div>
                <img
                  src="https://github.com/jyennnn/waffle/blob/main/waffle-react/src/assets/images/qrcode.png?raw=true"
                  alt="qrcode"
                  style={{ width: "120px", alignSelf: "flex-start" }}
                />
                <img
                  src="https://github.com/jyennnn/waffle/blob/main/waffle-react/src/assets/images/arrow.png?raw=true"
                  alt="arrow"
                  style={{
                    width: "50px",
                    alignSelf: "flex-start",
                    position: "relative",
                    top: "-70px",
                  }}
                />
              </div>
            </div>

            <div
              className="loyalty"
              style={{
                // backgroundColor: "#E7E9EF",
                color: "#414141",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50px",
                gridColumn: "2/4",
                gridRow: "3",
                padding: "18px 40px",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h3 style={{ fontSize: "16px" }}>
                  <span style={{ color: "#EDB137" }}>loyalty</span> program
                </h3>
                <p style={{ fontSize: "13px" }}>
                  tailored programs for lasting happiness.
                </p>
              </div>
              <img
                src="https://github.com/jyennnn/waffle/blob/main/waffle-react/src/assets/images/loyalty.png?raw=true"
                alt="loyalty"
                style={{ width: "130px" }}
              />
            </div>

            <div
              className="members"
              style={{
                // backgroundColor: "#E7E9EF",
                color: "#414141",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50px",
                gridColumn: "4",
                gridRow: "3",
                padding: "0 40px",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h3 style={{ fontSize: "40px", color: "#EDB137" }}>300K</h3>
                <p style={{ fontSize: "13px" }}>members within our ecosystem</p>
              </div>
            </div>

            <div
              className="grow"
              style={{
                // backgroundColor: "#E7E9EF",
                color: "#414141",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50px",
                gridColumn: "1/5",
                gridRow: "4",
                padding: "15px 30px",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  padding: "0px",
                  minWidth: "20px",
                  height: "20px",
                  borderRadius: "50px",
                  backgroundColor: "rgba(65, 65, 65, 0.5)",
                  boxShadow: "none",
                  "&:hover": {
                    backgroundColor: "#F9C044",
                    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                  },
                }}
              >
                <KeyboardArrowLeftIcon sx={{ fontSize: "15px" }} />
              </Button>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "0 30px",
                }}
              >
                <h3 style={{ fontSize: "16px", paddingBottom: "5px" }}>
                  Grow with <span style={{ color: "#EDB137" }}>Waffle</span>
                </h3>
                <p style={{ fontSize: "12px" }}>
                  “In the F&B industry, speed is key, and having a reliable POS
                  system even when the wi-fi is down is a must! Waffle provides
                  this and is also customizable for my drinks and noodle stalls,
                  and more! Thanks to them, we are able to manage all of these
                  concepts easily.”
                </p>
                <p style={{ fontSize: "11px", alignSelf: "flex-end" }}>
                  Terry Neo <br /> Founder & CEO
                </p>
              </div>
              <Button variant="contained" sx={{
                  padding: "0px",
                  minWidth: "20px",
                  height: "20px",
                  borderRadius: "50px",
                  backgroundColor: "rgba(65, 65, 65, 0.5)",
                  boxShadow: "none",
                  "&:hover": {
                    backgroundColor: "#F9C044",
                    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                  },
                }}>
                <KeyboardArrowRightIcon sx={{ fontSize: "15px" }} />
              </Button>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
