# Uses

**Here's some stuff I use**

- SvelteKit
- VsCode
- Emojis

```js
import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()]
};

export default config;
```

<script>
  import Header from '$lib/components/Header.svelte';
</script>

<Header />