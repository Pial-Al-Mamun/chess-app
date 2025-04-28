import loginRoute from "@/controller/auth/login";
import signupRoute from "@/controller/auth/signup";
import { Hono } from "hono";

const authRoute = new Hono()


export default authRoute