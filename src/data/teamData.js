/**
 * Team Data
 * ─────────
 * To add, remove, or edit a team member, simply update this array.
 * The team page will render automatically from this data.
 *
 * Fields:
 *   id         – unique identifier (used as React key and HTML id)
 *   name       – display name
 *   role       – position title
 *   department – academic department or description
 *   imageMain  – path to the primary photo (shown by default)
 *   imageAlt   – path to the alternate photo (shown on hover, optional)
 *   section    – "executive" | "subteam" (determines which grid the card appears in)
 *   order      – display order within its section (lower = first)
 */

const teamData = [
  // ── Executive Team ──────────────────────────────────────────────
  {
    id: 'team-manager',
    name: 'Elias (Jinkyu) Hyun',
    role: 'Team Manager',
    department: 'Mechanical Engineering',
    imageMain: '/assets/team/placeholder-main.svg',
    imageAlt: '/assets/team/placeholder-alt.svg',
    section: 'executive',
    order: 1,
  },
  {
    id: 'team-vice-manager',
    name: 'Sadhak Pathak',
    role: 'Team Vice Manager',
    department: 'Electrical and Computer Engineering',
    imageMain: '/assets/team/placeholder-main.svg',
    imageAlt: '/assets/team/placeholder-alt.svg',
    section: 'executive',
    order: 2,
  },
  {
    id: 'team-treasurer',
    name: 'Deokwoong Han',
    role: 'Team Treasurer',
    department: 'Mechanical Engineering',
    imageMain: '/assets/team/placeholder-main.svg',
    imageAlt: '/assets/team/placeholder-alt.svg',
    section: 'executive',
    order: 3,
  },

  // ── Sub-Team Leads ──────────────────────────────────────────────
  {
    id: 'mechanical-lead',
    name: 'Deokwoong Han',
    role: 'Mechanical Team Lead',
    department: 'Mechanical Engineering',
    imageMain: '/assets/team/placeholder-main.svg',
    imageAlt: '/assets/team/placeholder-alt.svg',
    section: 'subteam',
    order: 1,
  },
  {
    id: 'aerodynamics-lead',
    name: 'Vacant',
    role: 'Aerodynamics Team Lead',
    department: '',
    imageMain: '/assets/team/placeholder-main.svg',
    imageAlt: '/assets/team/placeholder-alt.svg',
    section: 'subteam',
    order: 2,
  },
  {
    id: 'electrical-lead',
    name: 'Yedil Kuanyshbekov',
    role: 'Electrical Team Lead',
    department: 'Electrical and Computer Engineering',
    imageMain: '/assets/team/placeholder-main.svg',
    imageAlt: '/assets/team/placeholder-alt.svg',
    section: 'subteam',
    order: 3,
  },
  {
    id: 'software-lead',
    name: 'Vacant',
    role: 'Software Team Lead',
    department: '',
    imageMain: '/assets/team/placeholder-main.svg',
    imageAlt: '/assets/team/placeholder-alt.svg',
    section: 'subteam',
    order: 4,
  },
  {
    id: 'integrations-lead',
    name: 'Vacant',
    role: 'Integrations Team Lead',
    department: '',
    imageMain: '/assets/team/placeholder-main.svg',
    imageAlt: '/assets/team/placeholder-alt.svg',
    section: 'subteam',
    order: 5,
  },
  {
    id: 'operations-lead',
    name: 'Vacant',
    role: 'Operations Team Lead',
    department: '',
    imageMain: '/assets/team/placeholder-main.svg',
    imageAlt: '/assets/team/placeholder-alt.svg',
    section: 'subteam',
    order: 6,
  },
  {
    id: 'education-lead',
    name: 'Vacant',
    role: 'Education Team Lead',
    department: '',
    imageMain: '/assets/team/placeholder-main.svg',
    imageAlt: '/assets/team/placeholder-alt.svg',
    section: 'subteam',
    order: 7,
  },
  {
    id: 'media-lead',
    name: 'Vacant',
    role: 'Media Team Lead',
    department: '',
    imageMain: '/assets/team/placeholder-main.svg',
    imageAlt: '/assets/team/placeholder-alt.svg',
    section: 'subteam',
    order: 8,
  },
];

/**
 * Helper: get members by section, sorted by order.
 * @param {string} section – "executive" or "subteam"
 */
export function getMembersBySection(section) {
  return teamData
    .filter((m) => m.section === section)
    .sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
}

export default teamData;
