export default function click_button() {//{ database } = {}
  // const db = database || new Database();
  return async (payload: any) => {
    // await db.save(payload);
    // console.log('click_button:', payload.targetName, payload.currentTargetName);

    switch (payload.targetName) {
      case 'New':
      console.log('Start New Game');
        break;

      default:
      console.log('click_button:', payload.targetName, payload.currentTargetName);
        break;
    }

  };
};
