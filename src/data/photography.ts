/**
 * Photography album metadata is stored in _meta.json files inside each
 * album subdirectory under public/images/photography/.
 *
 * The photography page reads those files automatically at build time —
 * no edits to this file are needed when adding new albums.
 *
 * _meta.json schema:
 *   { "description": "...", "order": 1 }
 */

export type AlbumMeta = {
  description?: string;
  /** Controls display order; lower = earlier. Defaults to 999 (end). */
  order?: number;
};

export type PhotoAlbum = {
  /** Derived from the folder name by replacing underscores with spaces. */
  title: string;
  description: string;
  order: number;
  /** Absolute-path URLs relative to the site root. */
  images: string[];
};
