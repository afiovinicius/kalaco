import { IncomingMessage, ServerResponse } from "http";

import { TinaNodeBackend, LocalBackendAuthProvider } from "@tinacms/datalayer";
import { TinaCloudBackendAuthProvider } from "@tinacms/auth";

import databaseClient from "../../../../tina/__generated__/databaseClient";

const isLocal = process.env.TINA_PUBLIC_IS_LOCAL === "true";

const handler = TinaNodeBackend({
  authProvider: isLocal
    ? LocalBackendAuthProvider()
    : TinaCloudBackendAuthProvider(),
  databaseClient,
});

export default (req: IncomingMessage, res: ServerResponse<IncomingMessage>) => {
  return handler(req, res);
};
