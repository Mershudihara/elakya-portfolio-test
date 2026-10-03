// All editable copy lives here. Update text, links and projects without touching layout code.

export const site = {
  name: 'Elakya Sekar',
  role: 'Visual Designer',
  availability: 'Open to select projects',
  // Placeholder contact details — replace with real ones.
  email: 'hello@elakyasekar.com',
  linkedin: {
    label: 'linkedin.com/in/elakyasekar',
    url: 'https://www.linkedin.com/in/elakyasekar',
  },
}

export const navLinks = [
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

export const hero = {
  intro: {
    label: 'Visual Designer',
    text: 'I design thoughtful interfaces, visual systems and product experiences — balancing clarity, character and the details in between.',
  },
  statement:
    'I work across visual design and UI, turning complex ideas into clear, expressive interfaces — from product systems and components to the tiny details people notice without thinking.',
  disciplines: ['Visual Design', 'UI Design', 'Design Systems', 'Interaction Design'],
}

// `visual` maps to a component in src/components/visuals/index.js
export const projects = [
  {
    id: 'surya-os',
    number: '01',
    title: 'Surya OS',
    category: 'Operating System · Visual Identity & UI',
    description:
      'A warm, light-led operating system concept. Its visual language follows the arc of the sun — shifting colour temperature, soft geometry and a calm type system that adapts from dawn to dusk.',
    role: 'Visual & UI Design',
    year: '2026',
    visual: 'surya',
  },
  {
    id: 'planpop',
    number: '02',
    title: 'PlanPop',
    category: 'Mobile App · Product Design',
    description:
      'A playful planning app that makes scheduling something to look forward to. Bold colour blocking, tactile components and micro-interactions that reward every small decision.',
    role: 'Product & Interaction Design',
    year: '2025',
    visual: 'planpop',
  },
  {
    id: 'spatial-ui',
    number: '03',
    title: 'Spatial UI',
    category: 'Spatial Computing · Interaction Design',
    description:
      'An exploration of interface patterns for spatial computing — depth, layering and light used as hierarchy, with a component kit that stays legible at any distance.',
    role: 'Interaction & Systems Design',
    year: '2025',
    visual: 'spatial',
  },
]

export const about = {
  lead: 'I’m Elakya — a visual designer who believes the best interfaces feel inevitable: clear at a glance, rich on a second look.',
  body: [
    'I work at the meeting point of brand and product, translating a point of view into the typography, colour, layout and motion people actually touch every day.',
    'My process is rigorous but never rigid — I sketch in systems, test in context and keep refining until the final work feels effortless.',
  ],
  capabilities: [
    {
      title: 'Visual Design',
      text: 'Art direction, typography, colour and composition that give products a distinct voice.',
    },
    {
      title: 'UI Design',
      text: 'Clear, legible interfaces with considered hierarchy, spacing and states — at every breakpoint.',
    },
    {
      title: 'Design Systems',
      text: 'Tokens, components and guidelines that help teams move fast and stay consistent.',
    },
    {
      title: 'Interaction Design',
      text: 'Motion and micro-interactions that make products feel responsive and alive.',
    },
  ],
}
