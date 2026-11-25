## Getting Started

Follow these steps to set up and run the project on your local machine.

### 1. Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- npm (comes with Node.js)
- Git

### 2. Clone the Repository

Open your terminal and run:

```bash
git clone https://github.com/abhisheksingh555-ai/beast-fit-global.git
```

### 3. Navigate to the Project Directory

```bash
cd beast-fit-global
```

### 4. Install Dependencies

Install all project dependencies using:

```bash
npm ci
```

> **Note:** `npm ci` installs dependencies from the lockfile and ensures a consistent installation.

### 5. Start the Development Server

Run the following command:

```bash
npm run dev
```

### 6. Open the Application

Once the development server starts, open your browser and visit:

**http://localhost:3000**

You should now see the application running locally.

---

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server |
| `npm run build` | Creates a production build |
| `npm run start` | Starts the production server |
| `npm run lint` | Runs linting (if configured) |

### Troubleshooting

- **Installation issues:** Delete `node_modules` and run `npm ci` again.
- **Port 3000 already in use:** Stop the other process or use another available port.
- **Git clone issues:** Ensure Git is installed and you have internet access.

---

**Happy Coding!**