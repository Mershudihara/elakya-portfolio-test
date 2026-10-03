// Surya OS case study — all copy and image slots for /work/surya-os/.
//
// Adding a real image: put the file in public/images/surya-os/, then set `file`
// (e.g. 'wallpaper-01.jpg') and a descriptive `alt` on the matching slot.
// Slots without a `file` render as a clearly labelled placeholder.

const slot = (label, ratio, rest = {}) => ({ label, ratio, file: null, alt: '', ...rest })

const stateSteps = (name) =>
  [1, 2, 3, 4].map((n) => slot(`${name} 0${n}`, '4 / 3'))

export const suryaOS = {
  number: '01',
  title: 'Surya',
  titleAccent: 'OS',
  subtitle: 'A visual system for an expressive, cohesive desktop experience.',
  intro:
    'Surya OS is a desktop operating system concept exploring how a consistent visual language can make an interface feel expressive, approachable and cohesive across the system.',
  meta: [
    { label: 'Role', value: 'Visual Designer' },
    { label: 'Focus', value: 'Visual Design · UI Design · Iconography · Design Systems' },
    { label: 'Year', value: '2026' },
    { label: 'Tools', value: 'Figma · Inkscape · Illustrator' },
  ],
  heroVisual: slot('Surya OS desktop interface', '16 / 9', { caption: 'Surya OS' }),

  challenge: {
    title: 'The challenge',
    lead: 'An operating system is made up of hundreds of small visual decisions.',
    body: [
      'Icons, controls, states, wallpapers, colours and interface surfaces all need to feel like they belong to the same system.',
      'The challenge was to create a visual language that could support a wide range of desktop states while remaining clear, consistent and easy to understand.',
    ],
  },

  direction: {
    title: 'Visual direction',
    lead: 'The visual language for Surya OS takes inspiration from the changing qualities of sunlight.',
    body: [
      'Rather than treating the interface as a collection of individual screens, I approached it as a system of visual relationships — colour, geometry, typography, icons and surfaces working together.',
      'The system needed to feel distinctive without compromising clarity.',
    ],
    media: [
      slot('Theme visual 01', '16 / 10', { span: 7 }),
      slot('Theme visual 02', '4 / 5', { span: 5 }),
    ],
  },

  system: {
    title: 'Building the visual system',
    wallpapers: {
      index: '3.1',
      title: 'Wallpapers',
      text: 'Multiple wallpaper directions and themes were developed, each with its own character, while keeping a common visual language across all of them.',
      media: [
        slot('Wallpaper 01', '16 / 10', { span: 7 }),
        slot('Wallpaper 02', '4 / 5', { span: 5 }),
        slot('Wallpaper 03', '16 / 10', { span: 4 }),
        slot('Wallpaper 04', '16 / 10', { span: 4 }),
        slot('Wallpaper 05', '16 / 10', { span: 4 }),
      ],
    },
    iconography: {
      index: '3.2',
      title: 'Iconography',
      text: 'The icon system was refined as one family, with close attention to:',
      points: ['Stroke weight', 'Geometry', 'Alignment', 'Visual consistency', 'State changes'],
      icons: Array.from({ length: 12 }, (_, i) =>
        slot(`Icon ${String(i + 1).padStart(2, '0')}`, '1 / 1'),
      ),
    },
  },

  states: {
    title: 'Designing for states',
    lead: 'Icons and controls were designed as states rather than isolated static assets.',
    body: [
      'A battery, a volume level or a connection is never a single icon — it is a sequence. Each step needed to read clearly on its own and stay visibly related to the next.',
    ],
    groups: ['Battery', 'Audio', 'Network', 'Notifications'].map((name) => ({
      name,
      steps: stateSteps(name),
    })),
  },

  details: {
    title: 'The details',
    media: [
      slot('Slider thumb styling', '16 / 10', { span: 7 }),
      slot('Hover states', '4 / 5', { span: 5 }),
      slot('Icon tray', '1 / 1', { span: 4 }),
      slot('Colour adjustments', '1 / 1', { span: 4 }),
      slot('Theme-specific UI treatment', '1 / 1', { span: 4 }),
    ],
  },

  refinement: {
    title: 'Refinement',
    lead: 'Some of the most important work happened during refinement.',
    body: [
      'I reviewed existing interface behaviour, identified visual inconsistencies and adjusted colours, hover states and component details.',
      'For vector assets, I also worked through the SVG workflow between Figma, Illustrator and Inkscape to ensure the exported assets remained structurally usable.',
    ],
    tools: ['Figma', 'Illustrator', 'Inkscape'],
  },

  final: {
    title: 'A system, not a collection of screens.',
    lead: 'The result is a more cohesive visual layer for Surya OS — from the desktop wallpaper down to the smallest system icon.',
    media: [
      slot('Final composition', '21 / 9', { span: 12 }),
      slot('Final detail 01', '4 / 3', { span: 6 }),
      slot('Final detail 02', '4 / 3', { span: 6 }),
    ],
  },

  reflection: {
    title: 'What I learned',
    lead: 'Working on an operating-system interface changed the way I think about visual design.',
    setup: 'The challenge isn’t simply making individual elements look good.',
    quote: ['It’s making hundreds of small decisions ', 'agree', ' with each other.'],
    closing:
      'A successful visual system should feel consistent without feeling repetitive, expressive without becoming distracting, and detailed without becoming difficult to use.',
  },

  next: { number: '02', title: 'PlanPop', href: '/#planpop-title' },
}
