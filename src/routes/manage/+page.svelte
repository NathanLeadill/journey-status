<script lang="ts">
	import type { Journey } from '$lib/models/journey';
	import FlightStatus from '../components/flight-status.svelte';

	let flightNumber = 'XYP 12345';
	let errors: string[];
	let journey: Journey;
	async function searchFlight() {
		const request = await fetch('/api/status', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				flightNumber: flightNumber
			})
		});
		const data = await request.json();
		console.log('data', data);

		let { message, status } = data;
		console.log('message', message, status, 'status');

		if (!status) {
			errors = [message];
		} else {
			errors = [];
			journey = message;
		}
	}
</script>

{#if journey?.flightNumber === undefined}
	<div class="journey-status-container">
		<div class="flight-status">
			<h1>Flight Status</h1>
			<span>Check the real time status of your upcoming flight:</span>
		</div>

		<div class="status-search">
			<span class="search-label">Flight Number</span>
			<div class="search-container">
				<form>
					<input
						class="flight-number-input"
						type="text"
						placeholder="Enter flight number"
						required
						bind:value={flightNumber}
					/>
					<button type="submit" class="search-button" on:click={searchFlight}>Search</button>
				</form>
				<div class="errors">
					{#if errors}
						{#each errors as error}
							<p>{error}</p>
						{/each}
					{/if}
				</div>
			</div>
		</div>
	</div>
{/if}
{#if journey?.flightNumber !== undefined}
	<FlightStatus {journey} />
{/if}

<style>
	.journey-status-container {
		margin: 0 auto;
		width: 100%;
		max-width: 64rem;
		margin-top: 1rem;
	}
	.flight-status {
		display: flex;
		flex-direction: column;
		margin-bottom: 20px;
	}

	h1 {
		text-align: start;
		margin-bottom: 5px;
		font-family: 'Raleway';
		font-size: 32px;
		font-weight: 700;
	}

	.flight-status span {
		font-family: 'Inter';
		font-size: 18px;
		font-weight: 300;
		color: rgba(23, 55, 47, 1);
	}

	.status-search {
		display: flex;
		flex-direction: column;
		margin-top: 20px;
		background-color: white;
		padding: 40px 40px;
		border-radius: 8px;
	}

	.search-label {
		font-size: 16px;
		font-weight: 500;
		margin-bottom: 10px;
		color: rgba(63, 63, 63, 1);
		font-family: 'Figtree';
		letter-spacing: 0.075rem;
	}

	.search-container form {
		display: flex;
		justify-content: space-between;
		gap: 32px;
	}

	.flight-number-input {
		width: 100%;
		height: 56px;
		font-family: 'Inter';
		font-weight: 400;
		color: rgba(120, 138, 134, 1);
		padding-left: 20px;
		border: 1px solid rgba(229, 229, 229, 1);
	}

	.search-button {
		width: 280px;
		background-color: rgba(75, 182, 156, 1);
		color: white;
		border: none;
		border-radius: 6px;
		font-family: 'Inter';
	}

	.errors p {
		color: red;
		text-align: start;
	}

	.search-button:hover {
		cursor: pointer;
	}
</style>
