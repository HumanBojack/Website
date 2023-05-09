import { alphabetical, usage } from "./sortCategories";

export const getCategories = (posts: object[], selected: string[] = []) => {
  const categories = posts.reduce((previousPosts: object[], post: object) => {
    
    post.meta.categories.forEach((category: string) => {
      
      const alreadyExists = previousPosts.find((elm) => elm.name == category);
      if (!alreadyExists) previousPosts.push({ name: category, articles: [], selected: selected.includes(category) })
      
      previousPosts.find((elm) => elm.name == category).articles.push(post)
      
    });
    
    return previousPosts;
  }, []);

  // sort by alphabetical order
  categories.sort(alphabetical);

  // sort by number of articles
  categories.sort(usage);

  return categories;
}