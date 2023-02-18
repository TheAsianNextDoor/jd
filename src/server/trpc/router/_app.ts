import { router } from "../utils";
import example from "./example";
import { sessionRouter } from "./session";

export const appRouter = router({
  example,
  session: sessionRouter,
});

export type IAppRouter = typeof appRouter;
