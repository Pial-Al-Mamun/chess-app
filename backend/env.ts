import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  JWT_SECRET: z.string().nonempty(),
});

const env = envSchema.parse(process.env);

export default env;
