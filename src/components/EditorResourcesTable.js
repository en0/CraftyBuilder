import React from "react";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";

export default function({items, selectedIndex, onRowClick}) {
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell component="th" scope="row">Component</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Notes</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {items.map((a, i) => (
                    <TableRow hover
                              key={`resource-row-${i}`}
                              role="checkbox"
                              onClick={() => onRowClick(i)}
                              tabIndex={-1}
                              selected={selectedIndex === i}>
                        <TableCell component="th" scope="row" id={`resource-row-${i}`} >{a.name}</TableCell>
                        <TableCell>{a.quantity}</TableCell>
                        <TableCell>{a.notes}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}