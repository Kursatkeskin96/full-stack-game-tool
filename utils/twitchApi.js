import axios from "axios";

const getTwitchAccessToken = async () => {
  const response = await axios.post(
    `https://id.twitch.tv/oauth2/token?client_id=${process.env.TWITCH_CLIENT_ID}&client_secret=${process.env.TWITCH_CLIENT_SECRET}&grant_type=client_credentials`
  );
  return response.data.access_token;
};

export const getStreamerInfo = async (username) => {
  const accessToken = await getTwitchAccessToken();

  const config = {
    headers: {
      "Client-ID": process.env.TWITCH_CLIENT_ID,
      Authorization: `Bearer ${accessToken}`,
    },
  };

  const userResponse = await axios.get(
    `https://api.twitch.tv/helix/users?login=${username}`,
    config
  );
  const userId = userResponse.data.data[0].id;

  const streamResponse = await axios.get(
    `https://api.twitch.tv/helix/streams?user_id=${userId}`,
    config
  );
  const streamInfo = streamResponse.data.data[0] || { is_live: false };

  return {
    username,
    is_live: streamInfo.is_live,
    viewer_count: streamInfo.viewer_count || 0,
  };
};
