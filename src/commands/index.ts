import { EventEmitter } from 'events';
import click_button from './click_button';
import click_stage  from './click_stage';

export default function loadCommands(emitter: EventEmitter) {
  emitter.on('click_button', click_button());
  emitter.on('click_stage',  click_stage());
  return emitter;
};
