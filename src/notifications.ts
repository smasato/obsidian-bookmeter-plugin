import { Notice } from 'obsidian';

import { ee } from '~/eventEmitter';

export const registerNotifications = (): void => {
  ee.on('obsidianReady', () => {
    new Notice('obsidian-kanban is ready!');
  });
};
