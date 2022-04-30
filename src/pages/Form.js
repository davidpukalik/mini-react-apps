import React from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function Form() {
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <Container maxWidth="lg" sx={{ py: 5 }}>
                <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                    Form
                </Typography>
                <Box>
                    <Container component="main" maxWidth="sm">
                        <Box component="form" noValidate onSubmit={handleSubmit}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="given-name"
                                        name="firstName"
                                        required
                                        fullWidth
                                        id="firstName"
                                        label="First Name"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="lastName"
                                        label="Last Name"
                                        name="lastName"
                                        autoComplete="family-name"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        name="city"
                                        label="City"
                                        type="text"
                                        id="city"
                                        autoComplete="country"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={8}>
                                    <TextField
                                        fullWidth
                                        name="streetAdress"
                                        label="Street Address"
                                        type="text"
                                        id="streetAdress"
                                        autoComplete="street-address"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        fullWidth
                                        name="postalCode"
                                        label="Postal Code"
                                        type="text"
                                        id="postalCode"
                                        autoComplete="postal-code"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        name="phoneNumber"
                                        label="Phone Number (Format: 123-456-7890)"
                                        type="tel"
                                        id="phoneNumber"
                                        autoComplete="tel"
                                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel
                                        control={<Checkbox value="allowExtraEmails" color="primary" />}
                                        label="I agree with terms of condition."
                                    />
                                </Grid>
                            </Grid>
                            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                                Send data
                            </Button>
                        </Box>
                    </Container>
                </Box>
            </Container>
        </>
    );
}

export default Form;
