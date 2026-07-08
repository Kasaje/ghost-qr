# Ghost QR

A minimal, open source QR code generator built with Next.js. Enter a URL, preview the generated QR code, and download it as a PNG file.

- Live demo: [https://ghost-qr-six.vercel.app/](https://ghost-qr-six.vercel.app/)
- Built with: `Next.js`, `TypeScript`, `Tailwind CSS`, and `qr-code-styling-node`

## Features

- Real-time QR code preview
- Download generated QR code as `png`
- Mobile-friendly layout and accessible button controls

## Getting Started

To run the app locally:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `app/page.tsx` — main QR generator UI and download logic
- `app/globals.css` — global styling
- `public/` — static assets

## Editing

Update `app/page.tsx` to change the QR code behavior, styling, or default URL.

## Deployment

This app is deployed on Vercel and currently available at:

[https://ghost-qr-six.vercel.app/](https://ghost-qr-six.vercel.app/)

For more details on deploying Next.js apps, see the official docs:

- [Next.js Deployment](https://nextjs.org/docs/app/building-your-application/deploying)

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
