# माँ विंध्यवासिनी सेवा समिति (Maa Vindhyavasini Seva Samiti)
### Official Frontend Web Portal

A premium, modern, responsive, and culturally grounded web application for **Maa Vindhyavasini Seva Samiti**, dedicated to selfless social welfare, humanitarian aid, education, and community development.

---

## 🚩 1. Design & Cultural Vision
- **Theme**: Indian Sanatan ethos, humanity, compassion, and institutional transparency (*"सेवा ही सबसे बड़ा धर्म है"*).
- **Primary Color Palette**:
  - **Deep Maroon**: `#7B1E2B` (and rich tones `#58141E`, `#380A11`)
  - **Saffron / Kesariya**: `#F59E0B` (and golden amber tones `#D97706`, `#B45309`)
  - **Cream**: `#FFF8ED` (and subtle warm ivory `#FAF5EE`)
  - **Dark Text**: `#292524` / `#1C1917`
  - **Emblem Accents**: Traditional trishul-lotus aura badge with sacred border motifs.

---

## 🪷 2. Four Core Service Verticals
1. **निस्सहाय सेवा (Seva to Needy)**: Compassionate assistance, medical kits, and mobility aids for the poor, homeless, and abandoned elderly.
2. **वस्त्र समर्पण (Vastra Samarpan)**: Respectful collection and distribution of clean garments, winter blankets, and children's festive clothes.
3. **भिक्षा प्रदान / अन्नदान (Bhiksha Pradan)**: Daily hot meals and dry ration kits outside hospitals and destitute settlements.
4. **सुलभ शिक्षा (Sulabh Shiksha)**: Quality educational kits, school bags, textbooks, and evening moral learning sessions for underprivileged children.

---

## 🌟 3. Key Pages & Features
- **Bilingual Interface**: Seamless instant toggle between **हिन्दी (Hindi)** and **English** across all pages.
- **Home Page**:
  - Sacred hero section with Sanskrit shloka and *"सेवा ही सबसे बड़ा धर्म है।"*
  - Dual CTAs: *Join Our Mission* and *Support Our Cause*
  - Four Major Service Cards with interactive Learn More modals
  - Verified Impact Statistics with official registry disclaimer
  - Recent field activities and community voices
- **About Us**:
  - Vision, Mission, and Core Sanatan values
  - Institutional objectives
  - Official leadership and patron placeholders adhering strictly to verification standards
- **Our Services**:
  - Dedicated full-width showcases for all 4 verticals with detailed highlights and beneficiary targeting
- **Activities & Gallery**:
  - Filterable by service categories
  - Switcher between Photo Gallery and Documentary Video Gallery
  - Lightbox modal for full-resolution image inspection
- **Events & News**:
  - Upcoming service camps and completed initiatives
  - Notice board for official announcements
- **Join Us (Volunteer & Membership)**:
  - Interactive Volunteer Registration form with validation & confetti celebration
  - Lifetime membership details and volunteer benefits FAQ
- **Support / Donation**:
  - Transparent purpose allocation
  - Simulated UPI QR code generator for amounts (₹500, ₹1100, ₹2100, ₹5100, or custom)
  - Copyable UPI ID and statutory bank account placeholder
  - Printable / savable digital Seva Pledge Certificate
- **Contact Us**:
  - Contact form with instant submission & feedback
  - Direct WhatsApp chat integration with pre-filled message
  - Interactive Google Maps embed
- **CMS / Admin Console**:
  - Embedded local data management console for real-time review of volunteer registrations and inquiries.

---

## 🛠️ 4. Tech Stack
- **Framework**: React.js (Vite)
- **Styling**: Tailwind CSS
- **Icons**: Lucide Icons (`lucide-react`)
- **Animations & Effects**: CSS Transitions, Canvas Confetti
- **Typography**: Rozha One, Cinzel, Poppins, Noto Sans Devanagari

---

## 🚀 5. How to Run Locally

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies (already installed)
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` in your browser.

To generate an optimized production build:
```bash
npm run build
```
The output will be placed in the `frontend/dist/` directory, ready to deploy to Netlify, Vercel, GitHub Pages, or any web server.

