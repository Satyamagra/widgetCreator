import { Button, Card, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'
import CustomTextField from '../../../components/controls/CustomTextField'

function ClipBoard(props) {
    const { copySuccess } = props;

    // copy to clipboard
    function copyToClipboard(e) {
        e.preventDefault()
        navigator.clipboard.writeText(copySuccess)
    };

    return (
        <Card elevation={6} sx={{ marginTop: 4, maginBottom: 2 }}>
            <CardContent>
                <Grid container spacing={2} >
                    <Grid item md={12} lg={12} sm={12} xs={12}>
                        <Typography variant="h5" gutterBottom align={"center"}>
                            Add following code to your website
                        </Typography>
                    </Grid>
                    <Grid item md={12} lg={12} sm={12} xs={12}>
                        <CustomTextField
                            size="small"
                            multiline
                            value={copySuccess}
                            required
                            label=""
                            minRows={4}
                            maxRows={4}
                            disabled
                        />
                    </Grid>

                    <Grid item md={12} lg={12} sm={12} xs={12}>
                        <Button fullWidth variant="contained" onClick={copyToClipboard}>
                            Copy
                        </Button>
                    </Grid>
                </Grid>
            </CardContent>

        </Card>
    )
}

export default ClipBoard