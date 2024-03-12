import Fastify, {FastifyInstance} from "fastify";
import {IncomingMessage, Server, ServerResponse} from "http";

const PORT: number = Number(process.env.PORT) || 4000;
const fastify: FastifyInstance<Server, IncomingMessage, ServerResponse> = Fastify();

async function start() {
  try {
    //https://stackoverflow.com/questions/14043926/node-js-connect-only-works-on-localhost
    await fastify.listen({port: PORT, host: "0.0.0.0"});
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

start();
