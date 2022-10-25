import { use } from "react";

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
  const res = await fetch(
    `https://hacker-news.firebaseio.com/v0/${path}.json`,
    {
      cache: "no-store",
    }
  );

  // const res = await loader.load(path);

  if (res.status !== 200) {
    throw new Error(`Status ${res.status}`);
  }

  return res.json();
}

export function useHn(path: string) {
  return use(fetchHn(path));
}
