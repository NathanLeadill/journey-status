<script lang="ts">
	import type { Journey } from '$lib/models/journey';

	export let journey: Journey;
</script>

<div class="journey-status-header">
	<div class="journey-details">
		<span class="flight-number">
			Flight Number:
			<span class="flight-number-value">
				{journey.flightNumber}
			</span>
		</span>
		<span class="departure"> {journey.date} | {journey.time}</span>
		<a href="/manage" class="edit-search">Edit Search</a>
	</div>
</div>

<div class="journey-info-box">
	<div class="operator-info">
		<img src="/icons/carrier-ba.svg" alt="British Airways" />
		<span class="flight-number">{journey.flightNumber}</span>
		<span class="operator-name">Operated by {journey.operator}</span>
	</div>
	<div class="locations">
		<div class="departure-location">
			<span class="location-name">
				{journey.departure}
			</span>
			<span class="terminal-information">
				{journey.departureLocation}
			</span>
		</div>
		<div class="destination-location">
			<span class="location-name">
				{journey.destination}
			</span>
			<span class="terminal-information">
				{journey.destinationLocation}
			</span>
		</div>
	</div>
	<div class="journey-details-infomation">
		<div class="detail-column">
			<span class="details">Departure Details</span>
			<div class="times">
				<div class="time-column">
					<span class="time-label"> Scheduled </span>
					<span class="time-value">
						{journey.time}
					</span>
				</div>
				<div class="time-column">
					<span class="time-label">Expected</span>
					<span class="time-value" class:expected={journey.departureDelayed}>
						{journey.expectedTime}
					</span>
				</div>
				<div class="time-column">
					{#if journey.departureDelayed}
						<span class="delayed-bubble">Delayed</span>
						<span class="time-label">{journey.delayedTime}</span>
					{:else}
						<span class="on-time-bubble">On Time</span>
					{/if}
				</div>
			</div>
			<p class="date">{journey.date}</p>
			<p class="estimated-notice">Estimated, please check with carrier</p>
		</div>
		<div class="detail-column">
			<img src="/icons/plane.svg" alt="Plane" />
		</div>
		<div class="detail-column">
			<span class="details">Arrival Details</span>
			<div class="times">
				<div class="time-column">
					<span class="time-label">Scheduled</span>
					<span class="time-value">{journey.scheduledTime}</span>
				</div>
				<div class="time-column">
					<span class="time-label">Expected</span>
					<span class="time-value expected" class:expected-on-time={!journey.destinationDelayed}
						>{journey.destinationExpectedTime}</span
					>
				</div>
				<div class="time-column">
					{#if journey.destinationDelayed}
						<span class="delayed-bubble">Delayed</span>
						<span
							class="time-label
            ">{journey.delayedTime}</span
						>
					{:else}
						<span class="on-time-bubble">On Time</span>
					{/if}
				</div>
			</div>
			<p class="date">{journey.date}</p>
			<p class="estimated-notice">Estimated, please check with carrier</p>
		</div>
	</div>
</div>

<style>
	.journey-status-header {
		display: flex;
		background-color: white;
		width: 100%;
	}
	.journey-details {
		display: flex;
		justify-content: space-between;
		max-width: 70%;
		margin: 0 auto;
		padding: 1rem;
		flex-direction: column;
		width: 100%;
		gap: 6px;
	}

	.flight-number {
		font-family: 'Raleway';
		font-weight: 700;
		font-size: 32px;
	}

	.flight-number-value {
		font-family: 'Inter';
		font-weight: 500;
		font-size: 32px;
	}
	.departure {
		font-family: 'Inter';
		font-weight: 400;
		font-size: 18px;
	}

	.edit-search {
		color: rgba(75, 182, 156, 1);
		position: relative;
		display: flex;
		align-items: center;
		margin-top: 24px;
		font-family: 'Inter';
	}

	.edit-search::after {
		position: relative;
		right: -8px;
		content: url('/icons/down-arrow.svg');
		height: 16px;
		width: 16px;
		bottom: 2px;
		filter: invert(67%) sepia(8%) saturate(2486%) hue-rotate(115deg) brightness(93%) contrast(86%);
	}

	.journey-info-box {
		width: 1000px;
		padding: 60px 60px 20px;
		display: flex;
		flex-direction: column;
		background: white;
		border-radius: 8px;
		margin: 40px auto 0;
	}
	.journey-details-infomation {
		display: flex;
		flex-direction: row;
		gap: 60px;
	}
	.operator-info {
		display: flex;
		flex-direction: row;
		gap: 20px;
	}

	.operator-info span {
		font-family: 'Inter';
		font-weight: 400;
		font-size: 18px;
	}
	.flight-number {
		font-weight: 500;
	}
	.locations {
		margin-top: 70px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.locations div {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.location-name {
		font-family: 'Figtree';
		font-weight: 700;
		font-size: 18px;
	}
	.terminal-information {
		font-family: 'Figtree';
		font-weight: 400;
		font-size: 16px;
	}
	.detail-column {
		margin: 40px 0;
		display: flex;
		flex-direction: column;
		flex: 1;
	}
	.details {
		font-family: 'Figtree';
		font-size: 18px;
		font-weight: 400;
		line-height: 36px;
		margin: 20px 0;
	}

	.times {
		display: flex;
		flex-direction: row;
		gap: 20px;
	}

	.time-column {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	.time-label {
		font-family: 'Figtree';
		font-weight: 400;
		font-size: 14px;
		color: #8c8e92;
	}

	.time-value {
		font-family: 'Figtree';
		font-weight: 400;
		font-size: 20px;
		line-height: 36px;
	}

	.expected {
		color: #ff423f;
	}

	.expected-on-time {
		color: #72b520;
	}

	.delayed-bubble {
		background-color: #ffa921;
		border-radius: 6px;
		color: white;
		padding: 4px 6px;
		text-transform: uppercase;
		font-family: 'Figtree';
	}
	.on-time-bubble {
		background-color: #72b520;
		border-radius: 6px;
		color: white;
		padding: 4px 6px;
		text-transform: uppercase;
		font-family: 'Figtree';
	}
	.date {
		margin: 20px 0 0;
		font-family: 'Inter';
		font-size: 14px;
		color: #17372f;
	}
	.estimated-notice {
		margin: 10px 0;
		font-family: 'Inter';
		color: #17372f;
		font-size: 14px;
	}
</style>
