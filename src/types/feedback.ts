export type GrammarItem = {
  tag: string;
  reason: string;
  original: string;
  suggestion: string;
};
export type AlternativeExpressionItem = {
  tag: string;
  reason: string;
  original: string;
  suggestion: string;
};

export type VideoItem = {
  index: number;
  url?: string;
};

export type CompletionItem = {
  avg: number;
  logical: number;
  relevance: number;
  clarity: number;
};

export type JdFitItem = {
  rate: number;
  description: string;
};

export type PostureItem = {
  overall: string;
  hand: string;
  head: string;
  arm: string;
  body: string;
};

export interface DetailItem {
  index: number;
  question: string;
  answer: string;
  positive: string;
  negative: string;
  answerCorrections: Array<string>;
}

export type ExpressionCorrectionItem = {
  original: string;
  suggestion: string;
};

export type DashboardItem = {
  videos: Array<VideoItem>;
  overall: string;
  completion: CompletionItem;
  jdFit: JdFitItem;
  posture: PostureItem;
};

export interface FeedbackItem {
  dashboard: DashboardItem;
  details: Array<DetailItem>;
  expressionCorrection: Array<ExpressionCorrectionItem>;
}
