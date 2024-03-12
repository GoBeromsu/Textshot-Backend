import {FastifyInstance} from "fastify";

import api from "./api";
import auth from "./auth";

export default async function (fastify: FastifyInstance) {
  fastify.register(auth, {prefix: "/auth"});
}
