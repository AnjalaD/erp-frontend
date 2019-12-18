import React from 'react'
import { Table, TableHead, TableRow, TableCell, TableBody, Card } from '@material-ui/core'
import { COLOURS } from '../../constants/constants'

function CustomTable(props) {

    return (
        <Card
            elevation={4}
            style={{
                padding: 10,
                margin: 10
            }}
        >
            <Table size={props.size || 'medium'}>
                <TableHead
                    style={{
                        backgroundColor: COLOURS.primary.lighter,
                    }}
                >
                    <TableRow>
                        {
                            props.headers.map((header, i) => (
                                <TableCell
                                    style={{
                                        color: COLOURS.primary.darker
                                    }}
                                    align='center'
                                    key={i}
                                >
                                    {header}
                                </TableCell>
                            ))
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        props.body ?
                            props.body.map((row, i) => (
                                <TableRow key={i}>
                                    {
                                        row.map((cell, j) => (
                                            <TableCell align='center' key={j}>
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
