import { marked } from 'marked';

const footnoteMatch = /^\[\^([^\]]+)\]:([\s\S]*)$/;
const referenceMatch = /\[\^([^\]]+)\](?!\()/g;
const referencePrefix = 'marked-fnref';
const footnotePrefix = 'marked-fn';

const footnoteTemplate = (ref: string, text: string) => {
  return `<li id="${footnotePrefix}:${ref}">${marked.parseInline(
    text
  )} <a href="#${referencePrefix}:${ref}">↩</a></li>`;
};
const footnoteContainerTemplate = (text: string) => {
  return `<div class="marked-footnotes"><h2>Footnotes</h2><ol>${text}</ol></div>`;
};
const referenceTemplate = (ref: string) => {
  return `<sup id="${referencePrefix}:${ref}"><a href="#${footnotePrefix}:${ref}">${ref}</a></sup>`;
};
const interpolateReferences = (text: string) => {
  return text.replace(referenceMatch, (_, ref) => {
    return referenceTemplate(ref);
  });
};
const interpolateFootnotes = (text: string) => {
  const found = text.match(footnoteMatch);
  if (!found) {
    return text;
  }
  const replacedText = text.replace(footnoteMatch, (_, value, text) => {
    return footnoteTemplate(value, text);
  });
  return footnoteContainerTemplate(replacedText);
};

export const footnotes: Partial<Omit<marked.Renderer<false>, 'options'>> = {
  paragraph(text) {
    return marked.Renderer.prototype.paragraph.apply(null, [interpolateReferences(interpolateFootnotes(text))]);
  },
  text(text) {
    return marked.Renderer.prototype.text.apply(null, [interpolateReferences(interpolateFootnotes(text))]);
  },
};