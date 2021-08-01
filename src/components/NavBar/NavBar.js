import { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { mainContext } from '../../context/context';
import { rows } from '../ShoppingCart/ShoppingCart';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}));

export default function NavBar() {
	const classes = useStyles();

	const context = useContext(mainContext);

	const cartItems = rows;

	let helperFunc;

	cartItems.length > 1
		? (helperFunc = <AddShoppingCartIcon color='action' />)
		: (helperFunc = <AddShoppingCartIcon color='action' />);

	const authorized = () => {
		return (
			<div className={classes.root}>
				<AppBar position='static'>
					<Toolbar>
						<IconButton
							edge='start'
							className={classes.menuButton}
							color='inherit'
							aria-label='menu'
						>
							<MenuIcon />
						</IconButton>
						<Typography variant='h6' className={classes.title}>
							My Shopping App
						</Typography>
						<Typography>{context.state.user}</Typography>
						<IconButton>{helperFunc}</IconButton>
						<Button
							onClick={() =>
								context.dispatch({ type: 'LOG_OUT' })
							}
							color='inherit'
						>
							Logout
						</Button>
					</Toolbar>
				</AppBar>
			</div>
		);
	};

	const notAuthorized = () => {
		return (
			<div className={classes.root}>
				<AppBar position='static'>
					<Toolbar>
						<IconButton
							edge='start'
							className={classes.menuButton}
							color='inherit'
							aria-label='menu'
						>
							<MenuIcon />
						</IconButton>
						<Typography variant='h6' className={classes.title}>
							My Shopping App
						</Typography>
						<IconButton>{helperFunc}</IconButton>
						<Button color='inherit'>Login</Button>
					</Toolbar>
				</AppBar>
			</div>
		);
	};

	{
		return context.state.isAuth ? (
			<div>{authorized()}</div>
		) : (
			<div>{notAuthorized()}</div>
		);
	}
}
