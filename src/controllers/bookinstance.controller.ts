import {Request, Response} from "express";
import { API } from "./api";

export const InstanceCreate: API = {
  get: (req, res) => {
    res.json({
      method: "Instance Create GET",
      status: "not implemented!",
    });
  },
  post: (req, res) => {
    res.json({
      method: "Instance Create POST",
      status: "not implemented!",
    });
  },
};

export const InstanceUpdate: API = {
  get: (req, res) => {
    res.json({
      method: "Instance Update GET",
      status: "not implemented!",
    });
  },
  post: (req, res) => {
    res.json({
      method: "Instance Update POST",
      status: "not implemented!",
    });
  },
};

export const InstanceDelete: API = {
  get: (req, res) => {
    res.json({
      method: "Instance Delete GET",
      status: "not implemented!",
    });
  },
  post: (req, res) => {
    res.json({
      method: "Instance Delete POST",
      status: "not implemented!",
    });
  },
};

export const InstanceList = (req: Request, res: Response) => {
  res.json({
    method: "Instance List GET",
    status: "not implemented!",
  });
};

export const InstanceDetail = (req: Request, res: Response) => {
  res.json({
    method: "Instance Detail GET",
    status: "not implemented!",
  });
};
