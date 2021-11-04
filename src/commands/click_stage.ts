export default function click_stage() {//{ database } = {}
  // const db = database || new Database();
  return async (payload: any) => {
    // await db.save(payload);
    console.log('click_stage:', payload.targetName, payload.currentTargetName);
  };
};
