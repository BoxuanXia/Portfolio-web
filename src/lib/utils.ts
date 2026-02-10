/**
 * Get the base path for the application
 * This handles the basePath configuration for GitHub Pages deployment
 */
export function getBasePath(): string {
  return process.env.NODE_ENV === 'production' ? '/Portfolio-web' : '';
}

/**
 * Get the full path for an asset (image, etc.)
 * Automatically prepends the basePath in production
 */
export function getAssetPath(path: string): string {
  const basePath = getBasePath();
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${normalizedPath}`;
}
