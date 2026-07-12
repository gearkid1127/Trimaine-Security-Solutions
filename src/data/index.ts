export interface NavLink {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const services: ServiceItem[] = [
  {
    id: 'concealed-carry',
    title: 'Concealed Carry Classes',
    description:
      'State-compliant instruction covering firearm safety, applicable laws, and responsible ownership for individuals pursuing their concealed carry license.',
  },
  {
    id: 'first-aid-cpr',
    title: 'First Aid & CPR Training',
    description:
      'Practical, hands-on training in emergency response fundamentals — including CPR technique and AED use — giving you the skills to act confidently when it matters.',
  },
  {
    id: 'process-serving',
    title: 'Process Serving',
    description:
      'Professional and discreet delivery of legal documents throughout the Chicagoland area, handled with attention to detail and strict procedural compliance.',
  },
  {
    id: 'private-investigation',
    title: 'Private Investigation',
    description:
      'Confidential investigative services conducted with professionalism and integrity. We gather accurate, actionable information while keeping all client matters strictly private.',
  },
];
