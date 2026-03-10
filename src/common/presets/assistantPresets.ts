import type { PresetAgentType } from '@/types/acpTypes';

export type AssistantPreset = {
  id: string;
  avatar: string;
  presetAgentType?: PresetAgentType;
  /**
   * Directory containing all resources for this preset (relative to project root).
   * If set, both ruleFiles and skillFiles will be resolved from this directory.
   * Default: rules/ for rules, skills/ for skills.
   */
  resourceDir?: string;
  ruleFiles: Record<string, string>;
  skillFiles?: Record<string, string>;
  /**
   * Default enabled skills for this assistant (skill names from skills/ directory).
   */
  defaultEnabledSkills?: string[];
  nameI18n: Record<string, string>;
  descriptionI18n: Record<string, string>;
  promptsI18n?: Record<string, string[]>;
};

export const ASSISTANT_PRESETS: AssistantPreset[] = [
  {
    id: 'cowork',
    avatar: 'cowork.svg',
    presetAgentType: 'gemini',
    resourceDir: 'assistant/cowork',
    ruleFiles: {
      'en-US': 'cowork.md',
      'zh-CN': 'cowork.md',
    },
    nameI18n: {
      'en-US': 'Cowork',
      'zh-CN': 'Cowork',
    },
    descriptionI18n: {
      'en-US': 'Autonomous task execution with file operations, document processing, and multi-step workflow planning.',
      'zh-CN': '可以自主执行多步骤任务，支持文件读写、文档处理与工作流规划。',
    },
    promptsI18n: {
      'en-US': ['Analyze the current project structure and suggest improvements', 'Automate the build and deployment process', 'Extract and summarize key information from all PDF files'],
      'zh-CN': ['分析当前项目结构并给出优化建议', '自动化构建与部署流程', '提取并总结所有 PDF 中的关键信息'],
    },
  },
];
