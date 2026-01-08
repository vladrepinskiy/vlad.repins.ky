import type { NowPost } from "../types/now.types";

// Import all now page images - Bun will bundle these
import uganda1 from "../../public/now/uganda-1.jpeg";
import uganda2 from "../../public/now/uganda-2.jpeg";
import uganda3 from "../../public/now/uganda-3.jpeg";
import uganda4 from "../../public/now/uganda-4.jpeg";
import uganda5 from "../../public/now/uganda-5.jpeg";

export const NOW_POSTS: NowPost[] = [
  {
    title: "3 Weeks In Uganda",
    date: "December 2025 - January 2026",
    content: [
      "Still amazed by our first venture into Africa. No matter how many times I've seen it on the pictures, it's still a surreal experience to be there in person.",
      "A roadtrip all around Uganda was a great way to see the entire spectrum, from the remote mountain regions to savannahs and the beautiful lakes. The amount of wildlife and natural beauty is something that's hard to describe.",
      "Poverty and inequality are starkly visible, and it's a good wake up call to the reality of the world.",
    ],
    images: [uganda1, uganda2, uganda3, uganda4, uganda5],
  },
];
