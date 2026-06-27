import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { homedir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const scriptPath = path.join(__dirname, "generate-thumbnails.py");
const args = process.argv.slice(2);

const codexPython = path.join(
  homedir(),
  ".cache",
  "codex-runtimes",
  "codex-primary-runtime",
  "dependencies",
  "python",
  "python.exe",
);

const candidates = [
  process.env.PORTFOLIO_THUMBNAIL_PYTHON ? [process.env.PORTFOLIO_THUMBNAIL_PYTHON] : null,
  ["python"],
  ["python3"],
  ["py", "-3"],
  existsSync(codexPython) ? [codexPython] : null,
].filter(Boolean);

const canUsePython = (candidate) => {
  const [command, ...prefixArgs] = candidate;
  const result = spawnSync(command, [...prefixArgs, "-c", "from PIL import Image; print('ok')"], {
    encoding: "utf8",
    stdio: "pipe",
  });

  return result.status === 0;
};

const python = candidates.find(canUsePython);

if (!python) {
  console.error("Could not find a Python executable with Pillow installed.");
  console.error("Install Pillow or set PORTFOLIO_THUMBNAIL_PYTHON to a Python executable that can import PIL.");
  process.exit(1);
}

const [command, ...prefixArgs] = python;
const result = spawnSync(command, [...prefixArgs, scriptPath, ...args], {
  cwd: path.dirname(__dirname),
  encoding: "utf8",
  stdio: "inherit",
});

process.exit(result.status ?? 1);
