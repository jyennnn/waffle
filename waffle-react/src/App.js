import "./App.css";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

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
        <Grid
          item
          xs={12}
          sm={12}
          md={7}
        >
          <div
            className="bento-layout"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gridTemplateRows: "repeat(4, 1fr)",
              height: "90vh",
              gridGap: "10px",
              width: '57vw'
            }}
          >
            <div
              className="welcome"
              style={{
                backgroundColor: "#E7E9EF",
                color: "#414141",
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '50px',
                gridColumn: "1/3",
                gridRow: "1",
                padding: '30px 50px'
              }}
            >
              <p style={{alignSelf: 'flex-start'}}>welcome,</p>
              <h2 style ={{fontSize: '35px'}}>Samantha_</h2>
            </div>
            <div
              className="insights"
              style={{
                backgroundColor: "#E7E9EF",
                color: "#414141",
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '50px',
                gridColumn: "3/5",
                gridRow: "1/3",
              }}
            >
              <p>insights</p>
            </div>

            <div
              className="payments"
              style={{
                backgroundColor: "#E7E9EF",
                color: "#414141",
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '50px',
                gridColumn: "1",
                gridRow: "2/4",
              }}
            >
              <p>payments</p>
            </div>

            <div
              className="qr"
              style={{
                backgroundColor: "#E7E9EF",
                color: "#414141",
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '50px',
                gridColumn: "2",
                gridRow: "2",
              }}
            >
              <p>qr</p>
            </div>

            <div
              className="loyalty"
              style={{
                backgroundColor: "#E7E9EF",
                color: "#414141",
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '50px',
                gridColumn: "2/4",
                gridRow: "3",
              }}
            >
              <p>loyalty</p>
            </div>

            <div
              className="members"
              style={{
                backgroundColor: "#E7E9EF",
                color: "#414141",
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '50px',
                gridColumn: "4",
                gridRow: "3",
              }}
            >
              <p>members</p>
            </div>

            <div
              className="grow"
              style={{
                backgroundColor: "#E7E9EF",
                color: "#414141",
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '50px',
                gridColumn: "1/5",
                gridRow: "4",
              }}
            >
              <p>grow</p>
            </div>

          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
