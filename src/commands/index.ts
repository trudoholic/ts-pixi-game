import { EventEmitter } from 'events';
import cmd_end  from './cmd_end';
import cmd_start from './cmd_start';

export default function loadCommands(emitter: EventEmitter) {
  emitter.on('cmd_end',  cmd_end());
  emitter.on('cmd_start', cmd_start());
  return emitter;
};
