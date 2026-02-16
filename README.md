# Sristhi News

A full-stack news blog built with **Next.js 14**, **Prisma**, and **Supabase PostgreSQL**.

## Features

- 📰 Public news listing with responsive card grid
- 🔐 JWT authentication (sign up / sign in)
- 👑 Admin dashboard — publish & delete articles
- 🛡️ JWT-protected admin routes
- 🗄️ Supabase PostgreSQL via Prisma ORM

## Getting Started

```bash
# Install dependencies
npm install

# Set up your .env (replace [YOUR-PASSWORD] with your Supabase password)
# Then push schema to Supabase
npx prisma db push

# Seed the admin user + sample articles
npm run seed

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Default Admin

| Field    | Value              |
| -------- | ------------------ |
| Email    | admin@sristhi.com  |
| Password | admin123           |
