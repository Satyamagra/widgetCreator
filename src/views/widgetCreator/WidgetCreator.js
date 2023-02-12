import { Container } from '@mui/system'
import React, { useState } from 'react'
import ClipBoard from './components/ClipBoard'
import WidgetForm from './components/WidgetForm'

function WidgetCreator() {

    const [copySuccess, setCopySuccess] = useState('');

    return (
        <Container disableGutters maxWidth="lg">
            <WidgetForm setCopySuccess={setCopySuccess} />
            {copySuccess !== "" &&
                <ClipBoard copySuccess={copySuccess} />
            }
        </Container>
    )
}

export default WidgetCreator