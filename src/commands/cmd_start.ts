import model from "../model/model"

export default function cmd_start() {
  return async (payload: any) => {
    // await console.log('cmd_start:', payload.targetName, payload.currentTargetName);
    await model.start();
  };
};
