/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from "express";
import * as CampaignService from "../services/campaign.service";
import { ICampaign } from "../interfaces/campaign";

/**
 * Router Definition
 */

export const campaignsRouter = express.Router();

/**
 * Controller Definitions
 */

// GET campaigns

campaignsRouter.get("/", async (req: Request, res: Response) => {
    try {
        const campaigns: ICampaign[] = await CampaignService.findAll();

        res.status(200).send(campaigns);
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});

// GET campaigns/:id

campaignsRouter.get("/:id", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);

    try {
        const campaign: ICampaign = await CampaignService.find(id);

        if (campaign) {
            return res.status(200).send(campaign);
        }

        res.status(404).send("item not found");
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});

// POST campaigns

campaignsRouter.post("/", async (req: Request, res: Response) => {
    try {
        const campaign: ICampaign = req.body;

        const newCampaign = await CampaignService.create(campaign);

        res.status(201).json(newCampaign);
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});

// PUT campaigns/:id

campaignsRouter.put("/:id", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);

    try {
        const campaignUpdate: ICampaign = req.body;

        const existingCampaign: ICampaign = await CampaignService.find(id);

        if (existingCampaign) {
            const updatedCampaign = await CampaignService.update(id, campaignUpdate);
            return res.status(200).json(updatedCampaign);
        }

        const newItem = await CampaignService.create(campaignUpdate);

        res.status(201).json(newItem);
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});

// DELETE campaigns/:id

campaignsRouter.delete("/:id", async (req: Request, res: Response) => {
    try {
        const id: number = parseInt(req.params.id, 10);
        await CampaignService.remove(id);

        res.sendStatus(204);
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});
