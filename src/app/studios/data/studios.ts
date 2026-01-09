// Personalized studio data for sales pages
// Each studio has specific market insights and opportunities linked to Gemini Studio Playbook chapters

export interface StudioOpportunity {
  title: string;
  why: string;
  chapterTitle: string;
  chapterNumber: number;
  chapterSlug: string;
}

export interface StudioData {
  slug: string;
  name: string;
  contact: {
    name: string;
    title?: string;
    phone: string;
    email: string;
  };
  location: string;
  website?: string;
  tier: 'tier1' | 'tier2' | 'directory';
  squareFootage?: number;
  features?: string[];
  specializations?: string[];

  // The Promise (above the fold)
  hook: string;
  subhook: string;

  // Market Position (plain English)
  marketPosition: {
    standout: string;      // What makes them notable
    asset: string;         // Their specific strength
    gap: string;           // What's missing
  };

  // 3 Opportunities linked to workbook chapters
  opportunities: StudioOpportunity[];

  // Personal letter (replaces loom bullet points)
  letter: {
    greeting: string;
    body: string[];
    signoff: string;
  };

  // Specific CTA angle
  ctaAngle: string;
}

export const WORKBOOK_BASE_URL = 'https://grow.chaiwithjai.com/40/the-gemini-studio-playbook';

export const studios: StudioData[] = [
  // ============================================
  // TIER 1: Close within 90 days
  // ============================================

  {
    slug: 'kvibe',
    name: 'KVibe Studios',
    contact: {
      name: 'Khoa Le',
      title: 'CEO',
      phone: '650-460-5124',
      email: 'sales@kvibe.com',
    },
    location: '186 Griffith St, Jersey City',
    website: 'https://www.kvibe.com',
    tier: 'tier1',
    squareFootage: 8000,
    features: ['Edit suite', 'Full kitchen', 'Makeup/green room', 'Equipment and staff available'],
    specializations: ['Video Production', 'Content Creation'],

    hook: 'You already mention AI automation. Let\'s make it real.',
    subhook: 'You\'ve produced 8,500+ videos over 10 years. You have Netflix, Spotify, and NBC Universal on your client list. But when I looked for what "AI automation" actually means on your site, I couldn\'t find it.',

    marketPosition: {
      standout: 'You\'re one of only 3 studios in NJ that mention AI at all. The other 29 don\'t even try.',
      asset: '8,000 SF multi-purpose facility with edit suites, kitchen, and green room. Plus a satisfaction guarantee nobody else offers.',
      gap: 'The "AI automation" promise on your marketing services page has no details. Clients can\'t buy what they can\'t understand.',
    },

    opportunities: [
      {
        title: 'Turn client intake into a 10-minute process',
        why: 'You\'re taking messy client calls and spending an hour turning notes into briefs. Every single project.',
        chapterTitle: 'Build the Brief Builder Gem',
        chapterNumber: 5,
        chapterSlug: '880/build-your-brief-builder-gem',
      },
      {
        title: 'Stop scope creep before it kills your margins',
        why: 'When a client says "one small change," you need to know instantly if it\'s in scope or a new quote.',
        chapterTitle: 'Build the Scope Creep Detector',
        chapterNumber: 6,
        chapterSlug: '881/build-your-scope-creep-detector-gem',
      },
      {
        title: 'Actually ship the case studies',
        why: 'You have 8,500+ videos but I found very few client stories on your site. The work after the work isn\'t getting done.',
        chapterTitle: 'Build the Project Closer Gem',
        chapterNumber: 8,
        chapterSlug: '883/build-your-project-closer-gem',
      },
    ],

    letter: {
      greeting: 'Khoa,',
      body: [
        'I spent some time on kvibe.com this week. You mention "AI automation" in your marketing services, and that caught my attention—you\'re one of only three studios in all of New Jersey that even bring it up.',
        'But when I clicked through, I couldn\'t find what it actually means. No examples. No workflow. No way for a client to understand what they\'d get.',
        'I put together a short walkthrough showing three AI tools that run inside Google Workspace (which I\'m guessing you already use). One of them—Brief Builder—turns messy client notes into structured briefs in about 90 seconds.',
        'Would love to show you over coffee. I\'ll bring my laptop.',
      ],
      signoff: 'Best,\nJai',
    },

    ctaAngle: 'You\'re already promising AI automation. Let me help you deliver on that promise.',
  },

  {
    slug: 'loop',
    name: 'Loop Studios',
    contact: {
      name: 'Sean Looney',
      title: 'Founder',
      phone: '973-283-5290',
      email: 'hello@loopwithus.com',
    },
    location: '80 Maple Ave, Montclair',
    website: 'https://www.loopstudiosinc.com',
    tier: 'tier1',
    squareFootage: 7500,
    features: ['3 soundproof studios', '5,000 SF outdoor courtyard', 'Yoga room', 'Craft services bar'],
    specializations: ['Premium Production', 'Corporate Events', 'Brand Films'],

    hook: 'You have 32 AI tools. Now productize them.',
    subhook: 'Inc. 5000. Adweek fastest-growing. Two years of hands-on AI production experience. You\'re already doing what other studios are afraid of. The question is: are you teaching it?',

    marketPosition: {
      standout: 'You\'re the most AI-forward studio in New Jersey. 32+ tools, real case studies with Target and Smuckers. Nobody else comes close.',
      asset: '15,000 SF premium facility with 7 distinct shooting locations. Plus your "Let\'s gather for good" social impact model.',
      gap: 'All that AI expertise is locked in your team\'s heads. You\'re not offering training. That\'s $1M+ in annual revenue sitting on the table.',
    },

    opportunities: [
      {
        title: 'Package your AI expertise into a training offering',
        why: 'You already know 32+ tools. Other studios are desperate to learn. Charge them.',
        chapterTitle: 'The Gemini Studio Vision',
        chapterNumber: 2,
        chapterSlug: '877/the-gemini-studio-vision',
      },
      {
        title: 'Turn your completed projects into case studies automatically',
        why: 'You\'ve worked with Target, Parkview Health, NJMLS, Smuckers. Where are the detailed case studies?',
        chapterTitle: 'Build the Project Closer Gem',
        chapterNumber: 8,
        chapterSlug: '883/build-your-project-closer-gem',
      },
      {
        title: 'Create transparent AI production packages',
        why: 'No pricing on your site. "Contact us" creates friction. Fixed-price AI packages would convert faster.',
        chapterTitle: 'Build the Brief Builder Gem',
        chapterNumber: 5,
        chapterSlug: '880/build-your-brief-builder-gem',
      },
    ],

    letter: {
      greeting: 'Sean,',
      body: [
        'I analyzed all 32 studios on the NJ Film Commission list. You\'re the only one actually doing AI production. Two years of experience. 32+ tools. Real case studies with Target and Smuckers.',
        'Here\'s what I noticed: zero of those 32 studios offer AI training. Not one.',
        'You have the expertise. You have the facility. You have the credibility. But you\'re not teaching it.',
        'Some rough math: 12 bootcamps a year, 15 attendees each, $3,500 per person—that\'s $630K. And attendees become production clients.',
        'I\'m not suggesting you need training on AI. You\'re already ahead. What I help with is systematizing and productizing. Let me show you what that looks like.',
      ],
      signoff: 'Best,\nJai',
    },

    ctaAngle: 'You\'re already the AI experts. Let me help you monetize that expertise.',
  },

  {
    slug: 'sip',
    name: 'SIP Studios',
    contact: {
      name: 'George Martens',
      title: 'CEO',
      phone: '917-750-1714',
      email: 'george@sipstudiosjc.com',
    },
    location: '140 Sip Ave, Jersey City',
    website: 'https://www.sipstudiosjc.com',
    tier: 'tier1',
    squareFootage: 16000,
    features: ['1,000 SF stage', '2,500 SF common space', '16 private offices', 'Music recording facility'],
    specializations: ['Creative Community', 'Music', 'Podcast', 'Photo'],

    hook: 'Your community is your unfair advantage.',
    subhook: '186+ in-house productions. A membership model. Film, podcast, music, photo under one roof. You\'ve built a creative hub. Now give your members something nobody else offers.',

    marketPosition: {
      standout: 'You\'re the only community-model studio in NJ. Everyone else is transactional. You\'re building relationships.',
      asset: '16,000 SF multi-modal facility with 1,000 SF stage, podcast studio, music recording, and 16 private offices.',
      gap: 'No educational programming. Your members are hungry to learn AI tools for their creative work. You\'re not feeding them.',
    },

    opportunities: [
      {
        title: 'Launch a "SIP Pro" membership tier with AI training',
        why: 'Your members are podcasters, filmmakers, musicians. They all need to learn Descript, Runway, Suno. Charge them.',
        chapterTitle: 'The 70% Problem',
        chapterNumber: 1,
        chapterSlug: '876/the-70-problem',
      },
      {
        title: 'Help members turn their work into case studies',
        why: 'Your members finish projects but don\'t document them. A Project Closer Gem helps them (and showcases your community).',
        chapterTitle: 'Build the Project Closer Gem',
        chapterNumber: 8,
        chapterSlug: '883/build-your-project-closer-gem',
      },
      {
        title: 'Systematize your own production intake',
        why: 'With 186+ productions, you\'ve seen every kind of brief. Build a Gem that captures your process.',
        chapterTitle: 'Build the Brief Builder Gem',
        chapterNumber: 5,
        chapterSlug: '880/build-your-brief-builder-gem',
      },
    ],

    letter: {
      greeting: 'George,',
      body: [
        'I read about your background—C.O.D.A., five years at the NY School for the Deaf, the Grateful Deaf documentary, Juniper winning 6 festival awards. You understand community in a way most studio owners don\'t.',
        'That\'s your competitive advantage. Everyone else is transactional. You\'re building relationships.',
        'Your members—the podcasters, filmmakers, musicians—they\'re hungry to learn tools like Descript, Runway, Suno. But there\'s nowhere for them to learn it. Not at SIP, not anywhere in Jersey.',
        'What if you created a "SIP Pro" tier? An extra $200 a month, members get access to monthly AI workshops plus one-on-one time. 20 members upgrade, that\'s $48K a year.',
        'You\'ve built something special at 140 Sip. Let\'s give your community something nobody else offers.',
      ],
      signoff: 'Best over coffee,\nJai',
    },

    ctaAngle: 'Your members trust you. Give them skills they can\'t get anywhere else.',
  },

  // ============================================
  // TIER 2: Close within 180 days
  // ============================================

  {
    slug: 'ironbound',
    name: 'Ironbound Studios',
    contact: {
      name: 'Ken Gifford',
      phone: '973-449-2200',
      email: 'kgifford@ironboundstudios.com',
    },
    location: '164 Delancy Street, Newark',
    website: 'https://www.ironboundstudios.com',
    tier: 'tier2',
    squareFootage: 47500,
    features: ['7 studios (600-7,500 SF)', 'Furnished loft apartments', '3 commercial kitchens'],
    specializations: ['Film', 'TV', 'Podcast', 'Live Streaming'],

    hook: 'Stay-and-Shoot is your superpower. Now fill the empty days.',
    subhook: 'You\'re the only studio in America zoned residential. Cast and crew can live on-site during production. But when you\'re not shooting, those 47,500 square feet aren\'t earning.',

    marketPosition: {
      standout: 'Your Stay-and-Shoot model is genuinely unique. No other US facility offers integrated housing.',
      asset: '47,500 SF with 7 studios, furnished loft apartments, 3 commercial kitchens, and 9,000 amps of power.',
      gap: 'Zero online reviews. No visible case studies. The sustainability messaging is great but not quantified.',
    },

    opportunities: [
      {
        title: 'Run multi-day AI filmmaking bootcamps',
        why: 'Your housing makes immersive 3-day programs possible. Nobody else can offer "learn and stay."',
        chapterTitle: 'The Gemini Studio Vision',
        chapterNumber: 2,
        chapterSlug: '877/the-gemini-studio-vision',
      },
      {
        title: 'Systematize your production management intake',
        why: 'You offer end-to-end production management. A Brief Builder Gem captures requirements faster.',
        chapterTitle: 'Build the Brief Builder Gem',
        chapterNumber: 5,
        chapterSlug: '880/build-your-brief-builder-gem',
      },
      {
        title: 'Generate case studies from completed productions',
        why: 'You mention "Love Murder Weed" but where\'s the detailed story? Every production should become a case study.',
        chapterTitle: 'Build the Project Closer Gem',
        chapterNumber: 8,
        chapterSlug: '883/build-your-project-closer-gem',
      },
    ],

    letter: {
      greeting: 'Ken,',
      body: [
        'The Stay-and-Shoot model is genuinely differentiated. I looked at every studio on the NJ Film Commission list—no one else offers integrated housing. That\'s a real competitive advantage.',
        'Here\'s what I\'m thinking: what if you monetized off-peak capacity with training programs?',
        'A 3-day AI Filmmaking Bootcamp, $1,500 per person, housing included. Monthly bootcamp, 12 attendees—that\'s $216K a year in new revenue. And attendees become production clients.',
        'I put together a playbook on how studios can build AI workflows. Would love to walk you through what makes sense for Ironbound.',
      ],
      signoff: 'Best,\nJai',
    },

    ctaAngle: 'Turn your empty days into training revenue.',
  },

  {
    slug: 'parlay',
    name: 'Parlay Studios',
    contact: {
      name: 'John Welsh III',
      phone: '201-459-9044',
      email: 'studio@parlaystudios.com',
    },
    location: '6 Senate Place, Jersey City',
    website: 'https://www.parlaystudios.com',
    tier: 'tier2',
    squareFootage: 50000,
    features: ['Column-free stages', 'Drive-in studios', 'In-house equipment rental'],
    specializations: ['Film', 'TV', 'Photography', 'Advertising'],

    hook: 'You have enterprise infrastructure. Now get enterprise systems.',
    subhook: '50,000 SF. Column-free stages. Drive-in studios. In-house equipment rental. You can handle the biggest productions. But are your workflows keeping up with your scale?',

    marketPosition: {
      standout: 'You\'re one of the largest facilities in Jersey City, competing directly with NYC studios.',
      asset: '50,000 SF with column-free stages and full equipment rental operation.',
      gap: 'XR capabilities mentioned but not showcased. No visible workflow differentiation from other large studios.',
    },

    opportunities: [
      {
        title: 'Standardize your client intake for complex productions',
        why: 'Big productions have complicated requirements. A Brief Builder Gem ensures nothing gets missed.',
        chapterTitle: 'Build the Brief Builder Gem',
        chapterNumber: 5,
        chapterSlug: '880/build-your-brief-builder-gem',
      },
      {
        title: 'Manage scope on XR/virtual production projects',
        why: 'XR projects have notorious scope creep. A Scope Creep Detector protects your margins.',
        chapterTitle: 'Build the Scope Creep Detector',
        chapterNumber: 6,
        chapterSlug: '881/build-your-scope-creep-detector-gem',
      },
      {
        title: 'Document your XR capabilities as case studies',
        why: 'Virtual production is hot. If you\'re doing it, you should be showcasing it.',
        chapterTitle: 'Build the Project Closer Gem',
        chapterNumber: 8,
        chapterSlug: '883/build-your-project-closer-gem',
      },
    ],

    letter: {
      greeting: 'John,',
      body: [
        '50,000 square feet is serious infrastructure. You\'re competing directly with NYC studios, but without the Manhattan overhead.',
        'The challenge at scale: workflows that worked at 10,000 SF break at 50,000. Client intake gets messier. Scope creep hurts more. Documentation falls behind.',
        'I help studios build AI systems that handle the admin work—Brief Builder for complex multi-stage productions, Scope Creep Detector for XR projects (which always go over), Project Closer to showcase work and attract more.',
        'Your facility is enterprise-grade. Your workflows should be too.',
      ],
      signoff: 'Best,\nJai',
    },

    ctaAngle: 'Your facility is enterprise-grade. Your workflows should be too.',
  },

  {
    slug: 'silver-spoon',
    name: 'Silver Spoon XR',
    contact: {
      name: 'Nicole Rinaldi',
      phone: '646-781-7600',
      email: 'Studio@silverspoonanimation.com',
    },
    location: '701 Penhorn Ave, Secaucus',
    website: 'https://www.silverspoonxr.com',
    tier: 'tier2',
    squareFootage: 7250,
    features: ['45\'x17.5\' LED wall', '20\'x25\' 2-wall green screen cyc', '48-camera motion capture'],
    specializations: ['XR', 'Virtual Production', 'Animation', 'Motion Capture'],

    hook: 'You\'re Emmy-winning. Now scale without burning out.',
    subhook: 'LED walls. Motion capture. Unreal Engine. You\'re doing the most technically complex work in the state. But high-touch custom work doesn\'t scale. Systems do.',

    marketPosition: {
      standout: 'You\'re the premium VP/XR studio in NJ. Emmy-winning work. 48-camera motion capture.',
      asset: '45\'x17.5\' LED wall, 20\'x25\' green screen cyc, full motion capture stage.',
      gap: 'Your work is high-touch and custom. That limits how many projects you can take. Where\'s the leverage?',
    },

    opportunities: [
      {
        title: 'Systematize your complex project intake',
        why: 'VP/XR projects have dozens of requirements. A Brief Builder Gem captures them all, every time.',
        chapterTitle: 'Build the Brief Builder Gem',
        chapterNumber: 5,
        chapterSlug: '880/build-your-brief-builder-gem',
      },
      {
        title: 'Protect margins on technically complex work',
        why: 'When clients don\'t understand VP, they ask for "small changes" that are actually massive. Scope Creep Detector catches this.',
        chapterTitle: 'Build the Scope Creep Detector',
        chapterNumber: 6,
        chapterSlug: '881/build-your-scope-creep-detector-gem',
      },
      {
        title: 'Turn your Emmy-winning work into compelling case studies',
        why: 'You have incredible work. Are you documenting it in a way that sells the next project?',
        chapterTitle: 'Build the Project Closer Gem',
        chapterNumber: 8,
        chapterSlug: '883/build-your-project-closer-gem',
      },
    ],

    letter: {
      greeting: 'Nicole,',
      body: [
        'Emmy-winning. 48-camera motion capture. LED walls. You\'re doing the most technically sophisticated work in New Jersey.',
        'The challenge with high-touch custom work: it doesn\'t scale. Every project requires your best people, start to finish. That limits how many projects you can take.',
        'Systems create leverage. A Scope Creep Detector is especially critical for VP—clients often don\'t understand what they\'re asking for when they say "one small change." A Project Closer turns your incredible work into case studies that attract similar clients.',
        'You\'ve won awards. Let me show you how to win more without burning out your team.',
      ],
      signoff: 'Best,\nJai',
    },

    ctaAngle: 'You\'ve won awards. Now build systems that let you win more.',
  },

  {
    slug: 'awakened',
    name: 'Awakened Films',
    contact: {
      name: 'JP Robinson',
      phone: '908-367-5534',
      email: 'bookings@awakenedfilms.com',
    },
    location: '324 Main Street, Madison',
    website: 'https://www.awakenedfilms.com',
    tier: 'tier2',
    squareFootage: 4000,
    features: ['1,500 SF soundstage', 'Pre-lit 15x15 cyc wall', 'Video editing', '10\' garage access'],
    specializations: ['Corporate Video', 'Nonprofit', 'Social Media'],

    hook: 'Corporate clients need consistency. AI gives you that.',
    subhook: 'Woman-owned. Corporate video. Nonprofit work. Social media content. You serve clients who need reliable, repeatable quality. That\'s exactly what the right AI systems deliver.',

    marketPosition: {
      standout: 'Woman-owned certification opens doors to corporate diversity programs. That\'s a real competitive advantage.',
      asset: '4,000 SF with 1,500 SF soundstage, pre-lit cyc wall, and video editing capabilities.',
      gap: 'Your client mix (corporate, nonprofit, social media) means very different briefs. Are you handling them consistently?',
    },

    opportunities: [
      {
        title: 'Standardize intake across your diverse client base',
        why: 'Corporate clients have different needs than nonprofits. A Brief Builder Gem adapts to each.',
        chapterTitle: 'Build the Brief Builder Gem',
        chapterNumber: 5,
        chapterSlug: '880/build-your-brief-builder-gem',
      },
      {
        title: 'Protect margins on social media content',
        why: 'Social content has endless revision cycles. Scope Creep Detector draws the line clearly.',
        chapterTitle: 'Build the Scope Creep Detector',
        chapterNumber: 6,
        chapterSlug: '881/build-your-scope-creep-detector-gem',
      },
      {
        title: 'Generate case studies that showcase diversity impact',
        why: 'Corporate clients choosing you for diversity want to see the impact. Document it.',
        chapterTitle: 'Build the Project Closer Gem',
        chapterNumber: 8,
        chapterSlug: '883/build-your-project-closer-gem',
      },
    ],

    letter: {
      greeting: 'JP,',
      body: [
        'The woman-owned certification is a real competitive advantage. Corporate diversity programs actively seek partners like Awakened—it\'s not just a checkbox, it\'s a door opener.',
        'The challenge I see: you\'re serving corporate, nonprofit, and social media clients. Those are very different briefs, very different revision cycles, very different expectations.',
        'I help studios build AI tools that create consistency across diverse clients. A Brief Builder with templates for each client type. A Scope Creep Detector that\'s especially useful for social content (endless revisions). A Project Closer that highlights diversity impact—which attracts more corporate work.',
        'Would love to show you what this looks like.',
      ],
      signoff: 'Best,\nJai',
    },

    ctaAngle: 'Your diverse client base is an asset. Build systems that serve them all consistently.',
  },

  // ============================================
  // DIRECTORY: All other NJ studios
  // ============================================

  {
    slug: '10-basin',
    name: '10 Basin Studios',
    contact: {
      name: 'Scott Levy',
      title: 'Eastern Effects, Inc.',
      phone: '718-855-1197',
      email: '10basinstudios@gmail.com',
    },
    location: '10 Basin Drive, Kearny',
    website: 'https://www.easterneffects.com/studios/10-basin-studios/',
    tier: 'directory',
    squareFootage: 60000,
    features: ['Two connected stages (48,000 SF Stage A, 12,000 SF Stage B)', 'Virtual production LED volume', '26\' ceilings', 'Soundproof', 'Drive-in access'],
    specializations: ['Virtual Production', 'Large Format'],

    hook: '60,000 SF is enterprise scale. Your systems should match.',
    subhook: 'Two connected stages. Virtual production LED volume. 26-foot ceilings. You can handle the biggest productions in the state. But at this scale, the admin work compounds.',

    marketPosition: {
      standout: 'One of the largest studio facilities in New Jersey with dedicated virtual production capabilities.',
      asset: '60,000 SF across two connected stages with full VP infrastructure.',
      gap: 'At enterprise scale, every inefficiency multiplies. Client intake, scope management, documentation—it all compounds.',
    },

    opportunities: [
      {
        title: 'Standardize intake for large-format productions',
        why: 'Complex productions have complex requirements. A Brief Builder ensures nothing gets lost.',
        chapterTitle: 'Build the Brief Builder Gem',
        chapterNumber: 5,
        chapterSlug: '880/build-your-brief-builder-gem',
      },
      {
        title: 'Protect margins on virtual production projects',
        why: 'VP scope creep is notorious. A Scope Creep Detector catches changes before they become problems.',
        chapterTitle: 'Build the Scope Creep Detector',
        chapterNumber: 6,
        chapterSlug: '881/build-your-scope-creep-detector-gem',
      },
      {
        title: 'Document productions as portfolio pieces',
        why: 'Every production should become a case study. The work after the work matters.',
        chapterTitle: 'Build the Project Closer Gem',
        chapterNumber: 8,
        chapterSlug: '883/build-your-project-closer-gem',
      },
    ],

    letter: {
      greeting: 'Scott,',
      body: [
        '60,000 square feet across two connected stages—that\'s serious infrastructure. At this scale, you\'re handling productions that most facilities can\'t even attempt.',
        'The flip side: at enterprise scale, every inefficiency compounds. Client intake takes longer. Scope creep costs more. Documentation falls behind.',
        'I help studios build AI systems that handle the admin work—so your team can focus on what they\'re good at. Happy to show you what that looks like.',
      ],
      signoff: 'Best,\nJai',
    },

    ctaAngle: 'Enterprise scale deserves enterprise systems.',
  },

  {
    slug: '18-label',
    name: '18 Label Studio',
    contact: {
      name: 'KC Kaicher',
      phone: '973-744-7382',
      email: 'kkaicher@willowstreetpartners.com',
    },
    location: '18 Label Street, Montclair',
    website: 'https://www.18label.com',
    tier: 'directory',
    squareFootage: 8000,
    features: ['3 studios', 'Customizable kitchen', 'Green screen', 'Patio', 'Loading area'],
    specializations: ['Food/Lifestyle', 'Photography'],

    hook: 'Food and lifestyle is your specialty. Systemize the intake.',
    subhook: 'Customizable kitchen. Green screen. Three studios. You\'ve built a perfect setup for food and lifestyle shoots. But every client brief is different.',

    marketPosition: {
      standout: 'Purpose-built for food and lifestyle photography with a customizable kitchen set.',
      asset: '8,000 SF with 3 studios, customizable kitchen, and outdoor patio.',
      gap: 'Food and lifestyle clients have very specific requirements. Are you capturing them consistently?',
    },

    opportunities: [
      {
        title: 'Create food/lifestyle-specific intake templates',
        why: 'Food shoots have unique requirements—props, styling, dietary restrictions. A Brief Builder captures it all.',
        chapterTitle: 'Build the Brief Builder Gem',
        chapterNumber: 5,
        chapterSlug: '880/build-your-brief-builder-gem',
      },
      {
        title: 'Manage revision cycles on lifestyle content',
        why: 'Lifestyle clients often want "just one more angle." Scope Creep Detector draws the line.',
        chapterTitle: 'Build the Scope Creep Detector',
        chapterNumber: 6,
        chapterSlug: '881/build-your-scope-creep-detector-gem',
      },
      {
        title: 'Build a portfolio that showcases your food expertise',
        why: 'Great food photography deserves great case studies. Document the work.',
        chapterTitle: 'Build the Project Closer Gem',
        chapterNumber: 8,
        chapterSlug: '883/build-your-project-closer-gem',
      },
    ],

    letter: {
      greeting: 'KC,',
      body: [
        'The customizable kitchen is a smart move—it positions you perfectly for food and lifestyle work. That\'s a growing market.',
        'Food shoots have unique requirements that generic briefs miss: dietary restrictions, prop sourcing, food styling coordination, timing around meal freshness. Are you capturing all of that consistently?',
        'I help studios build intake systems tailored to their specialty. Would love to show you what a food/lifestyle-specific workflow looks like.',
      ],
      signoff: 'Best,\nJai',
    },

    ctaAngle: 'Your specialty deserves specialized systems.',
  },

  {
    slug: 'acx1',
    name: 'ACX1 Studios',
    contact: {
      name: 'Roy Koriakin',
      phone: '856-625-5463',
      email: 'rkoriakin@acx1studios.com',
    },
    location: '1 Atlantic Ocean, Atlantic City',
    website: 'https://www.acx1films.com',
    tier: 'directory',
    squareFootage: 550000,
    features: ['150+ sets', 'Over water location', 'Hair/makeup stations', 'In-house cameras and equipment'],
    specializations: ['Film', 'Television', 'Large Scale Production'],

    hook: '550,000 SF. 150+ sets. The scale demands systems.',
    subhook: 'You\'re not just a studio—you\'re a production campus. Over-water location. 150+ sets. This scale of operation needs systematized workflows.',

    marketPosition: {
      standout: 'The largest studio facility in New Jersey, period. 550,000 SF with 150+ standing sets.',
      asset: 'Massive scale with unique over-water location and comprehensive in-house equipment.',
      gap: 'At this scale, client management and project documentation become logistical challenges.',
    },

    opportunities: [
      {
        title: 'Systematize intake for campus-scale productions',
        why: 'Productions this big have hundreds of requirements. A Brief Builder keeps them organized.',
        chapterTitle: 'Build the Brief Builder Gem',
        chapterNumber: 5,
        chapterSlug: '880/build-your-brief-builder-gem',
      },
      {
        title: 'Track scope across multiple simultaneous productions',
        why: 'When you\'re running multiple productions, scope creep on one affects capacity for others.',
        chapterTitle: 'Build the Scope Creep Detector',
        chapterNumber: 6,
        chapterSlug: '881/build-your-scope-creep-detector-gem',
      },
      {
        title: 'Document your unique capabilities',
        why: '150+ sets and over-water shooting—that\'s worth showcasing in detail.',
        chapterTitle: 'Build the Project Closer Gem',
        chapterNumber: 8,
        chapterSlug: '883/build-your-project-closer-gem',
      },
    ],

    letter: {
      greeting: 'Roy,',
      body: [
        '550,000 square feet. 150+ sets. Over-water location. ACX1 isn\'t a studio—it\'s a production campus.',
        'At this scale, the operational challenges are different. You\'re not just managing one production at a time. Intake, scope management, documentation—everything needs to work at scale.',
        'I help studios build AI systems that handle the complexity. Happy to show you what that looks like for a facility this size.',
      ],
      signoff: 'Best,\nJai',
    },

    ctaAngle: 'Campus-scale production deserves campus-scale systems.',
  },

  {
    slug: 'bb-props',
    name: 'BB Props',
    contact: {
      name: 'Emiliano Pares',
      phone: '973-837-6305',
      email: 'epares@bbprops.biz',
    },
    location: '101 E Main St., Little Falls',
    website: 'https://www.bbprops.biz',
    tier: 'directory',
    squareFootage: 53000,
    features: ['3,000 SF studio', '50,000 SF fabrication shop', 'Prop rental and fabrication'],
    specializations: ['Props', 'Fabrication', 'Set Design'],

    hook: 'Props and fabrication is a specific game. Play it systematically.',
    subhook: '50,000 SF fabrication shop. Prop rental. Custom builds. You\'re in a specialized business where project specs are everything.',

    marketPosition: {
      standout: 'Full-service prop house with fabrication capabilities that most studios outsource.',
      asset: '53,000 SF total with massive fabrication shop for custom builds.',
      gap: 'Props projects have complex specifications. Are you capturing and tracking them systematically?',
    },

    opportunities: [
      {
        title: 'Capture prop specifications systematically',
        why: 'Every prop build starts with detailed specs. A Brief Builder ensures nothing gets missed.',
        chapterTitle: 'Build the Brief Builder Gem',
        chapterNumber: 5,
        chapterSlug: '880/build-your-brief-builder-gem',
      },
      {
        title: 'Track changes on custom fabrication projects',
        why: 'Clients change their minds. On fabrication projects, that means rework. Track it.',
        chapterTitle: 'Build the Scope Creep Detector',
        chapterNumber: 6,
        chapterSlug: '881/build-your-scope-creep-detector-gem',
      },
      {
        title: 'Document your best builds as portfolio pieces',
        why: 'Great fabrication work sells more fabrication work. Document it well.',
        chapterTitle: 'Build the Project Closer Gem',
        chapterNumber: 8,
        chapterSlug: '883/build-your-project-closer-gem',
      },
    ],

    letter: {
      greeting: 'Emiliano,',
      body: [
        'Props and fabrication is a specialized business. Every project starts with detailed specifications—dimensions, materials, timeline, budget. And specs change.',
        'I help studios build systems that capture requirements clearly and track changes throughout the project. For fabrication work, that\'s critical.',
        'Happy to show you what a props-specific workflow could look like.',
      ],
      signoff: 'Best,\nJai',
    },

    ctaAngle: 'Specialized work deserves specialized systems.',
  },

  {
    slug: 'big-sur',
    name: 'Big Sur Creative',
    contact: {
      name: 'Joe Henry',
      phone: '609-257-2152',
      email: 'info@bigsurcreative.com',
    },
    location: '1800 E State St., Suite 158B, Hamilton',
    website: 'https://www.bigsurcreative.com',
    tier: 'directory',
    squareFootage: 5400,
    features: ['3 studios', '12\'x14\' white cyc stage', 'High-end equipment'],
    specializations: ['Commercial', 'Photography'],

    hook: 'Commercial work lives on efficiency. Build it in.',
    subhook: 'Three studios. White cyc stage. High-end equipment. You\'re set up for commercial work that needs to move fast.',

    marketPosition: {
      standout: 'Well-equipped commercial studio in the Hamilton/Trenton area with multiple shooting spaces.',
      asset: '5,400 SF with 3 studios and professional cyc wall.',
      gap: 'Commercial clients have tight deadlines. Efficient intake and scope management are critical.',
    },

    opportunities: [
      {
        title: 'Speed up client intake for commercial projects',
        why: 'Commercial deadlines don\'t wait. A Brief Builder gets you from call to shoot faster.',
        chapterTitle: 'Build the Brief Builder Gem',
        chapterNumber: 5,
        chapterSlug: '880/build-your-brief-builder-gem',
      },
      {
        title: 'Protect margins when deadlines compress',
        why: 'Tight timelines lead to scope creep. Track it before it kills your margin.',
        chapterTitle: 'Build the Scope Creep Detector',
        chapterNumber: 6,
        chapterSlug: '881/build-your-scope-creep-detector-gem',
      },
      {
        title: 'Turn commercial projects into ongoing relationships',
        why: 'Great case studies bring repeat clients. Document the work.',
        chapterTitle: 'Build the Project Closer Gem',
        chapterNumber: 8,
        chapterSlug: '883/build-your-project-closer-gem',
      },
    ],

    letter: {
      greeting: 'Joe,',
      body: [
        'Commercial work moves fast. Tight deadlines. Quick turnarounds. Multiple projects overlapping.',
        'At that pace, efficient systems aren\'t optional—they\'re survival. Intake needs to be fast. Scope needs to be tracked. Documentation needs to happen automatically.',
        'I help studios build the AI tools that make that possible. Happy to show you what it looks like.',
      ],
      signoff: 'Best,\nJai',
    },

    ctaAngle: 'Fast-paced work needs fast systems.',
  },

  {
    slug: 'black-swallowtail',
    name: 'Black Swallowtail Studios',
    contact: {
      name: 'Erik Massimino',
      phone: '732-934-2710',
      email: 'contactus@blackswallowtailstudios.com',
    },
    location: '246 Industrial Way W, Eatontown',
    website: 'https://www.blackswallowtailstudios.com',
    tier: 'directory',
    features: ['Video/photography studio', 'Broadcast/podcast studio', 'Product photography', 'Equipment rentals'],
    specializations: ['Podcast', 'Product Photography', 'Community Media'],

    hook: 'Podcasts and product photography. Different briefs, same systems.',
    subhook: 'Podcast studio. Product photography. Equipment rentals. You serve different client types—they all need structured intake.',

    marketPosition: {
      standout: 'Versatile facility serving both content creators (podcasts) and commercial clients (product photography).',
      asset: 'Multi-purpose space with broadcast capabilities and equipment rental.',
      gap: 'Diverse client types mean diverse requirements. Consistency is the challenge.',
    },

    opportunities: [
      {
        title: 'Create intake templates for each service type',
        why: 'Podcast clients and product photography clients have different needs. Capture both clearly.',
        chapterTitle: 'Build the Brief Builder Gem',
        chapterNumber: 5,
        chapterSlug: '880/build-your-brief-builder-gem',
      },
      {
        title: 'Manage scope across service types',
        why: 'Different services, different scope boundaries. Track them separately.',
        chapterTitle: 'Build the Scope Creep Detector',
        chapterNumber: 6,
        chapterSlug: '881/build-your-scope-creep-detector-gem',
      },
      {
        title: 'Build portfolio pieces for each specialty',
        why: 'Show podcast work to podcast clients, product work to product clients.',
        chapterTitle: 'Build the Project Closer Gem',
        chapterNumber: 8,
        chapterSlug: '883/build-your-project-closer-gem',
      },
    ],

    letter: {
      greeting: 'Erik,',
      body: [
        'You\'re serving two different markets—podcasters and product photography clients. That\'s smart diversification, but it also means managing different types of briefs.',
        'I help studios build intake systems that adapt to different client types while maintaining consistency. The same underlying system, different templates.',
        'Would love to show you what that looks like.',
      ],
      signoff: 'Best,\nJai',
    },

    ctaAngle: 'Different clients, same systematic approach.',
  },

  {
    slug: 'buttertree',
    name: 'Buttertree Studios',
    contact: {
      name: 'Anthony DeMaio',
      phone: '973-585-7632',
      email: 'booking@buttertreestudios.com',
    },
    location: '32 Merry Lane, East Hanover',
    website: 'https://www.buttertreestudios.com',
    tier: 'directory',
    squareFootage: 8000,
    features: ['4,000 SF soundstage', '18\' ceilings', 'Kitchen sets'],
    specializations: ['Commercial', 'Food/Lifestyle'],

    hook: 'Kitchen sets are your edge. Maximize them.',
    subhook: '18-foot ceilings. Kitchen sets. Commercial focus. You\'ve carved out a niche—now systematize it.',

    marketPosition: {
      standout: 'Purpose-built for food and commercial work with dedicated kitchen sets.',
      asset: '8,000 SF with 4,000 SF soundstage and 18\' ceilings.',
      gap: 'Food and commercial clients have specific needs. Are you capturing them all?',
    },

    opportunities: [
      {
        title: 'Build food/commercial-specific intake',
        why: 'Kitchen shoots have unique requirements. A Brief Builder tailored to your specialty.',
        chapterTitle: 'Build the Brief Builder Gem',
        chapterNumber: 5,
        chapterSlug: '880/build-your-brief-builder-gem',
      },
      {
        title: 'Track scope on food shoots',
        why: '"One more dish" adds up. Track the creep.',
        chapterTitle: 'Build the Scope Creep Detector',
        chapterNumber: 6,
        chapterSlug: '881/build-your-scope-creep-detector-gem',
      },
      {
        title: 'Showcase your food work',
        why: 'Great food photography sells more food photography. Document it.',
        chapterTitle: 'Build the Project Closer Gem',
        chapterNumber: 8,
        chapterSlug: '883/build-your-project-closer-gem',
      },
    ],

    letter: {
      greeting: 'Anthony,',
      body: [
        'Kitchen sets plus 18-foot ceilings—that\'s a smart combination for food and commercial work.',
        'Food shoots have their own rhythm and requirements. I help studios build intake systems tailored to their specialty.',
        'Happy to show you what a food-focused workflow could look like.',
      ],
      signoff: 'Best,\nJai',
    },

    ctaAngle: 'Your niche deserves niche-specific systems.',
  },

  {
    slug: 'cinelease',
    name: 'Cinelease Studios (Caven Point)',
    contact: {
      name: 'Derek Elkins',
      phone: '404-301-6850',
      email: 'derek.elkins@cinelease.com',
    },
    location: '21 Caven Point Ave., Jersey City',
    website: 'https://www.cinelease.com/studios/',
    tier: 'directory',
    squareFootage: 112400,
    features: ['70,000 SF column-free stage', '40 ft to grid', '7,200 amps power'],
    specializations: ['Film', 'Television', 'Large Format'],

    hook: '70,000 SF column-free. That scale needs systems.',
    subhook: 'The largest single column-free stage in New Jersey. 40 feet to grid. 7,200 amps. This is major production infrastructure.',

    marketPosition: {
      standout: 'Largest column-free stage in the state with massive power capacity.',
      asset: '112,400 SF total with industry-leading 70,000 SF column-free stage.',
      gap: 'Major productions have major complexity. Systematized workflows reduce friction.',
    },

    opportunities: [
      {
        title: 'Systematize intake for major productions',
        why: 'Productions at this scale have hundreds of requirements. Capture them all.',
        chapterTitle: 'Build the Brief Builder Gem',
        chapterNumber: 5,
        chapterSlug: '880/build-your-brief-builder-gem',
      },
      {
        title: 'Track scope on long-running productions',
        why: 'Major productions run for weeks or months. Scope creep accumulates.',
        chapterTitle: 'Build the Scope Creep Detector',
        chapterNumber: 6,
        chapterSlug: '881/build-your-scope-creep-detector-gem',
      },
      {
        title: 'Document major productions as flagship case studies',
        why: 'Big productions attract more big productions. Document them thoroughly.',
        chapterTitle: 'Build the Project Closer Gem',
        chapterNumber: 8,
        chapterSlug: '883/build-your-project-closer-gem',
      },
    ],

    letter: {
      greeting: 'Derek,',
      body: [
        '70,000 square feet column-free. 40 feet to grid. 7,200 amps. Caven Point is major production infrastructure.',
        'Productions at this scale have complexity that smaller studios don\'t face. Intake is more complex. Scope changes have bigger impact. Documentation matters more.',
        'I help studios build systems that match their scale. Happy to show you what that looks like.',
      ],
      signoff: 'Best,\nJai',
    },

    ctaAngle: 'Major infrastructure deserves major systems.',
  },

  {
    slug: 'east-coast-post',
    name: 'East Coast Post Services',
    contact: {
      name: 'Kevin McCaffery',
      phone: '917-703-3228',
      email: 'Kevin@eastcoastpost.com',
    },
    location: '430 Communipaw Ave., Suite D-4A, Jersey City',
    tier: 'directory',
    squareFootage: 1156,
    features: ['34x34 stage', '782 SF pre-lit cyc wall', 'Tabletop video capability'],
    specializations: ['Product Video', 'Tabletop'],

    hook: 'Tabletop and product video. Niche work, specialized systems.',
    subhook: 'Pre-lit cyc wall. Tabletop capability. Product video focus. You\'ve specialized—now systemize.',

    marketPosition: {
      standout: 'Specialized in tabletop and product video with purpose-built setup.',
      asset: 'Efficient layout with pre-lit cyc wall optimized for product work.',
      gap: 'Product video clients have specific technical requirements. Capture them systematically.',
    },

    opportunities: [
      {
        title: 'Build product video-specific intake',
        why: 'Product dimensions, angles, backgrounds—capture the specs once, correctly.',
        chapterTitle: 'Build the Brief Builder Gem',
        chapterNumber: 5,
        chapterSlug: '880/build-your-brief-builder-gem',
      },
      {
        title: 'Manage scope on product shoots',
        why: '"Just a few more angles" is how product shoots go over budget.',
        chapterTitle: 'Build the Scope Creep Detector',
        chapterNumber: 6,
        chapterSlug: '881/build-your-scope-creep-detector-gem',
      },
      {
        title: 'Build a product video portfolio',
        why: 'E-commerce is booming. Show what you can do.',
        chapterTitle: 'Build the Project Closer Gem',
        chapterNumber: 8,
        chapterSlug: '883/build-your-project-closer-gem',
      },
    ],

    letter: {
      greeting: 'Kevin,',
      body: [
        'Tabletop and product video is a specialty that\'s only growing with e-commerce. Smart focus.',
        'Product video has its own requirements—dimensions, angles, backgrounds, turnaround times. I help studios build intake systems tailored to their specialty.',
        'Happy to show you what a product-focused workflow looks like.',
      ],
      signoff: 'Best,\nJai',
    },

    ctaAngle: 'Specialized work deserves specialized systems.',
  },

  {
    slug: 'hill-theater',
    name: 'Hill Theater Studio',
    contact: {
      name: 'John Burzichelli',
      phone: '856-423-8910',
      email: 'hilltheaterstudio@msn.com',
    },
    location: '35 West Broad St, Paulsboro',
    website: 'https://www.hillstudioonline.com',
    tier: 'directory',
    squareFootage: 6000,
    features: ['6,000 SF stage', 'Carpentry shop', 'Set kitchen', 'Full kitchen', 'Large parking'],
    specializations: ['Theater', 'Events'],

    hook: 'Theater and events. Each booking is different.',
    subhook: 'Full stage. Carpentry shop. Event capability. Every booking has unique requirements.',

    marketPosition: {
      standout: 'Full-service facility with carpentry shop for set construction and event hosting.',
      asset: '6,000 SF stage with in-house carpentry and full kitchen.',
      gap: 'Theater and event clients have complex logistics. Are you capturing them consistently?',
    },

    opportunities: [
      {
        title: 'Systematize booking intake',
        why: 'Events have complex logistics—catering, setup, teardown, AV. Capture it all.',
        chapterTitle: 'Build the Brief Builder Gem',
        chapterNumber: 5,
        chapterSlug: '880/build-your-brief-builder-gem',
      },
      {
        title: 'Track scope changes on event bookings',
        why: 'Events always expand. Track the additions.',
        chapterTitle: 'Build the Scope Creep Detector',
        chapterNumber: 6,
        chapterSlug: '881/build-your-scope-creep-detector-gem',
      },
      {
        title: 'Document successful events',
        why: 'Great events attract more events. Document and showcase them.',
        chapterTitle: 'Build the Project Closer Gem',
        chapterNumber: 8,
        chapterSlug: '883/build-your-project-closer-gem',
      },
    ],

    letter: {
      greeting: 'John,',
      body: [
        'Theater and events is a different business than production studios—each booking is unique, logistics are complex, and last-minute changes are constant.',
        'I help studios build systems that handle that complexity. Intake that captures all the details. Scope tracking that catches changes early.',
        'Happy to show you what that looks like for events.',
      ],
      signoff: 'Best,\nJai',
    },

    ctaAngle: 'Events are complex. Your systems should handle the complexity.',
  },

  {
    slug: 'hsad',
    name: 'HSAD Virtual Production Studio',
    contact: {
      name: 'Vanessa Marquez',
      phone: '646-298-1085',
      email: 'vmarquez@hsadusa.com',
    },
    location: '111 Sylvan Ave, Englewood Cliffs',
    website: 'https://tinyurl.com/HSAD-Studios',
    tier: 'directory',
    squareFootage: 1900,
    features: ['Virtual production studio', 'Integrated lighting grid', 'DMX-controlled LED displays', 'Motion capture capability'],
    specializations: ['Virtual Production', 'Motion Capture'],

    hook: 'Virtual production is technical. Your intake should be too.',
    subhook: 'LED displays. Motion capture. DMX control. VP has specific technical requirements that general briefs miss.',

    marketPosition: {
      standout: 'Dedicated virtual production facility with integrated lighting and motion capture.',
      asset: 'Purpose-built VP studio with DMX-controlled LEDs and full motion capture.',
      gap: 'VP projects require detailed technical specs upfront. Are you capturing them?',
    },

    opportunities: [
      {
        title: 'Build VP-specific intake templates',
        why: 'Virtual production has technical requirements that general briefs miss.',
        chapterTitle: 'Build the Brief Builder Gem',
        chapterNumber: 5,
        chapterSlug: '880/build-your-brief-builder-gem',
      },
      {
        title: 'Protect margins on technically complex work',
        why: 'VP scope creep is notorious. Clients don\'t know what they\'re asking for.',
        chapterTitle: 'Build the Scope Creep Detector',
        chapterNumber: 6,
        chapterSlug: '881/build-your-scope-creep-detector-gem',
      },
      {
        title: 'Document VP capabilities for the market',
        why: 'VP is growing fast. Show what you can do.',
        chapterTitle: 'Build the Project Closer Gem',
        chapterNumber: 8,
        chapterSlug: '883/build-your-project-closer-gem',
      },
    ],

    letter: {
      greeting: 'Vanessa,',
      body: [
        'Virtual production is highly technical—LED calibration, camera tracking, Unreal Engine integration. General intake forms don\'t capture what VP projects actually need.',
        'I help VP studios build intake systems that capture the technical specs upfront. That means fewer surprises in production.',
        'Happy to show you what VP-specific workflows look like.',
      ],
      signoff: 'Best,\nJai',
    },

    ctaAngle: 'Technical work deserves technical systems.',
  },

  {
    slug: 'hudson-river',
    name: 'Hudson River Studios',
    contact: {
      name: 'Charles Ritschel',
      phone: '212-730-7180',
      email: 'charles@hudsonriverstudios.com',
    },
    location: '216 19th St., Union City',
    website: 'https://www.hudsonriverstudios.com',
    tier: 'directory',
    squareFootage: 50000,
    features: ['4 studios (2,500-12,000 SF)', 'Rooftop access', 'Drive-in capabilities', 'In-house catering'],
    specializations: ['E-commerce', 'Photo', 'Video'],

    hook: 'E-commerce is volume business. Scale your systems.',
    subhook: 'Four studios. Rooftop access. In-house catering. You\'re built for volume—now systematize it.',

    marketPosition: {
      standout: 'Large-scale facility positioned for e-commerce and commercial volume work.',
      asset: '50,000 SF with 4 studios ranging from 2,500 to 12,000 SF.',
      gap: 'E-commerce is volume business. Efficient intake and tracking are critical.',
    },

    opportunities: [
      {
        title: 'Speed up e-commerce intake',
        why: 'E-commerce clients need fast turnaround. Your intake should match.',
        chapterTitle: 'Build the Brief Builder Gem',
        chapterNumber: 5,
        chapterSlug: '880/build-your-brief-builder-gem',
      },
      {
        title: 'Track scope across multiple simultaneous shoots',
        why: 'Volume means multiple projects at once. Track scope on all of them.',
        chapterTitle: 'Build the Scope Creep Detector',
        chapterNumber: 6,
        chapterSlug: '881/build-your-scope-creep-detector-gem',
      },
      {
        title: 'Build an e-commerce portfolio',
        why: 'E-commerce is booming. Show your capabilities.',
        chapterTitle: 'Build the Project Closer Gem',
        chapterNumber: 8,
        chapterSlug: '883/build-your-project-closer-gem',
      },
    ],

    letter: {
      greeting: 'Charles,',
      body: [
        'Four studios, up to 12,000 SF each, with rooftop access and catering—you\'re built for volume.',
        'E-commerce is volume business. Fast turnarounds, multiple clients, lots of SKUs. That requires systems that scale.',
        'I help studios build AI workflows that handle volume without breaking. Happy to show you what that looks like.',
      ],
      signoff: 'Best,\nJai',
    },

    ctaAngle: 'Volume business needs volume systems.',
  },

  {
    slug: 'meadowlands',
    name: 'Meadowlands Arena',
    contact: {
      name: 'Claudia Locricchio',
      phone: '201-460-4361',
      email: 'clocricchio@njsea.com',
    },
    location: '50 State Road 120, E. Rutherford',
    website: 'https://www.njsea.com',
    tier: 'directory',
    squareFootage: 25000,
    features: ['139 ft floor-to-ceiling height', '3,800 amps 208 volt', '12 dressing rooms'],
    specializations: ['Live Events', 'Large Scale Production'],

    hook: '139 feet to ceiling. Events at this scale need systems.',
    subhook: 'Arena-scale productions. 12 dressing rooms. 3,800 amps. This is major event infrastructure.',

    marketPosition: {
      standout: 'Arena-scale facility with 139\' ceiling height for large events and productions.',
      asset: 'Massive vertical space with full event infrastructure.',
      gap: 'Large events have complex logistics. Systematized intake reduces chaos.',
    },

    opportunities: [
      {
        title: 'Systematize large event intake',
        why: 'Arena events have complex requirements—rigging, power, dressing rooms. Capture it all.',
        chapterTitle: 'Build the Brief Builder Gem',
        chapterNumber: 5,
        chapterSlug: '880/build-your-brief-builder-gem',
      },
      {
        title: 'Track scope on complex productions',
        why: 'Large productions have large scope creep. Track it systematically.',
        chapterTitle: 'Build the Scope Creep Detector',
        chapterNumber: 6,
        chapterSlug: '881/build-your-scope-creep-detector-gem',
      },
      {
        title: 'Document major events',
        why: 'Big events attract more big events. Document them well.',
        chapterTitle: 'Build the Project Closer Gem',
        chapterNumber: 8,
        chapterSlug: '883/build-your-project-closer-gem',
      },
    ],

    letter: {
      greeting: 'Claudia,',
      body: [
        '139 feet floor to ceiling. 12 dressing rooms. 3,800 amps. The Meadowlands is arena-scale infrastructure.',
        'Events at this scale have complexity that smaller venues don\'t face. Rigging requirements, power distribution, talent logistics—the intake needs to capture all of it.',
        'I help venues build systems that match their scale. Happy to show you what that looks like.',
      ],
      signoff: 'Best,\nJai',
    },

    ctaAngle: 'Arena-scale events need arena-scale systems.',
  },

  {
    slug: 'mediamix',
    name: 'MediaMix',
    contact: {
      name: 'Joseph J. Vargas',
      phone: '201-262-3700',
      email: 'joevargas@mmix.net',
    },
    location: '4 Pearl Court, Allendale',
    website: 'https://www.mediamixstudios.com',
    tier: 'directory',
    squareFootage: 15000,
    features: ['2 drive-in soundstages', '4-camera HD control room', 'Editing suites'],
    specializations: ['Broadcast', 'Corporate'],

    hook: 'Broadcast needs precision. Build it into your systems.',
    subhook: '4-camera HD control room. Drive-in soundstages. Editing suites. Broadcast demands precision.',

    marketPosition: {
      standout: 'Full-service broadcast facility with HD control room and editing capabilities.',
      asset: '15,000 SF with 2 drive-in soundstages and complete broadcast infrastructure.',
      gap: 'Broadcast has strict technical requirements. Are you capturing them consistently?',
    },

    opportunities: [
      {
        title: 'Build broadcast-specific intake',
        why: 'Broadcast has technical requirements that general forms miss.',
        chapterTitle: 'Build the Brief Builder Gem',
        chapterNumber: 5,
        chapterSlug: '880/build-your-brief-builder-gem',
      },
      {
        title: 'Track scope on corporate productions',
        why: 'Corporate clients expand scope. Track it.',
        chapterTitle: 'Build the Scope Creep Detector',
        chapterNumber: 6,
        chapterSlug: '881/build-your-scope-creep-detector-gem',
      },
      {
        title: 'Document broadcast capabilities',
        why: 'Show your broadcast infrastructure in action.',
        chapterTitle: 'Build the Project Closer Gem',
        chapterNumber: 8,
        chapterSlug: '883/build-your-project-closer-gem',
      },
    ],

    letter: {
      greeting: 'Joseph,',
      body: [
        'Broadcast demands precision—frame rates, codec requirements, delivery specs. General intake forms don\'t capture what broadcast clients need.',
        'I help studios build intake systems tailored to their specialty. For broadcast, that means technical specs captured upfront.',
        'Happy to show you what broadcast-specific workflows look like.',
      ],
      signoff: 'Best,\nJai',
    },

    ctaAngle: 'Broadcast precision deserves precise systems.',
  },

  {
    slug: 'mile-end',
    name: 'Mile End Studios',
    contact: {
      name: 'Nicole Carollo',
      phone: '973-493-1087',
      email: 'mileendstudios@gmail.com',
    },
    location: '78 John Miller Way, Kearny',
    website: 'https://www.mileend-studios.com',
    tier: 'directory',
    squareFootage: 65000,
    features: ['Dual high-end soundstages', '200 amps power', 'Construction mill'],
    specializations: ['Film', 'Television'],

    hook: 'Dual soundstages. Enterprise-scale infrastructure.',
    subhook: '65,000 SF. Dual high-end soundstages. Construction mill. You\'re built for major productions.',

    marketPosition: {
      standout: 'Large-scale facility with dual soundstages and in-house construction capabilities.',
      asset: '65,000 SF with dual soundstages and construction mill.',
      gap: 'Major productions have major complexity. Systems help manage it.',
    },

    opportunities: [
      {
        title: 'Systematize intake for major productions',
        why: 'Film and TV productions have hundreds of requirements. Capture them all.',
        chapterTitle: 'Build the Brief Builder Gem',
        chapterNumber: 5,
        chapterSlug: '880/build-your-brief-builder-gem',
      },
      {
        title: 'Track scope across long productions',
        why: 'Major productions run for weeks. Scope creep accumulates.',
        chapterTitle: 'Build the Scope Creep Detector',
        chapterNumber: 6,
        chapterSlug: '881/build-your-scope-creep-detector-gem',
      },
      {
        title: 'Document major productions',
        why: 'Big productions attract more big productions.',
        chapterTitle: 'Build the Project Closer Gem',
        chapterNumber: 8,
        chapterSlug: '883/build-your-project-closer-gem',
      },
    ],

    letter: {
      greeting: 'Nicole,',
      body: [
        '65,000 square feet with dual soundstages and a construction mill—Mile End is built for major productions.',
        'At this scale, efficient systems aren\'t optional. I help studios build AI workflows that handle the complexity.',
        'Happy to show you what that looks like.',
      ],
      signoff: 'Best,\nJai',
    },

    ctaAngle: 'Enterprise scale deserves enterprise systems.',
  },

  {
    slug: 'montclair-state',
    name: 'Montclair State Studios',
    contact: {
      name: 'Broadcast and Media Operations (BMO)',
      phone: '551-966-7382',
      email: 'bmoproductions@montclair.edu',
    },
    location: '1 Normal Ave, Montclair',
    website: 'https://www.montclair.edu/bmo',
    tier: 'directory',
    features: ['4 soundstages', '4K control rooms', 'Foley studio', 'Theater screening spaces (187 and 35 capacity)'],
    specializations: ['Education', 'Broadcast', 'Film'],

    hook: 'Educational facility, professional capabilities.',
    subhook: 'Four soundstages. 4K control rooms. Foley studio. Screening rooms. University-grade infrastructure with professional applications.',

    marketPosition: {
      standout: 'University facility with professional-grade broadcast and production infrastructure.',
      asset: '4 soundstages with 4K control rooms and full post-production capabilities.',
      gap: 'Educational institutions juggle academic and commercial projects. Systems help manage both.',
    },

    opportunities: [
      {
        title: 'Systematize booking across departments',
        why: 'Universities juggle academic and commercial bookings. Systems help.',
        chapterTitle: 'Build the Brief Builder Gem',
        chapterNumber: 5,
        chapterSlug: '880/build-your-brief-builder-gem',
      },
      {
        title: 'Track project scope clearly',
        why: 'Academic projects can expand. Track the scope.',
        chapterTitle: 'Build the Scope Creep Detector',
        chapterNumber: 6,
        chapterSlug: '881/build-your-scope-creep-detector-gem',
      },
      {
        title: 'Document successful productions',
        why: 'Great student work showcases the program.',
        chapterTitle: 'Build the Project Closer Gem',
        chapterNumber: 8,
        chapterSlug: '883/build-your-project-closer-gem',
      },
    ],

    letter: {
      greeting: 'BMO Team,',
      body: [
        'Montclair State has impressive infrastructure—4K control rooms, Foley studio, screening spaces. That\'s professional-grade capability.',
        'Educational institutions face unique challenges: balancing academic projects with commercial bookings, managing student crews, tracking project scope across departments.',
        'I help studios build systems that handle that complexity. Happy to show you what that looks like.',
      ],
      signoff: 'Best,\nJai',
    },

    ctaAngle: 'Professional infrastructure deserves professional systems.',
  },

  {
    slug: 'njf',
    name: 'NJF Studios',
    contact: {
      name: 'Scott Matarazzo',
      phone: '732-702-7234',
      email: 'contact@njfstudios.com',
    },
    location: '1734 Ginesi Drive, Suite 2, Freehold',
    website: 'https://www.njfstudios.com',
    tier: 'directory',
    squareFootage: 5000,
    features: ['1,600 SF cyc wall', 'Exotic vehicle access'],
    specializations: ['Automotive', 'Commercial'],

    hook: 'Automotive shoots have specific needs. Capture them.',
    subhook: 'Exotic vehicle access. Large cyc wall. You\'re positioned for automotive work—a specialty with specific requirements.',

    marketPosition: {
      standout: 'Positioned for automotive photography with drive-in access and large cyc wall.',
      asset: '5,000 SF with 1,600 SF cyc wall and vehicle-friendly access.',
      gap: 'Automotive clients have specific technical requirements. Are you capturing them?',
    },

    opportunities: [
      {
        title: 'Build automotive-specific intake',
        why: 'Vehicle dimensions, angles, reflections—automotive has unique requirements.',
        chapterTitle: 'Build the Brief Builder Gem',
        chapterNumber: 5,
        chapterSlug: '880/build-your-brief-builder-gem',
      },
      {
        title: 'Track scope on commercial shoots',
        why: '"One more angle" on a car shoot adds hours.',
        chapterTitle: 'Build the Scope Creep Detector',
        chapterNumber: 6,
        chapterSlug: '881/build-your-scope-creep-detector-gem',
      },
      {
        title: 'Build an automotive portfolio',
        why: 'Great car photography sells more car photography.',
        chapterTitle: 'Build the Project Closer Gem',
        chapterNumber: 8,
        chapterSlug: '883/build-your-project-closer-gem',
      },
    ],

    letter: {
      greeting: 'Scott,',
      body: [
        'Automotive photography is a specialty with specific requirements—vehicle dimensions, surface reflections, driving shots vs. static. General intake forms don\'t capture what car clients need.',
        'I help studios build intake systems tailored to their specialty. For automotive, that means the technical details captured upfront.',
        'Happy to show you what automotive-specific workflows look like.',
      ],
      signoff: 'Best,\nJai',
    },

    ctaAngle: 'Automotive specialty deserves specialized systems.',
  },

  {
    slug: 'odr',
    name: 'ODR Studios',
    contact: {
      name: 'Alex Hodgkinson',
      phone: '315-450-3259',
      email: 'alex@odrstudios.com',
    },
    location: '89 Madison St, Newark',
    website: 'https://www.odrstudios.com',
    tier: 'directory',
    squareFootage: 10000,
    features: ['Column-free space', '20\' ceilings', 'Drive-in access both floors', '300 amp 3-phase power'],
    specializations: ['Photo', 'Video', 'Events'],

    hook: 'Photo, video, events. Multiple revenue streams, one system.',
    subhook: 'Column-free space. Drive-in on both floors. 20-foot ceilings. Versatility is your strength—now systematize it.',

    marketPosition: {
      standout: 'Versatile Newark facility serving photo, video, and events.',
      asset: '10,000 SF column-free with unique dual-floor drive-in access.',
      gap: 'Multiple service types mean multiple brief types. Are you handling them consistently?',
    },

    opportunities: [
      {
        title: 'Create service-specific intake templates',
        why: 'Photo, video, and events have different requirements. Capture each correctly.',
        chapterTitle: 'Build the Brief Builder Gem',
        chapterNumber: 5,
        chapterSlug: '880/build-your-brief-builder-gem',
      },
      {
        title: 'Track scope across service types',
        why: 'Different services, different scope boundaries.',
        chapterTitle: 'Build the Scope Creep Detector',
        chapterNumber: 6,
        chapterSlug: '881/build-your-scope-creep-detector-gem',
      },
      {
        title: 'Build portfolios for each service',
        why: 'Show the right work to the right clients.',
        chapterTitle: 'Build the Project Closer Gem',
        chapterNumber: 8,
        chapterSlug: '883/build-your-project-closer-gem',
      },
    ],

    letter: {
      greeting: 'Alex,',
      body: [
        'Photo, video, events—that\'s smart diversification. Different revenue streams, different client types, different requirements.',
        'I help studios build intake systems that adapt to different services while maintaining consistency. Same underlying system, different templates.',
        'Happy to show you what that looks like.',
      ],
      signoff: 'Best,\nJai',
    },

    ctaAngle: 'Multiple services, one systematic approach.',
  },

  {
    slug: 'palisade',
    name: 'Palisade Stages',
    contact: {
      name: 'Jamie Payne',
      phone: '201-881-9541',
      email: 'inquiries@palisadestages.com',
    },
    location: '20 Basin Drive, Kearny',
    website: 'https://www.palisadestages.com',
    tier: 'directory',
    squareFootage: 42000,
    features: ['Soundproof stage space', '32 ft ceiling', '6 internal loading bays'],
    specializations: ['Film', 'Television'],

    hook: '42,000 SF soundproof. Enterprise infrastructure.',
    subhook: 'Soundproof stages. 32-foot ceilings. Six loading bays. You\'re built for serious production.',

    marketPosition: {
      standout: 'Large soundproof facility in the Kearny cluster with excellent loading infrastructure.',
      asset: '42,000 SF with 32\' ceilings and 6 internal loading bays.',
      gap: 'Major productions need major systems. Efficient intake and tracking matter at scale.',
    },

    opportunities: [
      {
        title: 'Systematize production intake',
        why: 'Film and TV productions have complex requirements. Capture them systematically.',
        chapterTitle: 'Build the Brief Builder Gem',
        chapterNumber: 5,
        chapterSlug: '880/build-your-brief-builder-gem',
      },
      {
        title: 'Track scope on long-running productions',
        why: 'Major productions mean major scope potential. Track it.',
        chapterTitle: 'Build the Scope Creep Detector',
        chapterNumber: 6,
        chapterSlug: '881/build-your-scope-creep-detector-gem',
      },
      {
        title: 'Document major productions',
        why: 'Great productions attract more productions.',
        chapterTitle: 'Build the Project Closer Gem',
        chapterNumber: 8,
        chapterSlug: '883/build-your-project-closer-gem',
      },
    ],

    letter: {
      greeting: 'Jamie,',
      body: [
        '42,000 square feet soundproof with 32-foot ceilings and six loading bays—Palisade is built for serious production.',
        'At this scale, efficient systems matter. I help studios build AI workflows that handle the complexity.',
        'Happy to show you what that looks like.',
      ],
      signoff: 'Best,\nJai',
    },

    ctaAngle: 'Serious infrastructure deserves serious systems.',
  },

  {
    slug: 'reliance',
    name: 'Reliance Studio',
    contact: {
      name: 'Steve McEntee',
      phone: '856-442-0700',
      email: 'info@proofproductionsinc.com',
    },
    location: '599 Mantua Blvd, Mantua Township',
    website: 'https://www.reliance-facility.com',
    tier: 'directory',
    squareFootage: 15000,
    features: ['65\'H clearspan area (100\'x150\')', 'Theatrical line set'],
    specializations: ['Theater', 'Large Format', 'Events'],

    hook: '65 feet tall. Theatrical capability. Unique space.',
    subhook: '65-foot clearspan. Theatrical line set. This is specialized infrastructure for specialized work.',

    marketPosition: {
      standout: 'Unique vertical space with theatrical rigging for large-scale and theatrical productions.',
      asset: '15,000 SF with 65\' clearspan and professional theatrical line set.',
      gap: 'Theatrical productions have complex technical requirements. Capture them clearly.',
    },

    opportunities: [
      {
        title: 'Build theatrical-specific intake',
        why: 'Rigging, lighting plots, set requirements—theatrical needs detailed specs.',
        chapterTitle: 'Build the Brief Builder Gem',
        chapterNumber: 5,
        chapterSlug: '880/build-your-brief-builder-gem',
      },
      {
        title: 'Track scope on theatrical productions',
        why: 'Theatrical productions evolve. Track the changes.',
        chapterTitle: 'Build the Scope Creep Detector',
        chapterNumber: 6,
        chapterSlug: '881/build-your-scope-creep-detector-gem',
      },
      {
        title: 'Document theatrical work',
        why: 'Showcase your unique capabilities.',
        chapterTitle: 'Build the Project Closer Gem',
        chapterNumber: 8,
        chapterSlug: '883/build-your-project-closer-gem',
      },
    ],

    letter: {
      greeting: 'Steve,',
      body: [
        '65 feet of vertical space with theatrical line set—that\'s unique infrastructure in New Jersey.',
        'Theatrical productions have their own requirements: rigging specs, lighting plots, set construction details. I help studios build intake systems tailored to their specialty.',
        'Happy to show you what theatrical-specific workflows look like.',
      ],
      signoff: 'Best,\nJai',
    },

    ctaAngle: 'Unique space deserves specialized systems.',
  },

  {
    slug: 'riverview',
    name: 'Riverview Studios',
    contact: {
      name: 'Jim Parker',
      phone: '800-892-4882 x5',
      email: 'jwp@riverviewstudios.com',
    },
    location: 'P.O. Box 128, Bordentown',
    website: 'https://riverviewstudios.com',
    tier: 'directory',
    squareFootage: 2450,
    features: ['1,200 SF soundstage', 'Carpentry shop', '16\' lighting grid'],
    specializations: ['Corporate', 'Commercial'],

    hook: 'Corporate and commercial. Efficient systems for efficient work.',
    subhook: 'Soundstage. Carpentry shop. Lighting grid. A complete setup for corporate and commercial work.',

    marketPosition: {
      standout: 'Full-service smaller facility for corporate and commercial clients.',
      asset: '2,450 SF with soundstage, carpentry, and professional lighting.',
      gap: 'Corporate clients need consistency. Systems provide it.',
    },

    opportunities: [
      {
        title: 'Speed up corporate intake',
        why: 'Corporate clients have tight timelines. Fast intake helps.',
        chapterTitle: 'Build the Brief Builder Gem',
        chapterNumber: 5,
        chapterSlug: '880/build-your-brief-builder-gem',
      },
      {
        title: 'Protect margins on commercial work',
        why: 'Commercial clients expand scope. Track it.',
        chapterTitle: 'Build the Scope Creep Detector',
        chapterNumber: 6,
        chapterSlug: '881/build-your-scope-creep-detector-gem',
      },
      {
        title: 'Build a corporate portfolio',
        why: 'Great corporate work attracts more corporate work.',
        chapterTitle: 'Build the Project Closer Gem',
        chapterNumber: 8,
        chapterSlug: '883/build-your-project-closer-gem',
      },
    ],

    letter: {
      greeting: 'Jim,',
      body: [
        'Corporate and commercial work is about consistency and efficiency. Clients need reliable results on tight timelines.',
        'I help studios build systems that deliver that consistency—fast intake, clear scope, documented results.',
        'Happy to show you what that looks like.',
      ],
      signoff: 'Best,\nJai',
    },

    ctaAngle: 'Consistent work needs consistent systems.',
  },

  {
    slug: 'showman',
    name: 'Showman Studios',
    contact: {
      name: 'Robert Usdin',
      phone: '718-935-9899',
      email: 'rusdin@showfab.com',
    },
    location: '148 E 5th Street, Bayonne',
    website: 'https://www.showfab.com',
    tier: 'directory',
    squareFootage: 140000,
    features: ['15,000 SF studio space', '800 amps power', 'Custom fabrication'],
    specializations: ['Fabrication', 'Large Scale', 'Events'],

    hook: '140,000 SF with fabrication. That\'s production at scale.',
    subhook: 'Custom fabrication. 800 amps. 140,000 square feet. You build things at a scale others can\'t.',

    marketPosition: {
      standout: 'Massive fabrication and production facility with unmatched scale.',
      asset: '140,000 SF with full custom fabrication capabilities.',
      gap: 'Fabrication projects have complex specifications. Are you capturing them systematically?',
    },

    opportunities: [
      {
        title: 'Systematize fabrication specs',
        why: 'Custom builds need detailed specifications. Capture them correctly.',
        chapterTitle: 'Build the Brief Builder Gem',
        chapterNumber: 5,
        chapterSlug: '880/build-your-brief-builder-gem',
      },
      {
        title: 'Track changes on custom projects',
        why: 'Fabrication projects change. Track the scope impact.',
        chapterTitle: 'Build the Scope Creep Detector',
        chapterNumber: 6,
        chapterSlug: '881/build-your-scope-creep-detector-gem',
      },
      {
        title: 'Document your best builds',
        why: 'Great fabrication work sells more fabrication work.',
        chapterTitle: 'Build the Project Closer Gem',
        chapterNumber: 8,
        chapterSlug: '883/build-your-project-closer-gem',
      },
    ],

    letter: {
      greeting: 'Robert,',
      body: [
        '140,000 square feet with custom fabrication—Showman operates at a scale few can match.',
        'At this scale, capturing specifications correctly is critical. Changes mid-build are expensive. I help studios build intake systems that get the details right upfront.',
        'Happy to show you what that looks like for fabrication.',
      ],
      signoff: 'Best,\nJai',
    },

    ctaAngle: 'Massive scale needs precise systems.',
  },

  {
    slug: 'stellar',
    name: 'Stellar Studios',
    contact: {
      name: 'Michelle Elmini',
      phone: '718-278-2787',
      email: 'Michelle@stellarproductionsny.com',
    },
    location: '35 Montesano Rd, Fairfield',
    website: 'https://www.stellarstudiosnj.com',
    tier: 'directory',
    squareFootage: 12000,
    features: ['65\'x32\' cyclorama studio (20\' ceilings)', 'Green screen', 'Panoramic LED wall'],
    specializations: ['Commercial', 'Virtual Production'],

    hook: 'LED wall plus cyc. Versatility needs systems.',
    subhook: 'Panoramic LED wall. Large cyclorama. Green screen. You offer multiple shooting options—each needs proper intake.',

    marketPosition: {
      standout: 'Versatile facility with both LED wall and traditional cyc capabilities.',
      asset: '12,000 SF with large cyc studio and panoramic LED for virtual production.',
      gap: 'LED and traditional shoots have different requirements. Are you capturing both correctly?',
    },

    opportunities: [
      {
        title: 'Build intake for each shooting option',
        why: 'LED and cyc shoots need different specs. Capture both correctly.',
        chapterTitle: 'Build the Brief Builder Gem',
        chapterNumber: 5,
        chapterSlug: '880/build-your-brief-builder-gem',
      },
      {
        title: 'Track scope on VP projects',
        why: 'Virtual production scope creeps. Track it.',
        chapterTitle: 'Build the Scope Creep Detector',
        chapterNumber: 6,
        chapterSlug: '881/build-your-scope-creep-detector-gem',
      },
      {
        title: 'Showcase both capabilities',
        why: 'Show what you can do with LED and traditional setups.',
        chapterTitle: 'Build the Project Closer Gem',
        chapterNumber: 8,
        chapterSlug: '883/build-your-project-closer-gem',
      },
    ],

    letter: {
      greeting: 'Michelle,',
      body: [
        'LED wall plus large cyc—that\'s smart versatility. Different clients, different needs, same facility.',
        'LED shoots and traditional shoots have different requirements. I help studios build intake systems that capture both correctly.',
        'Happy to show you what multi-capability workflows look like.',
      ],
      signoff: 'Best,\nJai',
    },

    ctaAngle: 'Versatility needs versatile systems.',
  },

  {
    slug: 'sustainable',
    name: 'Sustainable Studios',
    contact: {
      name: 'Charlie Kickham',
      phone: '917-667-2553',
      email: 'charlie@sustainablestudiosnj.com',
    },
    location: '24 Empire Blvd., Moonachie',
    website: 'https://www.sustainablestudiosnj.com',
    tier: 'directory',
    squareFootage: 36159,
    features: ['6,000-amps 208/120 3-phase power', '165+ parking', 'Basecamp available'],
    specializations: ['Film', 'Television', 'Sustainable Production'],

    hook: 'Sustainability is your brand. Systemize the story.',
    subhook: '36,000+ SF. Massive power. Basecamp capability. And a sustainability focus that resonates with modern productions.',

    marketPosition: {
      standout: 'Large-scale facility with sustainability positioning that appeals to ESG-conscious productions.',
      asset: '36,159 SF with 6,000 amps and full basecamp capability.',
      gap: 'Sustainability messaging needs documentation. Case studies should show the impact.',
    },

    opportunities: [
      {
        title: 'Systematize production intake',
        why: 'Film and TV productions have complex requirements. Capture them systematically.',
        chapterTitle: 'Build the Brief Builder Gem',
        chapterNumber: 5,
        chapterSlug: '880/build-your-brief-builder-gem',
      },
      {
        title: 'Track scope on major productions',
        why: 'Big productions mean big scope potential.',
        chapterTitle: 'Build the Scope Creep Detector',
        chapterNumber: 6,
        chapterSlug: '881/build-your-scope-creep-detector-gem',
      },
      {
        title: 'Document sustainability impact',
        why: 'ESG-conscious clients want to see the numbers. Document them.',
        chapterTitle: 'Build the Project Closer Gem',
        chapterNumber: 8,
        chapterSlug: '883/build-your-project-closer-gem',
      },
    ],

    letter: {
      greeting: 'Charlie,',
      body: [
        'Sustainability positioning is smart—it resonates with ESG-conscious productions and helps you stand out.',
        'But sustainability claims need documentation. Case studies should show the actual impact—carbon reduction, waste diversion, energy efficiency.',
        'I help studios build systems that document not just the work, but the impact. Happy to show you what that looks like.',
      ],
      signoff: 'Best,\nJai',
    },

    ctaAngle: 'Sustainability claims need systematic documentation.',
  },

  {
    slug: 'wreckd',
    name: 'Wreck\'d Productions',
    contact: {
      name: 'Keli Hernandez',
      phone: '732-936-9916',
      email: 'Keli@WreckdProductions.com',
    },
    location: '1 Sheila Dr., Tinton Falls',
    website: 'https://www.wreckdproductions.com',
    tier: 'directory',
    squareFootage: 1735,
    features: ['1,400 SF blackbox soundstage (20\' ceilings)', '335 SF recording studio'],
    specializations: ['Music', 'Video', 'Recording'],

    hook: 'Minority and woman-owned. That opens doors.',
    subhook: 'Blackbox soundstage. Recording studio. Minority and woman-owned certification. Real competitive advantages for corporate and government work.',

    marketPosition: {
      standout: 'Minority and woman-owned certifications open doors to diversity programs.',
      asset: '1,735 SF with blackbox stage and dedicated recording studio.',
      gap: 'Certification is an asset. Case studies should highlight the diversity impact.',
    },

    opportunities: [
      {
        title: 'Standardize intake for diverse clients',
        why: 'Corporate and government clients have different requirements. Capture both.',
        chapterTitle: 'Build the Brief Builder Gem',
        chapterNumber: 5,
        chapterSlug: '880/build-your-brief-builder-gem',
      },
      {
        title: 'Track scope across project types',
        why: 'Different clients, different scope boundaries.',
        chapterTitle: 'Build the Scope Creep Detector',
        chapterNumber: 6,
        chapterSlug: '881/build-your-scope-creep-detector-gem',
      },
      {
        title: 'Document diversity impact',
        why: 'Clients choosing you for diversity want to see the impact.',
        chapterTitle: 'Build the Project Closer Gem',
        chapterNumber: 8,
        chapterSlug: '883/build-your-project-closer-gem',
      },
    ],

    letter: {
      greeting: 'Keli,',
      body: [
        'Minority and woman-owned certifications are real competitive advantages. Corporate diversity programs actively seek partners like Wreck\'d.',
        'That said, clients choosing you for diversity want to see the impact. Case studies should highlight not just the work, but the partnership.',
        'I help studios build systems that document impact alongside deliverables. Happy to show you what that looks like.',
      ],
      signoff: 'Best,\nJai',
    },

    ctaAngle: 'Certifications open doors. Documentation keeps them open.',
  },
];

// Helper to get studio by slug
export function getStudioBySlug(slug: string): StudioData | undefined {
  return studios.find(s => s.slug === slug);
}

// Helper to get all slugs for static generation
export function getAllStudioSlugs(): string[] {
  return studios.map(s => s.slug);
}

// Tier 1 studios (priority outreach)
export function getTier1Studios(): StudioData[] {
  return studios.filter(s => s.tier === 'tier1');
}

// Tier 2 studios
export function getTier2Studios(): StudioData[] {
  return studios.filter(s => s.tier === 'tier2');
}

// Directory studios (all others)
export function getDirectoryStudios(): StudioData[] {
  return studios.filter(s => s.tier === 'directory');
}
