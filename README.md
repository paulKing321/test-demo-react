This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

Articles:
1. Web trc and websocket
2. adding custom fonts with tailwind in nextjs and extending tailwind styles.
3. why you should use some next specific built in stuffs like Link, Image
4. Implicit and exlicit returns nextjs
    you can use an implicit () when you are only returning jsx
5. 10 things to note as a react beginner
- in defining source, when images are in public folder; src="/rmdb....."
- [teachings].jsx - dynamic routing
- _app.tsx
- nested loops
- getStaticProps and getServerSideProps
- difference between server side fetching and client side fetchiong i react query and when to use them; best practices.
react quuery fetches client side. 

Using typescript with react
1. marking types with ? makes it optional i.e it wont complain if it isnt used/found.
so if data can be undefined e.g data: string | undefined, i can add a ? (data?) and it will be error free. 
2. when you create a timeout in react, yo use NODEJS.Timeout as the type.
eg
const timer = React.useRef<NodeJS.Timeout>(null)


Notes:
Always use built in next Image as it will optimize the image rather than the img tag, though it behaves strange when you have responsive images sometimes. it has some huge impact on my site and the image sizes. it always requires width and height properties.

check out prority property on next Images <Image priority/>
next image also has placeholder="blur", blurDataUrl="/placeholder.jpg" properties

Always use built in next Link because next optimizes it rather than the a html tag

this - `Search results: ${data}`
and this - search + results + data.pages[0].results[0] + ${data.pages[0].total_results}
mean the same thing; string concatenation
use the first in cases where you have hardy text confirm whether hardy is the word e.g (${data}), when they are just variables, use the second

nested loop - check this out; when do i need to use a nested loop
data.pages.map(page => page.results.map(movie => <div key={movie.id}>{movie.original_title}</div>))

Infinite scroll functionality
when user scrolls to the bottom, load more data

const handleScroll = (e: react.UIEvent<HTMLElement>) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;

    if (scrollHeight - scrollTop === clientHeight) fetchNextPage(); // this is what means that you are at the bottom of the page, then fetchNextPage; a function from react-query that handles pagination.
}

tailwind with react/nextjs stuff
1. how to add styles in tailwind that is not there 
also differentiate between when to use theme and when to use extend
- eg h-128
go to tailwind.config.js, 
extend: {
    height: {
        128: '40rem'
    } // then you can use it as h-128
}
theme: {
    gridTemplateColumns: {
        'auto-fill': 'repeat(auto-fill, minmax(200px, 1fr))'
    } // then you can use it as grid-cols-auto-fill
}

2. we can pass in className as a prop into a child component so that we  can style it outside of the component
className={className} - check Grid component for use 
flex-col-reverse - test it out

3. when a text is too long, just pass in truncate
4. tailwind can animate e.g animate-spin
for the article build a basic spinner with tailwind css. check spinner component but change the svg in test-demo
5. a basic hover effect with tailwind - duration makes a nice little tramsition for it
e.g hover:opacity-80 duration-300

react query stuff
1. isLoading only applies to the first time data is being fetched while isFetching is true at other times and isLoading is false


i can create my own 404 page by just creating a 404.tsx page inside pages  

what is a <Pill />

