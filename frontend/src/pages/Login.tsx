import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Eye, EyeClosed, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import api from "@/api/api";

const loginFormSchema = z.object({
  email: z.string().min(2, "Email must be at least 2 characters.").max(50),
  password: z
    .string()
    .min(2, "Password must be at least 2 characters.")
    .max(50),
});

export default function Login() {
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: { email: "", password: "" },
  });

  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState("");
  async function onSubmit(values: z.infer<typeof loginFormSchema>) {
    const res = await api.post("auth/login", values);

    if (res.status != 200) {
      setMessage(res.data.message);
      return;
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <Card className="w-[35%] h-[50%]">
        <CardHeader>
          <CardTitle className="text-center">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>email</FormLabel>
                    <FormControl>
                      <div className="relative w-full">
                        <Input
                          className="w-full pr-10"
                          placeholder="Enter email"
                          {...field}
                        />
                        <Mail className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-black pointer-events-none" />
                      </div>
                    </FormControl>
                    <FormDescription>Your public display name.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <div className="relative w-full">
                        <Input
                          placeholder="Enter password"
                          type={isVisible ? "text" : "password"}
                          {...field}
                          className="pr-10"
                        />
                        <button
                          type="button"
                          onClick={() => setIsVisible((prev) => !prev)}
                          className="absolute inset-y-0 right-2 flex items-center cursor-pointer"
                          tabIndex={-1}
                        >
                          {isVisible ? <EyeClosed /> : <Eye />}
                        </button>
                      </div>
                    </FormControl>
                    <FormDescription>This is your password.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {message && <p className="text-2xl text-red-400">{message}</p>}
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
