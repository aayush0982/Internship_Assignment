# 🚀 HD Dashboard – Full‑Stack Authentication & Notes App

A modern, secure web application featuring dual authentication systems (OTP & Google OAuth), dynamic note management, and a responsive, polished UI.

![Next.js](https://img.shields.io/badge/Next.js-15.5.2-black?style=for-the-badge\&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge\&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38bdf8?style=for-the-badge\&logo=tailwind-css)
![Prisma](https://img.shields.io/badge/Prisma-5.0-2d3748?style=for-the-badge\&logo=prisma)
![NextAuth.js](https://img.shields.io/badge/NextAuth.js-4.0-purple?style=for-the-badge\&logo=next-auth)

---

## 🌟 Features

* ✅ **Dual Authentication** — OTP Email Verification & Google OAuth
* ✅ **Secure Session Management** — JWT tokens with server‑side validation
* ✅ **Dynamic Notes** — Create, delete, and persist notes per user
* ✅ **Responsive Design** — Mobile‑first with Tailwind CSS
* ✅ **Real‑time Data** — LocalStorage integration for instant updates
* ✅ **Type Safety** — Full TypeScript implementation
* ✅ **Modern UI** — Clean, professional interface with custom shadows
* ✅ **Email Integration** — Automated OTP delivery system

---

## 🛠️ Tech Stack

### Frontend

* **Next.js 15.5.2** — App Router, Server Components, Client Components
* **TypeScript** — Type safety and DX
* **Tailwind CSS** — Utility‑first styling
* **React Hooks** — State and lifecycle

### Backend

* **Next.js API Routes** — Serverless endpoints
* **NextAuth.js** — OAuth & session management
* **Prisma ORM** — Database toolkit and query builder
* **bcryptjs** — Password hashing and verification
* **Zod** — Schema validation for forms and APIs

### Database & Storage

* **PostgreSQL** — Primary database (via Prisma)
* **LocalStorage** — Client‑side data persistence
* **Session Cookies** — Server‑side session management

### Authentication Flow

* **Custom OTP System** — Email‑based verification (6‑digit codes)
* **Google OAuth 2.0** — Social login integration
* **JWT Sessions** — Secure token‑based authentication
* **Middleware Guards** — Route protection and session validation

### Email Service

* **Email API / SMTP** — OTP delivery and automated sending

---

## 🏗️ Project Architecture

```
📦 hd-dashboard/
├── 📂 app/
│   ├── 📂 api/
│   │   ├── 📂 auth/
│   │   │   ├── 📂 [...nextauth]/          # NextAuth configuration
│   │   │   └── 📂 logout/                 # Custom logout endpoint
│   │   ├── 📂 user/
│   │   │   ├── 📂 saveNameEmail/          # Database operations
│   │   │   └── 📂 saveToLocalStorage/     # Client storage helpers
│   │   └── 📂 send-otp/                   # Email OTP service
│   ├── 📂 lib/
│   │   ├── 📄 session.ts                  # Session utilities
│   │   ├── 📄 prisma.ts                   # Database connection
│   │   └── 📄 middleware.ts               # Route protection helpers
│   ├── 📂 signup/                         # Registration page
│   ├── 📂 login/                          # Authentication page
│   ├── 📂 home/                           # Dashboard (protected route)
│   └── 📂 components/                     # Reusable UI components
├── 📂 prisma/
│   └── 📄 schema.prisma                   # Database schema
├── 📄 middleware.ts                        # Global route middleware
└── 📄 tailwind.config.js                   # Styling configuration
```

---

## 🚀 Getting Started

### Prerequisites

* Node.js **18+**
* PostgreSQL database
* Google Cloud Console project (for OAuth)
* SMTP/Email service (for OTP)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/hd-dashboard.git
cd hd-dashboard
```

2. **Install dependencies**

```bash
npm install --legacy-peer-deps
```

3. **Set up environment variables** — create `.env.local`

```env
DATABASE_URL="postgresql://username:password@localhost:5432/hd_dashboard"
NEXTAUTH_SECRET="your-nextauth-secret-key"
NEXTAUTH_URL="http://localhost:3000"
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
EMAIL_API_KEY="your-email-service-api-key"
SMTP_HOST="smtp.yourprovider.com"
SMTP_PORT="587"
SMTP_USER="your-smtp-user"
SMTP_PASS="your-smtp-pass"
```

4. **Set up database**

```bash
npx prisma generate
npx prisma migrate dev
```

5. **Run the dev server**

```bash
npm run dev
```

Visit **[http://localhost:3000](http://localhost:3000)** 🎉

---

## 🔐 Authentication Systems

### OTP Email Verification (Example)

```ts
const otp = Math.floor(100000 + Math.random() * 900000);

await sendOTPEmail(email, otp);

if (userOTP === generatedOTP) {
  await createSession(userId);
}
```

### Google OAuth Integration (NextAuth)

```ts
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: { strategy: "jwt" },
};
```

> The app supports **automatic user creation**, session management with **JWT**, and optional client‑side profile mirroring via **localStorage** when appropriate.

---

## 💾 Data Flow

### User Registration (OTP)

```
Form Submission → OTP Generation → Email Delivery →
Verification → Password Hashing → DB Storage →
Session Creation → Redirect to Dashboard
```

### User Login (Google)

```
Google OAuth → Profile Fetch → DB Check/Create →
Session Creation → (Optional) Profile Storage → Redirect to Dashboard
```

### Notes Management

```
User Input → LocalStorage (email as key) →
Real‑time UI Updates → Data Persistence →
Session‑based Access Control
```

---

## 🎨 UI/UX Features

* **Mobile‑First Design** (Tailwind breakpoints)
* **Custom Shadows** for depth and hierarchy
* **Loading States** for smooth operations
* **Form Validation** using Zod with real‑time feedback
* **Clean Typography** for readability and accessibility
* **Intuitive Navigation** across signup/login/home

---

## 🔒 Security Implementation

* **Password Hashing** — `bcrypt` with salt rounds
* **Session Management** — Secure HTTP‑only cookies, JWT
* **Route Protection** — Middleware‑based guards
* **Input Validation** — Zod schemas for forms and API endpoints
* **CSRF Protection** — NextAuth built‑in features
* **XSS Prevention** — Sanitized inputs and outputs

> Ensure secrets are stored in **.env** and never committed.

---

## 📱 Responsive Design

**Mobile‑First Approach** (Tailwind):

* Mobile (default) → base styles
* Tablet (`md:`) → 768px and up
* Desktop (`lg:`) → 1024px and up
* Large Desktop (`xl:`) → 1280px and up

---

## 🧭 Roadmap (Optional)

* [ ] Password reset via email
* [ ] Note tagging & search
* [ ] Dark mode toggle
* [ ] Rate‑limit OTP requests

---