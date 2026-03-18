/**
 * @license
 * Copyright 2025 AionUi (aionui.com)
 * SPDX-License-Identifier: Apache-2.0
 */

import miaSvg from '@/renderer/assets/logos/mia.svg';

/**
 * Map custom avatar identifiers to their resolved image URLs.
 */
export const CUSTOM_AVATAR_IMAGE_MAP: Record<string, string> = {
  'cowork.svg': miaSvg,
  'mia.svg': miaSvg,
  '\u{1F6E0}\u{FE0F}': miaSvg,
};
