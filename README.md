# Narendar Home Tuitions

Premium home tutoring with certified tutors for all classes, subjects & boards. Personalized one-to-one learning with proven academic results in Hyderabad and Rangareddy areas.

## Features

- **Breadcrumb Navigation** - Easy navigation with breadcrumb trails on all inner pages
- **Join as Parent** - Registration form for parents to find tutors
- **Join as Tutor** - Registration form for tutors to register with detailed qualifications
- **Service Zones** - Coverage areas across Hyderabad and Rangareddy district
- **WhatsApp Integration** - Direct WhatsApp messaging for instant communication
- **SEO Optimized** - Comprehensive SEO with proper metadata and structured data
- **Responsive Design** - Mobile-first responsive design for all devices
- **Next.js 16** - Built with latest Next.js App Router and React 19

## Tech Stack

- **Framework**: Next.js 16
- **UI Library**: React 19
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui
- **Icons**: Lucide React
- **Typography**: Geist & Geist Mono fonts

## Getting Started

### Prerequisites
- Node.js 18+ or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/narendarhometutions96-tech/Narendar-Home-Tuitions.git
cd Narendar-Home-Tuitions
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
```

3. Run the development server:
```bash
pnpm dev
# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view the website

### Build for Production

```bash
pnpm build
pnpm start
```

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Homepage
│   ├── api/               # API routes
│   └── [routes]/          # Feature pages (services, about, contact, etc.)
├── components/            # React components
│   ├── site/              # Site-specific components
│   └── ui/                # shadcn/ui components
├── lib/                   # Utility functions
├── public/                # Static assets
├── app/globals.css        # Global styles & Tailwind config
└── package.json           # Dependencies

## Pages

- **/** - Homepage with hero section, features, and call-to-action
- **/about** - About us page with company information
- **/services** - Services overview page
- **/services-zones** - Coverage areas across Hyderabad and Rangareddy
- **/subjects** - Subjects taught and curriculum details
- **/testimonials** - Student and parent testimonials
- **/faq** - Frequently asked questions
- **/why-choose-us** - Why choose Narendar Home Tuitions
- **/contact** - Contact form and information
- **/join-parent** - Registration form for parents
- **/join-tutor** - Registration form for tutors

## Environment Variables

Create a `.env.local` file (not included in repository for security):

```
# Optional: Add your environment variables here
# AI_GATEWAY_API_KEY=your_key_here
# BLOB_READ_WRITE_TOKEN=your_token_here
```

## Deployment

### Deploy to Vercel

```bash
vercel
```

The easiest way to deploy is using the [Vercel Platform](https://vercel.com/).

### Deploy to Other Platforms

The project is compatible with any platform that supports Next.js:
- AWS Amplify
- Netlify
- Docker
- Self-hosted

## Features Roadmap

- [ ] Student dashboard
- [ ] Tutor availability calendar
- [ ] Payment integration
- [ ] Rating and reviews system
- [ ] Real-time messaging

## License

This project is proprietary and belongs to Narendar Home Tuitions.

## Contact

- **WhatsApp**: +91 63022 67422
- **Email**: narendarhometutions@example.com
- **Website**: narendarhometuitions.com

## Contributing

For issues or suggestions, please contact the development team.
