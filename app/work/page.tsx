"use client";
import React from "react";
import "../work.css";
import "../header.css";
import FullpageProviderWork from "@/components/fullpageProviderWork";
import { Cursor } from "@/components/cursor";
import { HeaderNavigation } from "@/components/headerNavigation";
import { WorkSection } from "@/components/workPage/workSection";

const projectsData = [
  {
    title: (
      <>
        eSIMCARD <br /> Marketplace
      </>
    ),
    description: "Buy and manage eSIM cards for global travel instantly.",
    link: "https://esimcard.com/",
    imageLink: "/img/projects/esimcard-proj.png",
  },
  {
    title: (
      <>
        SearchAtlas <br /> SEO
      </>
    ),
    description: "All-in-one SEO platform for agencies and digital marketers.",
    link: "https://searchatlas.com/",
    imageLink: "/img/projects/searchatlas-proj.png",
  },
  {
    title: (
      <>
        Yaalo <br /> eSIM
      </>
    ),
    description: "Buy eSIM data plans for travel, worldwide coverage.",
    link: "https://generator.andytoken.com/",
    imageLink: "/img/projects/yaalo-proj.png",
  },
  {
    title: (
      <>
        Reseller & Dealer
        <br /> Portal
      </>
    ),
    description: "Dealers and Resellers Dashboard for our all eSIM Products.",
    link: "https://ponkecoin-ninetyeight.webflow.io/",
    imageLink: "/img/projects/portal-proj.png",
  },

  {
    title: (
      <>
        Muze <br /> Collab
      </>
    ),
    description: "Next Js Website",
    link: "https://example.com/",
    imageLink: "/img/projects/muze-proj.jpeg",
  },
  {
    title: (
      <>
        Brain <br /> Archive AI
      </>
    ),
    description: "Full Stack Web App",
    link: "https://example.com",
    imageLink: "/img/projects/brain-proj.png",
  },
];
//test
export default function WorkPage() {
  return (
    <>
      <Cursor />
      <HeaderNavigation />
      <FullpageProviderWork>
        <div id="fullpage">
          <div className="background">
            PROJECTS
            <br />
            PROJECTS
          </div>

          {projectsData.map((item, index) => (
            <WorkSection
              key={index}
              item={item}
              index={index}
              length={projectsData.length}
              color={index % 2 !== 0 ? "Light" : "Dark"}
            />
          ))}
        </div>
      </FullpageProviderWork>
    </>
  );
}
