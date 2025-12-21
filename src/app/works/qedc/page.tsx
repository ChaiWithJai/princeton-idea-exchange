import Navigation from '@/components/Navigation';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

const tags = ['Curriculum Design', 'GTM Engineering', 'AI', 'Visual Design'];

export default function QEDCPage() {
  return (
    <>
      <Navigation />
      <main className="pt-32">
        <article className="container py-12">
          {/* Header */}
          <header className="mb-12">
            <h1 className="mb-6">Creating Effective Curriculum for QEDC</h1>
            <p className="text-[var(--color-gray)] text-lg mb-6 max-w-3xl">
              We partnered with QEDC to design AI-powered curriculum for
              resource-constrained entrepreneurs, helping them move from &quot;stuck
              planning&quot; to shipping real demos in weeks through practical,
              assessment-driven workshops.
            </p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-12">
            <Image
              src="/images/CDzTzmLIe97GbdiyW49D14a5Rqc.png"
              alt="QEDC Case Study"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="max-w-3xl mx-auto prose prose-lg">
            <p className="text-[var(--color-gray)]">
              <strong>Client:</strong> Queens Economic Development Corporation (QEDC)
              <br />
              <strong>Project:</strong> AI Adoption for Entrepreneurs - 8-Week Accelerator Program
            </p>

            <h5 className="mt-10 mb-4">The Challenge</h5>
            <p className="text-[var(--color-gray)]">
              QEDC approached with a critical workforce development need: their
              entrepreneurial community (primarily over-35 founders juggling side hustles
              in professional services, crafts, and food businesses) were falling behind
              in the AI revolution. The challenge was multi-layered:
            </p>
            <ul className="list-disc pl-6 text-[var(--color-gray)] space-y-2">
              <li>
                <strong>Knowledge Gap:</strong> Most participants were non-technical,
                intimidated by AI tools, and didn&apos;t know where to start despite knowing
                they &quot;should&quot; use AI.
              </li>
              <li>
                <strong>Time Poverty:</strong> These founders were already overwhelmed with
                daily operations, working solo or with minimal support. Traditional training
                would add to their burden rather than relieve it.
              </li>
              <li>
                <strong>Behavior Change at Scale:</strong> QEDC needed more than information
                transfer—they needed lasting behavior change across 30+ diverse businesses,
                with participants able to demonstrate real ROI from AI adoption.
              </li>
            </ul>
            <p className="text-[var(--color-gray)]">
              The deeper challenge: how to move founders from &quot;AI sounds interesting&quot; to
              &quot;AI is integrated into my weekly workflow and saving me money&quot; in just 8
              weeks, entirely online.
            </p>

            <h5 className="mt-10 mb-4">The Solution</h5>
            <p className="text-[var(--color-gray)]">
              Jai designed and taught a pedagogically rigorous accelerator that functioned
              as both a skills incubator and a business transformation lab. Rather than
              teaching AI tools in isolation, he created an operating system for AI adoption.
            </p>
            <ul className="list-disc pl-6 text-[var(--color-gray)] space-y-2">
              <li>
                <strong>Learn-by-Doing Architecture:</strong> Using Bloom&apos;s Taxonomy and
                Gagné&apos;s Nine Events of Instruction, each 2-hour session moved participants
                through analysis, application, and evaluation—not just understanding.
                Participants left every session with a completed artifact: a business model
                canvas, a workflow automation, a content calendar, or a functional website
                built with AI tools.
              </li>
              <li>
                <strong>Real-Time Problem Solving:</strong> Each session included live
                &quot;Prompt Clinic&quot; moments where Jai worked through actual participant
                challenges on screen—from Milton&apos;s 40-year print shop needing email
                automation to Samina&apos;s acupuncture clinic expansion strategy. This created
                a library of reusable patterns while making abstract concepts immediately
                concrete.
              </li>
              <li>
                <strong>Pedagogical Scaffolding for Sustainability:</strong> The course
                wasn&apos;t about memorizing prompts—it was about building mental models. Jai
                introduced frameworks like the &quot;Signal Stack&quot; (Persona, Task, Context,
                Format) and concepts like &quot;distributed cognition&quot; and &quot;ugly first drafts&quot;
                that gave founders reusable thinking tools beyond any single AI platform.
              </li>
            </ul>

            <h5 className="mt-10 mb-4">The Results</h5>
            <p className="text-[var(--color-gray)]">
              The 8-week program transformed not just skills but mindsets, creating a
              cohort of AI-native entrepreneurs who could outcompete larger, better-funded
              competitors.
            </p>
            <ul className="list-disc pl-6 text-[var(--color-gray)] space-y-2">
              <li>
                <strong>Measurable Skill Acquisition:</strong> 100% of participants who
                completed the course successfully created AI-powered business artifacts
                (websites, automation workflows, go-to-market strategies) that would have
                previously required hiring contractors or developers.
              </li>
              <li>
                <strong>Validated Business Impact:</strong> Participants like Nick
                (Marketito) used AI to reduce website development time from months to weeks
                while landing his first venue partnership. Milton (Mendez Printing)
                identified $11,000+ in quick-win revenue opportunities through AI-assisted
                customer prospecting—in a single 2-hour session.
              </li>
              <li>
                <strong>Sustainable Community of Practice:</strong> The course culminated
                in video testimonials that served dual purposes: demonstrating participant
                transformation while creating assets for future cohort recruitment. Multiple
                participants immediately signed up for the advanced &quot;Prompt Clinic&quot;
                continuation program, indicating genuine behavior change rather than one-time
                engagement.
              </li>
            </ul>

            {/* Testimonial */}
            <blockquote className="border-l-4 border-[var(--color-orange)] pl-6 my-10 italic text-[var(--color-gray)]">
              &quot;Jai has a unique gift for taking overwhelming technology and making it
              feel accessible and immediately useful. In our final session, I watched him
              take my decade-long business challenge—how to validate demand for consolidating
              multiple acupuncture clinics—and in 20 minutes, using AI tools I now have
              access to, he created a complete go-to-market strategy with specific buyer
              contacts and validation frameworks. I&apos;m going to watch this class multiple
              times. This isn&apos;t just teaching AI tools—it&apos;s teaching how to think
              differently about your business.&quot;
              <br />
              <strong className="text-[var(--color-dark)] not-italic">
                — Samina, Course Participant & Doctor of Acupuncture
              </strong>
            </blockquote>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-16 pt-8 border-t border-gray-200">
            <Link
              href="/works"
              className="text-[var(--color-dark)] hover:text-[var(--color-orange)] transition-colors"
            >
              &larr; Back to All Works
            </Link>
            <span className="text-[var(--color-gray)]">End of Works</span>
          </div>
        </article>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
