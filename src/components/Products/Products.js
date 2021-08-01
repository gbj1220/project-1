import { v4 as uuidv4 } from 'uuid';

let products = [
	{
		Product: 'Apple',
		Price: 1.99,
		id: uuidv4(),
	},

	{
		Product: 'Banana',
		Price: 0.99,
		id: uuidv4(),
	},

	{
		Product: 'Pear',
		Price: 1.99,
		id: uuidv4(),
	},

	{
		Product: 'Orange',
		Price: 0.99,
		id: uuidv4(),
	},

	{
		Product: 'Coconut',
		Price: 3.99,
		id: uuidv4(),
	},

	{
		Product: 'Avocado',
		Price: 199.99,
		id: uuidv4(),
	},
];

export const loginInfo = [
	{
		name: 'Greg',
		password: '123',
	},
];

export const getProducts = () => {
	return products;
};
