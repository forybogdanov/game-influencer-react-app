import { ICampaign } from "../interfaces/campaign";
let campaigns: ICampaign[] = [
    {
        name: "Campaign 1",
        description: "description foefkfmwefwef",
        gameName: "DOTA 2",
        startDate: "2022-01-27",
        endDate: "2022-01-29",
        budget: 5000,
        paidWithCrypto: false,
        language: "English",
    },
    {
        name: "Campaign 2",
        description: "description foefkfmwefwef",
        gameName: "Minecraft",
        startDate: "2022-02-27",
        endDate: "2022-03-29",
        budget: 5563,
        paidWithCrypto: false,
        language: "Japanese",
    },
];

export const findAll = async (): Promise<ICampaign[]> => campaigns;

export const find = async (id: number): Promise<ICampaign> => campaigns[id];

export const create = async (newCampaign: ICampaign): Promise<ICampaign> => {
    campaigns = [...campaigns, newCampaign];

    return campaigns[campaigns.length - 1];
};

export const update = async (id: number, campaignUpdate: ICampaign): Promise<ICampaign | null> => {
    const campaign = await find(id);

    if (!campaign) {
        return null;
    }

    campaigns[id] = campaignUpdate;

    return campaigns[id];
};

export const remove = async (id: number): Promise<null | void> => {
    const campaign = await find(id);

    if (!campaign) {
        return null;
    }

    campaigns.splice(id, 1);
};
