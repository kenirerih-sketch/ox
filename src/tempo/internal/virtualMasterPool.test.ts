import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, test } from 'vitest'

describe('virtualMasterPool', () => {
  test('node:worker_threads import is not statically analyzable', () => {
    // Bundlers (webpack, Vite, Rollup) statically analyze `import()` calls
    // with string literals and fail on `node:` URIs when targeting browsers.
    // The specifier must be a variable so bundlers skip resolution.
    const source = readFileSync(
      resolve(__dirname, './virtualMasterPool.ts'),
      'utf-8',
    )
    expect(source).not.toMatch(/import\(\s*['"]node:worker_threads['"]\s*\)/)
  })
})
