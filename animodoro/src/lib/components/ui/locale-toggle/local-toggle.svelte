<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { languageTag } from '$lib/paraglide/runtime.js';
	import type { AvailableLanguageTag } from '$lib/paraglide/runtime';
	import { i18n } from '$lib/i18n';
	import { page } from '$app/state';
	import { goto } from '$app/navigation';

	let currentLanguageTag = $state(languageTag());

	const toggleLocale = () => {
		const newLanguage = currentLanguageTag === 'en' ? 'fr' : 'en';
		currentLanguageTag = newLanguage;
		switchToLanguage(newLanguage);
	};

	function switchToLanguage(newLanguage: AvailableLanguageTag) {
		const canonicalPath = i18n.route(page.url.pathname);
		const localisedPath = i18n.resolveRoute(canonicalPath, newLanguage);
		goto(localisedPath);
	}
</script>

<Button variant="outline" size="icon" onclick={toggleLocale}>
	{currentLanguageTag}
</Button>
