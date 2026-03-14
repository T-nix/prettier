import { unlink, copyFile, access } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// root of project that installed the package
const projectRoot = process.cwd();

// root of your package
const packageRoot = join(__dirname, "..");

const templatePath = join(packageRoot, "prettier.config.mjs");
const targetPath = join(projectRoot, "prettier.config.mjs");
console.log("Running your-package postinstall...");
const configFiles = [
  ".prettierrc",
  ".prettierrc.json",
  ".prettierrc.js",
  ".prettierrc.yaml",
  ".prettierrc.yml",
];

async function fileExists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

async function setup() {
  // remove existing prettier configs in project root
  for (const file of configFiles) {
    const filePath = join(projectRoot, file);

    if (await fileExists(filePath)) {
      await unlink(filePath);
      console.log(`Removed old prettier config: ${file}`);
    }
  }

  // copy your config to project root
  if (!(await fileExists(targetPath))) {
    await copyFile(templatePath, targetPath);
    console.log("Copied prettier.config.mjs to project root");
  } else {
    console.log("prettier.config.mjs already exists, skipping");
  }
}

setup().catch(console.error);