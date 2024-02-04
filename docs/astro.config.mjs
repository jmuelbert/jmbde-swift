import {defineConfig} from 'astro/config';
import starlight from '@astrojs/starlight';
import lunaria from '@lunariajs/starlight';

export const locales = {
	root: {label: 'English', lang: 'en'},
	de: {label: 'Deutsch', lang: 'de'},
	es: {label: 'Español', lang: 'es'},
	ja: {label: '日本語', lang: 'ja'},
	fr: {label: 'Français', lang: 'fr'},
	it: {label: 'Italiano', lang: 'it'},
	id: {label: 'Bahasa Indonesia', lang: 'id'},
	'zh-cn': {label: '简体中文', lang: 'zh-CN'},
	'pt-br': {label: 'Português do Brasil', lang: 'pt-BR'},
	ko: {label: '한국어', lang: 'ko'},
	tr: {label: 'Türkçe', lang: 'tr'},
	ru: {label: 'Русский', lang: 'ru'},
	hi: {label: 'हिंदी', lang: 'hi'},
	da: {label: 'Dansk', lang: 'da'},
	uk: {label: 'Українська', lang: 'uk'},
};

// https://astro.build/config
export default defineConfig({
	trailingSlash: 'always',
	integrations: [
		starlight({
			title: 'jmbde-swift Documentation',
			description: '',
			titleDelimiter: ' - ',
			editLink: {
				baseUrl: 'https://github.com/jmuelbert/jmbde-swift/edit/main/docs/',
			},
			plugins: [lunaria()],
			head: [
				{
					tag: 'meta',
					attrs: {
						name: 'theme-color',
						content: '#311839',
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'twitter:card',
						content: 'summary_large_image',
					},
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:title',
						content: 'jmbde-swift Documentation',
					},
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:type',
						content: 'website',
					},
				},
			],
			editLink: {
				baseUrl: 'https://github.com/jmuelbert/jmbde-swift/docs/edit/main',
			},
			social: {
				github: 'https://github.com/jmuelbert/jmbde-swift',
				gitlab: 'https://gitlab.com/jmuelbert',
				linkedin: 'https://www.linkedin.com/in/juergenmuelbert',
				'x.com': 'https://x.com/jmuelbert',
				youtube: 'https://youtube.com/@juergen108',
			},
			locales,
			sidebar: [
				{
					label: 'Start Here',
					translations: {
						de: 'Beginne hier',
						es: 'Comienza aqui',
						fr: 'Commencez ici',
						it: 'Inizia qui',
					},
					items: [
						{
							label: 'Getting Started',
							link: 'getting-started',
							translations: {
								de: 'Erste Schritte',
								es: 'Empezando',
								fr: 'Mise en route',
								it: 'Iniziamo',
							},
						},
						// Each item here is one entry in the navigation menu.
						{
							label: 'Manual Setup',
							link: 'manual-setup',
							translations: {
								de: 'Manuelle Einrichtung',
								es: 'Configuración Manual',
								fr: 'Installation manuelle',
							},
						},
						{
							label: 'Environmental Impact',
							link: 'environmental-impact',
							translations: {
								de: 'Umweltbelastung',
								es: 'Documentación ecológica',
								fr: 'Impact environnemental',
								it: 'Impatto ambientale',
							},
						},
					],
				},
				{
					label: 'Guides',
					translations: {
						de: 'Anleitungen',
						es: 'Guías',
						fr: 'Guides',
						it: 'Guide',
					},
					autogenerate: {directory: 'guides'},
				},
				{
					label: 'Reference',
					translations: {
						de: 'Referenz',
						es: 'Referencias',
						fr: 'Référence',
						it: 'Riferimenti',
					},
					autogenerate: {directory: 'reference'},
				},
				{
					label: 'Contribute',
					translations: {
						de: 'Beteiligung',
					},
					autogenerate: {directory: 'contribute'},
				},
			],
		}),
	],
});
