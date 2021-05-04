import React from 'react'
import { Paper, Card } from '@material-ui/core';

export default function PageHeader(props) {

    const {title ,icon ,subtitle} = props
    return (

        <Paper elevation={0} square>
<div>
    <Card>
{icon}
    </Card>
</div>
        </Paper>
    )
}
