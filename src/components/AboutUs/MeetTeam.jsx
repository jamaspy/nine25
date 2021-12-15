import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { get } from "lodash";
import { GatsbyImage } from "gatsby-plugin-image";
import * as styles from "./styles.module.css";
const MeetTeam = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { name: { regex: "/team_/i" } }) {
        nodes {
          name
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              width: 300
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
              quality: 100
            )
          }
          id
        }
      }
    }
  `);

  const allImageData = get(data, ["allFile", "nodes"], []);

  // Find better way to do this
  const renderColour = (index) => {
    if (index === 0) {
      return "bg-primary";
    }
    if (index % 3 === 0) {
      return "bg-blacked";
    }
    if (index / 5 === 1) {
      return "bg-primary";
    }
    if (index % 2 === 0) {
      return "bg-secondary";
    }
    if (index % 2 === 1) {
      return "bg-tertiary";
    }
  };

  const team = [
    {
      name: "Leigh Dunsford",
      image: allImageData.find((image) => image.name === "team_leigh"),
      tag: "You had me at hello",
    },
    {
      name: "Johnny Jiang",
      image: allImageData.find((image) => image.name === "team_johnny"),
      tag: "Here's Johnny",
    },

    {
      name: "Shay Ho",
      image: allImageData.find((image) => image.name === "team_shay"),
      tag: "Hasta la vista, baby.",
    },
    {
      name: "Prashant Rajkhowa",
      image: allImageData.find((image) => image.name === "team_prashant"),
      tag: "The dude abides",
    },
    {
      name: "Michael Yao",
      image: allImageData.find((image) => image.name === "team_michael"),
      tag: "Say 'what' again, I dare you",
    },
    {
      name: "Shayne de Groot",
      image: allImageData.find((image) => image.name === "team_shayne"),
      tag: "Do. Or do not. There is no try.",
    },
    {
      name: "Unnati Giri",
      image: allImageData.find((image) => image.name === "team_unnati"),
      tag: "Where we’re going, we don’t need roads",
    },
    {
      name: "Jeffry Bermudez",
      image: allImageData.find((image) => image.name === "team_jeffry"),
      tag: "What does mine say?",
    },
    {
      name: "Dale Pearson",
      image: allImageData.find((image) => image.name === "team_dale"),
      tag: "I am the one who knocks",
    },
    {
      name: "Andy Scott",
      image: allImageData.find((image) => image.name === "team_andy"),
      tag: "Have you tried turning it off and turning it on again?",
    },
    {
      name: "Aurelee Marion",
      image: allImageData.find((image) => image.name === "team_aurelee"),
      tag: "The greatest trick the devil ever pulled was convincing the world he didn't exist.",
    },
    {
      name: "DaQing Li",
      image: allImageData.find((image) => image.name === "team_daqing"),
      tag: "As if.",
    },
    {
      name: "Nick Papaziakas",
      image: allImageData.find((image) => image.name === "team_nick"),
      tag: "Suit up",
    },
  ];
  console.log("🚀  TESTY:  : MeetTeam : team", team);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {team.map((node, index) => {
        const bgColour = renderColour(index);
        return (
          <div className={`rounded-lg ${bgColour} shadow`}>
            <div className="flex flex-col items-center justify-between h-full w-full">
              <div className={styles.clipCircle}>
                <GatsbyImage
                  key={node.id}
                  alt={`team_member_${node.name}`}
                  image={node?.image?.childImageSharp?.gatsbyImageData}
                />
              </div>
              <div className="h-full text-center text-lg md:text-2xl  pb-4">
                <p className="font-semibold text-white">{node.name}</p>
                <p className=" italic text-white">"{node.tag}"</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MeetTeam;
