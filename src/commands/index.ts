import { EventEmitter } from 'events';
import cmd_start from './cmd_start';
// import click_stage  from './click_stage';

export default function loadCommands(emitter: EventEmitter) {
  emitter.on('cmd_start', cmd_start());
  // emitter.on('click_stage',  click_stage());
  return emitter;
};
