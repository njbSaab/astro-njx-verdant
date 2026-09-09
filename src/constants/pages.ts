/**
 * All page copy lives here. One section — one object.
 * Fields ending in *Html are injected via set:html (they contain links/code) — edit carefully.
 */
import { SITE } from './components';

export const HOME = {
  hero: {
    title: 'Grown slow. Bottled quiet.',
    text: 'Small-batch botanical skincare — cold-pressed oils, garden-grown herbs and rituals that ask five honest minutes of your evening.',
    cta: { label: 'Get the theme on GitHub', href: SITE.repoUrl },
    cta2: { label: 'All themes & Pro', href: SITE.themesUrl },
    image: { src: '/products/hero.jpg', alt: 'Dark botanical leaves in soft light' },
  },
  // 6 category tiles overlap the hero in a staggered 2-1-2-1 layout
  categoryShelf: {
    images: {
      skincare: '/products/botanical-face-serum.jpg',
      body: '/products/verdant-body-oil.jpg',
      hair: '/products/rosemary-scalp-oil.jpg',
      candles: '/products/moss-amber-candle.jpg',
      tools: '/products/jade-gua-sha.jpg',
      sets: '/products/verdant-starter-set.jpg',
    } as Record<string, string>,
  },
  // three product sliders, one per featured collection
  shelves: [
    { collection: 'skincare', title: 'Skincare', allLabel: 'All skincare' },
    { collection: 'body', title: 'Body Care', allLabel: 'All body care' },
    { collection: 'sets', title: 'Ritual Sets', allLabel: 'All sets' },
  ],
  services: [
    {
      icon: 'truck',
      title: 'Free delivery',
      text: 'Flat $4.99 shipping. Free on every order over $60.',
    },
    {
      icon: 'mail',
      title: 'Newsletter',
      text: 'Seasonal harvests, restocks and one good recipe a month.',
    },
    {
      icon: 'shield',
      title: 'Secure payment',
      text: 'Card or PayPal — every payment is encrypted end to end.',
    },
    {
      icon: 'chat',
      title: 'Real support',
      text: 'A question about your skin? A human herbalist answers within a day.',
    },
  ],
  colophon: {
    eyebrow: 'astro-njx-verdant · free ecommerce theme for Astro',
    title: 'This apothecary is a theme. Take it.',
    text: 'Cart, search, saved-for-later, the quick-view popup, checkout — all of it is astro-njx-verdant, a static storefront you can fork today. Point one env var at your Shopify store and these pages rebuild from your real catalog.',
    cta: { label: 'Get the theme on GitHub', href: SITE.repoUrl },
    cta2: { label: 'All themes & Pro', href: SITE.themesUrl },
    image: { src: '/products/banner.jpg', alt: 'Hands giving a botanical oil massage' },
  },
} as const;

export const COLLECTION = {
  metaSuffix: ` — ${SITE.name}`,
  allTag: 'All',
  sortLabel: 'Sort',
  sortOptions: [
    { value: 'featured', label: 'Featured' },
    { value: 'price-asc', label: 'Price: low to high' },
    { value: 'price-desc', label: 'Price: high to low' },
    { value: 'title', label: 'Name A–Z' },
  ],
  emptyCollection: 'Nothing here yet — the other shelves are fuller.',
  emptyFilter: 'No products match this filter.',
} as const;

export const PRODUCT = {
  breadcrumbHome: 'Home',
  optionsLegend: 'Options',
  addToCart: 'Add to cart',
  accordion: [
    {
      title: 'Ingredients & shelf life',
      text: 'Full INCI on every label, batch date on the base. Our formulas are preservative-light — keep them cool, closed and out of direct sun, and use within six months of opening.',
    },
    {
      title: 'Shipping & returns',
      text: 'Flat $4.99, free over $60, shipped in 1–2 days. Unopened products return free for 30 days — reply to your order email and we send a label.',
    },
  ],
  relatedTitle: 'Pairs well with',
  trust: {
    delivery: 'Ships in 1–2 days · Free over $60',
    returns: '30-day returns · Batch date on every jar',
  },
} as const;

export const ABOUT = {
  meta: {
    title: 'About — Verdant',
    description: 'Who makes Verdant: a garden-first apothecary blending skincare in small batches.',
  },
  hero: {
    title: 'It starts in a garden.',
    paragraphs: [
      'Verdant began as a herbalist’s bench in a greenhouse — sage, rosemary and calendula grown two metres from the pot they were infused in. The bench grew into a workshop; the recipes stayed the size of a saucepan.',
      'We cold-press, macerate and pour in batches small enough to date by hand. When a harvest runs out, the formula waits for the next one — that is the point.',
    ],
    image: { src: '/products/hero.jpg', alt: 'Dark botanical leaves in the workshop' },
  },
  numbers: [
    { num: '2020', label: 'first balm poured' },
    { num: '14', label: 'herbs in the garden' },
    { num: '40 L', label: 'largest batch we make' },
    { num: '0', label: 'synthetic fragrances' },
  ],
  themeBlock: {
    eyebrow: 'The honest part',
    title: 'This apothecary is a demo. The theme is real.',
    textHtml:
      'The greenhouse, the saucepan batches, the 14 herbs — all invented to show <strong class="font-semibold text-ink">astro-njx-verdant</strong>, a free botanical ecommerce theme for Astro, working at full speed. Fork it, swap the catalog, and you have a store of your own. An extended Pro version is on the way.',
    cta: { label: 'Get it on GitHub', href: SITE.repoUrl },
    howTitle: 'How the integration works',
    howItemsHtml: [
      '<strong class="font-medium text-ink">Astro 5 renders everything statically.</strong> A Node.js build fetches the catalog once and ships pure HTML — no client framework, fast by default.',
      '<strong class="font-medium text-ink">Two data providers, one switch.</strong> <code class="rounded bg-tile px-1.5 py-0.5 font-mono text-[13px]">COMMERCE_PROVIDER=mock</code> uses the bundled JSON catalog; <code class="rounded bg-tile px-1.5 py-0.5 font-mono text-[13px]">shopify</code> pulls real products over the Shopify Storefront API (GraphQL).',
      "<strong class=\"font-medium text-ink\">Checkout stays on Shopify.</strong> The cart lives in localStorage; at checkout the theme creates a Shopify cart and hands off to their hosted, PCI-compliant checkout.",
      '<strong class="font-medium text-ink">Hosted on Cloudflare Pages.</strong> Static output deploys in seconds and runs comfortably on the free tier.',
    ],
  },
  cta: {
    title: 'Questions about your skin?',
    text: 'Write to us — the person who poured your jar will probably answer.',
    button: { label: 'Contact the atelier', href: '/contacts' },
  },
} as const;

export const CONTACTS = {
  meta: {
    title: 'Contacts — Verdant',
    description: 'Orders, stockists, skin advice — write to the Verdant atelier.',
  },
  title: 'Talk to the atelier',
  text: 'Orders, stockists, or which oil suits your skin — ask. A human answers within a day.',
  cards: {
    email: {
      title: 'Email',
      address: 'hello@verdant.demo',
      note: 'Add your order number for the fastest reply.',
    },
    warehouse: {
      title: 'Atelier',
      lines: ['Glasshouse 3, 11 Fern Walk', 'Ghent — visits by appointment'],
    },
    elsewhere: {
      title: 'Elsewhere',
      links: [
        { label: 'GitHub — this theme', href: SITE.repoUrl },
        { label: 'njX UI — the library', href: SITE.authorUrl },
      ],
    },
  },
  form: {
    nameLabel: 'Name',
    namePlaceholder: 'Sage Willow',
    emailLabel: 'Email',
    emailPlaceholder: 'you@example.com',
    messageLabel: 'Message',
    messagePlaceholder: 'Which skin, which season, which ritual?',
    submitLabel: 'Send message',
    demoNote: "Demo mode — the form isn't wired to a backend. Point it at your email service or an API route.",
  },
} as const;

export const FAQ_PAGE = {
  meta: {
    title: 'FAQ — Verdant',
    description: 'Ingredients, shelf life, shipping, returns — answers to the questions the atelier hears most.',
  },
  title: 'Asked often',
  introHtml:
    'Short answers, no legal fog. Missing something? <a href="/contacts" class="text-brand underline underline-offset-2">Write to us.</a>',
  items: [
    {
      q: 'Are the products really natural?',
      a: 'Every formula is plant-based with a full INCI on the label. No synthetic fragrance, no mineral oil. “Natural” is a loose word — so we list everything and let you read.',
    },
    {
      q: 'My oil looks cloudy / smells different than last time.',
      a: 'That is the harvest, not a defect. Cold-pressed oils shift with the season — colour and scent drift a little from batch to batch. The batch date is on every base.',
    },
    {
      q: 'How long does shipping take?',
      a: 'Orders leave within 1–2 business days. EU: 2–4 days. Everywhere else: 5–10. Flat $4.99, free over $60, tracked always.',
    },
    {
      q: 'Which ritual should I start with?',
      a: 'The Starter Set exists for exactly this — travel sizes of the serum, body oil and soap bar. Or write to us with your skin type and we assemble one by hand.',
    },
    {
      q: 'Do you supply salons and spas?',
      a: 'Yes — treatment sizes and open-shelf retail, from small monthly volumes. Email hello@verdant.demo with your treatment menu.',
    },
    {
      q: 'Is this a real apothecary?',
      a: 'It is a demo for the astro-njx-verdant theme: the products are fictional, but everything else works — cart, quick view, checkout flow, search. Grab the theme on GitHub and make it your real store.',
    },
  ],
} as const;

export const ACCOUNT = {
  meta: {
    title: 'Account — Verdant',
    description: 'Sign in to your Verdant account or create a new one.',
  },
  tabs: { login: 'Sign in', register: 'Create account' },
  login: {
    title: 'Welcome back',
    sub: 'Orders, refills and faster checkout.',
    submit: 'Sign in',
    demoNote: 'Demo mode — sign-in is a stub. Connect Shopify Customer Accounts or your own backend here.',
  },
  register: {
    title: 'Join Verdant',
    sub: 'One account for orders and first word on new harvests.',
    submit: 'Create account',
    demoNote: 'Demo mode — account creation is a stub. Connect Shopify Customer Accounts or your own backend here.',
  },
  fields: {
    nameLabel: 'Name',
    namePlaceholder: 'Sage Willow',
    emailLabel: 'Email',
    emailPlaceholder: 'you@example.com',
    passwordLabel: 'Password',
    passwordPlaceholder: '••••••••',
    remember: 'Remember me',
    forgot: 'Forgot password?',
  },
  pageNote: 'Demo page — wire it to Shopify Customer Accounts or your own auth backend.',
} as const;

export const NOT_FOUND = {
  meta: { title: 'Page not found — Verdant' },
  title: 'Nothing growing here.',
  text: 'This page moved, sold out, or never took root. The good stuff is one click away.',
  ctaPrimary: { label: 'Back to the atelier', href: '/' },
  ctaSecondary: { label: 'Browse skincare instead', href: '/collections/skincare' },
} as const;

export const PRIVACY = {
  meta: {
    title: 'Privacy Policy — Verdant',
    description: 'How Verdant handles your data: what we collect, why, and what we never do.',
  },
  title: 'Privacy Policy',
  updated: 'Last updated: September 2026 · Demo content — replace with your own policy.',
  sections: [
    {
      h: 'What we collect',
      p: "Order details (what you bought, where to send it), your email for order updates, and basic analytics about how the store is used. That's the whole list.",
    },
    {
      h: 'What we never do',
      p: "We don't sell your data, we don't run third-party ad trackers, and we don't email you unless it's about an order or you explicitly asked for news of new harvests.",
    },
    {
      h: 'Payments',
      p: 'Card details never touch our servers — checkout is processed by our payment provider. We see the order, not the card.',
    },
    {
      h: 'Your rights',
      p: "Want your data exported or deleted? Email us and it's done within 30 days — usually much faster.",
    },
  ],
} as const;

export const TERMS = {
  meta: {
    title: 'Terms of Service — Verdant',
    description: 'The short, honest terms for shopping at Verdant: orders, shipping, returns and refunds.',
  },
  title: 'Terms of Service',
  updated: 'Last updated: September 2026 · Demo content — replace with your own terms.',
  sections: [
    {
      h: 'Orders',
      p: 'An order is confirmed when you get the confirmation email. If a batch sells out after you paid, we refund it the same day and tell you when the next one is poured.',
    },
    {
      h: 'Shipping',
      p: 'We ship within 2 business days. Tracking arrives by email. If a package goes missing, we deal with the carrier — not you.',
    },
    {
      h: 'Returns & refunds',
      p: '30 days for unopened products. Opened jars are the honest exception — for obvious reasons. Refunds go back to the original payment method.',
    },
    {
      h: 'The fine print',
      p: 'Prices can change, typos happen, and we may update these terms — the date above always tells you when. Questions? The contacts page is one click away.',
    },
  ],
} as const;
