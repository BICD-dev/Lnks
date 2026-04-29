# Lnks — URL Shortener

**Project**

Lnks is a small URL shortener project that provides a backend API to create and resolve short links and a Vite + React frontend for creating and managing those links.

**Features**
- **Shorten URLs:** Create compact short links that redirect to long URLs.
- **Redirection:** Resolve and redirect short links to their target URLs.
- **Simple UI:** React + Vite frontend for creating and managing links.

**Prerequisites**
- Node.js (v18+ recommended)
- npm or yarn

**Quick Start**

1. Backend (API)

	 - Install dependencies:

		 ```bash
		 cd app/backend
		 npm install
		 ```

	 - Run the backend (example):

		 ```bash
		 # If you have an entry file such as index.js
		 node index.js

		 # Or use nodemon for development
		 npx nodemon index.js
		 ```

	 Note: `app/backend/package.json` currently contains project dependencies but does not include a `start` script. Add an appropriate `start` or `dev` script if you prefer `npm run ...` conventions. See [app/backend/package.json](app/backend/package.json) for details.

2. Frontend (Web UI)

	 - Install dependencies and run dev server:

		 ```bash
		 cd app/frontend
		 npm install
		 npm run dev
		 ```

	 - Build for production:

		 ```bash
		 npm run build
		 npm run preview
		 ```

	 The frontend uses Vite; available scripts are defined in [app/frontend/package.json](app/frontend/package.json).

**Environment & Configuration**

- Backend: the API may read environment variables such as the listen port or database connection string. Common names are `PORT` and `DATABASE_URL` (or `MONGO_URI`) — confirm in your backend code and set accordingly.
- Frontend: configure the frontend to point at the backend API base URL (for example via an `.env` file or Vite `import.meta.env` variables).

**Project Structure**

- `app/backend/` — Node/Express backend code and dependencies ([package.json](app/backend/package.json)).
- `app/frontend/` — Vite + React frontend ([package.json](app/frontend/package.json)).
- `packages/shared/` — shared code between frontend and backend (if used).

**Development Notes**

- The backend currently lists `express`, `cors`, `helmet`, and `nodemon` as dependencies. Add a `start`/`dev` script in `app/backend/package.json` to make running easier.
- The frontend is set up with Vite and has the usual `dev`, `build`, and `preview` scripts.

**Contributing**

- Fork, create a branch, implement changes, and open a PR.
- Keep changes small and focused; update tests and add documentation for new features.

**License**

Specify a license for the project (e.g., MIT). If you want, I can add a `LICENSE` file.

---

If you want, I can:
- Add recommended `npm` scripts for the backend (start/dev).
- Create a minimal example `index.js` backend entry and a `.env.example`.
- Add a `LICENSE` file.

