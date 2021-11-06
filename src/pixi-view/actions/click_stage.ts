export default function click_stage() {
  return async (payload: any) => {
    await console.log('click_stage:', payload.targetName, payload.currentTargetName);
  };
};
