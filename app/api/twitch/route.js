import axios from "axios";
import { NextResponse } from "next/server";

const twitchUsernames = ["fakturka", "ogitor", "zyfraraider"]; // Replace with actual Twitch usernames

async function getTwitchAccessToken() {
  try {
    const response = await axios.post(
      "https://id.twitch.tv/oauth2/token",
      null,
      {
        params: {
          client_id: process.env.TWITCH_CLIENT_ID,
          client_secret: process.env.TWITCH_CLIENT_SECRET,
          grant_type: "client_credentials",
        },
      }
    );
    return response.data.access_token;
  } catch (error) {
    console.error("Error fetching Twitch access token:", error);
    throw new Error("Failed to obtain Twitch access token");
  }
}

async function getStreamerInfo(username, accessToken) {
  try {
    const response = await axios.get(
      `https://api.twitch.tv/helix/streams?user_login=${username}`,
      {
        headers: {
          "Client-ID": process.env.TWITCH_CLIENT_ID,
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(`Error fetching data for ${username}:`, error);
    return null; // Or handle the error as you see fit
  }
}



export async function GET(req) {
  try {
    const accessToken = await getTwitchAccessToken();
    const streamerData = await Promise.all(
      twitchUsernames.map((username) => getStreamerInfo(username, accessToken))
    );

    return new Response(JSON.stringify(streamerData), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error in Twitch API route:", error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}