type Journey = {
	flightNumber: string;
	date: Date;
	time: string;
	endTime: string;
	operator: string;
	departure: string;
	departureLocation: string;
	expectedTime: string;
	departureDelayed: boolean;
	delayedTime: string;
	destination: string;
	destinationLocation: string;
	scheduledTime: string;
	destinationExpectedTime: string;
	destinationDelayed: boolean;
};

export type { Journey };
