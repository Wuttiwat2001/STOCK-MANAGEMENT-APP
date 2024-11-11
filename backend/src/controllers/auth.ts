import { NextFunction, Request, Response } from "express";
import { prismaClient } from "../index";
import { hashSync, compareSync } from "bcrypt";
import * as jwt from "jsonwebtoken";
import { JWT_SECRET } from "../secrets";
import { BadRequestsException } from "../exceptions/bad-requests";
import { ErrorCode } from "../exceptions/root";

export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username, password } = req.body;

  let user = await prismaClient.user.findFirst({
    where: { username },
  });

  if (user) {
    next(
      new BadRequestsException(
        "User already exists!",
        ErrorCode.USER_ALREADY_EXISTS
      )
    );
  }
  user = await prismaClient.user.create({
    data: { username, password: hashSync(password, 10) },
  });
  res.json(user);
};

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  let user = await prismaClient.user.findFirst({
    where: { username },
  });

  if (!user) {
    throw Error("User not found!");
  }

  if (!compareSync(password, user.password)) {
    throw Error("Invalid password!");
  }

  const token = jwt.sign(
    {
      userId: user.id,
    },
    JWT_SECRET
  );

  res.json({
    user,
    token,
  });
};
