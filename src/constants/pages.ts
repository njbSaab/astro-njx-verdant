/**
 * All page copy lives here. One section — one object.
 * Fields ending in *Html are injected via set:html (they contain links/code) — edit carefully.
 */
import { SITE } from './components';

export const HOME = {
  meta: {
    // empty = defaults from SITE (Layout fills them in)
  },
  heroSlides: [
    {
      title: 'Clothes for slow seasons.',
      text: 'Wool, silk and heavy linen, cut in small runs and sewn to be worn for a decade. No drops, no noise — a wardrobe that waits for you.',
      ctaPrimary: { label: 'Shop new in', href: '/collections/dresses' },
      ctaSecondary: { label: 'The knitwear', href: '/collections/knitwear' },
      note: 'Cut and sewn in-house. Free repairs for life.',
      image: { src: '/products/hero.jpg', alt: 'A rail of ivory and sand garments on wooden hangers' },
    },
    {
      title: 'The coat you plan outfits around.',
      text: 'Double-faced Italian wool, tied at the waist, cut for a decade of winters. The outerwear run is back — numbered, as always.',
      ctaPrimary: { label: 'Shop outerwear', href: '/collections/outerwear' },
      ctaSecondary: { label: 'The wrap coat', href: '/products/wool-wrap-coat' },
      note: 'Small runs. When the fabric ends, the run ends.',
      image: { src: '/products/hero-2.jpg', alt: 'A model in an autumn coat, photographed in soft light' },
    },
    {
      title: 'Knit dense enough to keep promises.',
      text: 'Merino and baby alpaca, knitted to hold their collar and their shape. Layers that breathe on their own and outlive trends by ignoring them.',
      ctaPrimary: { label: 'Shop knitwear', href: '/collections/knitwear' },
      ctaSecondary: { label: 'The accessories', href: '/collections/accessories' },
      note: 'Free repairs for life on every piece we make.',
      image: { src: '/products/hero-3.jpg', alt: 'A boutique rail of garments in warm light' },
    },
  ],
  collections: { title: 'The collections' },
  products: { title: 'Everything we cut', countLabel: 'pieces' },
  values: [
    {
      title: 'Cloth that earns its keep',
      text: 'Italian wool, Belgian linen, 19-momme silk. Fabric chosen by hand, priced without theatre.',
    },
    {
      title: 'Sewn here, in-house',
      text: 'Every seam is ours. Small runs, numbered pieces, and a tailor who remembers your name.',
    },
    {
      title: 'Repairs for life',
      text: 'A loose button or a worn hem — send it back, we mend it free. Clothes should outlive seasons.',
    },
  ],
  lookbook: {
    title: 'Worn, not staged',
    text: 'Pieces from the current run, photographed on the people who sew them.',
    images: [
      { src: '/products/wool-wrap-coat.jpg', alt: 'The wrap coat on a stone staircase' },
      { src: '/products/silk-slip-dress.jpg', alt: 'Silk slip dress in afternoon light' },
      { src: '/products/ribbed-cardigan.jpg', alt: 'Ribbed cardigan, close on the knit' },
      { src: '/products/wool-midi-skirt.jpg', alt: 'Wool midi skirt, seated portrait' },
    ],
  },
  quote: {
    text: '“The wrap coat has done four winters, two cities and one wedding. It still looks like the first morning.”',
    author: 'Anna K., client since 2021',
  },
  colophon: {
    eyebrow: 'astro-njx-boutique · free ecommerce theme for Astro',
    title: 'This boutique is a theme. Take it.',
    text: 'Everything you just tried — bag, search, favorites, dark mode, checkout — is astro-njx-boutique, a static storefront you can fork today. Point one env var at your Shopify store and these same pages rebuild from your real catalog, hosted checkout included.',
    ctaPrimary: { label: 'Get the theme on GitHub', href: SITE.repoUrl },
    ctaSecondary: { label: 'How it works', href: '/about#theme' },
    stack: [
      { strong: 'Astro 5 + Tailwind v4', text: '— 20 static pages, zero client framework' },
      { strong: 'Node.js build', text: '— data layer runs at build time, ships pure HTML' },
      { strong: 'Shopify Storefront API', text: '— live products, bag and hosted checkout' },
      { strong: 'Cloudflare Pages', text: '— deploys in seconds on the free tier' },
    ],
    env: {
      prefix: 'COMMERCE_PROVIDER=',
      value: 'shopify',
      copyValue: 'COMMERCE_PROVIDER=shopify',
      copiedLabel: 'Copied ✓',
    },
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
  emptyCollection: 'Nothing here yet — the other collections are fuller.',
  emptyFilter: 'No pieces match this filter.',
} as const;

export const PRODUCT = {
  breadcrumbHome: 'Home',
  optionsLegend: 'Size',
  addToCart: 'Add to bag',
  accordion: [
    {
      title: 'Fit & fabric',
      text: 'True to size with room to move. Every fabric is listed with weight and origin — if you are between sizes, size down: our cloth relaxes with wear.',
    },
    {
      title: 'Shipping & returns',
      text: 'Free over $150, otherwise $8 flat, shipped within 48 hours. Returns for 30 days — reply to your order email and we send a label, no forms.',
    },
  ],
  relatedTitle: 'Wears well with',
  trust: {
    delivery: 'Ships in 1–2 days · Free over $150',
    returns: '30-day returns · Free repairs for life',
  },
} as const;

export const ABOUT = {
  meta: {
    title: 'About — Maren',
    description: 'Who makes Maren: a four-person atelier sewing small runs of wool, silk and linen.',
  },
  hero: {
    title: 'A small atelier with long opinions.',
    paragraphs: [
      'Maren started with one rented cutting table and a refusal: no polyester, no seasons, no logos. It grew into a four-person atelier that cuts small runs of wool, silk and linen — clothes designed slowly and worn long.',
      'We sell directly, price without wholesale mark-ups, and mend anything we made for free. When a piece sells out, it returns when the fabric does — not before.',
    ],
    image: { src: '/products/wool-wrap-coat.jpg', alt: 'The wrap coat, worn on a stone staircase' },
  },
  numbers: [
    { num: '2018', label: 'first pattern cut' },
    { num: '4', label: 'people in the atelier' },
    { num: '11k', label: 'pieces sewn' },
    { num: '0', label: 'polyester garments' },
  ],
  themeBlock: {
    eyebrow: 'The honest part',
    title: 'This boutique is a demo. The theme is real.',
    textHtml:
      'The atelier, Anna and her four winters — all invented to show <strong class="font-semibold text-ink">astro-njx-boutique</strong>, a free editorial ecommerce theme for Astro, working at full speed. Fork it, swap the catalog, and you have a boutique of your own. An extended Pro version with more sections and pages is on the way.',
    cta: { label: 'Get it on GitHub', href: SITE.repoUrl },
    howTitle: 'How the integration works',
    howItemsHtml: [
      '<strong class="font-medium text-ink">Astro 5 renders everything statically.</strong> A Node.js build fetches the catalog once and ships pure HTML — no client framework, fast by default.',
      '<strong class="font-medium text-ink">Two data providers, one switch.</strong> <code class="rounded bg-tile px-1.5 py-0.5 font-mono text-[13px]">COMMERCE_PROVIDER=mock</code> uses the bundled JSON catalog; <code class="rounded bg-tile px-1.5 py-0.5 font-mono text-[13px]">shopify</code> pulls real products over the Shopify Storefront API (GraphQL).',
      "<strong class=\"font-medium text-ink\">Checkout stays on Shopify.</strong> The bag lives in localStorage; at checkout the theme creates a Shopify cart and hands off to their hosted, PCI-compliant checkout.",
      '<strong class="font-medium text-ink">Hosted on Cloudflare Pages.</strong> Static output deploys in seconds and runs comfortably on the free tier.',
    ],
  },
  cta: {
    title: 'Questions about a piece?',
    text: 'Write to us — the person who sewed it will probably answer.',
    button: { label: 'Contact the atelier', href: '/contacts' },
  },
} as const;

export const CONTACTS = {
  meta: {
    title: 'Contacts — Maren',
    description: 'Sizing, orders, repairs or fabric questions — write to the Maren atelier.',
  },
  title: 'Write to the atelier',
  text: 'Sizing, an order, a repair, or which coat suits a windy city — ask. A human answers within a day.',
  cards: {
    email: {
      title: 'Email',
      address: 'atelier@maren.demo',
      note: 'Add your order number for the fastest reply.',
    },
    warehouse: {
      title: 'Atelier',
      lines: ['3 Weaver’s Court', 'Copenhagen — visits by appointment'],
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
    namePlaceholder: 'Anna Keller',
    emailLabel: 'Email',
    emailPlaceholder: 'you@example.com',
    messageLabel: 'Message',
    messagePlaceholder: 'Which piece, which size, which city?',
    submitLabel: 'Send message',
    demoNote: "Demo mode — the form isn't wired to a backend. Point it at your email service or an API route.",
  },
} as const;

export const FAQ_PAGE = {
  meta: {
    title: 'FAQ — Maren',
    description: 'Sizing, fabric, shipping, repairs — answers to the questions the atelier hears most.',
  },
  title: 'Asked often',
  introHtml:
    'Short answers, no legal fog. Missing something? <a href="/contacts" class="text-brand underline underline-offset-2">Write to us.</a>',
  items: [
    {
      q: 'How do the sizes run?',
      a: 'True to size with ease built in. Between sizes? Take the smaller one — our wool and linen relax about half a size with wear. Exact garment measurements are listed on every piece.',
    },
    {
      q: 'Where is everything made?',
      a: 'In our own atelier in Copenhagen — four of us, one cutting table. Fabric comes from mills in Italy and Belgium we have visited in person.',
    },
    {
      q: 'How long does shipping take?',
      a: 'Orders leave within 48 hours. EU: 2–4 business days. Everywhere else: 5–10. Free over $150, $8 flat otherwise, tracked always.',
    },
    {
      q: 'How do returns work?',
      a: '30 days from delivery. Reply to your order email, we send a label, done. Worn silk is the one exception — for obvious reasons.',
    },
    {
      q: 'What does “repairs for life” mean?',
      a: 'Exactly that. A loose button, a worn hem, a seam that gave up — send the piece back and we mend it free, forever. We made it; it stays our responsibility.',
    },
    {
      q: 'Is this a real boutique?',
      a: 'It is a demo for the astro-njx-boutique theme: the garments are fictional, but everything else works — bag, checkout flow, search, dark mode. Grab the theme on GitHub and make it your real store.',
    },
  ],
} as const;

export const ACCOUNT = {
  meta: {
    title: 'Account — Maren',
    description: 'Sign in to your Maren account or create a new one.',
  },
  tabs: { login: 'Sign in', register: 'Create account' },
  login: {
    title: 'Welcome back',
    sub: 'Orders, repairs and faster checkout.',
    submit: 'Sign in',
    demoNote: 'Demo mode — sign-in is a stub. Connect Shopify Customer Accounts or your own backend here.',
  },
  register: {
    title: 'Join Maren',
    sub: 'One account for orders, repairs and first word on new runs.',
    submit: 'Create account',
    demoNote: 'Demo mode — account creation is a stub. Connect Shopify Customer Accounts or your own backend here.',
  },
  fields: {
    nameLabel: 'Name',
    namePlaceholder: 'Anna Keller',
    emailLabel: 'Email',
    emailPlaceholder: 'you@example.com',
    passwordLabel: 'Password',
    passwordPlaceholder: '••••••••',
    remember: 'Remember me',
    forgot: 'Forgot password?',
  },
  pageNote: 'Demo page — wire it to Shopify Customer Accounts or your own auth backend.',
} as const;

export const FAVORITES_PAGE = {
  meta: { title: 'Favorites — Maren', description: 'Pieces you saved for later.' },
  title: 'Favorites',
  subEmpty: 'Every piece you save, kept in one place.',
  subCount: (n: number) => `${n} ${n === 1 ? 'piece' : 'pieces'} saved for later.`,
  empty: {
    icon: '♡',
    title: 'Nothing saved yet',
    text: 'Tap the heart on any piece and it will wait for you here.',
    cta: { label: 'Browse the collections', href: '/' },
  },
  ariaRemove: (title: string) => `Remove ${title} from favorites`,
} as const;

export const NOT_FOUND = {
  meta: { title: 'Page not found — Maren' },
  title: 'Nothing hangs here.',
  text: 'This page moved, sold out, or never existed. The rail is one click away.',
  ctaPrimary: { label: 'Back to the boutique', href: '/' },
  ctaSecondary: { label: 'See the knitwear', href: '/collections/knitwear' },
} as const;

export const PRIVACY = {
  meta: {
    title: 'Privacy Policy — Maren',
    description: 'How Maren handles your data: what we collect, why, and what we never do.',
  },
  title: 'Privacy Policy',
  updated: 'Last updated: September 2026 · Demo content — replace with your own policy.',
  sections: [
    {
      h: 'What we collect',
      p: "Order details (what you bought, where to send it), your email for order updates, and basic analytics about how the boutique is used. That's the whole list.",
    },
    {
      h: 'What we never do',
      p: "We don't sell your data, we don't run third-party ad trackers, and we don't email you unless it's about an order or you explicitly asked for news of new runs.",
    },
    {
      h: 'Payments',
      p: 'Card details never touch our servers — checkout is processed by our payment provider. We see the order, not the card.',
    },
    {
      h: 'Your rights',
      p: "Want your data exported or deleted? Email us and it's done within 30 days — usually much faster, there are four of us and one inbox.",
    },
  ],
} as const;

export const TERMS = {
  meta: {
    title: 'Terms of Service — Maren',
    description: 'The short, honest terms for shopping at Maren: orders, shipping, returns and repairs.',
  },
  title: 'Terms of Service',
  updated: 'Last updated: September 2026 · Demo content — replace with your own terms.',
  sections: [
    {
      h: 'Orders',
      p: 'An order is confirmed when you get the confirmation email. If a piece is out of stock after you paid, we refund it the same day and tell you when the fabric returns.',
    },
    {
      h: 'Shipping',
      p: 'We ship within 2 business days. Tracking arrives by email. If a package goes missing, we deal with the carrier — not you.',
    },
    {
      h: 'Returns & repairs',
      p: '30 days, no questions, piece in unworn condition. Repairs of anything we made are free for the life of the garment. Refunds go back to the original payment method.',
    },
    {
      h: 'The fine print',
      p: 'Prices can change, typos happen, and we may update these terms — the date above always tells you when. Questions? The contacts page is one click away.',
    },
  ],
} as const;
