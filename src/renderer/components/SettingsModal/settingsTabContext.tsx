import React, { createContext, useContext, useState } from 'react';
import type { SettingTab } from './index';

interface SettingsTabContextValue {
  activeTab: SettingTab;
  setActiveTab: (tab: SettingTab) => void;
}

const SettingsTabContext = createContext<SettingsTabContextValue | null>(null);

export const SettingsTabProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<SettingTab>('model');
  return <SettingsTabContext.Provider value={{ activeTab, setActiveTab }}>{children}</SettingsTabContext.Provider>;
};

export const useSettingsTab = (): SettingsTabContextValue => {
  const context = useContext(SettingsTabContext);
  if (!context) {
    // Return a default value that won't crash the app
    return {
      activeTab: 'model',
      setActiveTab: () => {},
    };
  }
  return context;
};
