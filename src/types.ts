import { MouseEventHandler } from "react";

export interface ICampaign {
  id: number;
  name: string;
  description: string;
  gameName: string;
  startDate: string;
  endDate: string;
  budget: number;
  paidWithCrypto: boolean;
  language: string;
}
export interface ICampaignProps {
  campaign: ICampaign;
}
export interface ICampaignsProps {
  campaigns: Array<ICampaign>;
}
export interface IFormProps {
  addCampaign: Function; 
  closeForm:  MouseEventHandler;
}
export interface IHeaderProps {
  onClick: MouseEventHandler; 
  showForm:  boolean;
}