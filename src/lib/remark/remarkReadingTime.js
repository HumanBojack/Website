export const remarkReadTime = () => {
  let visit;

  return async function transformer(tree, vFile) {
    if (!visit) {
      visit = (await import('unist-util-visit')).visit;
    }

    vFile.data.fm["hello"] = "world";

    let text = "";
    visit(tree, ["text", "code"], (node) => {
      text += node.value;
    })

    // console.log(getReadTime(text))
    vFile.data.fm["readTime"] = await getReadTime(text);
  }
};

export const getReadTime = async (text) => {
  const wordCount = text.split(" ").filter((word) => word != "").length;
  const readTime = Math.ceil(wordCount / 180);
  return readTime;
};