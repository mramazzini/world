# Max's DnD Wiki

> 🚧 **Under Construction:** This website is currently under development. Some features may not be fully functional or available. 🚧

Welcome to Max's DnD Wiki! This website is a comprehensive repository of all things Dungeons & Dragons. From spells and subclasses to magical items and lore, you'll find everything you need to enhance your campaign.

## Features

- Detailed information on spells, subclasses, classes, and more.
- Easy-to-navigate interface with powerful search and filtering capabilities.
- Homebrew interfaces to allow user submitted homebrew content.

## Technologies Used

- [Next.js](https://nextjs.org/)
- [Prisma](https://www.prisma.io/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Daisy UI](https://daisyui.com/)
- [Fuse JS](https://www.fusejs.io/)
- [Jose](https://www.npmjs.com/package/jose)

## Contributing

We welcome contributions from the community! Whether you want to add new content, fix a bug, or suggest an improvement, follow these steps to contribute:

1. **Clone** the repository.
2. **Create a branch** for your feature or fix: `git checkout -b feature/YourFeatureName`.
3. **Commit** your changes: `git commit -m 'Add some feature'`.
4. **Push** to the branch: `git push origin feature/YourFeatureName`.
5. **Create a Pull Request** to the `main` branch.

There will be a check to make sure that npm run build:dev successfully runs locally, before any pushes can be made. Please do not disable the git hook that does this, as this is intentional to prevent failing builds.

## Installation

To get the project running locally, follow these steps:

### Prerequisites

- [Node.js](https://nodejs.org/) (v16.x or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [PostgreSQL](https://www.postgresql.org/) 

### Clone the Repository

```bash
git clone https://github.com/mramazzini/world.git
cd world
```

### Install Dependencies

```bash
npm install
```

### Set Up Environment Variables

Create a `.env` file in the root directory with the following content:

```plaintext
DATABASE_URL="your-database-url"
POSTGRES_USER="your-postgres-user"
POSTGRES_PASWORD="your-postgres-password"
```
Replace `your-database-url` with your Prisma-supported database connection string.
Replace `your-postgres-user` and `your-postgres-password` with the username and password you use to log in to your local postgres server.

You also need to create an admin account, to access all routes behind the **/admin** route/

```plaintext
ADMIN_USERNAME="any-string"
ADMIN_ID="1"
ADMIN_EMAIL="Any-valid-email" //use this to log in
ADMIN_PASSWORD="any-valid-password" // use this to log in
```

### Run Database Migrations

```bash
npm run migrate
```

### Start the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---

Let me know if there's anything else you'd like to add!
