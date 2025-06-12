import fs from 'fs-extra';
import path from 'path';
import YAML from 'yaml';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

let plugin;
let mode;

async function init() {
  const configPath = path.resolve(process.cwd(), '.meltdownrc');
  mode = 'standard';
  if (await fs.pathExists(configPath)) {
    try {
      const content = await fs.readFile(configPath, 'utf8');
      const cfg = YAML.parse(content);
      if (cfg && cfg.mode) {
        mode = cfg.mode;
      }
    } catch {
      // ignore parse errors and use default
    }
  }
  const pluginPath = pathToFileURL(path.join(__dirname, '..', 'crisis-modes', `${mode}.js`));
  plugin = await import(pluginPath.href);
}

const ready = init();

export async function snarkForAdd(task, dread) {
  await ready;
  if (plugin && typeof plugin.snarkForAdd === 'function') {
    return plugin.snarkForAdd(task, dread);
  }
  throw new Error(`Crisis mode '${mode}' missing snarkForAdd`);
}

export { mode };
