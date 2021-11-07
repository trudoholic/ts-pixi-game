import mediator from '../mediator'

export default function m_end() {
  return async (payload: any) => {
    mediator.toggle('End', false);
    mediator.toggle('New', true);
  };
};
