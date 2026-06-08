# Lassana Moments - Photography Services Marketplace Web Application

**Repository:** `lassana-moments-photography-services-marketplace-platform`  
**Live Demo:** [https://lassanamomentz.netlify.app/](https://lassanamomentz.netlify.app/)

A modern, full-stack-ready web platform that connects clients with professional photographers for weddings, corporate events, celebrations, and every moment worth capturing. Lassana Moments delivers a polished marketplace experience with dedicated flows for clients and photographers-from discovery and booking to portfolio management and reviews.

---

## Overview

Lassana Moments is a client–photographer marketplace built as a responsive single-page application. The platform is designed to scale from a marketing and onboarding front end today into a complete booking and operations hub tomorrow.

| Audience          | What they get                                                                        |
| ----------------- | ------------------------------------------------------------------------------------ |
| **Clients**       | Browse photographers, explore galleries, read reviews, and sign up to book sessions  |
| **Photographers** | Create profiles, showcase work, manage drafts and active jobs, and track performance |

---

## Features

### Public experience

- Animated landing page with hero, about, gallery, and social proof sections
- Photographer discovery with location-based search
- Dedicated gallery and review browsing pages
- Responsive navigation with hash-based section scrolling

### Client portal

- Multi-step registration and login flows
- User dashboard for work history and reviews
- Profile editing via modal workflows

### Photographer portal

- Multi-step onboarding and authentication
- Photographer dashboard with work, drafts, reviews, and analytics-style stats
- Portfolio and profile management

### Platform foundations

- Centralized user state via React Context
- Client-side routing with React Router
- Toast notifications for user feedback
- Chart.js integration for dashboard visualizations

---

## Tech Stack

| Layer             | Technology                 |
| ----------------- | -------------------------- |
| **Framework**     | React 18                   |
| **Build tool**    | Vite 6                     |
| **Styling**       | Tailwind CSS 4             |
| **Routing**       | React Router DOM 7         |
| **Animation**     | Motion (Framer Motion)     |
| **Charts**        | Chart.js + react-chartjs-2 |
| **Icons**         | Lucide React, React Icons  |
| **Notifications** | React Toastify             |
| **Linting**       | ESLint 9                   |

---

## Project Structure

```
src/
├── components/          # Shared UI (Navbar, Footer, Button, Background)
├── context/             # Global state (UserContext)
├── pages/
│   ├── miniPages/       # Landing page sections
│   ├── Main/            # Full-page views (gallery, photographers, reviews)
│   ├── user/            # Client auth and onboarding
│   ├── photographer/    # Photographer auth and onboarding
│   └── models/          # Modal overlays (e.g. Edit Profile)
├── images/              # Static assets
├── App.jsx              # Route definitions
└── main.jsx             # Application entry point
```

---

## Getting Started

Explore the deployed application at **[lassanamomentz.netlify.app](https://lassanamomentz.netlify.app/)** - no local setup required.

### Prerequisites

- **Node.js** 18 or later
- **npm** 9+ (or compatible package manager)

### Installation

```bash
git clone https://github.com/Werosh/Lassana-Moments.git
cd Lassana-Moments
npm install
```

> **Recommended GitHub repository name:** `lassana-moments-photography-services-marketplace-platform`  
> Rename under **Settings → General → Repository name** on GitHub to align the remote URL with the official project name above.

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser. Vite hot-module replacement is enabled by default.

### Production build

```bash
npm run build
npm run preview
```

### Lint

```bash
npm run lint
```

---

## Key Routes

| Path                          | Description                             |
| ----------------------------- | --------------------------------------- |
| `/`                           | Landing page                            |
| `/photographers`              | Photographer directory                  |
| `/gallery`                    | Photo gallery                           |
| `/review`                     | Client reviews                          |
| `/JoinwithUS`                 | Role selection (client vs photographer) |
| `/UserSignUp1`–`4`            | Client registration                     |
| `/UserLoginPage1`–`5`         | Client login                            |
| `/PhotographerSignUp1`–`5`    | Photographer registration               |
| `/PhotographerLoginPage1`–`5` | Photographer login                      |
| `/UserDash`                   | Client dashboard                        |
| `/photographerDash`           | Photographer dashboard                  |
| `/EditProfile`                | Profile editor                          |

---

## Architecture Notes

- **SPA routing:** All navigation is handled client-side; deploy with fallback-to-`index.html` for deep links.
- **State:** `UserContext` holds session-oriented data for authenticated flows.
- **Styling:** Tailwind utility classes with custom design tokens in `index.css`.
- **Assets:** Images live under `src/images/` and are bundled by Vite.

---

## Roadmap

- [ ] Backend API integration (auth, bookings, payments)
- [ ] Real-time photographer search and geolocation
- [ ] Booking calendar and availability management
- [ ] In-app messaging between clients and photographers
- [ ] Admin panel for platform operations

---

## Contributing

Contributions are welcome. Please open an issue to discuss significant changes before submitting a pull request.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes with clear messages
4. Push to your fork and open a pull request

---

## License

This project is proprietary. All rights reserved unless a license file is added to the repository.

---

<p align="center">
  <strong>Lassana Moments</strong> - Capturing life's finest moments, one frame at a time.<br />
  <a href="https://lassanamomentz.netlify.app/">lassanamomentz.netlify.app</a>
</p>
