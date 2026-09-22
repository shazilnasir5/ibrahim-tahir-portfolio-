# Development — quick start

Prerequisites
- Node.js (16+ LTS recommended)
- npm (bundled with Node) or pnpm/yarn

Install and run (macOS)

Homebrew:
```bash
brew update
brew install node
```

nvm (recommended for per-user installs):
```bash
curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.4/install.sh | bash
# restart your terminal or source your shell profile, then:
nvm install --lts
```

Project commands
```bash
cd /Users/mac/Downloads/ibrahim-tahir-portfolio-main
npm install
npm run dev
# open http://localhost:3000
```

If you want me to run the install and dev server from this environment, install Node/npm first and then tell me to "try again".

Troubleshooting
- If `npm install` fails, paste the terminal output and I will help.
- If port 3000 is in use, the dev script uses Vite; change the port in `package.json` or run `PORT=3001 npm run dev`.
