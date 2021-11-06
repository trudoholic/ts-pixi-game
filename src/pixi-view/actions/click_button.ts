import emitter from '../../eventEmitter'

export default function click_button() {
  return async (payload: any) => {

    switch (payload.targetName) {
      case 'New':
      console.log('Start New Game');
      await emitter.emit('cmd_start', {
        targetName: payload.targetName,
        currentTargetName: payload.currentTargetName,
      });
        break;

      default:
      await console.log('click_button:', payload.targetName, payload.currentTargetName);
        break;
    }

  };
};
