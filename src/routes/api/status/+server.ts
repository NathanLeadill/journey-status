import { error } from '@sveltejs/kit';
import data from '../../../lib/database/database.json';
export async function POST({ request }) {
	const { flightNumber } = await request.json();

	if (!flightNumber) {
		error(400, { error: 'Missing flight number' });
	}

	const journey = data.find((j) => j.flightNumber === flightNumber);

	if (!journey) {
		error(404, { error: 'Journey not found' });
	}
	console.log(JSON.stringify(journey));

	return new Response(
		JSON.stringify({
			response: journey
		})
	);
}
