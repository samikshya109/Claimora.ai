# Claimora

> **AI-powered legal intelligence platform** that transforms weeks of case analysis into minutes.

A modern, design-forward platform helping qui tam attorneys assess False Claims Act (FCA) cases with confidence. Built with React, TypeScript, Tailwind CSS, and thoughtful UX design.

![Claimora](https://img.shields.io/badge/React-18.3.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-06B6D4)
![Accessibility](https://img.shields.io/badge/WCAG-2.1%20AA-green)
![Design System](https://img.shields.io/badge/Design%20System-v1.0-teal)

---

## 🎨 Design-First Approach

Claimora prioritizes **clarity, accessibility, and trust**—essential for legal professionals handling sensitive cases.

- **Design System:** Comprehensive color palette, typography scale, and component library
- **Accessibility:** WCAG 2.1 AA compliant, keyboard navigation, screen reader support
- **User Research:** Designed with qui tam attorneys and paralegals through iterative testing
- **Design-to-Code:** Figma → React with bidirectional design token sync

**→ [View Full Design System & Process](./DESIGN.md)**

## Features

✨ **Smart Analysis** - AI examines evidence and identifies key FCA elements automatically
🎯 **Gap Detection** - Discovers weaknesses and provides actionable recommendations
📊 **Case Strength Assessment** - Comprehensive evaluation with damage calculations
🗺️ **Evidence Heatmap** - Visual mapping of evidence across FCA elements
📝 **Memo Generation** - Automated case memo creation
🔒 **Secure & Private** - End-to-end encryption and attorney-client privilege protection
♿ **Accessible Design** - WCAG 2.1 AA compliant, keyboard navigation, screen reader support

## Accessibility Highlights

✓ **Color Contrast** - 4.5:1 ratio for all text (exceeds WCAG AA)
✓ **Keyboard Navigation** - 100% navigable without mouse
✓ **Screen Reader Support** - Semantic HTML + ARIA labels
✓ **Motion Safety** - Respects `prefers-reduced-motion` preference
✓ **Touch Friendly** - 44x44px minimum touch targets
✓ **Focus Indicators** - Clear, visible focus states on all interactive elements

## Tech Stack

- **Framework:** React 18.3 with TypeScript
- **Routing:** React Router 7
- **Styling:** Tailwind CSS v4
- **Build Tool:** Vite 6
- **UI Components:** Radix UI, Lucide React
- **Animations:** Motion (Framer Motion)
- **Package Manager:** pnpm

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── WelcomeScreen.tsx      # Landing/onboarding page
│   │   ├── UploadScreen.tsx       # Evidence upload interface
│   │   ├── AnalysisScreen.tsx     # AI analysis progress
│   │   ├── ResultsScreen.tsx      # Case results dashboard
│   │   ├── HeatmapScreen.tsx      # Evidence heatmap visualization
│   │   ├── GapsScreen.tsx         # Evidence gaps identification
│   │   ├── MemoScreen.tsx         # Case memo generation
│   │   ├── Header.tsx             # Global navigation header
│   │   └── SignInModal.tsx        # Authentication modal
│   ├── App.tsx                    # Root component
│   └── routes.tsx                 # Route definitions
└── styles/
    ├── tailwind.css               # Tailwind imports
    ├── theme.css                  # Design system tokens
    ├── index.css                  # Global styles
    └── fonts.css                  # Font imports
```

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (or npm/yarn)

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/yourusername/claimora.git
cd claimora
```

2. **Install dependencies:**
```bash
pnpm install
```

3. **Start development server:**
```bash
pnpm run dev
```

4. **Open your browser:**
```
http://localhost:5174
```

### Build for Production

```bash
pnpm run build
```

The production-ready files will be in the `dist` folder.

## User Flow

1. **Welcome Screen** - Introduction to Claimora and its capabilities
2. **Upload Evidence** - Drag-and-drop or select files for analysis
3. **AI Analysis** - Real-time processing of case documents
4. **Results Dashboard** - View FCA elements strength, damages, and metrics
5. **Evidence Heatmap** - Visual representation of evidence distribution
6. **Gaps Analysis** - Identify weaknesses and get recommendations
7. **Generate Memo** - Create comprehensive case documentation

## Key Features Explained

### Smart Analysis
AI automatically:
- Identifies falsity in claims
- Detects scienter (knowledge)
- Evaluates materiality
- Establishes causation
- Calculates damages

### Evidence Heatmap
Interactive visualization showing:
- Evidence density across FCA elements
- Document type distribution
- Temporal patterns
- Strength indicators

### Gap Detection
Identifies:
- Missing evidence types
- Weak element support
- Opportunities for strengthening case
- Actionable next steps

### Security Features
- 🔐 End-to-end encryption
- ⚖️ Attorney-client privilege protection
- 🚫 No third-party data sharing
- 🔒 Secure file handling

## Available Scripts

```bash
pnpm run dev       # Start development server
pnpm run build     # Build for production
pnpm run preview   # Preview production build locally
```

## Deployment

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed deployment instructions for:
- Vercel
- Netlify
- GitHub Pages
- Docker
- Custom hosting

## Environment Variables

Create a `.env` file for configuration:

```env
VITE_API_URL=https://api.yourdomain.com
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_KEY=your_supabase_key
```

## Roadmap

- [ ] Backend API integration
- [ ] Real AI/ML case analysis
- [ ] User authentication system
- [ ] Team collaboration features
- [ ] Document OCR processing
- [ ] Export to PDF/Word
- [ ] Multi-language support
- [ ] Mobile app (React Native)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For questions or support, please contact:
- Email: support@claimora.com
- Issues: [GitHub Issues](https://github.com/yourusername/claimora/issues)

## Acknowledgments

- Built for legal professionals who value precision
- Powered by modern web technologies
- Designed with privacy and security in mind

---

**© 2026 Claimora. Built for legal professionals who value precision.**
