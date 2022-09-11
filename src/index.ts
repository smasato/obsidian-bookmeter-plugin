import { Plugin } from 'obsidian';

export default class BookMeterPlugin extends Plugin {
  public async onload() {
    console.log('BookMeter plugin: loading plugin', new Date().toLocaleString());
  }

  onunload() {
    console.log('BookMeter plugin: unloading plugin', new Date().toLocaleString());
  }
}
