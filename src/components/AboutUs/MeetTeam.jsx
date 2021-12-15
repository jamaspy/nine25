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

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {allImageData.map((node, index) => {
        const bgColour = renderColour(index);
        return (
          <div className={`rounded-lg ${bgColour} shadow`}>
            <div className="flex flex-col items-center justify-between h-full w-full">
              <div className={styles.clipCircle}>
                <GatsbyImage
                  key={node.id}
                  alt={`team_member_${node.name}`}
                  image={node.childImageSharp.gatsbyImageData}
                />
              </div>
              <div className="text-center text-lg md:text-2xl  pb-4">
                <p className="font-semibold text-white">Your Name Here</p>
                <p className=" italic text-white">"You had me at hello"</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MeetTeam;
