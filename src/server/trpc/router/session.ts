import { getSession } from "@auth/solid-start";
import { procedure, router } from "../utils";
import { authOpts } from "~/routes/api/auth/[...solidauth]";

export const sessionRouter = router({
  getSession: procedure.query(({ ctx }) => {
    return getSession(ctx.req, authOpts);
  }),
});
