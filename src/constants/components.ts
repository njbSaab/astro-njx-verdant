/**
 * All copy for the theme "shell": header, footer, drawers, search, modal, product card.
 * Change the copy here — component markup stays untouched.
 */

export const SITE = {
  name: 'Verdant',
  defaultTitle: 'Verdant — botanical skincare, grown slow',
  defaultDescription:
    'Demo storefront for astro-njx-verdant: a botanical apothecary theme for Astro. Mock data out of the box, Shopify with two env vars.',
  logoDark: '/logo/verdant-dark.svg', // dark mark — shown on the light theme
  logoLight: '/logo/verdant-light.svg', // light mark — shown on the dark theme
  repoUrl: 'https://github.com/njbSaab/astro-njx-verdant',
  authorUrl: 'https://njxui.dev',
  themesUrl: 'https://njxui.dev/themes',
} as const;

export const ANNOUNCEMENT = {
  text: 'Free shipping over $60 · −10% on your first ritual with code',
  promoCode: 'VERDANT10',
  copiedLabel: 'Copied ✓',
  linkLabel: 'If you star the theme, I’ll be happy ♡',
  linkHref: SITE.repoUrl,
} as const;

export const HEADER = {
  navLinks: [
    { label: 'Skincare', href: '/collections/skincare' },
    { label: 'Body', href: '/collections/body' },
    { label: 'Hair', href: '/collections/hair' },
    { label: 'Rituals', href: '/collections/sets' },
  ],
  aria: {
    search: 'Search',
    account: 'Account',
    theme: 'Toggle theme',
    cart: 'Open cart',
    menu: 'Open menu',
  },
} as const;

export const SEARCH = {
  placeholder: 'Search the apothecary…',
  escHint: 'Esc',
  emptyText: 'Nothing found — try “serum”, “candle” or “gift”.',
} as const;

export const FOOTER = {
  tagline:
    'Botanical skincare, grown slow. A demo store for the astro-njx-verdant theme — every product here is fictional, the checkout is real.',
  columns: [
    {
      title: 'Shop',
      links: [
        { label: 'Skincare', href: '/collections/skincare' },
        { label: 'Body care', href: '/collections/body' },
        { label: 'Hair care', href: '/collections/hair' },
        { label: 'Candles', href: '/collections/candles' },
        { label: 'Tools', href: '/collections/tools' },
        { label: 'Ritual sets', href: '/collections/sets' },
      ],
    },
    {
      title: 'Atelier',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Contacts', href: '/contacts' },
        { label: 'FAQ', href: '/faq' },
      ],
    },
    {
      title: 'Theme',
      links: [
        { label: 'All themes & Pro', href: SITE.themesUrl },
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
  emoji: '🌿',
  title: 'Thanks — your ritual is on its way!',
  text: 'This is a demo store, so nothing was charged. If the theme feels right, a star on GitHub would make my day ♡',
  starLabel: '⭐️ Star on GitHub',
  starHref: SITE.repoUrl,
  keepLabel: 'Keep browsing',
  madeByLabel: 'njX UI',
  madeByHref: SITE.authorUrl,
  moreLabel: 'More themes & Pro →',
  moreHref: SITE.themesUrl,
} as const;

export const CART = {
  ariaDrawer: 'Shopping cart',
  clearLabel: 'Clear all',
  ariaClear: 'Clear cart',
  ariaClose: 'Close cart',
  emptyLine1: 'Your cart is empty.',
  emptyLine2: 'Shipping is on us over $60.',
  subtotalLabel: 'Subtotal',
  shippingNote: 'Shipping and taxes calculated at checkout.',
  checkoutLabel: 'Checkout',
  checkoutPreparing: 'Preparing checkout…',
  checkoutFailedPrefix: 'Checkout failed: ',
  savedTitle: 'Saved for later',
  savedMove: 'Move to cart',
  savedRemoveAria: (title: string) => `Remove ${title} from saved`,
} as const;

export const NAV_DRAWER = {
  ariaDrawer: 'Site navigation',
  ariaClose: 'Close menu',
  home: { label: 'Home', href: '/' },
  collections: [
    { label: 'Skincare', href: '/collections/skincare' },
    { label: 'Body care', href: '/collections/body' },
    { label: 'Hair care', href: '/collections/hair' },
    { label: 'Candles', href: '/collections/candles' },
    { label: 'Tools', href: '/collections/tools' },
    { label: 'Ritual sets', href: '/collections/sets' },
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
  addToCart: 'Add to cart',
  goLabel: 'View ›',
  ariaFav: (title: string) => `Save ${title} for later`,
  ariaAdd: (title: string) => `Add ${title} to cart`,
} as const;
