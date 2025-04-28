import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  CORS_ORIGIN: z.string().nonempty(),
  AES_KEY: z // AES_KEY is in base64
    .string()
    .nonempty()
    .transform((key) => {
      const aesKey = Buffer.from(key, "base64");
      if (aesKey.length !== 32) {
        throw new Error("AES_KEY must decode to exactly 32 bytes for AES-256");
      }
      return aesKey.toString("utf-8");
    }),
  REDIS_URL: z.string().url(),
  JWT_SECRET: z.string().nonempty(),
});

const env = envSchema.parse(process.env);

export default env;
