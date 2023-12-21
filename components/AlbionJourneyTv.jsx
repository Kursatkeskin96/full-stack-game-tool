"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function AlbionJourneyTv() {
  const [streamerInfo, setStreamerInfo] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      var currentURL = window.location.href;
      var urlParts = currentURL.split("/");
      var domain = urlParts[1];
    }
  
    const api = domain;
    setIsLoading(true);
    fetch(`${api}/api/twitch`) // Adjust the API endpoint as needed
      .then((response) => response.json())
      .then((data) => {
        setStreamerInfo(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching streamer info:", error);
        setError(error);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      var currentURL = window.location.href;
      var urlParts = currentURL.split("/");
      var domain = urlParts[1];
    }
  
    const api = domain;
    setIsLoading(true);
    fetch(`${api}/api/twitchuser`) // Adjust the API endpoint as needed
      .then((response) => response.json())
      .then((data) => {
        setUserInfo(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching streamer info:", error);
        setError(error);
        setIsLoading(false);
      });
  }, []);

  if (error) return <p>Error loading streamer info.</p>;
  return (
    <>
      <div className="bg-[#9147ff] mt-32 pb-10 text-white  mx-auto flex-wrap lg:max-w-[80%] max-w-[90%] rounded-md shadow-lg">
        <div className="pt-5">
          <h2 className="text-4xl font-bold text-white text-center">
            Albion Journey TV
          </h2>
        </div>
        <p className="text-gray-200 text-center max-w-[90%] mt-10 mx-auto">
          Albion Journey is not just a platform; we are a thriving community,
          passionately dedicated to enhancing your Albion Online experience.
        </p>
        <p className="text-gray-200 text-center max-w-[90%] mx-auto mt-4">
          Our featured streamers are not just players; they are storytellers,
          strategists, and your guides to the vast universe of Albion Online.
          Whether you are looking for the latest PvP tactics, efficient farming
          methods, or just want to enjoy some engaging Albion adventures, our
          streamers have something special for you.
        </p>
        <div className="flex flex-wrap justify-center mt-10 items-center lg:gap-20 ">
          <Link target="_blank" href="https://www.twitch.tv/fakturka">
            {" "}
            <div>
              {userInfo &&
              userInfo.length > 1 &&
              userInfo[0].data.length > 0 ? (
                <div className="bg-[#7d3edc] hover:bg-[#9959f9] border-[1px] py-1 w-60 flex flex-col justify-center items-center border-gray-400">
                  <Image
                    src={userInfo[0].data[0].profile_image_url}
                    width={50}
                    height={50}
                    alt="Streamer Profile"
                    className="mt-1 rounded-[50%]"
                  />
                  <p className="text-lg font-bold underline my-2">
                    {userInfo[0].data[0].display_name}
                  </p>

                  {streamerInfo &&
                  streamerInfo.length > 1 &&
                  streamerInfo[0].data.length > 0 ? (
                    <>
                      <p>
                        Status:{" "}
                        <span className=" text-green-500 text-sm">Online</span>
                      </p>
                      <p>
                        Viewers:{" "}
                        <span className="text-sm text-orange-400">
                          {streamerInfo[0].data[0].viewer_count}
                        </span>
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        Status:{" "}
                        <span className="text-red-900 text-sm">Offline</span>
                      </p>
                      <p>Viewers: -</p>
                    </>
                  )}
                </div>
              ) : (
                <div
                  role="status"
                  class="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
                >
                  <div class="flex items-center justify-center h-20 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                    <svg
                      class="w-10 h-10 text-gray-200 dark:text-gray-600"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 20"
                    >
                      <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                      <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                    </svg>
                  </div>
                  <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                  <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                  <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                  <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  <span class="sr-only">Loading...</span>
                </div>
              )}
            </div>
          </Link>

          <Link target="_blank" href="https://www.twitch.tv/fakturka">
            <div>
              {userInfo &&
              userInfo.length > 1 &&
              userInfo[1].data.length > 0 ? (
                <div className="border-[1px] bg-[#7d3edc] hover:bg-[#9959f9]  mt-6 lg:mt-0 md:mt-0 py-1 w-60 flex flex-col justify-center items-center border-gray-400">
                  <Image
                    src={userInfo[1].data[0].profile_image_url}
                    width={50}
                    height={50}
                    alt="Streamer Profile"
                    className="mt-1 rounded-[50%]"
                  />
                  <p className="text-lg my-2 font-bold underline">
                    {userInfo[1].data[0].display_name}
                  </p>

                  {streamerInfo &&
                  streamerInfo.length > 1 &&
                  streamerInfo[1].data.length > 0 ? (
                    <>
                      <p>
                        Status:{" "}
                        <span className=" text-green-500 text-sm">Online</span>
                      </p>
                      <p>
                        Viewers:{" "}
                        <span className="text-sm text-orange-400">
                          {streamerInfo[1].data[0].viewer_count}
                        </span>
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        Status:{" "}
                        <span className="text-red-900 text-sm">Offline</span>
                      </p>
                      <p>Viewers: -</p>
                    </>
                  )}
                </div>
              ) : (
                <div
                  role="status"
                  class="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
                >
                  <div class="flex items-center justify-center h-20 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                    <svg
                      class="w-10 h-10 text-gray-200 dark:text-gray-600"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 20"
                    >
                      <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                      <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                    </svg>
                  </div>
                  <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                  <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                  <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                  <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  <span class="sr-only">Loading...</span>
                </div>
              )}
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
