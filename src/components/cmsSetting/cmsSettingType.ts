export type ISwitchValue = 'grey' | 'weakness' | 'showLogo' | 'unique'
export interface ISwitchTab {
  value: ISwitchValue;
  label: string;
  switchModel: boolean;
}
