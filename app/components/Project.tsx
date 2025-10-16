"use client";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

interface ProjectProps {
  title: string;
  description: string;
  liveLink: string;
  gitHub: string;
  imageUrl:string
}


export default function Project({title,description, liveLink ,gitHub,imageUrl}:ProjectProps) {
  return (
    <CardContainer className="inter-var">
      <CardBody
        className="bg-gray-900 relative group/card 
        dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] 
        border-gray-600 dark:border-gray-600 
        w-[20rem] sm:w-[22rem] h-auto rounded-xl p-6 border"
      >
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>

        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>

        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={`${imageUrl}`}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>

        <div className="flex justify-between items-center mt-20">
          {/* <CardItem
            translateZ={20}
            as="a"
            href={`${liveLink}`}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Live
          </CardItem> */}

          <CardItem
            translateZ={20}
            as="a"
            href={`${gitHub}`}
            target="__blank"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            GitHub
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
