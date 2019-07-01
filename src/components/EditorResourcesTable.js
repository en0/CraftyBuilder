import React from "react";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TablePagination from "@material-ui/core/TablePagination";

export default function({resources, selectedIndex, itemsPerPage, currentPage, onPageChange, onRowClick}) {
    const handleChangePage = (e, p) => onPageChange(p);
    const offset = itemsPerPage * currentPage;
    const resourceSlice = !resources ? [] : resources
        .slice(offset)
        .slice(0, itemsPerPage);
    const emptyRows = itemsPerPage - resourceSlice.length;
    return (
        <div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell component="th" scope="row">Component</TableCell>
                        <TableCell>Quantity</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {resourceSlice && resourceSlice.map((a, i) => (
                        <TableRow hover
                                  key={`resource-row-${i + offset}`}
                                  role="checkbox"
                                  onClick={() => onRowClick(selectedIndex === i ? -1 : (i + offset))}
                                  tabIndex={-1}
                                  selected={selectedIndex === i + offset}>
                            <TableCell component="th" scope="row" id={`resource-row-${i + offset}`} >{a.name}</TableCell>
                            <TableCell>{a.quantity}</TableCell>
                        </TableRow>
                    ))}
                    {emptyRows > 0 && (
                        <TableRow style={{ height: 49 * emptyRows }}>
                            <TableCell colSpan={3} />
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            <TablePagination
                rowsPerPageOptions={[itemsPerPage]}
                component="div"
                count={resources.length}
                rowsPerPage={itemsPerPage}
                page={currentPage}
                backIconButtonProps={{ 'aria-label': 'Previous Page', }}
                nextIconButtonProps={{ 'aria-label': 'Next Page', }}
                onChangePage={handleChangePage} />
        </div>
    );
}