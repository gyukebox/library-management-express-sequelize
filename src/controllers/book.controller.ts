import {Request, Response} from "express";
import { API } from "./api";

export const BookCreate: API = {
  get: (req, res) => {
    res.json({
      method: "Book Create GET",
      status: "not implemented!",
    });
  },
  post: (req, res) => {
    res.json({
      method: "Book Create POST",
      status: "not implemented!",
    });
  },
};

export const BookUpdate: API = {
  get: (req, res) => {
    res.json({
      method: "Book Update GET",
      status: "not implemented!",
    });
  },
  post: (req, res) => {
    res.json({
      method: "Book Update POST",
      status: "not implemented!",
    });
  },
};

export const BookDelete: API = {
  get: (req, res) => {
    res.json({
      method: "Book Delete GET",
      status: "not implemented!",
    });
  },
  post: (req, res) => {
    res.json({
      method: "Book Delete POST",
      status: "not implemented!",
    });
  },
};

export const BookList = (req: Request, res: Response) => {
  res.json({
    method: "Book List GET",
    status: "not implemented!",
  });
};

export const BookDetail = (req: Request, res: Response) => {
  res.json({
    method: "Book Detail GET",
    status: "not implemented!",
  });
};
