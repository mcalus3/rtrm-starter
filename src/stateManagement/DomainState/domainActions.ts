import { createAction, ActionsUnion } from '../utils';

export enum DomainActionTypes {
  changeText = 'CHANGE_TEXT'
}

export const Actions = {
  changeText: (text: string) =>
    createAction(DomainActionTypes.changeText, { text })
};

export type DomainActions = ActionsUnion<typeof Actions>;
