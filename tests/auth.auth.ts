import request from "supertest";
import app from "../src/app";
const mockingoose = require("mockingoose");
import { User } from "../src/models/user.model";
require("dotenv").config();

process.env.JWT_SECRET = process.env.JWT_SECRET || "supersecret";

it("should register a user successfully", async () => {
  mockingoose(User).toReturn(undefined, "findOne"); 
  mockingoose(User).toReturn(
    {
      _id: "abc123",
      name: "Test User",
      email: "test@example.com",
      role: "user",
    },
    "save"
  );

  const res = await request(app).post("/api/auth/register").send({
    name: "Test User",
    email: "test@example.com",
    password: "password123",
    role: "user",
  });

  expect(res.status).toBe(201);
  expect(res.body.email).toBe("test@example.com");
});

afterAll(async () => {
  const { redisClient } = require("../src/config/redis");
  await redisClient.quit();
});
