<script lang="ts">
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { ModeWatcher } from 'mode-watcher';
	import ThemeToggle from '$lib/components/ui/theme-toggle/theme-toggle.svelte';
	import LocaleToggle from '$lib/components/ui/locale-toggle/local-toggle.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<ParaglideJS {i18n}>
	<ModeWatcher />
	<ThemeToggle />
	<LocaleToggle />
	{@render children()}
</ParaglideJS>
