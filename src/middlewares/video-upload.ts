/**
 * Video upload middleware
 * Enhances Strapi's upload capabilities for video files
 */

module.exports = (config, { strapi }) => {
	return {
		initialize() {
			strapi.app.use(async (ctx, next) => {
				await next();

				// Only apply to upload routes
				if (ctx.url.startsWith("/api/upload") && ctx.method === "POST") {
					// If there was an error, try to provide better diagnostics
					if (ctx.status >= 400 && ctx.body && ctx.body.error) {
						console.error("Upload error details:", {
							status: ctx.status,
							error: ctx.body.error,
							url: ctx.url,
							method: ctx.method,
							query: ctx.query,
						});

						// Check if there's information about the file in the request
						if (ctx.request.files && ctx.request.files.files) {
							const fileInfo = Array.isArray(ctx.request.files.files)
								? ctx.request.files.files
								: [ctx.request.files.files];

							console.log(
								"Attempted to upload files:",
								fileInfo.map((f) => ({
									name: f.name,
									size: f.size,
									type: f.type,
								}))
							);
						}
					}
				}
			});
		},
	};
};
