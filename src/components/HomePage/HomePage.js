import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
	icon: {
		marginRight: theme.spacing(2),
	},
	heroContent: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(8, 0, 6),
	},
	heroButtons: {
		marginTop: theme.spacing(4),
	},
	cardGrid: {
		paddingTop: theme.spacing(8),
		paddingBottom: theme.spacing(8),
	},
	card: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
	},
	cardMedia: {
		paddingTop: '56.25%', // 16:9
	},
	cardContent: {
		flexGrow: 1,
	},
	footer: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(6),
	},
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album() {
	const classes = useStyles();

	let initialState = [
		{
			Product: 'Apple',
			Price: `$1.99`,
		},

		{
			Product: 'Banana',
			Price: `$ .99`,
		},

		{
			Product: 'Pear',
			Price: `$1.99`,
		},

		{
			Product: 'Orange',
			Price: `$ .99`,
		},
		{
			Product: 'Coconut',
			Price: `$3.99`,
		},

		{
			Product: 'Avocado',
			Price: `$199.99`,
		},
	];

	return (
		<React.Fragment>
			<CssBaseline />
			<main>
				<Container className={classes.cardGrid} maxWidth='lg'>
					<Grid container spacing={4}>
						{initialState.map((card) => (
							<Grid item key={card} xs={12} sm={6} md={4}>
								<Paper elevation={3}>
									<Card className={classes.card}>
										<CardContent
											className={classes.cardContent}
										>
											<Typography
												gutterBottom
												variant='h5'
												component='h2'
											>
												Product: {card.Product}
											</Typography>
											<Typography
												gutterBottom
												variant='h5'
												component='h2'
											>
												Price: {card.Price}
											</Typography>
										</CardContent>
										<span>
											<Button>Edit</Button>
											<Button>Delete</Button>
										</span>
									</Card>
								</Paper>
							</Grid>
						))}
					</Grid>
				</Container>
			</main>
		</React.Fragment>
	);
}
