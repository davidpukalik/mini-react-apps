import React from 'react';
import { Typography, Card, CardActions, CardContent, CardMedia, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function CardApp(props) {
    let cardTitle = props.cardTitle;
    if (props.cardTitle === 'Random') {
        cardTitle = Math.trunc(Math.random() * 2 + 1) === 1 ? 'Calculator' : 'Form';
    }

    return (
        <Card sx={{ backgroundColor: 'rgba(92, 107, 192, 0.07)' }}>
            <Link to={'/' + cardTitle} style={{ textDecoration: 'none' }}>
                <CardMedia
                    component="img"
                    height="240"
                    image={require('../img/' + props.img).default}
                    alt={props.img}
                />
            </Link>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" align="center">
                    {props.cardTitle}
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center">
                    {props.cardText}
                </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
                <Link to={'/' + cardTitle} style={{ textDecoration: 'none' }}>
                    <Button variant="outlined" size="small">
                        Click To Open
                    </Button>
                </Link>
            </CardActions>
        </Card>
    );
}

export default CardApp;
