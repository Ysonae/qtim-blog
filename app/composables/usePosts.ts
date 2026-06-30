import type { Post } from "~/types/post";

const BASE = "https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts";

export const usePosts = () => useFetch<Post[]>(BASE, { key: "posts" });

export const usePost = (id: MaybeRefOrGetter<string>) =>
  useFetch<Post>(() => `${BASE}/${toValue(id)}`, {
    key: () => `post-${toValue(id)}`,
  });
