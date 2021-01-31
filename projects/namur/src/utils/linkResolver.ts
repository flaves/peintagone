// @ts-ignore
const linkResolver = ({ node, key, value }) => (doc): string => {
  return `/${doc.uid}`;
};

module.exports = linkResolver;
