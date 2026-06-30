const IMAGES_COUNT = 8;

export const getArticleImage = (id: string): string => {
  const index = (Number(id) || 0) % IMAGES_COUNT;
  return `/images/articles/${index + 1}.png`;
};
