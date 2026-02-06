import fs from 'fs'
import path from 'path'
import { promisify } from 'util'

const copyFile = promisify(fs.copyFile)
const mkdir = promisify(fs.mkdir)
const readdir = promisify(fs.readdir)
const stat = promisify(fs.stat)

/**
 * Copy a directory recursively from source to destination
 */
async function copyDirectory(src: string, dest: string): Promise<void> {
  await mkdir(dest, { recursive: true })
  const entries = await readdir(src, { withFileTypes: true })

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name)
    const destPath = path.join(dest, entry.name)

    if (entry.isDirectory()) {
      await copyDirectory(srcPath, destPath)
    } else {
      await copyFile(srcPath, destPath)
    }
  }
}

/**
 * Get the path to the templates directory
 * This function finds the templates directory relative to the create-crx-app-plus package
 */
function getTemplatesPath(): string {
  // When running from dist, __dirname points to dist/src/util
  // We need to go: dist/src/util -> dist/src -> dist -> packages/create-crx-app-plus -> project root -> templates
  // When running from source, __dirname points to src/util
  // We need to go: src/util -> packages/create-crx-app-plus -> project root -> templates
  
  // First, get to the package root (packages/create-crx-app-plus)
  // From dist/src/util: ../../.. = dist -> packages/create-crx-app-plus
  // From src/util: ../.. = packages/create-crx-app-plus
  const packageRoot = path.resolve(__dirname, '../../..')
  
  // Then go to the project root (create-crx-app-plus)
  const projectRoot = path.resolve(packageRoot, '../..')
  
  // Finally, get to templates directory
  const templatesPath = path.join(projectRoot, 'templates')
  return templatesPath
}

export async function downloadAndExtractExample(
  root: string,
  name: string,
): Promise<void> {
  const templatesPath = getTemplatesPath()
  const templatePath = path.join(templatesPath, name)
  const destPath = root

  // Check if template exists
  try {
    const stats = await stat(templatePath)
    if (!stats.isDirectory()) {
      throw new Error(`Template ${name} is not a directory`)
    }
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      throw new Error(`Template ${name} not found in ${templatesPath}`)
    }
    throw error
  }

  // Copy the template directory to the destination
  await copyDirectory(templatePath, destPath)
}
