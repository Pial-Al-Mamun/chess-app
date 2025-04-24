import { z } from "zod";

const EnvSchema = z.object({
  BACKEND_BASE_URL: z.string().nonempty(),
});

const env = EnvSchema.parse(process.env);

export default env;
