# MERN Blog — Compass-ready Starter

This project is preconfigured to connect to **MongoDB Compass (local)** and includes sample posts that you can import using `npm run seed`.

## Quick start (VS Code)

1. Open project folder in VS Code.
2. Start backend:
   ```bash
   cd server
   npm install
   npm run dev
   ```
3. Seed sample posts (in another terminal or after installing deps):
   ```bash
   cd server
   npm run seed
   ```
4. Start client:
   ```bash
   cd client
   npm install
   npm run dev
   ```
5. Open the client at http://localhost:5173 and MongoDB Compass to view `mern_blog > posts`.

## Notes
- The server uses `server/.env` which is already set to `mongodb://localhost:27017/mern_blog`.
- If your MongoDB is bound to `127.0.0.1` instead of `localhost`, both are fine; Compass shows `mongodb://localhost:27017/` in your screenshot.

Enjoy! 🎉
