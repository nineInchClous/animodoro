<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.js";
    import { languageTag, setLanguageTag} from "$lib/paraglide/runtime.js";

    let currentLanguageTag = $state(languageTag());

    const toggleLocale = () => {
        if (languageTag() === 'en') {
            setLanguageTag('fr')
            currentLanguageTag = 'fr';
        }
        else {
            setLanguageTag('en');
            currentLanguageTag = 'en';
        }
    }
</script>

<Button variant="outline" size="icon" onclick={toggleLocale}>
    {currentLanguageTag === 'en' ? 'FR' : 'EN'}
</Button>

