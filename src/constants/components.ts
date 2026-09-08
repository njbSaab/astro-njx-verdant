/**
 * All copy for the theme "shell": header, footer, drawers, search, modal, product card.
 * Change the copy here — component markup stays untouched.
 */

export const SITE = {
  name: 'Maren',
  defaultTitle: 'Maren — clothes for slow seasons',
  defaultDescription:
    'Demo storefront for astro-njx-boutique: an editorial fashion theme for Astro. Mock data out of the box, Shopify with two env vars.',
  logoDark: '/logo/maren-dark.svg', // dark mark — shown on the light theme
  logoLight: '/logo/maren-light.svg', // light mark — shown on the dark theme
  repoUrl: 'https://github.com/njbSaab/astro-njx-boutique',
  authorUrl: 'https://njxui.dev',
} as const;

export const ANNOUNCEMENT = {
  text: 'Complimentary shipping over $150 — every piece cut and sewn in-house',
  linkLabel: 'Star the theme on GitHub',
  linkHref: SITE.repoUrl,
} as const;

export const HEADER = {
  navLinks: [
    { label: 'Dresses', href: '/collections/dresses' },
    { label: 'Knitwear', href: '/collections/knitwear' },
    { label: 'Outerwear', href: '/collections/outerwear' },
    { label: 'Accessories', href: '/collections/accessories' },
  ],
  aria: {
    search: 'Search',
    account: 'Account',
    favorites: 'Favorites',
    theme: 'Toggle theme',
    cart: 'Open cart',
    menu: 'Open menu',
  },
} as const;

export const SEARCH = {
  placeholder: 'Search the collection…',
  escHint: 'Esc',
  emptyText: 'Nothing found — try “wool”, “silk” or “linen”.',
} as const;

export const FOOTER = {
  tagline:
    'Clothes for slow seasons. A demo store for the astro-njx-boutique theme — every garment here is fictional, the checkout is real.',
  columns: [
    {
      title: 'Shop',
      links: [
        { label: 'Dresses & skirts', href: '/collections/dresses' },
        { label: 'Knitwear', href: '/collections/knitwear' },
        { label: 'Outerwear', href: '/collections/outerwear' },
        { label: 'Accessories', href: '/collections/accessories' },
      ],
    },
    {
      title: 'Maison',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Contacts', href: '/contacts' },
        { label: 'FAQ', href: '/faq' },
      ],
    },
    {
      title: 'Theme',
      links: [
        { label: 'GitHub', href: SITE.repoUrl },
        { label: 'Made by njX', href: SITE.authorUrl },
        { label: 'Built with Astro', href: 'https://astro.build' },
      ],
    },
  ],
  legalLinks: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
} as const;

export const THANKS_MODAL = {
  emoji: '🌸',
  title: 'Merci — order received!',
  text: 'This is a demo store, so nothing was charged. If the theme feels right, a star on GitHub takes two seconds and helps a lot.',
  starLabel: '⭐️ Star on GitHub',
  starHref: SITE.repoUrl,
  keepLabel: 'Keep browsing',
  madeByLabel: 'njX UI',
  madeByHref: SITE.authorUrl,
} as const;

export const CART = {
  ariaDrawer: 'Shopping bag',
  clearLabel: 'Clear all',
  ariaClear: 'Clear bag',
  ariaClose: 'Close bag',
  emptyLine1: 'Your bag is empty.',
  emptyLine2: 'Shipping is on us over $150.',
  subtotalLabel: 'Subtotal',
  shippingNote: 'Shipping and taxes calculated at checkout.',
  checkoutLabel: 'Checkout',
  checkoutPreparing: 'Preparing checkout…',
  checkoutFailedPrefix: 'Checkout failed: ',
} as const;

export const NAV_DRAWER = {
  ariaDrawer: 'Site navigation',
  ariaClose: 'Close menu',
  home: { label: 'Home', href: '/' },
  collections: [
    { label: 'Dresses & skirts', href: '/collections/dresses' },
    { label: 'Knitwear', href: '/collections/knitwear' },
    { label: 'Outerwear', href: '/collections/outerwear' },
    { label: 'Accessories', href: '/collections/accessories' },
  ],
  pages: [
    { label: 'About', href: '/about' },
    { label: 'Contacts', href: '/contacts' },
    { label: 'FAQ', href: '/faq' },
  ],
  footer: {
    builtWithLabel: 'Built with',
    libLabel: 'njX UI',
    libHref: SITE.authorUrl,
    starLabel: '⭐ GitHub',
    starHref: SITE.repoUrl,
  },
} as const;

export const PRODUCT_CARD = {
  saleBadge: 'Sale',
  addToCart: 'Add to bag',
  ariaFav: (title: string) => `Add ${title} to favorites`,
  ariaAdd: (title: string) => `Add ${title} to bag`,
} as const;
