import { experimental_use as use } from "react";

import DataLoader from "dataloader";

const loader = new DataLoader(
  async (paths: readonly string[]) => {
    return Promise.all(
      paths.map((path) =>
        fetch(`https://hacker-news.firebaseio.com/v0/${path}.json`)
      )
    );
  },
  { cache: false }
);

export default async function fetchHn(path: string) {
  // Note: the use of dataloader here is superfluous because the downstream API
  // doesn't support batching and the use of suspense at the component level
  // gives us the other benefit -- loading synchronisation. It's really just
  // here to illustrate how you *might* use it.
  const res = await loader.load(path);

  if (res.status !== 200) {
    throw new Error(`Status ${res.status}`);
  }

  return res.json();
}

export function useHn(path: string) {
  return use(fetchHn(path));
}
