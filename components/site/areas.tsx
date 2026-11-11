import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ScrollReveal } from './scroll-reveal'
import { SectionHeading } from './section-heading'

const AREAS = [
  'LB Nagar',
  'Vanastalipuram',
  'Kothapet',
  'Mansoorabad',
  'Saroornagar',
  'Nagole',
  'Alkapuri Township',
  'Chaitanyapuri',
  'Hayathnagar',
  'BN Reddy Nagar',
  'Hastinapuram',
  'Vanasthalipuram Auto Nagar',
  'Uppal',
  'Tarnaka',
  'Dilsukhnagar',
]

export function Areas({ isHomepage = true }: { isHomepage?: boolean }) {
  // Show only 12 areas on homepage, all on dedicated page
  const displayAreas = isHomepage ? AREAS.slice(0, 12) : AREAS

  return (
    <section id="areas" className="scroll-mt-20 bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Service Zones"
          title={isHomepage ? 'Home tuition around LB Nagar' : 'LB Nagar service zones'}
description={isHomepage
            ? 'Explore home tuition enquiries across LB Nagar and nearby east Hyderabad neighborhoods. Select your area to share the student’s class, subject and schedule.'
            : 'Our LB Nagar-focused service zones include Vanastalipuram, Kothapet, Mansoorabad, Saroornagar, Nagole and nearby neighborhoods. Contact us to confirm current tutor coverage for your address.'
          }
          className="mx-auto"
        />

        <div className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {displayAreas.map((area, i) => (
            <ScrollReveal
              key={area}
              delay={(i % 3) * 80}
              className="group flex items-center gap-2 rounded-xl border border-border bg-card p-3 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-lg"
            >
              <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-gold/15 text-gold transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
                <MapPin className="size-4" />
              </span>
              <span className="text-sm font-medium text-brand">{area}</span>
            </ScrollReveal>
          ))}
        </div>

        {isHomepage && (
          <ScrollReveal delay={200} className="mt-10 flex justify-center">
            <Button
              render={<Link href="/services-zones" />}
              className="h-12 gap-2 rounded-full bg-brand px-8 text-base font-semibold text-brand-foreground shadow-lg shadow-brand/20 hover:bg-brand/90"
            >
              Explore More Service Zones
              <ArrowRight className="size-5" />
            </Button>
          </ScrollReveal>
        )}
      </div>
    </section>
  )
}
