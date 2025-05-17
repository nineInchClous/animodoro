<script lang="ts">
	import { page } from '$app/state';
</script>

<div class="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
	{#if page.status === 404}
		<h1>Oops...</h1>
		<p>The page you're looking for doesn't exist.</p>
		<a href="/setting">Home</a>
	{:else}
		<h1>{page.status} {page.error?.message}</h1>
	{/if}
</div>
