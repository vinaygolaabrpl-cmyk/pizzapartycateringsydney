const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

/**
 * Prefixes a root-relative public asset path (e.g. "/images/hero.png")
 * with the site's basePath so it resolves correctly on the live domain.
 */
export function assetPath(path: string): string {
  if (!path.startsWith('/') || path.startsWith('//')) return path
  if (BASE_PATH && path.startsWith(BASE_PATH + '/')) return path
  return `${BASE_PATH}${path}`
}
