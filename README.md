# astro-njx-verdant — botanical apothecary ecommerce theme for Astro

A complete storefront built with **Astro 5 + Tailwind CSS v4** in a deep-green botanical
voice: dark forest palette with a brass accent, a light sage mode, quick-view product
popups — wired for **Shopify** out of the box and deployable to **Cloudflare Pages**
(or any static host) in minutes.

**Live demo → [astro-njx-verdant.pages.dev](https://astro-njx-verdant.pages.dev)**
Everything in the demo — cart, checkout, search, favorites — is this theme running on mock data.

![astro-njx-verdant home page](submit-assets/home.png)

## What is this?

A **static storefront**: Astro renders every page to plain HTML at build time, so the
site is fast by default and hosting is essentially free. Product data comes from a
pluggable provider — start with the bundled JSON catalog, then flip one environment
variable and the same pages build from your **real Shopify store**, with Shopify's
hosted checkout handling payments.

Made for skincare brands, apothecaries, spas, florists and any shop that sells
with a botanical, garden-first voice.

## Features

- 🌿 **Deep-green design system** — dark forest palette + brass accent, staggered
  category tiles over a full-bleed hero, uppercase display type (Archivo)
- 🌤 **Two moods, one switch** — dark greenhouse by default, a light sage theme
  on toggle; no reload flash
- 🛒 **Persistent cart drawer** — quick-add, quantities, line remove, clear all,
  hands off to Shopify's hosted checkout
- ❤️ **Favorites** with badge counter
- 🔍 **Instant search** over an inline index
- 🔌 **Two data providers, one switch** — `COMMERCE_PROVIDER=mock` (bundled JSON)
  or `shopify` (live products over the Storefront API)
- 📝 **All copy in two constants files** — rebrand every text without touching markup
- 📄 **28 pages** — home, six collections with filters and sorting, 14 product pages,
  about, contacts, FAQ, account UI, privacy, terms, honest 404
- ⚡️ **Zero client framework** — a few small vanilla scripts; no React/Vue cost

## Quick start

```bash
git clone https://github.com/njbSaab/astro-njx-verdant.git my-store
cd my-store
npm install
cp .env.example .env        # defaults to the mock catalog
npm run dev                 # http://localhost:4321
```

That's it — the store runs on the bundled demo catalog (`src/data/mock-catalog.json`).
Edit that file to see your own products immediately.

## Connect your Shopify store

1. In Shopify admin: **Settings → Apps and sales channels → Develop apps → Create an app.**
2. Give it the *Storefront API* scopes (unauthenticated read products/collections/checkouts).
3. Install the app and copy the **Storefront API access token** (this token is public-safe).
4. Update `.env`:

```bash
COMMERCE_PROVIDER=shopify
PUBLIC_SHOPIFY_DOMAIN=your-store.myshopify.com
PUBLIC_SHOPIFY_STOREFRONT_TOKEN=xxxxxxxxxxxxxxxx
```

5. `npm run build` — the same pages now build from your live catalog, and the cart
   creates a real Shopify cart and redirects to your hosted checkout.

The provider interface lives in `src/lib/commerce/` — adding WooCommerce, Medusa or
your own API means implementing one small TypeScript interface.

## Deploy

Any static host works. For Cloudflare Pages:

```bash
npm run build
npx wrangler pages deploy dist --project-name my-store
```

The whole store fits comfortably in Cloudflare's free tier.

## Make it yours

- **All copy in two files** — `src/constants/components.ts` (header, footer, cart,
  search, modal) and `src/constants/pages.ts` (home, about, FAQ, product page, …).
- **Design tokens** — one `@theme` block in `src/styles/global.css`; the light sage
  mode is a single `.dark` override block.
- **Catalog** — `src/data/mock-catalog.json` + photos in `public/products/`, or Shopify.

## Project structure

```
src/
├── constants/              # ALL copy: components.ts + pages.ts
├── data/mock-catalog.json  # demo products & collections (14 items)
├── layouts/Layout.astro    # header, drawers, search, theme & cart logic
├── components/ProductCard.astro
├── lib/
│   ├── commerce/           # provider interface + mock & shopify implementations
│   ├── cart.ts             # persistent cart (nanostores)
│   └── favorites.ts        # favorites store
└── pages/                  # index, collections/, products/, about, faq, …
```

## Sibling themes & Pro

Same engine, different voices: **[astro-njx-store](https://github.com/njbSaab/astro-njx-store)**
(warm paper-and-pine), **[astro-njx-boutique](https://github.com/njbSaab/astro-njx-boutique)**
(editorial fashion) and **[astro-njx-dark-lux](https://github.com/njbSaab/astro-njx-dark-lux)**
(monochrome dark luxury). An extended **Pro** version (reviews, customer accounts,
richer catalog) is on the way — watch the repo to get notified.

## Credits

Made by [njX](https://njxui.dev) — also the author of [njx-ui](https://njxui.dev), a
classless-friendly CSS library for landings. Photos: [Unsplash](https://unsplash.com).

If this theme saves you time, a star on GitHub would make my day ♡
