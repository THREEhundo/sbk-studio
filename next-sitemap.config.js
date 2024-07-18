/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: process.env.SITE_URL || 'https://sbk-studio.vercel.app',
	generateRobotsTxt: true,
	// optional
	robotsTxtOptions: {
		additionalSitemaps: [
			//'https://sbk-studio.vercel.app/server-sitemap.xml' // Optional: only required if you are using additional sitemaps
		]
	},
	exclude: ['/admin/*']
}
