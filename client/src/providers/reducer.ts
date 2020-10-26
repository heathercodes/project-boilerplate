// eslint-disable-next-line no-shadow
export enum ACTIONS {
  SET_DATA = 'SET_DATA',
}

export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case ACTIONS.SET_DATA:
      return {
        data: action.payload.data,
      };

    default:
      return state;
  }
};
