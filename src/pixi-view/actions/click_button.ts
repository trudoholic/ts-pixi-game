import emitter from '../../eventEmitter'

export default function click_button() {
  return async (payload: any) => {

    switch (payload.targetName) {

      case 'New':
      await emitter.emit('cmd_start', {});
        break;

      case 'End':
      await emitter.emit('cmd_end', {});
        break;

      default:
      await console.log('click_button:', payload.targetName, payload.currentTargetName);
        break;
    }

  };
};
