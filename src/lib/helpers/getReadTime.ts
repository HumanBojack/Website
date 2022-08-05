export const getReadTime = async (text: string) => {
  const wordCount: number = text.split(" ").filter((word: string) => word != "").length;
  const readTime = Math.ceil(wordCount / 180);
  return readTime;
}