// Which repository a session works in, and what to call it. Pure helpers, no dependencies.
// Interface skeleton: implemented after the tests are written.

/**
 * Resolve the main checkout of the git repository that contains `dir`.
 * A linked worktree resolves to its main repository. A missing path resolves through its
 * nearest existing ancestor. Results (also misses) are cached for `ttlMs`.
 * @param {string} dir absolute path
 * @returns {Promise<{ root: string, name: string } | null>}
 */
export async function resolveRepo(dir) { throw new Error('not implemented'); }

/** Forget every cached lookup (tests, and when a folder becomes a repo). */
export function clearRepoCache() { throw new Error('not implemented'); }

/**
 * Decide the project of a session.
 * 1. The repository of `cwd` (source 'cwd').
 * 2. Otherwise the repository of the most recently edited directory in `editDirs` (source 'edits').
 * 3. Otherwise basename(cwd) (source 'folder'), or 'unknown' without a cwd.
 * @param {{ cwd?: string|null, editDirs?: Array<{ dir: string, at: number }> }} input
 * @returns {Promise<{ project: string, repoRoot: string|null, repos: string[], source: 'cwd'|'edits'|'folder' }>}
 *   `repos` lists the root of every repository found (cwd first, then edits by recency, no duplicates).
 */
export async function projectFor({ cwd, editDirs }) { throw new Error('not implemented'); }

/**
 * Title precedence: live agents-view name → custom title → AI title → first 60 chars of last prompt → 'New session'.
 * Blank strings count as missing.
 * @param {{ customTitle?: string, title?: string, lastPrompt?: string }} transcript
 * @param {{ name?: string } | null} live
 * @returns {string}
 */
export function titleFor(transcript, live) { throw new Error('not implemented'); }
