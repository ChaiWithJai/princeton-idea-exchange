import type { ModelOfUnderstanding, ModelsCollection } from './models-schema';

/**
 * Models of Understanding
 *
 * Synthesized from NotebookLM's "Sacred Seeds" notebook
 * 104 YouTube sources across 3 playlists:
 * - The Story of Civilization (Predictive History)
 * - Geo-Strategy series
 * - Secret History series
 */

export const models: ModelOfUnderstanding[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // EASTERN PHILOSOPHY
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'tantra-bhakti-hanuman',
    slug: 'tantra-bhakti-hanuman',
    title: 'Tantra & Bhakti of Hanuman',
    subtitle: 'Devotion as Technology',
    category: 'eastern-philosophy',
    image: '/images/uAVzMuxreJbNlZA9NZW8StqkrA.webp',

    data: {
      sources: [
        'The Story of Civilization - Predictive History',
        'Secret History Series',
        'Ramayana Textual Analysis'
      ],
      keyFacts: [
        'Bhakti yoga emerged as a democratizing force against Brahmanical ritualism',
        'Hanuman represents the ideal devotee - selfless service without ego',
        'Tantra developed as a technology for direct experience of the divine',
        'The monkey symbolism represents the untamed mind brought under control'
      ],
      quotes: [
        {
          text: 'Devotion is not sentiment, it is a technology for dissolving the ego.',
          attribution: 'Synthesized from Vedantic sources'
        },
        {
          text: 'When you remove the self from service, what remains is pure action.',
          attribution: 'Hanuman Chalisa interpretation'
        }
      ]
    },

    information: {
      summary: 'Bhakti (devotion) and Tantra represent two complementary technologies for spiritual transformation. Hanuman embodies the perfection of bhakti - complete surrender that paradoxically grants unlimited power.',
      coreConcepts: [
        {
          term: 'Bhakti Yoga',
          definition: 'The path of devotion - using emotional intensity as fuel for spiritual awakening rather than suppressing it'
        },
        {
          term: 'Tantra',
          definition: 'Technologies and practices for directly experiencing cosmic consciousness, often misunderstood in the West'
        },
        {
          term: 'Seva',
          definition: 'Selfless service - action without attachment to results or personal benefit'
        }
      ],
      historicalContext: 'Bhakti movements arose in medieval India as a response to rigid caste hierarchies, offering direct access to the divine regardless of birth.',
      modernRelevance: 'In an age of ego-driven achievement, Hanuman offers a model: competence without arrogance, service without servility, strength without aggression.'
    },

    knowledge: {
      keyInsights: [
        'Devotion is not passive - it is concentrated emotional energy directed toward transformation',
        'The ego is not destroyed but redirected toward something greater than itself',
        'True power comes from alignment with dharma, not personal ambition',
        'Service (seva) is the technology that dissolves the barrier between self and other'
      ],
      connections: [
        { modelId: 'encounter-bholenath', relationship: 'Hanuman is Shiva\'s avatar - bhakti meets dissolution' },
        { modelId: 'polyvagal-theory', relationship: 'Devotional practices regulate the nervous system through safety and connection' },
        { modelId: 'just-ship-it', relationship: 'Hanuman embodies action without overthinking - leap first, build the bridge while crossing' }
      ],
      mentalModels: [
        'Ego dissolution through service',
        'Emotional energy as fuel (not obstacle)',
        'Competence + humility formula'
      ],
      commonMisconceptions: [
        'Devotion means blind faith - actually requires discernment (viveka)',
        'Tantra is about sex - primarily about energy cultivation and consciousness expansion',
        'Surrender means passivity - Hanuman is incredibly active and powerful'
      ]
    },

    wisdom: {
      practicalApplications: [
        {
          context: 'When ego is blocking your work',
          action: 'Ask "How would Hanuman approach this?" - serve the mission, not your reputation',
          outcome: 'Breakthrough creativity when you stop protecting your self-image'
        },
        {
          context: 'When feeling disconnected or purposeless',
          action: 'Find something greater than yourself to serve - a cause, a person, a mission',
          outcome: 'Purpose emerges from service, not from seeking purpose'
        },
        {
          context: 'When emotional intensity threatens to overwhelm',
          action: 'Channel it toward devotion rather than suppressing it',
          outcome: 'Emotional energy becomes fuel rather than obstacle'
        }
      ],
      reflectionQuestions: [
        'What would I do if I completely removed ego from this situation?',
        'Am I serving the mission or serving my self-image?',
        'Where am I suppressing emotional energy that could be redirected?'
      ],
      dailyPractice: 'Before starting work, briefly dedicate your efforts to something beyond yourself. Notice how this shifts your relationship to outcomes.',
      warningSign: 'When you are more concerned with credit than completion, you have lost the Hanuman spirit.'
    },

    ux: {
      heroQuote: 'When you remove the self from service, what remains is pure action.',
      colorAccent: '#c74a15',
      relatedModels: ['encounter-bholenath', 'polyvagal-theory', 'just-ship-it'],
      difficulty: 'intermediate',
      readTime: 12
    }
  },

  {
    id: 'encounter-bholenath',
    slug: 'encounter-bholenath',
    title: 'An Encounter with Bholenath',
    subtitle: 'Dissolving the Self',
    category: 'eastern-philosophy',
    image: '/images/cAZDJDtMvh12SzPh8Nc9eFQQA.webp',

    data: {
      sources: [
        'The Story of Civilization - Predictive History',
        'Hindu Philosophical Traditions',
        'Shaiva Siddhanta Texts'
      ],
      keyFacts: [
        'Bholenath ("Lord of the Simple") is Shiva in his most accessible form',
        'Shiva represents consciousness itself - the witness behind all experience',
        'The ashes (vibhuti) symbolize the impermanence of form',
        'Mount Kailash represents the still point of turning world'
      ],
      quotes: [
        {
          text: 'The universe dissolves into me, and I dissolve into the universe.',
          attribution: 'Shiva Sutras'
        },
        {
          text: 'What you seek is what is seeking.',
          attribution: 'Advaita principle'
        }
      ]
    },

    information: {
      summary: 'Shiva as Bholenath represents the direct encounter with consciousness itself - not through complex philosophy but through radical simplicity. The dissolution of ego reveals what was always present.',
      coreConcepts: [
        {
          term: 'Bholenath',
          definition: 'Lord of the Simple - Shiva accessible to all, without need for elaborate ritual or learning'
        },
        {
          term: 'Neti Neti',
          definition: '"Not this, not this" - the process of recognizing what you are by eliminating what you are not'
        },
        {
          term: 'Turiya',
          definition: 'The fourth state - pure consciousness underlying waking, dreaming, and deep sleep'
        }
      ],
      historicalContext: 'Shaivism offers an alternative to Brahmanical orthodoxy - direct experience over ritual, accessible to outcasts and householders alike.',
      modernRelevance: 'In an age of identity politics and self-optimization, Shiva offers the radical question: who are you when you remove all the labels?'
    },

    knowledge: {
      keyInsights: [
        'Identity is a construction - useful but not ultimately real',
        'What remains when all stories about yourself dissolve is consciousness itself',
        'Simplicity is not naivety - it is clarity after complexity',
        'The seeker and the sought are not two'
      ],
      connections: [
        { modelId: 'tantra-bhakti-hanuman', relationship: 'Hanuman is Shiva\'s avatar - devotion as path to dissolution' },
        { modelId: 'reverse-engineering-trauma', relationship: 'Trauma healing often requires dissolving rigid identity structures' },
        { modelId: 'ai-native-systems', relationship: 'First principles thinking dissolves assumed constraints' }
      ],
      mentalModels: [
        'Identity as tool (not truth)',
        'Subtraction over addition',
        'Witness consciousness'
      ],
      commonMisconceptions: [
        'Ego death means becoming passive - actually enables more effective action',
        'Dissolution is annihilation - what dissolves is the false, what remains is essential',
        'This is nihilism - it is the opposite: finding what cannot be taken away'
      ]
    },

    wisdom: {
      practicalApplications: [
        {
          context: 'When identity feels threatened',
          action: 'Ask "What would remain if this story about myself dissolved?"',
          outcome: 'Freedom from defending positions that don\'t serve you'
        },
        {
          context: 'When overwhelmed by complexity',
          action: 'Strip away everything non-essential until you find the still point',
          outcome: 'Clarity emerges from radical simplification'
        },
        {
          context: 'When stuck in overthinking',
          action: 'Notice the one who is noticing the thoughts',
          outcome: 'Space between stimulus and response'
        }
      ],
      reflectionQuestions: [
        'Who am I when I remove all my roles and labels?',
        'What am I defending that doesn\'t actually need defending?',
        'What would I do if I weren\'t afraid of losing my identity?'
      ],
      dailyPractice: 'Spend 5 minutes as the witness - observe thoughts without identifying with them. Notice the unchanging awareness behind changing content.',
      warningSign: 'When you are aggressively defending your self-image, you have forgotten you are not your self-image.'
    },

    ux: {
      heroQuote: 'What you seek is what is seeking.',
      colorAccent: '#1e3a5f',
      relatedModels: ['tantra-bhakti-hanuman', 'reverse-engineering-trauma', 'ai-native-systems'],
      difficulty: 'advanced',
      readTime: 15
    }
  },

  {
    id: 'sugrivas-atlas',
    slug: 'sugrivas-atlas',
    title: "Sugriva's Atlas",
    subtitle: 'Mapping the Unknown',
    category: 'eastern-philosophy',
    image: '/images/Ix3P84EZD3M1XgzTyDcLtuP8E.png',

    data: {
      sources: [
        'Kishkindha Kanda - Ramayana',
        'Geo-Strategy Series',
        'Ancient Trade Route Analysis'
      ],
      keyFacts: [
        'Sugriva dispatched search parties to all four directions with detailed geographic knowledge',
        'The Ramayana contains surprisingly accurate descriptions of distant lands',
        'Ancient Indian merchants had extensive trade networks reaching Southeast Asia',
        'Cartographic knowledge was held by merchant and warrior classes'
      ],
      quotes: [
        {
          text: 'The map is not the territory, but without maps we cannot navigate territories.',
          attribution: 'Adapted from Korzybski via Ramayana principle'
        }
      ]
    },

    information: {
      summary: 'When Sugriva organized the search for Sita, he revealed an extensive atlas of the known world. This represents the essential work of mapping before acting - understanding the terrain before the mission.',
      coreConcepts: [
        {
          term: 'Reconnaissance',
          definition: 'Systematic exploration of unknown territory before committing resources'
        },
        {
          term: 'Mental Mapping',
          definition: 'Building internal representations of complex systems to navigate them effectively'
        },
        {
          term: 'Distributed Search',
          definition: 'Parallel exploration of multiple directions when the target location is unknown'
        }
      ],
      historicalContext: 'Ancient civilizations developed sophisticated geographic knowledge through trade, conquest, and pilgrimage - often more extensive than commonly assumed.',
      modernRelevance: 'In complex problem spaces, the discipline of mapping before acting prevents wasted effort and reveals hidden paths.'
    },

    knowledge: {
      keyInsights: [
        'Systematic mapping precedes effective action',
        'Unknown territories require parallel exploration, not sequential search',
        'Local knowledge (the vanara scouts) often exceeds centralized expertise',
        'The search itself generates the map'
      ],
      connections: [
        { modelId: 'engineering-arbitrage', relationship: 'Mapping reveals where effort can be minimized' },
        { modelId: 'ai-stack', relationship: 'Understanding the stack requires mapping dependencies' },
        { modelId: 'work-youre-avoiding', relationship: 'Often we avoid mapping because it reveals uncomfortable truths' }
      ],
      mentalModels: [
        'Map before move',
        'Parallel search strategies',
        'Local scouts over central planners'
      ]
    },

    wisdom: {
      practicalApplications: [
        {
          context: 'Starting a new project or domain',
          action: 'Dedicate time to mapping the landscape before committing to a path',
          outcome: 'Avoid costly pivots and discover non-obvious routes'
        },
        {
          context: 'When feeling lost in complexity',
          action: 'Stop moving and start mapping - draw out what you know and don\'t know',
          outcome: 'Clarity about where to focus exploration'
        },
        {
          context: 'When a team is misaligned',
          action: 'Create a shared map - often disagreements stem from different mental models of the territory',
          outcome: 'Alignment through shared understanding'
        }
      ],
      reflectionQuestions: [
        'What territory am I navigating without a map?',
        'Where am I assuming the map is the territory?',
        'Who are the local scouts I should be consulting?'
      ],
      dailyPractice: 'Before diving into work, spend 5 minutes sketching the landscape of what you\'re trying to accomplish.',
      warningSign: 'When you keep getting lost in the same ways, you need a better map.'
    },

    ux: {
      heroQuote: 'The search itself generates the map.',
      colorAccent: '#2d5a45',
      relatedModels: ['engineering-arbitrage', 'ai-stack', 'work-youre-avoiding'],
      difficulty: 'beginner',
      readTime: 8
    }
  },

  {
    id: 'mother-goddess-society',
    slug: 'mother-goddess-society',
    title: 'The Mother Goddess Society',
    subtitle: 'Sacred Feminine Power',
    category: 'eastern-philosophy',
    image: '/images/NNas5W5pxmLAmH9dPYD4yLiYWo.png',

    data: {
      sources: [
        'The Story of Civilization - Predictive History',
        'Shakti Traditions',
        'Archaeological Evidence - Indus Valley'
      ],
      keyFacts: [
        'Mother goddess worship predates patriarchal religious systems',
        'Shakti (divine feminine energy) is considered the active principle in Hindu cosmology',
        'The Indus Valley civilization shows extensive goddess worship evidence',
        'Tantra elevated feminine principle as supreme creative force'
      ],
      quotes: [
        {
          text: 'The universe is the play of Shakti - consciousness dances, and we are the dance.',
          attribution: 'Tantric principle'
        }
      ]
    },

    information: {
      summary: 'Before patriarchal systems dominated, goddess worship represented an understanding of creative power as fundamentally feminine. Shakti is not just female divinity but the activating energy of all existence.',
      coreConcepts: [
        {
          term: 'Shakti',
          definition: 'The primordial cosmic energy - the dynamic force that animates all creation'
        },
        {
          term: 'Prakriti',
          definition: 'Nature/matter as feminine principle - the field in which consciousness plays'
        },
        {
          term: 'Kundalini',
          definition: 'Dormant creative energy at the base of the spine, visualized as feminine serpent power'
        }
      ],
      historicalContext: 'Goddess worship was suppressed but never eliminated - it survived in village traditions, Tantra, and even within orthodox structures through figures like Durga and Kali.',
      modernRelevance: 'Reconnecting with creative power as feminine offers alternatives to purely aggressive, dominating models of achievement.'
    },

    knowledge: {
      keyInsights: [
        'Creative power has traditionally been understood as feminine',
        'The suppression of goddess worship correlates with suppression of feminine ways of knowing',
        'Shakti represents energy in motion - consciousness without energy is inert',
        'Reclaiming feminine power doesn\'t mean rejecting masculine - it means integration'
      ],
      connections: [
        { modelId: 'tantra-bhakti-hanuman', relationship: 'Tantra centers feminine energy as path to liberation' },
        { modelId: 'polyvagal-theory', relationship: 'Feminine approaches emphasize co-regulation and connection' },
        { modelId: 'ai-wildcard', relationship: 'Creative emergence is generative, not controlling' }
      ],
      mentalModels: [
        'Creation as feminine principle',
        'Power through nurturing (not just domination)',
        'Integration over conquest'
      ]
    },

    wisdom: {
      practicalApplications: [
        {
          context: 'When forcing isn\'t working',
          action: 'Shift from conquest mode to cultivation mode - nurture rather than dominate',
          outcome: 'Creative solutions emerge from receptive states'
        },
        {
          context: 'When creative energy feels blocked',
          action: 'Connect with the body and with nature - Shakti flows through embodiment',
          outcome: 'Energy unblocks when you stop trying to control it'
        },
        {
          context: 'When leadership feels exhausting',
          action: 'Lead through facilitation and emergence rather than command and control',
          outcome: 'Sustainable power through empowering others'
        }
      ],
      reflectionQuestions: [
        'Where am I trying to force what needs to be nurtured?',
        'What feminine qualities am I suppressing in myself or others?',
        'How might receptivity be more powerful than aggression here?'
      ],
      dailyPractice: 'Notice one situation today where cultivation might work better than conquest.',
      warningSign: 'When everything feels like a battle, you may have lost touch with feminine power.'
    },

    ux: {
      heroQuote: 'The universe is the play of Shakti - consciousness dances, and we are the dance.',
      colorAccent: '#8b4513',
      relatedModels: ['tantra-bhakti-hanuman', 'polyvagal-theory', 'ai-wildcard'],
      difficulty: 'intermediate',
      readTime: 10
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // AI & TECHNOLOGY
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'attention-all-you-need',
    slug: 'attention-all-you-need',
    title: 'Attention is all you need',
    subtitle: 'Transformer Architecture',
    category: 'ai-technology',
    image: '/images/7jTFpNZDmhPAYMTo83wcMvmWITY.png',

    data: {
      sources: [
        'Vaswani et al. 2017 - Attention Is All You Need',
        'AI Technology Analysis',
        'Transformer Architecture Deep Dives'
      ],
      keyFacts: [
        'Transformers replaced recurrent architectures with pure attention mechanisms',
        'Self-attention allows every token to attend to every other token',
        'The architecture scales remarkably well with compute and data',
        'GPT, BERT, and all modern LLMs are built on transformer foundations'
      ],
      quotes: [
        {
          text: 'Attention mechanisms allow the model to jointly attend to information from different representation subspaces.',
          attribution: 'Vaswani et al.'
        }
      ]
    },

    information: {
      summary: 'The transformer architecture revolutionized AI by replacing sequential processing with attention - the ability to weigh the relevance of all inputs simultaneously. This mirrors how human attention creates meaning from context.',
      coreConcepts: [
        {
          term: 'Self-Attention',
          definition: 'Mechanism where each element in a sequence computes attention weights to all other elements'
        },
        {
          term: 'Multi-Head Attention',
          definition: 'Running multiple attention operations in parallel to capture different types of relationships'
        },
        {
          term: 'Positional Encoding',
          definition: 'Adding information about sequence position since attention itself is order-agnostic'
        }
      ],
      historicalContext: 'Before transformers, sequence models (RNNs, LSTMs) processed tokens one at a time, creating bottlenecks. Attention allowed parallel processing and longer-range dependencies.',
      modernRelevance: 'Understanding attention is understanding the foundation of modern AI - and perhaps understanding something about how meaning emerges from context.'
    },

    knowledge: {
      keyInsights: [
        'Meaning is contextual - what something means depends on what it\'s attending to',
        'Parallel processing beats sequential for many intelligence tasks',
        'Scale enables emergence - transformers exhibit capabilities not present in smaller versions',
        'Attention is a general-purpose mechanism, not specific to language'
      ],
      connections: [
        { modelId: 'ai-stack', relationship: 'Transformers are the foundation layer of modern AI stack' },
        { modelId: 'ai-native-systems', relationship: 'Building AI-native requires understanding transformer capabilities' },
        { modelId: 'encounter-bholenath', relationship: 'Attention creates the "witness" - awareness of what matters' }
      ],
      mentalModels: [
        'Context creates meaning',
        'Parallel over sequential',
        'Scale unlocks emergence'
      ]
    },

    wisdom: {
      practicalApplications: [
        {
          context: 'When trying to understand something complex',
          action: 'Ask "What is this attending to? What context creates its meaning?"',
          outcome: 'Deeper understanding through contextual analysis'
        },
        {
          context: 'When designing systems',
          action: 'Build in attention mechanisms - ways for components to weight importance dynamically',
          outcome: 'More adaptive, context-aware systems'
        },
        {
          context: 'When working with AI',
          action: 'Understand that LLMs work through attention - they find patterns by relating everything to everything',
          outcome: 'Better prompting and more realistic expectations'
        }
      ],
      reflectionQuestions: [
        'What is commanding my attention right now? Is that serving me?',
        'What contexts am I ignoring that might change meaning?',
        'Where am I processing sequentially when parallel would be better?'
      ],
      dailyPractice: 'Notice what your attention naturally gravitates toward. Ask whether that allocation serves your goals.',
      warningSign: 'When you understand something out of context, you probably don\'t understand it.'
    },

    ux: {
      heroQuote: 'Meaning is contextual - what something means depends on what it\'s attending to.',
      colorAccent: '#4a90d9',
      relatedModels: ['ai-stack', 'ai-native-systems', 'encounter-bholenath'],
      difficulty: 'intermediate',
      readTime: 12
    }
  },

  {
    id: 'ai-stack',
    slug: 'ai-stack',
    title: 'AI Stack',
    subtitle: 'Building Blocks',
    category: 'ai-technology',
    image: '/images/4PSeGfWoLaYSwmokODBf7011Eg.png',

    data: {
      sources: [
        'AI Infrastructure Analysis',
        'Modern ML Engineering Practices',
        'Cloud Computing Architecture'
      ],
      keyFacts: [
        'The AI stack has distinct layers: compute, data, models, orchestration, applications',
        'Each layer has different leaders, economics, and strategic considerations',
        'The stack is rapidly commoditizing at lower levels while differentiating at higher levels',
        'Vertical integration vs. best-of-breed is a key strategic decision'
      ],
      quotes: [
        {
          text: 'In AI, the stack is the strategy.',
          attribution: 'Industry observation'
        }
      ]
    },

    information: {
      summary: 'The AI stack represents the layers of technology required to build AI applications. Understanding this stack reveals where value accrues, where to compete, and where to leverage commoditized layers.',
      coreConcepts: [
        {
          term: 'Foundation Models',
          definition: 'Large pre-trained models (GPT, Claude, Llama) that serve as base for applications'
        },
        {
          term: 'Orchestration Layer',
          definition: 'Tools for connecting models to data, APIs, and workflows (LangChain, agents)'
        },
        {
          term: 'Inference Infrastructure',
          definition: 'Systems for running models in production - latency, cost, reliability tradeoffs'
        }
      ],
      historicalContext: 'Like the web stack before it (LAMP, MEAN), the AI stack is standardizing around common patterns while leaving room for differentiation.',
      modernRelevance: 'Builders must decide where in the stack to compete and where to leverage existing solutions. The wrong choice means building on shifting sands.'
    },

    knowledge: {
      keyInsights: [
        'Build on the most stable layer you can - don\'t reinvent commoditized infrastructure',
        'Differentiate at the layer closest to customer value',
        'The stack is not static - what\'s differentiating today is commoditized tomorrow',
        'Vertical integration makes sense when layers are tightly coupled'
      ],
      connections: [
        { modelId: 'attention-all-you-need', relationship: 'Transformers are the foundation enabling the stack' },
        { modelId: 'ai-native-systems', relationship: 'AI-native design requires stack fluency' },
        { modelId: 'engineering-arbitrage', relationship: 'Stack knowledge reveals leverage points' }
      ],
      mentalModels: [
        'Layer analysis',
        'Commodity vs. differentiator',
        'Build vs. buy at each layer'
      ]
    },

    wisdom: {
      practicalApplications: [
        {
          context: 'When starting an AI project',
          action: 'Map the stack first - identify which layers you need and which exist',
          outcome: 'Avoid building what you should buy, buying what you should build'
        },
        {
          context: 'When evaluating AI companies',
          action: 'Ask "Which layer do they own? Is that layer defensible?"',
          outcome: 'Better investment and partnership decisions'
        },
        {
          context: 'When feeling overwhelmed by AI landscape',
          action: 'Use stack thinking to organize - which layer is this solving?',
          outcome: 'Mental clarity about a chaotic market'
        }
      ],
      reflectionQuestions: [
        'What layer am I trying to compete at? Is that the right layer?',
        'What am I building that I should be buying (or vice versa)?',
        'Which layers of my stack are stable and which are shifting?'
      ],
      dailyPractice: 'When encountering new AI tools, immediately categorize: which layer? commodity or differentiator?',
      warningSign: 'When you\'re building infrastructure instead of applications, check if you\'re at the wrong layer.'
    },

    ux: {
      heroQuote: 'In AI, the stack is the strategy.',
      colorAccent: '#2d5a87',
      relatedModels: ['attention-all-you-need', 'ai-native-systems', 'engineering-arbitrage'],
      difficulty: 'intermediate',
      readTime: 10
    }
  },

  {
    id: 'ai-wildcard',
    slug: 'ai-wildcard',
    title: 'AI is Your Wildcard',
    subtitle: 'Leverage & Asymmetry',
    category: 'ai-technology',
    image: '/images/FMtrLvWTU9AOreaTETgbNbKRQG4.webp',

    data: {
      sources: [
        'Startup Strategy Analysis',
        'Asymmetric Competition Patterns',
        'AI Capability Trajectory'
      ],
      keyFacts: [
        'AI enables individuals and small teams to compete with large organizations',
        'The cost of intelligence is dropping exponentially',
        'Incumbents have AI-incompatible organizational structures',
        'Speed of iteration matters more than initial resources'
      ],
      quotes: [
        {
          text: 'AI is the great equalizer - or the great amplifier of existing inequality. The difference is who learns to use it.',
          attribution: 'Observation'
        }
      ]
    },

    information: {
      summary: 'AI is a wildcard in the strategic deck - it can disrupt any industry and enable underdogs to compete with giants. The winners will be those who understand AI as leverage, not just tool.',
      coreConcepts: [
        {
          term: 'Asymmetric Advantage',
          definition: 'Using AI to do what previously required large teams or capital'
        },
        {
          term: 'Iteration Speed',
          definition: 'AI enables faster cycles - prototype, test, learn, repeat'
        },
        {
          term: 'Capability Overhang',
          definition: 'AI can do more than most people realize - the gap is understanding, not technology'
        }
      ],
      historicalContext: 'Previous technological shifts (PC, internet, mobile) created windows where startups could outmaneuver incumbents. AI is creating a similar window.',
      modernRelevance: 'The next few years represent an unprecedented opportunity for those who deeply understand AI capabilities to build things previously impossible.'
    },

    knowledge: {
      keyInsights: [
        'AI is leverage - it multiplies what you can do, not replaces what you do',
        'The best AI use cases are ones that were impossible, not just expensive',
        'Speed of learning trumps initial capability',
        'AI-native organizations will outcompete AI-augmented organizations'
      ],
      connections: [
        { modelId: 'ai-native-systems', relationship: 'Wildcard is realized through native design' },
        { modelId: 'just-ship-it', relationship: 'AI enables faster shipping cycles' },
        { modelId: 'engineering-arbitrage', relationship: 'AI creates new arbitrage opportunities' }
      ],
      mentalModels: [
        'Leverage thinking',
        'Impossibility unlocking',
        'Speed as strategy'
      ]
    },

    wisdom: {
      practicalApplications: [
        {
          context: 'When facing a large competitor',
          action: 'Ask "What can AI enable that their organizational structure prevents them from doing?"',
          outcome: 'Find asymmetric advantages in their blind spots'
        },
        {
          context: 'When evaluating business ideas',
          action: 'Ask "Is this newly possible because of AI, or just cheaper?"',
          outcome: 'Focus on unlocked possibilities, not marginal improvements'
        },
        {
          context: 'When feeling behind on AI',
          action: 'Start using it for real work today - learning by doing beats learning by reading',
          outcome: 'Practical intuition develops through application'
        }
      ],
      reflectionQuestions: [
        'What could I do with AI that I assumed required a large team?',
        'Where am I treating AI as a tool when it could be leverage?',
        'What\'s newly possible that wasn\'t possible a year ago?'
      ],
      dailyPractice: 'Try to do one thing with AI today that you would have delegated to a human yesterday.',
      warningSign: 'When you\'re using AI to do things slightly faster instead of doing impossible things, you\'re underutilizing the wildcard.'
    },

    ux: {
      heroQuote: 'AI is leverage - it multiplies what you can do, not replaces what you do.',
      colorAccent: '#9c27b0',
      relatedModels: ['ai-native-systems', 'just-ship-it', 'engineering-arbitrage'],
      difficulty: 'beginner',
      readTime: 8
    }
  },

  {
    id: 'ai-native-systems',
    slug: 'ai-native-systems',
    title: 'AI Native Systems',
    subtitle: 'First Principles',
    category: 'ai-technology',
    image: '/images/pFQc7zcbvnvE89cDSlU3a6Lndk.webp',

    data: {
      sources: [
        'System Design Principles',
        'AI Architecture Patterns',
        'First Principles Engineering'
      ],
      keyFacts: [
        'AI-native means designed for AI from the ground up, not AI added to existing systems',
        'Most "AI products" are AI-augmented, not AI-native',
        'AI-native design changes fundamental assumptions about UX, architecture, and business model',
        'The biggest opportunities are in building AI-native, not retrofitting AI'
      ],
      quotes: [
        {
          text: 'The horse and buggy with an engine attached is not a car.',
          attribution: 'First principles principle'
        }
      ]
    },

    information: {
      summary: 'AI-native systems are designed from first principles assuming AI capabilities, not legacy systems with AI bolted on. This distinction determines who wins in the AI era.',
      coreConcepts: [
        {
          term: 'First Principles Design',
          definition: 'Starting from fundamental capabilities rather than existing solutions'
        },
        {
          term: 'AI-Native UX',
          definition: 'Interfaces designed around AI interaction patterns, not traditional GUIs with AI features'
        },
        {
          term: 'Emergent Capability',
          definition: 'System behaviors that arise from AI integration rather than explicit programming'
        }
      ],
      historicalContext: 'Mobile-native apps outcompeted mobile-adapted websites. Cloud-native outcompeted cloud-migrated. AI-native will outcompete AI-augmented.',
      modernRelevance: 'We are in the early days of AI-native design. The patterns are still emerging, which means opportunity for those who figure them out first.'
    },

    knowledge: {
      keyInsights: [
        'Adding AI to existing products is optimization; AI-native is transformation',
        'AI-native products often look weird at first because they don\'t match existing mental models',
        'The biggest wins come from reimagining the problem, not improving the solution',
        'AI-native requires letting go of accumulated assumptions'
      ],
      connections: [
        { modelId: 'ai-wildcard', relationship: 'AI-native is how to play the wildcard' },
        { modelId: 'ai-stack', relationship: 'AI-native requires stack fluency' },
        { modelId: 'encounter-bholenath', relationship: 'Designing from first principles requires dissolving assumptions' }
      ],
      mentalModels: [
        'First principles over incremental',
        'Native over adapted',
        'Weird is often right (early)'
      ]
    },

    wisdom: {
      practicalApplications: [
        {
          context: 'When building an AI product',
          action: 'Ask "If AI existed first, how would this problem be solved?" not "How can we add AI?"',
          outcome: 'Fundamentally different (and often better) solutions'
        },
        {
          context: 'When evaluating AI opportunities',
          action: 'Look for problems where AI changes what\'s possible, not what\'s efficient',
          outcome: 'Find blue ocean opportunities instead of competing on features'
        },
        {
          context: 'When stuck in existing patterns',
          action: 'Deliberately forget everything about how this problem is currently solved',
          outcome: 'Space for genuinely new approaches'
        }
      ],
      reflectionQuestions: [
        'What assumptions am I carrying from pre-AI solutions?',
        'If I designed this today with AI, would it look anything like what exists?',
        'What becomes possible if I let go of current constraints?'
      ],
      dailyPractice: 'Pick one problem and ask "How would this be solved if humans never had to be involved?"',
      warningSign: 'When your AI product looks exactly like the non-AI version plus a chatbot, you\'re not AI-native.'
    },

    ux: {
      heroQuote: 'The horse and buggy with an engine attached is not a car.',
      colorAccent: '#00695c',
      relatedModels: ['ai-wildcard', 'ai-stack', 'encounter-bholenath'],
      difficulty: 'advanced',
      readTime: 12
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // MIND & BODY
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'polyvagal-theory',
    slug: 'polyvagal-theory',
    title: 'Polyvagal Theory',
    subtitle: 'Nervous System States',
    category: 'mind-body',
    image: '/images/5XRusc6uePqO8imK6sstkFHtrcU.webp',

    data: {
      sources: [
        'Stephen Porges - Polyvagal Theory',
        'Deb Dana - Practical Applications',
        'Neuroscience Research'
      ],
      keyFacts: [
        'The vagus nerve has distinct branches with different functions',
        'Three states: ventral vagal (safe), sympathetic (fight/flight), dorsal vagal (shutdown)',
        'We are constantly neurocepting - scanning for safety without conscious awareness',
        'Co-regulation is how mammals calm their nervous systems'
      ],
      quotes: [
        {
          text: 'Safety is not the absence of threat. It is the presence of connection.',
          attribution: 'Adapted from Porges'
        }
      ]
    },

    information: {
      summary: 'Polyvagal theory explains how our nervous system automatically scans for safety and shifts between states. Understanding these states transforms how we approach stress, relationships, and performance.',
      coreConcepts: [
        {
          term: 'Neuroception',
          definition: 'The nervous system\'s automatic, subconscious detection of safety or danger'
        },
        {
          term: 'Ventral Vagal State',
          definition: 'Social engagement system active - feeling safe, connected, capable of play and creativity'
        },
        {
          term: 'Dorsal Vagal Shutdown',
          definition: 'Conservation state - numbness, disconnection, collapse when threat seems inescapable'
        }
      ],
      historicalContext: 'Traditional fight/flight understanding missed the third state (freeze/shutdown) and the social engagement system that mammals developed for co-regulation.',
      modernRelevance: 'In a world of chronic stress and digital disconnection, understanding our nervous system is essential for sustainable performance and genuine wellbeing.'
    },

    knowledge: {
      keyInsights: [
        'State determines story - what we believe depends on what state we\'re in',
        'We cannot think our way into a different state - we must use the body',
        'Safety is a biological need, not a psychological preference',
        'The goal is not to avoid difficult states but to move fluidly between them'
      ],
      connections: [
        { modelId: 'reverse-engineering-trauma', relationship: 'Trauma healing requires nervous system regulation' },
        { modelId: 'tantra-bhakti-hanuman', relationship: 'Devotional practices create ventral vagal states' },
        { modelId: 'mother-goddess-society', relationship: 'Co-regulation and connection are feminine principles' }
      ],
      mentalModels: [
        'State before story',
        'Bottom-up over top-down',
        'Co-regulation over self-regulation'
      ]
    },

    wisdom: {
      practicalApplications: [
        {
          context: 'When overwhelmed or anxious',
          action: 'Focus on breath, specifically long exhales - this activates the ventral vagal system',
          outcome: 'Shift from sympathetic activation to social engagement'
        },
        {
          context: 'When feeling numb or disconnected',
          action: 'Seek connection with safe others - dorsal vagal responds to co-regulation',
          outcome: 'Return to presence through relationship'
        },
        {
          context: 'Before important conversations or decisions',
          action: 'Check your state first - what state are you in?',
          outcome: 'Ensure you\'re making decisions from ventral vagal, not reactivity'
        }
      ],
      reflectionQuestions: [
        'What state am I in right now? How do I know?',
        'What stories am I telling myself that might be state-dependent?',
        'What helps me return to ventral vagal?'
      ],
      dailyPractice: 'Three times daily, pause and notice your state. No need to change it - just notice.',
      warningSign: 'When you\'re making important decisions while dysregulated, you\'re not thinking - you\'re reacting.'
    },

    ux: {
      heroQuote: 'Safety is not the absence of threat. It is the presence of connection.',
      colorAccent: '#5c6bc0',
      relatedModels: ['reverse-engineering-trauma', 'tantra-bhakti-hanuman', 'mother-goddess-society'],
      difficulty: 'beginner',
      readTime: 10
    }
  },

  {
    id: 'reverse-engineering-trauma',
    slug: 'reverse-engineering-trauma',
    title: 'Reverse-engineering Trauma',
    subtitle: 'Healing Frameworks',
    category: 'mind-body',
    image: '/images/96mncTpGnFgqJywBnVJwez177AU.webp',

    data: {
      sources: [
        'Bessel van der Kolk - The Body Keeps the Score',
        'Peter Levine - Somatic Experiencing',
        'Trauma-Informed Practice Literature'
      ],
      keyFacts: [
        'Trauma is stored in the body, not just the mind',
        'Healing often requires completing interrupted defensive responses',
        'The window of tolerance can be expanded through titrated exposure',
        'Integration, not catharsis, is the goal of trauma work'
      ],
      quotes: [
        {
          text: 'Trauma is not what happens to you. It\'s what happens inside you as a result of what happened to you.',
          attribution: 'Gabor Maté'
        }
      ]
    },

    information: {
      summary: 'Trauma is not the event but the nervous system\'s response that got stuck. Healing involves reverse-engineering what happened and completing what was interrupted, allowing the system to return to baseline.',
      coreConcepts: [
        {
          term: 'Window of Tolerance',
          definition: 'The zone where we can experience activation without becoming dysregulated'
        },
        {
          term: 'Titration',
          definition: 'Approaching difficult material in small, manageable doses'
        },
        {
          term: 'Pendulation',
          definition: 'Moving between activation and resource, building capacity to hold both'
        }
      ],
      historicalContext: 'Traditional talk therapy often retraumatized because it engaged the rational brain while the trauma lived in the body and limbic system.',
      modernRelevance: 'In a world that creates widespread trauma (collective and individual), understanding healing is not optional - it\'s essential for functioning.'
    },

    knowledge: {
      keyInsights: [
        'You can\'t think your way out of trauma - the body must discharge the stuck energy',
        'Healing is not forgetting - it\'s being able to remember without being hijacked',
        'Small amounts of activation plus completion equals increased capacity',
        'Resource states are as important as processing states'
      ],
      connections: [
        { modelId: 'polyvagal-theory', relationship: 'Trauma is a nervous system phenomenon' },
        { modelId: 'encounter-bholenath', relationship: 'Dissolution of rigid defensive identities' },
        { modelId: 'work-youre-avoiding', relationship: 'What we avoid often relates to unprocessed material' }
      ],
      mentalModels: [
        'Completion over catharsis',
        'Titration over flooding',
        'Body over mind'
      ]
    },

    wisdom: {
      practicalApplications: [
        {
          context: 'When triggered by something that seems irrational',
          action: 'Ask "What is this reminding my nervous system of?" - honor the pattern even if you don\'t understand it',
          outcome: 'Curiosity instead of self-judgment'
        },
        {
          context: 'When processing difficult memories',
          action: 'Go slowly, stay resourced, and pendulate between the difficult material and something settling',
          outcome: 'Integration without overwhelm'
        },
        {
          context: 'When feeling stuck in old patterns',
          action: 'Consider whether there\'s an incomplete defensive response - what did your body want to do that it couldn\'t?',
          outcome: 'Opening pathways to completion'
        }
      ],
      reflectionQuestions: [
        'What activates me more than it "should"? What might that be protecting?',
        'What did I need in that moment that I didn\'t get?',
        'Where in my body do I feel this?'
      ],
      dailyPractice: 'When triggered, pause and notice where you feel it in your body. Just notice - don\'t try to change it.',
      warningSign: 'When the same patterns keep repeating despite insight, there may be somatic material that hasn\'t been addressed.'
    },

    ux: {
      heroQuote: 'Trauma is not what happens to you. It\'s what happens inside you as a result of what happened to you.',
      colorAccent: '#7b1fa2',
      relatedModels: ['polyvagal-theory', 'encounter-bholenath', 'work-youre-avoiding'],
      difficulty: 'advanced',
      readTime: 14
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SHIPPING & STRATEGY
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'just-ship-it',
    slug: 'just-ship-it',
    title: 'Just Ship It',
    subtitle: 'Bias to Action',
    category: 'shipping-strategy',
    image: '/images/SHFBLYyU6PkiPfvKh8Lwh0Z7u2U.png',

    data: {
      sources: [
        'Reid Hoffman - Startup Strategy',
        'Shipping Culture Analysis',
        'Iteration vs. Planning Research'
      ],
      keyFacts: [
        'If you\'re not embarrassed by your first version, you shipped too late',
        'Real feedback only comes from shipped products',
        'Planning beyond a certain point is procrastination disguised as diligence',
        'Speed of iteration beats quality of initial release'
      ],
      quotes: [
        {
          text: 'A good plan violently executed now is better than a perfect plan executed next week.',
          attribution: 'George Patton'
        }
      ]
    },

    information: {
      summary: 'Just Ship It is the discipline of overcoming perfectionism to get real feedback from the real world. It\'s not about carelessness - it\'s about recognizing that learning requires action.',
      coreConcepts: [
        {
          term: 'Minimum Viable Product',
          definition: 'The smallest thing you can ship that will generate real learning'
        },
        {
          term: 'Iteration Speed',
          definition: 'How quickly you can ship, learn, and ship again'
        },
        {
          term: 'Productive Embarrassment',
          definition: 'The discomfort of shipping something imperfect that generates valuable feedback'
        }
      ],
      historicalContext: 'The shift from waterfall to agile represented a recognition that reality cannot be planned, only discovered through iteration.',
      modernRelevance: 'AI accelerates iteration cycles dramatically - the competitive advantage is now decisively with those who ship fast and learn fast.'
    },

    knowledge: {
      keyInsights: [
        'Shipping is a skill that improves with practice',
        'Perfectionism is fear wearing a professional costume',
        'The market doesn\'t care about your plans - only your products',
        'Learning is proportional to shipping, not thinking'
      ],
      connections: [
        { modelId: 'ai-wildcard', relationship: 'AI enables faster iteration cycles' },
        { modelId: 'work-youre-avoiding', relationship: 'What you avoid shipping reveals what you fear' },
        { modelId: 'tantra-bhakti-hanuman', relationship: 'Hanuman leaps before the bridge is built' }
      ],
      mentalModels: [
        'Bias to action',
        'Iteration over speculation',
        'Learning requires shipping'
      ]
    },

    wisdom: {
      practicalApplications: [
        {
          context: 'When stuck in planning',
          action: 'Ask "What\'s the smallest thing I could ship today that would generate learning?"',
          outcome: 'Momentum through action'
        },
        {
          context: 'When perfectionism is blocking progress',
          action: 'Set a shipping deadline and honor it regardless of state',
          outcome: 'Break the perfectionism cycle'
        },
        {
          context: 'When afraid of criticism',
          action: 'Remember that not shipping is worse than shipping something imperfect',
          outcome: 'Reframe criticism as information'
        }
      ],
      reflectionQuestions: [
        'What am I not shipping because it\'s not ready enough?',
        'What would I ship if I knew no one would judge me?',
        'How many iterations am I trading for false certainty?'
      ],
      dailyPractice: 'Ship something small every day - could be as simple as sending an email you\'ve been drafting.',
      warningSign: 'When your planning documents are longer than your shipped products, you have a shipping problem.'
    },

    ux: {
      heroQuote: 'If you\'re not embarrassed by your first version, you shipped too late.',
      colorAccent: '#e65100',
      relatedModels: ['ai-wildcard', 'work-youre-avoiding', 'tantra-bhakti-hanuman'],
      difficulty: 'beginner',
      readTime: 7
    }
  },

  {
    id: 'engineering-arbitrage',
    slug: 'engineering-arbitrage',
    title: 'Engineering Arbitrage',
    subtitle: 'Finding Edge',
    category: 'shipping-strategy',
    image: '/images/4ZDDWdmtz2iA9jVibc3ms63lY.webp',

    data: {
      sources: [
        'Startup Strategy Analysis',
        'Technology Adoption Curves',
        'Arbitrage Pattern Recognition'
      ],
      keyFacts: [
        'Arbitrage is exploiting gaps between what\'s possible and what\'s commonly known',
        'Technology creates constant arbitrage opportunities as capabilities outpace adoption',
        'The best arbitrage opportunities are invisible to those not at the frontier',
        'Arbitrage windows close as knowledge spreads'
      ],
      quotes: [
        {
          text: 'The future is already here - it\'s just not evenly distributed.',
          attribution: 'William Gibson'
        }
      ]
    },

    information: {
      summary: 'Engineering arbitrage is finding opportunities where technical capability exceeds market awareness. Those at the frontier see possibilities invisible to others - and can build before competition arrives.',
      coreConcepts: [
        {
          term: 'Capability Gap',
          definition: 'The difference between what\'s technically possible and what\'s commonly deployed'
        },
        {
          term: 'Frontier Knowledge',
          definition: 'Understanding what\'s newly possible before it becomes widely known'
        },
        {
          term: 'First-Mover Advantage',
          definition: 'The benefit of arriving before competition in a newly possible space'
        }
      ],
      historicalContext: 'Every major technology platform shift has created arbitrage opportunities for those who understood capabilities before markets did.',
      modernRelevance: 'AI is creating the largest arbitrage opportunity in a generation - capability is advancing faster than understanding.'
    },

    knowledge: {
      keyInsights: [
        'Arbitrage requires being at the frontier - you can\'t exploit gaps you don\'t see',
        'The best opportunities look weird or impossible to those not paying attention',
        'Execution speed matters - arbitrage windows close',
        'Sharing arbitrage insights can create network effects or close the window'
      ],
      connections: [
        { modelId: 'ai-wildcard', relationship: 'AI creates massive arbitrage opportunities' },
        { modelId: 'sugrivas-atlas', relationship: 'Mapping reveals arbitrage opportunities' },
        { modelId: 'ai-stack', relationship: 'Stack knowledge reveals capability gaps' }
      ],
      mentalModels: [
        'Frontier scouting',
        'Gap exploitation',
        'Window awareness'
      ]
    },

    wisdom: {
      practicalApplications: [
        {
          context: 'When evaluating opportunities',
          action: 'Ask "What\'s possible now that wasn\'t possible 12 months ago?" and "Who doesn\'t know this yet?"',
          outcome: 'Identify arbitrage windows'
        },
        {
          context: 'When learning new technology',
          action: 'Don\'t just learn how it works - ask what becomes possible that wasn\'t before',
          outcome: 'Convert learning into opportunity identification'
        },
        {
          context: 'When deciding whether to build something',
          action: 'Ask "How long until this arbitrage window closes?" - build if the window is long enough',
          outcome: 'Better timing decisions'
        }
      ],
      reflectionQuestions: [
        'What do I know is possible that most people don\'t realize yet?',
        'What frontiers am I not paying attention to where arbitrage exists?',
        'What arbitrage opportunities am I sitting on without executing?'
      ],
      dailyPractice: 'Spend 30 minutes at the frontier of something - reading the latest papers, trying new tools, talking to builders.',
      warningSign: 'When you\'re building what everyone else is building, you\'ve missed the arbitrage window.'
    },

    ux: {
      heroQuote: 'The future is already here - it\'s just not evenly distributed.',
      colorAccent: '#1565c0',
      relatedModels: ['ai-wildcard', 'sugrivas-atlas', 'ai-stack'],
      difficulty: 'intermediate',
      readTime: 9
    }
  },

  {
    id: 'work-youre-avoiding',
    slug: 'work-youre-avoiding',
    title: "The Answer is Always in The Work You're Avoiding",
    subtitle: 'Resistance as Signal',
    category: 'shipping-strategy',
    image: '/images/O4pJxQXvSsWlDifoKDATUiS50o.webp',

    data: {
      sources: [
        'Steven Pressfield - The War of Art',
        'Resistance Psychology',
        'Procrastination Research'
      ],
      keyFacts: [
        'Resistance is proportional to importance - we avoid what matters most',
        'The quality of avoidance reveals the significance of the work',
        'Resistance is not rational - it\'s a biological response to growth',
        'The work we avoid is often the work that would change everything'
      ],
      quotes: [
        {
          text: 'The more important a call or action is to our soul\'s evolution, the more Resistance we will feel toward pursuing it.',
          attribution: 'Steven Pressfield'
        }
      ]
    },

    information: {
      summary: 'Resistance is not a sign to avoid - it\'s a compass pointing toward the work that matters. The thing you\'re avoiding is often the thing that would create the breakthrough.',
      coreConcepts: [
        {
          term: 'Resistance',
          definition: 'The invisible force that opposes any act that moves us toward growth or our higher nature'
        },
        {
          term: 'Productive Avoidance',
          definition: 'Doing low-priority work to avoid high-priority work while feeling busy'
        },
        {
          term: 'Threshold Guardian',
          definition: 'The resistance that appears right before breakthrough - a mythological pattern'
        }
      ],
      historicalContext: 'Every creative and spiritual tradition has recognized the force that opposes growth - the devil, maya, the shadow, Resistance.',
      modernRelevance: 'In a world of infinite distractions, Resistance has more tools than ever. Recognizing it is the first step to defeating it.'
    },

    knowledge: {
      keyInsights: [
        'Resistance is a reliable signal of what matters',
        'If you\'re avoiding something, that\'s probably what you should be doing',
        'Productive procrastination is still procrastination',
        'Starting is the hardest part - momentum often follows'
      ],
      connections: [
        { modelId: 'just-ship-it', relationship: 'Shipping is the antidote to resistance' },
        { modelId: 'reverse-engineering-trauma', relationship: 'Some avoidance is trauma-based and needs different treatment' },
        { modelId: 'encounter-bholenath', relationship: 'Ego dissolution removes what Resistance is protecting' }
      ],
      mentalModels: [
        'Resistance as compass',
        'Fear as signal',
        'Do the hard thing first'
      ]
    },

    wisdom: {
      practicalApplications: [
        {
          context: 'When procrastinating',
          action: 'Ask "What am I avoiding?" and do that thing first',
          outcome: 'Break the avoidance pattern'
        },
        {
          context: 'When feeling stuck',
          action: 'List everything you\'re avoiding and order by resistance level - start with highest',
          outcome: 'The answer is often in the thing you least want to do'
        },
        {
          context: 'When busy but not progressing',
          action: 'Distinguish between real work and productive procrastination',
          outcome: 'Stop being busy and start being effective'
        }
      ],
      reflectionQuestions: [
        'What am I avoiding right now?',
        'What would change if I did the thing I\'ve been putting off?',
        'What story am I telling myself about why I can\'t do this yet?'
      ],
      dailyPractice: 'Each morning, identify the one thing you\'re most avoiding. Do it first.',
      warningSign: 'When you\'re busy but not making progress on what matters, you\'re serving Resistance.'
    },

    ux: {
      heroQuote: 'The more important a call is to our soul\'s evolution, the more Resistance we will feel toward it.',
      colorAccent: '#d84315',
      relatedModels: ['just-ship-it', 'reverse-engineering-trauma', 'encounter-bholenath'],
      difficulty: 'beginner',
      readTime: 8
    }
  },

  {
    id: 'year-2030',
    slug: 'year-2030',
    title: 'The Year is 2030',
    subtitle: 'Future Vision',
    category: 'shipping-strategy',
    image: '/images/KO41RA0HjXQn2nw2ObilQfTzDY.png',

    data: {
      sources: [
        'Technology Trajectory Analysis',
        'Scenario Planning',
        'Futures Studies'
      ],
      keyFacts: [
        'The future is largely visible to those paying attention',
        'Backcasting from a clear future vision reveals what to build now',
        'Exponential change is counterintuitive - we overestimate short-term, underestimate long-term',
        'The decisions you make today create the 2030 you will live in'
      ],
      quotes: [
        {
          text: 'The best way to predict the future is to invent it.',
          attribution: 'Alan Kay'
        }
      ]
    },

    information: {
      summary: 'Instead of forecasting from now, backcast from 2030. What does the world look like then? What is obviously true? Work backward to understand what to build today.',
      coreConcepts: [
        {
          term: 'Backcasting',
          definition: 'Working backward from a desired future state to identify what must happen to get there'
        },
        {
          term: 'Inevitable Futures',
          definition: 'Outcomes that are clearly coming given current trajectories - not if, but when'
        },
        {
          term: 'Agency Over Prediction',
          definition: 'Focus on what you can build, not what will passively happen'
        }
      ],
      historicalContext: 'Those who imagined the internet economy in 1994 had massive advantages. Those who imagine the AI economy in 2024 will have similar advantages.',
      modernRelevance: 'AI is the most predictable transformation in history - the general shape is clear, the details are where competition happens.'
    },

    knowledge: {
      keyInsights: [
        'The future is more predictable than we pretend - we just don\'t like its implications',
        'Five years is long enough for transformation, short enough for relevance',
        'The question is not what will happen but what you will build',
        'Present decisions compound toward future states'
      ],
      connections: [
        { modelId: 'ai-wildcard', relationship: 'AI is the primary force shaping 2030' },
        { modelId: 'engineering-arbitrage', relationship: 'Seeing 2030 reveals today\'s arbitrage opportunities' },
        { modelId: 'ai-native-systems', relationship: '2030 will be AI-native by default' }
      ],
      mentalModels: [
        'Backcasting over forecasting',
        'Inevitable vs. uncertain futures',
        'Build toward vision'
      ]
    },

    wisdom: {
      practicalApplications: [
        {
          context: 'When making strategic decisions',
          action: 'Ask "In 2030, will I be glad I made this choice?" - work backward from there',
          outcome: 'Decisions aligned with where things are going'
        },
        {
          context: 'When feeling overwhelmed by change',
          action: 'Sketch out what seems inevitable by 2030 - then figure out where you fit',
          outcome: 'Clarity and direction'
        },
        {
          context: 'When building products',
          action: 'Design for the 2030 user, not the 2024 user - but ship in 2024',
          outcome: 'Products that grow into their context'
        }
      ],
      reflectionQuestions: [
        'What is obviously true about 2030 that I\'m not acting on?',
        'What skills will be essential in 2030 that I\'m not developing?',
        'What am I building toward - and does it exist in 2030?'
      ],
      dailyPractice: 'When making a decision, ask "Does this make sense in a 2030 context?"',
      warningSign: 'When you\'re optimizing for the present at the expense of the obvious future, you\'re building on shifting sands.'
    },

    ux: {
      heroQuote: 'The best way to predict the future is to invent it.',
      colorAccent: '#6a1b9a',
      relatedModels: ['ai-wildcard', 'engineering-arbitrage', 'ai-native-systems'],
      difficulty: 'intermediate',
      readTime: 10
    }
  }
];

export const modelsCollection: ModelsCollection = {
  version: '1.0.0',
  lastUpdated: new Date().toISOString().split('T')[0],
  models,
  categories: [
    {
      id: 'eastern-philosophy',
      title: 'Eastern Philosophy',
      description: 'Ancient wisdom, modern application',
      order: 1
    },
    {
      id: 'ai-technology',
      title: 'AI & Technology',
      description: 'Frameworks for the future',
      order: 2
    },
    {
      id: 'mind-body',
      title: 'Mind & Body',
      description: 'Understanding ourselves',
      order: 3
    },
    {
      id: 'shipping-strategy',
      title: 'Shipping & Strategy',
      description: 'From idea to reality',
      order: 4
    }
  ]
};

// Helper functions
export function getModelBySlug(slug: string): ModelOfUnderstanding | undefined {
  return models.find(m => m.slug === slug);
}

export function getModelsByCategory(category: ModelOfUnderstanding['category']): ModelOfUnderstanding[] {
  return models.filter(m => m.category === category);
}

export function getRelatedModels(model: ModelOfUnderstanding): ModelOfUnderstanding[] {
  return model.ux.relatedModels
    .map(id => models.find(m => m.id === id))
    .filter((m): m is ModelOfUnderstanding => m !== undefined);
}
