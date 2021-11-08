import mediator from '../mediator'

export default function m_end() {
  return async (payload: any) => {
    mediator.toggleList(['Next', 'End'], false);
    mediator.toggle('New', true);
  };
};
