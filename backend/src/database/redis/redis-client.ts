import { RedisClient } from "bun";
import env from "~/env";

const client = new RedisClient(env.REDIS_URL);

export default client;
