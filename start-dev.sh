#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$ROOT_DIR"

if ! command -v node >/dev/null 2>&1; then
  echo "Node.js not found in PATH. Install with Homebrew (brew install node) or nvm."
  echo "See README_DEV.md for instructions."
  exit 2
fi

if ! command -v npm >/dev/null 2>&1; then
  echo "npm not found. Ensure Node installation includes npm."
  exit 3
fi

echo "Installing dependencies..."
npm install

echo "Starting dev server..."
npm run dev
