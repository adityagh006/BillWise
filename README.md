# ReceiptNest – Receipt Tracker SaaS

**ReceiptNest** is a modern SaaS web application for tracking receipts and expenses, built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Shadcn UI**.  
It provides a sleek, responsive interface for uploading, scanning, and managing receipts with AI-powered data extraction and secure subscription-based access.

---

## Features
- **Next.js 15 (Server Components & Server Actions)** – optimized performance and secure file handling.  
- **Receipt Upload & Management** – drag-and-drop file uploads, multi-file support, and receipt list management.  
- **AI-Powered Processing** – intelligent receipt data extraction and expense categorization with AI agents.  
- **Authentication & User Management** – secure authentication, user profiles, and protected routes with Clerk.  
- **SaaS Monetization** – subscription plans, feature gating, and usage quotas with Schematic & Stripe.  
- **Modern UI/UX** – responsive design, interactive feedback during file processing, and polished components with Shadcn UI.  
- **Smooth Loading & Transitions** – skeleton loaders, animations, and error handling for better UX.  
- **TypeScript** – type-safe application development to reduce bugs.

---

## 🛠 Tech Stack
- **Framework:** Next.js 15  
- **Language:** TypeScript  
- **UI Library:** Shadcn UI  
- **Styling:** Tailwind CSS  
- **Authentication:** Clerk  
- **Payments & Feature Flags:** Schematic & Stripe  
- **AI Processing:** Inngest Agents  

---

## Project Structure
```
├── app/ # Next.js app directory (routes, layouts, pages)
├── components/ # Reusable UI components
├── data/ # Static/seed data (mock data, configs)
├── lib/ # Utility functions & helpers
├── public/ # Static assets
├── typings.ts # Global TypeScript types
├── .env.example # Environment variable template
├── next.config.js # Next.js configuration
├── tailwind.config.js # Tailwind configuration
├── tsconfig.json # TypeScript configuration
└── README.md
```

# License
This project is licensed under the MIT License.
