import model from "../model/model"

export default function cmd_end() {
  return async (payload: any) => {
    await model.end();
  };
};
