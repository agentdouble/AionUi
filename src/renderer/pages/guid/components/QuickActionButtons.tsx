/**
 * @license
 * Copyright 2025 AionUi (aionui.com)
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../index.module.css';

type QuickActionButtonsProps = {
  onOpenLink: (url: string) => void;
  inactiveBorderColor: string;
  activeShadow: string;
};

const QuickActionButtons: React.FC<QuickActionButtonsProps> = ({ onOpenLink, inactiveBorderColor, activeShadow }) => {
  return null;
};

export default QuickActionButtons;
