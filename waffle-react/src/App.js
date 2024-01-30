import './App.css';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

function App() {
  return (
    <div className="waffle-app" style={{display: 'flex', alignItems: 'center', height: '100vh', backgroundColor: '#F8F8F8'}}>
      <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={5}>
          <Container sx={{ backgroundColor: "lightblue", display: 'flex', flexDirection: 'column'}}>

          </Container>
        </Grid>
        <Grid item xs={12} sm={12} md={7} sx={{ backgroundColor: "lightcoral", height: "100%"}}>
          <h1>hi</h1>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
