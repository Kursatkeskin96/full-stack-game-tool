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


async function getUserInfo(username, accessToken) {
  try {
    const response = await axios.get(
      `https://api.twitch.tv/helix/users?login=${username}`,
      {
        headers: {
          "Client-ID": process.env.TWITCH_CLIENT_ID,
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(`Error fetching user info for ${username}:`, error);
    return null;
  }
}

export async function GET(req) {
  try {
    const accessToken = await getTwitchAccessToken();
    const userData = await Promise.all(
      twitchUsernames.map((username) => getUserInfo(username, accessToken))
    );

    return new Response(JSON.stringify(userData), {
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