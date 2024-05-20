
# Description
I've built this app using the Flickr Public Feed API. Displays random photos in an organized manner on the webpage.

# Live demo
You can find the live demo file [here](URL)

## Logs

I'll be using these Logs to document my thought process and struggles throught the build of the app


- First hour was spent reasearching, seeing how to approach the project as I'm unfamiliar with Node.js and Express.
  I saw a Youtube tutorial on creating the backend and asked an LLM in which steps I should approach the challenge.

- Another problem. Don't know one which file to implement the fetchAPI. I'll solve this by reading the Flickr docs and using another project as reference

- Starting the Express.js was new, it's now posting after following a youtube tutorial. Realized I needed to install extra dependencies due to using TS.

- Now that I had the API connected the problem was translating XML to JSON. Luckily xml12 library takes care of that. The error handling was mainly AI generated tho  o(〃＾▽＾〃)o.

- I'm having troubles now trying to display the images. I'm trying to access through `item.link[0].$.href` but so far no luck. I don't know whether it is the wrong approach, API path or just the wrong API altogether :D

- Got stuck for a long time trying to format the images and make a consistent feed. It's still not perfect but for sure in the right track as most sizes are consistent.

- Made components to improve the readability of index.tsx. This was fairly straightforward.

- Getting the searchbar to work was the toughest by far. I'm struggling to shape the request and understand the data flow. I'd do it but at this point I've been doing this for 7h and I wasn't supposed to even spend so long on this (But did get excited)
I'll now deploy it as is.
