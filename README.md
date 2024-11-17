# Website
This is my website, made with [svelte](https://svelte.dev) and [sveltekit](https://kit.svelte.dev).

You can find it at [spyr.dev](https://spyr.dev).

# Development
You can find more informations about the development of this website and the reasons of some choices in [my first article](https://spyr.dev/blog/hello) (also available on the [github](/src/routes/blog/posts/hello.md)).

You can install the dependencies with `npm install` and run the dev server with `npm run dev`.

# Docker
Build the image with `docker build -t website -f Containerfile .` and run it with `docker run -p 3000:3000 website`.
