import { QueryClient } from "@tanstack/solid-query";
import type { IAppRouter } from "~/server/trpc/router/_app";
import { createTRPCSolid } from "solid-trpc";
import { httpBatchLink } from "@trpc/client";
// import { serverEnv } from "~/env/server";

const getBaseUrl = () => {
  if (typeof window !== "undefined") return "";
  //   return `http://localhost:${process.env.PORT ?? 3000}`;
  return process?.env?.VERCEL_URL;
};

export const trpc = createTRPCSolid<IAppRouter>();

export const client = trpc.createClient({
  links: [
    httpBatchLink({
      url: `${getBaseUrl()}/api/trpc`,
    }),
  ],
});

export const queryClient = new QueryClient();
