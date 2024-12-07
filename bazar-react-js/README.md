This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Mega Menu Structure

```js
const megaMenus = [
  [
    {
      title: "Grocery",
      child: [
        { title: "Grocery-v1", url: "/grocery1" },
        { title: "Grocery-v2", url: "/grocery2" },
        { title: "Grocery-v3", url: "/grocery3" },
      ],
    },
    {
      title: "Others",
      child: [
        { title: "Health and Beauty", url: "/healthbeauty-shop" },
        { title: "Fashion", url: "/fashion-shop" },
        { title: "Gift Store", url: "/gift-shop" },
        { title: "Gadget", url: "/gadget-shop" },
      ],
    },
  ],
];
```

### changelog

## v3.0.0

###### June 16, 2022

- Add Admin/Vendor dashboard (25+ pages)
- Update npm packages

## v2.3.0

###### April 18, 2022

- Fix Build issue (added resolutions &amp; overrides in package.json)

## v2.2.0

###### March 21, 2022

- Fix Eslint errors

## v2.1.0

###### Dec 28, 2021

- Add 5 new store front variations
- Fix small UI issues

## v2.0.0

###### Oct 28, 2021

- Add JavaScript version
- Add REST API to Grocery shop
- Update to Next.js v12 and MUI v5.

## v1.2.0

###### Aug 25, 2021

- Migrate makeStyles API to v5
- Fix next/image issues
- Add new page &quot;Shop v4&quot;

## v1.1.0

###### Aug 12, 2021

- Add new page &quot;Shop v3&quot;

## v1.0.1

###### Aug 1, 2021

- Fix dashboard mobile navigation

## v1.0.0

###### Jul 1, 2021

Initial release

### Roadmap

1. More funcional cart, cookie
2. List of all APIs/Functions
