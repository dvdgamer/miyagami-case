[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Logs

I'll be using these Logs to document my thought process and struggles throught the build of the app


- First hour was spent reasearching, seeing how to approach the project as I'm unfamiliar with Node.js and Express.
  I saw a Youtube tutorial on creating the backend and asked an LLM in which steps I should approach the challenge.

- Another problem. Don't know one which file to implement the fetchAPI. I'll solve this by reading the Flickr docs and using another project as reference

- Starting the Express.js was new, it's now posting after following a youtube tutorial. Realized I needed to install extra dependencies due to using TS.

- Now that I had the API connected the problem was translating XML to JSON. Luckily xml12 library takes care of that. The error handling was mainly AI generated tho  o(〃＾▽＾〃)o.

- I'm having troubles now trying to display the images. I'm trying to access through `item.link[0].$.href` but so far no luck. I don't know whether it is the wrong approach, API path or just the wrong API altogether :D

- Got stuck for a long time trying to format the images and make a consistent feed. It's still not perfect but for sure in the right track as most sizes are consistent.

- Made components to improve the readability of index.tsx. This was fairly straightforward
