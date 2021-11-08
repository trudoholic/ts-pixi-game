import model from "../model/model"

export default function cmd_next() {
  return async (payload: any) => {
    await model.next();
  };
};
