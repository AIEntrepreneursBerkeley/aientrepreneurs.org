# Installation

1. Git, Node.js, pnpm, Docker
2. VS Code or a fork like Cursor
3. Install recommended extensions (should automatically be prompted, but also in .vscode/extensions.json)
4. ```bash
   pnpm install
   ```
5. Populate `.env` following `.env.example` (request environment variables from Anthony)
6. ```bash
   ./start-database.sh
   ```
   Requires Docker
7. ```bash
   pnpm dev
   ```
