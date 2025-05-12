<script lang="ts">
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { ModeWatcher } from "mode-watcher";
	import ThemeToggle from '$lib/components/ui/themeToggle/themeToggle.svelte';
	import '../app.css';
	let { children } = $props();
</script>

	<ModeWatcher />
<ParaglideJS {i18n}>
	<ThemeToggle />
	{@render children()}
</ParaglideJS>
