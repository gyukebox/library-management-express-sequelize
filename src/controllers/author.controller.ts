import {Request, Response} from "express";
import { API } from "./api";

export const AuthorCreate: API = {
  get: (req, res) => {
    res.json({
      method: "Author Create GET",
      status: "not implemented!",
    });
  },
  post: (req, res) => {
    res.json({
      method: "Author Create POST",
      status: "not implemented!",
    });
  },
};

export const AuthorUpdate: API = {
  get: (req, res) => {
    res.json({
      method: "Author Update GET",
      status: "not implemented!",
    });
  },
  post: (req, res) => {
    res.json({
      method: "Author Update POST",
      status: "not implemented!",
    });
  },
};

export const AuthorDelete: API = {
  get: (req, res) => {
    res.json({
      method: "Author Delete POST",
      status: "not implemented!",
    });
  },
  post: (req, res) => {
    res.json({
      method: "Author Create POST",
      status: "not implemented!",
    });
  },
};

export const AuthorList = (req: Request, res: Response) => {
  res.json({
    method: "Author List GET",
    status: "not implemented!",
  });
};

export const AuthorDetail = (req: Request, res: Response) => {
  res.json({
    method: "Author Detail GET",
    status: "not implemented!",
  });
};
