import { createEnv } from "@t3-oss/env-nextjs";
import { config } from "dotenv";
import { expand } from "dotenv-expand";
import { z } from "zod";

expand(config());

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "production"]),
    NEXTAUTH_URL: z.string().url(),
    NEXTAUTH_SECRET: z.string(),
    GOOGLE_CLIENT_ID: z.string(),
    GOOGLE_CLIENT_SECRET: z.string(),
    DB_HOST: z.string(),
    DB_USER: z.string(),
    DB_PASSWORD: z.string(),
    DB_NAME: z.string(),
    DB_PORT: z.coerce.number(),
    DATABASE_URL: z.string().url(),
    DB_MIGRATING: z
      .string()
      .refine((s) => s === "true" || s === "false")
      .transform((s) => s === "true")
      .optional(),
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

// console.log(env);
