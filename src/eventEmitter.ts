import EventEmitter from 'events';
import type TypedEmitter from 'typed-emitter';

type MessageEvents = {
  obsidianReady: () => void;
};

export const ee = new EventEmitter() as TypedEmitter<MessageEvents>;
