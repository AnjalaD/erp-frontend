import React from 'react'
import { Table, TableHead, TableRow, TableCell, TableBody, Card } from '@material-ui/core'

function CustomTable(props) {

    return (
        <Card
            elevation={4}
            style={{
                padding: 10,
                margin: 10
            }}
        >
            <Table size={props.size || 'small'}>
                <TableHead>
                    <TableRow>
                        {
                            props.headers.map((header, i) => (
                                <TableCell key={i}>
                                    {header}
                                </TableCell>
                            ))
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        props.body && props.body.lenght === 0 ?
                            props.body.map((row, i) => (
                                <TableRow key={i}>
                                    {
                                        row.map((cell, j) => (
                                            <TableCell key={j}>
                                                {cell}
                                            </TableCell>
                                        ))
                                    }
                                </TableRow>
                            ))
                            :
                            <TableRow>
                                <TableCell>
                                    No data availble
                                </TableCell>
                            </TableRow>
                    }
                </TableBody>
            </Table>
        </Card>
    )
}

export default CustomTable
