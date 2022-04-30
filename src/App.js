import { Typography, Grid, Container } from '@mui/material';

import CardApp from './components/CardApp';
import { Routes, Route } from 'react-router-dom';
import Calculator from './pages/Calculator';
import Form from './pages/Form';
import Nav from './components/Nav';

function App() {
    return (
        <>
            <Nav />
            <Routes>
                <Route
                    path="/"
                    element={
                        <main>
                            <Container maxWidth="lg" sx={{ py: 3 }}>
                                <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                                    App list
                                </Typography>
                                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                                    Hi, this is the React app with few small apps. Created with Material UI. <br /> I
                                    hope you like it 😉
                                </Typography>
                            </Container>
                            <Container maxWidth="lg">
                                <Grid container spacing={4}>
                                    <Grid item xs={12} sm={6} lg={4}>
                                        <CardApp
                                            cardTitle="Form"
                                            img="form_screenshot.png"
                                            cardText="Login form, surely can be useful. 🙄"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={4}>
                                        <CardApp
                                            cardTitle="Calculator"
                                            img="calculator_screenshot.png"
                                            cardText="Calculator, simple and beutiful. 😇"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={4}>
                                        <CardApp
                                            cardTitle="Random"
                                            img="random.png"
                                            cardText="Will it be form or calculator? 🤔"
                                        />
                                    </Grid>
                                </Grid>
                            </Container>
                        </main>
                    }
                />
                <Route path="/Form" element={<Form />} />
                <Route path="/Calculator" element={<Calculator />} />
            </Routes>
        </>
    );
}

export default App;
