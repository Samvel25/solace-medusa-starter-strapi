import uploadConfig from "./upload";

/**
 * Strapi Upload Plugin Configuration
 *
 * Uses local filesystem storage for optimal performance and cost efficiency.
 * Files are stored in: public/uploads/
 *
 * Benefits of local storage:
 * - No external API costs
 * - Faster upload/download speeds
 * - Full control over file management
 * - Automatic image optimization with multiple sizes
 * - Database metadata tracking
 *
 * Files are served via:
 * - Development: http://localhost:1337/uploads/
 * - Production: Through Nginx/CDN for optimal performance
 */
export default ({ env }) => ({
	upload: {
		config: {
			// Local filesystem provider (default)
			provider: "local",
			providerOptions: {
				// Files will be stored in public/uploads
				localDir: "./public/uploads",
			},
			// Maximum file size: 100MB (supports large videos)
			sizeLimit: uploadConfig.sizeLimit,
			// Automatic image optimization
			breakpoints: {
				xlarge: 1920,
				large: 1000,
				medium: 750,
				small: 500,
				xsmall: 64,
			},
		},
	},
});
