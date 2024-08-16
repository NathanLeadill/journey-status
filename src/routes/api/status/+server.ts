import { error } from '@sveltejs/kit';
import data from '../../../lib/database/database.json';
export async function POST({ request }) {
	const { flightNumber } = await request.json();

	if (!flightNumber) {
		error(400, { message: 'Missing flight number', status: false });
	}

	const journey = data.find((j) => j.flightNumber === flightNumber);

	if (!journey) {
		error(404, { message: 'Journey not found', status: false });
	}
	console.log(JSON.stringify(journey));

	return new Response(
		JSON.stringify({
			message: journey,
			status: true
		})
	);
}
