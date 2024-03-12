import {FastifyInstance} from "fastify";
import google from "./google";

export default async function (fastify: FastifyInstance) {
  fastify.register(google, {prefix: "/google"});
}
