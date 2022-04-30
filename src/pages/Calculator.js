import React, { useState } from 'react';
import './calc.css';
import { Typography, Container, Box } from '@mui/material';

function Calculator() {
    const [result, setResult] = useState('');

    const handleClick = (e) => {
        setResult(result.concat(e.target.name));
    };

    const clear = () => {
        setResult('');
    };

    const back = () => {
        setResult(result.slice(0, -1));
    };

    const calculate = () => {
        try {
            setResult(eval(result).toString());
        } catch (error) {
            setResult('Error :(');
        }
    };

    return (
        <div>
            <Container maxWidth="lg" sx={{ py: 3 }}>
                <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                    Calculator
                </Typography>
                <Box sx={{ pt: 5, display: 'flex', justifyContent: 'center' }}>
                    <div className="calc">
                        <input type="text" className="calc__input" readOnly="readonly" value={result} />
                        <div className="calc__row">
                            <button onClick={clear} className="calc__btn calc__btn--hl calc__btn--double">
                                Clear
                            </button>
                            <button onClick={back} className="calc__btn calc__btn--hl">
                                Back
                            </button>
                            <button name="/" onClick={handleClick} className="calc__btn calc__btn--hl">
                                ÷
                            </button>
                        </div>

                        <div className="calc__row">
                            <button name="7" onClick={handleClick} className="calc__btn calc__btn">
                                7
                            </button>
                            <button name="8" onClick={handleClick} className="calc__btn calc__btn">
                                8
                            </button>
                            <button name="9" onClick={handleClick} className="calc__btn calc__btn">
                                9
                            </button>
                            <button name="*" onClick={handleClick} className="calc__btn calc__btn--hl">
                                *
                            </button>
                        </div>

                        <div className="calc__row">
                            <button name="6" onClick={handleClick} className="calc__btn calc__btn">
                                6
                            </button>
                            <button name="5" onClick={handleClick} className="calc__btn calc__btn">
                                5
                            </button>
                            <button name="4" onClick={handleClick} className="calc__btn calc__btn">
                                4
                            </button>
                            <button name="-" onClick={handleClick} className="calc__btn calc__btn--hl">
                                -
                            </button>
                        </div>

                        <div className="calc__row">
                            <button name="1" onClick={handleClick} className="calc__btn calc__btn">
                                1
                            </button>
                            <button name="2" onClick={handleClick} className="calc__btn calc__btn">
                                2
                            </button>
                            <button name="3" onClick={handleClick} className="calc__btn calc__btn">
                                3
                            </button>
                            <button name="+" onClick={handleClick} className="calc__btn calc__btn--hl">
                                +
                            </button>
                        </div>

                        <div className="calc__row">
                            <button name="0" onClick={handleClick} className="calc__btn calc__btn">
                                0
                            </button>
                            <button name="." onClick={handleClick} className="calc__btn calc__btn">
                                .
                            </button>
                            <button onClick={calculate} className="calc__btn calc__btn--hl calc__btn--double">
                                =
                            </button>
                        </div>
                    </div>
                </Box>
            </Container>
        </div>
    );
}

export default Calculator;
