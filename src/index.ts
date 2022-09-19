import { Plugin } from 'obsidian';
import { ee } from '~/eventEmitter';

export default class BookMeterPlugin extends Plugin {
  public onload() {
    console.log('BookMeter plugin: loading plugin', new Date().toLocaleString());

    this.registerEvents();
  }

  onunload() {
    console.log('BookMeter plugin: unloading plugin', new Date().toLocaleString());
  }

  private registerEvents(): void {
    this.app.workspace.onLayoutReady(() => {
      ee.emit('obsidianReady');
    });
  }
}
