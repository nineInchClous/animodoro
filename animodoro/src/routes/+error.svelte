<script lang="ts">
	import { page } from '$app/state';
	import DogImage from '$lib/assets/images/undraw_page-eaten_b2rt.svg';
</script>

<div class="simple-container">
	<div>
		<h1>Oops...</h1>
		{#if page.status === 404}
			<p>The page you're looking for doesn't exist.</p>
			<p>
				Please check your URL or return to the <a href="/">Home Page</a>
			</p>
		{:else}
			<p>{page.status} {page.error?.message}</p>
			<p>
				Please return to the <a href="/">Home Page</a>
			</p>
		{/if}
		<img alt="Dog and eaten papers" src={DogImage} />
	</div>
</div>

<style lang="postcss">
	.simple-container {
		@apply flex items-center justify-center;
		div {
			@apply text-center;

			h1 {
				@apply my-4 text-4xl font-bold;
			}

			p {
				@apply mb-2;

				a {
					@apply text-blue-500 hover:underline;
				}
			}

			img {
				@apply mx-auto mt-10 max-w-40;
			}
		}
	}
</style>
