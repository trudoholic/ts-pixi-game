import mediator from '../mediator'

export default function m_start() {
  return async (payload: any) => {
    const button = mediator.getButton(payload.targetName);
    console.log('## button:', payload.targetName, !!button);
    if (button) {
      button.setText('OK');
    }
  };
};
