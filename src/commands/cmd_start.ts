import model from "../model/model"

export default function cmd_start() {
  return async (payload: any) => {
    await model.start();
  };
};
