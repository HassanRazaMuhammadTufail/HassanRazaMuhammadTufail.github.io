import React from "react";

import {
  HeaderFour,
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => (
  <Section id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((p, i) => {
        return (
          <BlogCard key={i}>
            <Img src={p.image} />
            <div
              style={{
                flexDirection: "row",
                display: "flex",
                marginLeft: 10
              }}
            >
              <HeaderThree title={p.title}>{p.title}</HeaderThree>
              <HeaderFour condition={p.live}>{p.live}</HeaderFour>
            </div>

            <CardInfo className="card-info">{p.description}</CardInfo>
            <div>
              {/* <TitleContent>Tech Stack</TitleContent> */}
              <Hr />
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div>
            {/* <UtilityList>
              <ExternalLinks href={p.visit}>Live Preview</ExternalLinks>
              <ExternalLinks href={p.source}>Source Code</ExternalLinks>
            </UtilityList> */}
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Projects;
