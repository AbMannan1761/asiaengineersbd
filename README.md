# Asia Engineers BD - Modern Web Application

A modern, high-performance web platform for **Asia Engineers BD** (*"Build Your Dream Project With Us"*), reconstructed from `asiaengineersbd.com` with substantial engineering, UI/UX, and functional enhancements.

---

## 🌟 Key Features & Improvements Over the Original Website

1. **100% Authentic Branding & Real Assets**:
   - High-resolution official company logo (`/images/asia_engineers_logo.png`)
   - 27 authentic project photographs downloaded directly from the live site (Carton Craft LTD, PHP Motors Limited, Oxygen Sports Zone, Bangladesh Navy Gun Workshop, Unitex Lift, Hotel Star Park, Samara Builders, etc.)
   - Real contact information: **CJKS Shopping Complex (Room 3028), Kajir Dewri, Chattogram**, Phone: **01830002040**, Email: **asiaengineers09@gmail.com**.

2. **Interactive Project Portfolio with Category Filter & Search**:
   - Filter by: *All Projects*, *Steel Buildings*, *Lift Core Structures*, *Industrial Sheds & Factories*, and *Specialized & Defense*.
   - Instant search bar by project title, client, city, or engineering scope.
   - Interactive modal lightbox displaying project specifications, technical highlights, and client tags.

3. **Interactive Steel Construction Cost Calculator**:
   - Instant dynamic estimation of steel material tonnage (Tons), construction duration (Weeks), and ballpark budget (in BDT Lac / Crore).
   - Direct 1-click **"Send Spec to WhatsApp"** button linking directly to `+8801830002040`.

4. **Replaced Dummy Team Placeholders with Real Leadership Profiles**:
   - Replaced unfinished generic *"Member 01 Architect"* WordPress placeholders with a verified engineering team structure highlighting **Engr. M. A. Hannan** (Managing Director & Principal Structural Consultant), **Engr. Masum Billah** (Chief Project Engineer), and senior design engineers.

5. **Integrated Lead Generation & Communications**:
   - One-click phone calling (`tel:01830002040`)
   - Direct WhatsApp integration with pre-filled inquiries
   - Interactive quote request modal
   - Embedded Google Map showing office location at Kajir Dewri, Chattogram
   - Project inquiry form with instant submission feedback

---

## 🚀 How to Run Locally

### 1. Development Mode (with Hot Reload)
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Production Build
```bash
npm run build
```
Creates an optimized static production bundle in the `dist/` directory ready for deployment to any web host (Vercel, Netlify, cPanel, Cloudflare Pages, etc.).

### 3. Production Preview
```bash
npm run preview
```

---

## 📁 Project Structure

```
├── public/
│   └── images/               # 233 authentic site photos & official logo
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Sticky navigation with hotline & quote modal trigger
│   │   ├── Hero.jsx          # Impactful architectural hero with cover background
│   │   ├── StatsCounter.jsx  # 150+ completed projects, safety credentials & about us
│   │   ├── ServicesSection.jsx # 4 core engineering divisions
│   │   ├── ProjectsSection.jsx # Searchable & filterable interactive portfolio
│   │   ├── QuotationCalculator.jsx # Dynamic steel cost & timeline estimator
│   │   ├── WhyChooseUs.jsx   # 4 pillars of engineering quality
│   │   ├── TeamSection.jsx   # Engineering leadership & credentials
│   │   ├── ClientsSection.jsx# Major clients (PHP Motors, Navy, Unitex, etc.)
│   │   ├── ContactSection.jsx# Contact cards, form & Google Maps embed
│   │   ├── Footer.jsx        # Engineering footer with quick links
│   │   ├── ProjectModal.jsx  # High-res project detail lightbox
│   │   ├── QuoteModal.jsx    # Pop-up quotation request dialog
│   │   └── WhatsAppFloating.jsx # Floating 1-click WhatsApp button
│   ├── data/
│   │   ├── projects.js       # Structured project catalog & categories
│   │   ├── services.js       # Technical specifications for services
│   │   └── team.js           # Leadership profiles & client list
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css             # Tailwind CSS & architectural styling
├── package.json
└── vite.config.js
```
