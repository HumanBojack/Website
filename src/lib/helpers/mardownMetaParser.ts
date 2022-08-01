import yaml from "js-yaml";

export const markdownMetaParser = async (fileContent) => {

  const hasMetadata = /^-{3}\n(\w+: [\S ]+\n)+---/g.test(fileContent);
  if (!hasMetadata) return;

  const exp = /\n(\.{3}|-{3})/g;
  const metadataEnd = exp.exec(fileContent);

  const metadata = await yaml.load(fileContent.slice(0, metadataEnd.index));

  return {
    metadata: metadata,
    content: fileContent.slice(exp.lastIndex)
  }
};