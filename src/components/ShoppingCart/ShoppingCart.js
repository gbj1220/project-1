import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
});

function createData(product, price, id) {
	return { product, price, id };
}

export const rows = [];

export default function ShoppingCart() {
	const classes = useStyles();

	return (
		<TableContainer component={Paper}>
			<Table className={classes.table} aria-label='simple table'>
				<TableHead>
					<TableRow>
						<TableCell>Dessert (100g serving)</TableCell>
						<TableCell align='right'>Price</TableCell>
						<TableCell align='right'>Quantity&nbsp;(g)</TableCell>
						<TableCell align='right'>Total: </TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.Product}>
							<TableCell component='th' scope='row'>
								{row.Product}
							</TableCell>
							<TableCell align='right'>{row.Price}</TableCell>
							<TableCell align='right'>{row.Quantity}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
