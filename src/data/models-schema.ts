/**
 * Data-to-Wisdom Pipeline Schema for Models of Understanding
 *
 * Each model follows a progression:
 * Data → Information → Knowledge → Wisdom
 */

export interface ModelOfUnderstanding {
  id: string;
  slug: string;

  // Basic metadata
  title: string;
  subtitle: string;
  category: 'eastern-philosophy' | 'ai-technology' | 'mind-body' | 'shipping-strategy';
  image: string;

  // Data Layer: Raw facts and sources
  data: {
    sources: string[];           // NotebookLM sources
    keyFacts: string[];          // Raw factual statements
    quotes: Array<{
      text: string;
      attribution?: string;
    }>;
  };

  // Information Layer: Organized and contextualized
  information: {
    summary: string;             // 2-3 sentence overview
    coreConcepts: Array<{
      term: string;
      definition: string;
    }>;
    historicalContext?: string;
    modernRelevance: string;
  };

  // Knowledge Layer: Patterns and connections
  knowledge: {
    keyInsights: string[];       // 3-5 main takeaways
    connections: Array<{         // Links to other models
      modelId: string;
      relationship: string;
    }>;
    mentalModels: string[];      // Frameworks this teaches
    commonMisconceptions?: string[];
  };

  // Wisdom Layer: Actionable application
  wisdom: {
    practicalApplications: Array<{
      context: string;           // When to apply
      action: string;            // What to do
      outcome: string;           // Expected result
    }>;
    reflectionQuestions: string[];
    dailyPractice?: string;      // How to embody this
    warningSign?: string;        // When you're not applying this
  };

  // UX metadata
  ux: {
    heroQuote?: string;          // Featured quote for detail page
    colorAccent?: string;        // Category-specific color
    relatedModels: string[];     // For "More like this" section
    difficulty: 'beginner' | 'intermediate' | 'advanced';
    readTime: number;            // Minutes to absorb
  };
}

export interface ModelsCollection {
  version: string;
  lastUpdated: string;
  models: ModelOfUnderstanding[];
  categories: Array<{
    id: string;
    title: string;
    description: string;
    order: number;
  }>;
}

// The 14 models
export const MODEL_IDS = [
  // Eastern Philosophy
  'tantra-bhakti-hanuman',
  'encounter-bholenath',
  'sugrivas-atlas',
  'mother-goddess-society',

  // AI & Technology
  'attention-all-you-need',
  'ai-stack',
  'ai-wildcard',
  'ai-native-systems',

  // Mind & Body
  'polyvagal-theory',
  'reverse-engineering-trauma',

  // Shipping & Strategy
  'just-ship-it',
  'engineering-arbitrage',
  'work-youre-avoiding',
  'year-2030',
] as const;

export type ModelId = typeof MODEL_IDS[number];
