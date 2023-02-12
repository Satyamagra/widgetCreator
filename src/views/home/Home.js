import { Button, Card, CardContent, Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AppLogo } from '../../utils/appImages';

function Home() {

    const navigate = useNavigate();
    return (
        <Container maxWidth="sm" disableGutters className="home-header">
            <Card variant='outlined' >
                <CardContent sx={{ padding: "40px 10px" }}>
                    <Grid container justifyContent={"center"}>
                        <Grid item >
                            <img src={AppLogo.crawdLogo} alt="crawdLogo" width={300} />
                        </Grid>
                        <Grid item >
                            <Typography variant="h5" gutterBottom>
                                Welcome to widget creater
                            </Typography>
                        </Grid>
                        <Grid item container >
                            <Button fullWidth variant="contained" onClick={() => navigate('/widget_creator')}>
                                To prceed
                            </Button>
                        </Grid>
                    </Grid>

                </CardContent>

            </Card>
        </Container>
    )
}

export default Home