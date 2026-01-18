export default {
	// Video MIME types that Strapi should accept
	videoTypes: [
		"video/mp4",
		"video/webm",
		"video/ogg",
		"video/quicktime",
		"video/x-ms-wmv",
		"video/x-msvideo",
		"video/3gpp",
		"video/3gpp2",
		"video/x-flv",
	],
	// Set a larger size limit for video files (100MB)
	sizeLimit: 100 * 1024 * 1024,
};
