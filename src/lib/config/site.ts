import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'urara-demo.netlify.app',
  title: 'aeshtravelblogs',
  subtitle: 'Welcome to my blog website!',
  lang: 'en-US',
  description: 'We have variety of blogs written! Choose one below',
  author: {
    avatar: 'https://repository-images.githubusercontent.com/608284479/3e582c0d-bf12-474d-aa87-39a0695bdde9',
    name: 'Aesh',
    status: '',
    bio: '👇🏻'
  },
  themeColor: '#3D4451'
}
