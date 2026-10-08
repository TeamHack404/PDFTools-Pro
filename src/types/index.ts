export type ToolCategory = 'all' | 'organizar' | 'convertir' | 'seguridad';

export interface PDFTool {
  id: string;
  name: string;
  description: string;
  category: ToolCategory;
  categoryLabel: string;
  iconName: string;
  badge?: string;
  inputFormats: string[];
  outputFormats: string[];
  keyBenefit: string;
  keyboardShortcut?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}
