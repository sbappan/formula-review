import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "production"]),
    NEXTAUTH_URL: z.string().url(),
    NEXTAUTH_SECRET: z.string(),
    GOOGLE_CLIENT_ID: z.string(),
    GOOGLE_CLIENT_SECRET: z.string(),
  },
  onValidationError: (error) => {
    const fieldErrors = error.reduce<Record<string, string[]>>((acc, err) => {
      const path = err?.path?.join(".") ?? "";
      if (!acc[path]) {
        acc[path] = [];
      }
      acc[path].push(err.message);
      return acc;
    }, {});

    console.error("❌ Invalid environment variables:", fieldErrors);
    process.exit(1);
  },
  emptyStringAsUndefined: true,
  // For Next.js >= 13.4.4, you only need to destructure client variables:
  // eslint-disable-next-line n/no-process-env
  experimental__runtimeEnv: process.env,
});

console.log(env);
