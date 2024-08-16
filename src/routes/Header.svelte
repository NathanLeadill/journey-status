<script>
	import { page } from '$app/stores';
</script>

<header>
	<nav>
		<ul>
			<div class="top-row">
				<div class="logo-container">
					<img src="/images/logo.svg" alt="Svelte logo" />
				</div>
				<div class="account-management">
					<a href="/login">Log in</a>
					<a href="/signup">Sign up</a>
				</div>
			</div>
			<div class="divider">
				<hr />
			</div>
			<div class="bottom-row">
				<div class="page-links">
					<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
						<a class="page-link" href="/">Book</a>
					</li>
					<li aria-current={$page.url.pathname === '/manage' ? 'page' : undefined}>
						<a class="page-link" href="/manage">Manage</a>
					</li>
					<li aria-current={$page.url.pathname.startsWith('/check-in') ? 'page' : undefined}>
						<a class="page-link" href="/check-in">Check-in</a>
					</li>
					<li aria-current={$page.url.pathname.startsWith('/help') ? 'page' : undefined}>
						<a class="page-link" href="/help	">Help</a>
					</li>
				</div>
				<div class="language-selector">
					<div class="language-container">
						<img src="/icons/gb-flag.svg" alt="United Kingdom Flag" class="flag" />
						<span class="country">United Kingdom</span>
						<span class="language">English</span>
					</div>
				</div>
			</div>
		</ul>
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
		width: 100%;
	}

	ul {
		position: relative;
		padding: 20px 40px 10px;
		margin: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
		width: 100%;
		flex-direction: column;
	}

	li {
		position: relative;
		height: 100%;
	}

	.top-row {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 5px 0 15px;
		/* border-bottom: 1px solid rgba(215, 219, 216, 1); */
	}

	.divider {
		width: 100%;
	}
	.divider hr {
		border-color: rgba(215, 219, 216, 1);
	}

	.account-management {
		display: flex;
		flex-direction: row;
		gap: 12px;
	}

	.account-management a {
		font-family: 'Inter';
		font-size: 14px;
		color: rgba(54, 54, 54, 1);
		padding: 8px 16px 8px 16px;
		text-transform: capitalize;
	}

	.account-management a:last-of-type {
		background-color: rgba(75, 182, 156, 1);
		color: white;
		border-radius: 4px;
		padding: 6px 18px;
	}

	.bottom-row {
		display: flex;
		flex-direction: row;
		width: 100%;
		align-items: center;
		justify-content: space-between;
	}

	.bottom-row li {
		display: flex;
		padding: 25px 0 15px;
	}

	.bottom-row .page-links {
		display: flex;
		flex-direction: row;
		gap: 20px;
	}

	.language-container {
		display: flex;
		flex-direction: row;
		gap: 10px;
		align-items: center;
	}

	.language-selector .flag {
		width: 35px;
		height: 35px;
		border-radius: 8px;
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: rgba(95, 113, 108, 1);
		/* font-weight: 700; */
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	.page-link {
		font-weight: 500;
		position: relative;
		font-family: 'Inter';
		font-weight: 400;
		font-size: 16px;
		text-transform: capitalize;
	}

	.page-link::after {
		content: url('/icons/down-arrow.svg');
		display: block;
		width: 0;
		height: 2px;
		background: var(--color-theme-1);
		transition: width 0.3s;
		position: absolute;
		top: 0;
		right: 2px;
	}

	nav li[aria-current='page'] .page-link {
		font-weight: 700;
		color: black;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
