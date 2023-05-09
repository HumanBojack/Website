---
title: Hello.
subtitle: The story of spyr.dev
date: 2023-05-08
categories:
- svelte
- web
- dev
---

# Chapter 1
I have always wanted to have my own website to publish my projects, articles, and share them with the world. However, I always told myself that I had nothing to display and nothing to say, even though I was writing way too much on Twitter.

But a few months ago, I came across a website someone in my class made[^1]. It was fairly simple but displayed every project he made. I realized that **every one of these projects was something I had also done**. The only difference between us was that he made a website and didn't think too much about whether his projects were good enough or not for his website.

That's when I told myself **it was time**. Let's do this.

![the website I saw](/images/blog/hello/classmate-website.png)
*The website my classmate made[^1]*

# Chapter 2
Let's say that my relationship with frontend development was **complicated** at the time I started this project. I didn't like writing CSS that much, nor polluting my HTML with *bootstrap* classes. *JavaScript* was closer to my heart, but a bad experience with *React* made me sway back from JS frameworks.

So, you get it: I didn't like frontend. At least until I discovered **Svelte**.

One night, as I was thinking about this damn frontend I had to make, a friend of mine sent me a message. It read "Check this out when you can, this is the **most loved JS framework**.", and then, there was a link to a [video](https://youtu.be/kMlkCYL9qo0). A documentary about this framework called *Svelte* that was made by journalists.

For the first time, I felt **hype** for frontend development. I began making this website using *Svelte* and its brother *SvelteKit* **the next day**.

I started by following the [Svelte tutorial](https://svelte.dev/tutorial/basics) to get used to it. The framework is fairly easy to apprehend, and it did not take me too much time to understand the ins and outs. After that, I found another tutorial on building blogs with it (exactly what I wanted!)[^2].

I had a lot of fun tinkering with Svelte. What started off as a chore became something I actually **wanted to learn**. But as I was starting to feel at peace, something happened.

![the svelte / sveltekit tutorial I followed](/images/blog/hello/svelte-tutorial-blog.png)
*The tutorial I followed[^2]*

# Chapter 3
In order to reduce costs, I decided to **not have a backend**[^3]. That meant that I had to store **everything** in the frontend, including articles. That's not really a problem for my use case, but that meant that I had to think of a better way to write articles than HTML.

Since I use *Markdown* for all my notetaking and since it's pretty much HTML, I decided to store my files as *Markdown*. I would just need to **convert them** to HTML at build or read time. Easy!

Not easy. I lost way too much time choosing when and how to convert those files. I first tried with *MDsveX*, but I didn't like working with a dependency that wasn't really maintained anymore. I then tried **doing the work myself**, but I felt like I was **overcomplicating** everything, making too many compromises, and kind of reinventing the wheel[^4]. So I got back to *MDsveX* in the end; the solution is **not ideal** but is still **good enough** for what I need.

On top of *MDsveX*, I used two very cool packages named [reMark](https://github.com/remarkjs/remark)  and [reHype](https://github.com/rehypejs/rehype). They respectively **transform Markdown and HTML** to add various things. I use them to add many things, like heading slugs, links and icons, external links icons, and even footers links.

The rest of the work on the frontend was just a lot of tweaking. It took me time to get things right and make them intuitive since I'm no UX designer, but at least it wasn't as frustrating as the previous step. I worked **iteratively** by making little modifications based on the reviews from my peers.

# Chapter 4
This chapter begins with this article (woah, meta) and will keep on going for, I hope, a very long time. I now have a platform where I can talk about what I want, be it the stuff that goes through my head or the projects that matter to me.

I don't actually know **what I'll talk about**, and I'm not stressed about not knowing either. I'll figure it out eventually and hope that you'll like the content I produce along the way.

[^1]: The website was hosted on *Heroku*, and is not available anymore. But the repository is still available here: https://github.com/AyoubHaddou/portefolio_django
[^2]: Josh Collinsworth is a frontend developer that made a few great ressources on Svelte. He also keep his work updated. The guide I followed is available here: https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog
[^3]: I host my website on [vercel](https://vercel.com/) using their free plan. I don't want to pay for a backend, so I don't have one.
[^4]: You can find my attempt at parsing markdown on the [MarkdownParsing branch](https://github.com/humanbojack/website/tree/MarkdownParsing) of the website's repository
