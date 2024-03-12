import {textShot} from "config/textshot.config";
import {FastifyInstance, FastifyReply, FastifyRequest} from "fastify";
import {OAuth2Client} from "google-auth-library";

const _google = textShot.oauth.google;
const oAuth2Client = new OAuth2Client(_google.clientId, _google.clientSecret, "postmessage");

export default async function (fastify: FastifyInstance) {
  fastify.get("/callback", async (req: FastifyRequest<{Body: {code: any}}>, res: FastifyReply) => {
    const {tokens} = await oAuth2Client.getToken(req.body.code);
  });
}
