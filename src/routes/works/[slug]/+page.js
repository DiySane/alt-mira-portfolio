import { works } from "$lib/data/content";

export function load({ params }) {
  const work = works.find((w) => w.slug === params.slug);

  if (!work) {
    throw new Error("Not found");
  }

  return { work };
}
