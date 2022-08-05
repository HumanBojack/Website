import yaml from "js-yaml";

export const markdownMetaParser = async (fileContent: string): Promise<{ metadata?: object[], content: string }> => {

  const metadataBegining = (fileContent.slice(0, 3) === "---") 
  const exp = /\n(\.{3}|-{3})/g;
  const metadataEnd = exp.exec(fileContent);

  if (!metadataBegining || !metadataEnd) return { content: fileContent };

  const metadata = await yaml.load(fileContent.slice(0, metadataEnd.index));

  return {
    metadata: metadata,
    content: fileContent.slice(exp.lastIndex)
  }
};