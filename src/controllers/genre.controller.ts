import {Request, Response} from "express";
import { API } from "./api";

export const GenreCreate: API = {
  get: (req, res) => {
    res.json({
      method: "Genre Create GET",
      status: "not implemented!",
    });
  },
  post: (req, res) => {
    res.json({
      method: "Genre Create POST",
      status: "not implemented!",
    });
  },
};

export const GenreUpdate: API = {
  get: (req, res) => {
    res.json({
      method: "Genre Update GET",
      status: "not implemented!",
    });
  },
  post: (req, res) => {
    res.json({
      method: "Genre Update POST",
      status: "not implemented!",
    });
  },
};

export const GenreDelete: API = {
  get: (req, res) => {
    res.json({
      method: "Genre Delete GET",
      status: "not implemented!",
    });
  },
  post: (req, res) => {
    res.json({
      method: "Genre Delete POST",
      status: "not implemented!",
    });
  },
};

export const GenreList = (req: Request, res: Response) => {
  res.json({
    method: "Genre List GET",
    status: "not implemented!",
  });
};

export const GenreDetail = (req: Request, res: Response) => {
  res.json({
    method: "Genre Detail GET",
    status: "not implemented!",
  });
};
