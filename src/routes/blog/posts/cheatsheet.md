---
title: Markdown Cheatsheet
subtitle: A showcase of markdown's possibilities
date: 2022-08-01
categories:
- tutorial
---

# This is a level 1 title
## This is a level 2 title
### This is a level 3 title
#### This is a level 4 title

*This text is important*

**This text is really important**

>This is a famous quote
> -from a famous author [^1]

<!-- Can you see this line ? -->

***

1. This is the first element of an ordered list
2. And this is the second one !

- This is an unordered list
- and you can write as many points as you'd like
	- You can even write nested points
		- And nested nested points


***

`This is used for code but you can use it to highlight text`
==And you can also use that to highlight==

***
[You can make links like this](https://google.com)

And insert images like this \\/

![This is an image](/images/blog/google-logo.png)
*hey*


And you can even do images with a link like this \\/

[![this is an image](/images/blog/google-logo.png)](https://google.com)
*A clickable google image*

***


Text can be striked through ~~like this~~

| Title         | Description             |
| ------------- | ----------------------- |
| A title       | And a description       |
| Another title | And another description |
| test          | de truc                 | 


- [x] Build a task list
- [ ] Use it
- [ ] Then do another one

```svelte
<div class="presentation">
	{#if metadata.hero}
		<div class="hero">
			<h1>{metadata.title}</h1>
			<img src="/images/hero/{metadata.hero}" alt={metadata.hero_alt}/>
		</div>
	{:else}
		<h1>{metadata.title}</h1>
	{/if}
	<h5>{metadata.subtitle}</h5>
	<p>
		<time datetime={metadata.date}>
			{new Date(metadata.date).toLocaleDateString("en-US", { year: "numeric", month: 'long', day: 'numeric' })}
		</time>
		— a {metadata.readTime} minute{metadata.readTime > 1 ? "s" : ""} read
	</p>
	
	<div class="categories">
		{#each metadata.categories as category}
			<a href="/blog?category={category}">{category}</a>
		{/each}
	</div>

</div>
```


[^1]: An example of footer content