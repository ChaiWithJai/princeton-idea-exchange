import WorkCard from './WorkCard';

const caseStudies = [
  {
    title: 'How Theramotive Built Fundable IP Fast',
    description:
      'With just one week to mobilize 20 inexperienced interns, we built Theramotive a functioning engineering system that delivered a validated AI-powered medical billing MVP. The result: defensible IP and $320,000 in seed funding secured in record time.',
    tags: ['Healthtech', 'Bespoke Application Development', 'Data Science', 'Domain Expert', 'GTM Engineering'],
    image: '/images/kzYllvpNxXAbnOFOnaffYf15Rs.png',
    href: '/works/theramotive',
  },
  {
    title: 'Creating Effective Curriculum for QEDC',
    description:
      'We partnered with QEDC to design AI-powered curriculum for resource-constrained entrepreneurs, helping them move from "stuck planning" to shipping real demos in weeks through practical, assessment-driven workshops.',
    tags: ['Curriculum Design', 'GTM Engineering', 'AI', 'Visual Design'],
    image: '/images/CDzTzmLIe97GbdiyW49D14a5Rqc.png',
    href: '/works/qedc',
  },
];

export default function ActionSection() {
  return (
    <section className="py-20">
      <div className="container">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="mb-4">Action, not strategy</h2>
          <p className="text-[var(--color-gray)] text-lg">
            Real results from founders who shipped, not just planned.
          </p>
        </div>

        {/* Case Study Cards - Stacked horizontal cards */}
        <div className="space-y-6">
          {caseStudies.map((study, index) => (
            <WorkCard key={index} {...study} />
          ))}
        </div>
      </div>
    </section>
  );
}
