import mediator from '../mediator'

export default function m_start() {
  return async (payload: any) => {
    mediator.toggle('New', false);
    mediator.toggleList(['Next', 'End'], true);
  };
};
