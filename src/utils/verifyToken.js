const path = require('path');
const { OAuth2Client } = require('google-auth-library');

require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const clientID = process.env.CLIENT_ID;

const client = new OAuth2Client(clientID);

exports.verifyToken = async (token) => {
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: clientID,
    });
    const payload = ticket.getPayload();

    return payload;
};