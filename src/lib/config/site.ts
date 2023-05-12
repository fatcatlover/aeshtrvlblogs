import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'urara-demo.netlify.app',
  title: 'aeshtravelblogs',
  subtitle: 'Welcome to my blog website!',
  lang: 'en-US',
  description: 'We have variety of blogs written! Choose one below',
  author: {
    avatar: '/assets/maskable@512.png',
    name: 'Aesh',
    status: '',
    bio: '👇🏻'
  },
  themeColor: '#3D4451'
}
