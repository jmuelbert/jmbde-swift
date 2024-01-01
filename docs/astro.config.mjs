// astro.config.mjs
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

export const locales = {
  root: { label: 'English', lang: 'en' },
  de: { label: 'Deutsch', lang: 'de' },
  es: { label: 'Español', lang: 'es' },
  it: { label: 'Italiano', lang: 'it' }
}

/* https://vercel.com/docs/projects/environment-variables/system-environment-variables#system-environment-variables */
const VERCEL_PREVIEW_SITE =
  process.env.VERCEL_ENV !== 'production' &&
  process.env.VERCEL_URL &&
  `https://${process.env.VERCEL_URL}`

const site = VERCEL_PREVIEW_SITE || 'https://starlight.astro.build/'

// https://astro.build/config
export default defineConfig({
  site,
  trailingSlash: 'always',
  integrations: [
    starlight({
      title: 'jmbde macOS Documentation',
      // Set English as the default language for this site.
      // logo: {
      //  light: '/src/assets/logo-light.svg',
      //  dark: '/src/assets/logo-dark.svg',
      //  replacesTitle: true,
      // },
      editLink: {
        baseUrl: 'https://github.com/jmuelbert/jmbde-swift/edit/main/docs/'
      },
      social: {
        github: 'https://github.com/jmuelbert/jmbde-swift',
        gitlab: 'https://gitlab.com/jmuelbert',
        linkedin: 'https://www.linkedin.com/in/juergenmuelbert',
        'x.com': 'https://x.com/jmuelbert',
        youtube: 'https://youtube.com/@juergen108'
      },
      head: [
        {
          tag: 'meta',
          attrs: { property: 'og:image', content: site + 'og.jpg?v=1' }
        },
        {
          tag: 'meta',
          attrs: { property: 'twitter:image', content: site + 'og.jpg?v=1' }
        }
      ],
      // customCss: process.env.NO_GRADIENTS ? [] : ['./src/assets/landing.css'],
      locales,
      sidebar: [
        {
          label: 'Start Here',
          translations: {
            de: 'Beginne hier',
            es: 'Comienza aqui',
            it: 'Inizia qui'
          },
          items: [
            {
              label: 'Getting Started',
              link: 'getting-started',
              translations: {
                de: 'Erste Schritte',
                es: 'Empezando',
                it: 'Iniziamo'
              }
            },
            // Each item here is one entry in the navigation menu.
            {
              label: 'Manual Setup',
              link: 'manual-setup',
              translations: {
                de: 'Manuelle Einrichtung',
                es: 'Configuración Manual'
              }
            },
            {
              label: 'Environmental Impact',
              link: 'environmental-impact',
              translations: {
                de: 'Umweltbelastung',
                es: 'Documentación ecológica',
                it: 'Impatto ambientale'
              }
            }
          ]
        },
        {
          label: 'Guides',
          translations: {
            de: 'Anleitungen',
            es: 'Guías',
            it: 'Guide'
          },
          autogenerate: { directory: 'guides' }
        },
        {
          label: 'Reference',
          translations: {
            de: 'Referenz',
            es: 'Referencias',
            it: 'Riferimenti'
          },
          autogenerate: { directory: 'reference' }
        }
      ]
    })
  ]
})
