export default [
	"strapi::errors",
	{
		name: "strapi::security",
		config: {
			contentSecurityPolicy: {
				useDefaults: true,
				directives: {
					"connect-src": ["'self'", "https:"],
					"img-src": [
						"blob:",
						"'self'",
						"data:",
						"cdn.jsdelivr.net",
						"strapi.io",
						"localhost:*",
					],
					"media-src": [
						"'self'",
						"data:",
						"blob:",
						"strapi.io",
						"localhost:*",
						"*",
					],
					upgradeInsecureRequests: null,
				},
			},
		},
	},
	"strapi::cors",
	"strapi::poweredBy",
	"strapi::logger",
	"strapi::query",
	{
		name: "strapi::body",
		config: {
			formLimit: "100mb",
			jsonLimit: "100mb",
			textLimit: "100mb",
			formidable: {
				maxFileSize: 100 * 1024 * 1024,
			},
		},
	},
	"strapi::session",
	"strapi::favicon",
	"strapi::public",
];
