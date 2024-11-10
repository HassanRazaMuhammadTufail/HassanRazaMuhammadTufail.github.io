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
  JobPoints
} from "./ExperienceStyle";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Experience = () => (
  <Section id="projects">
    <SectionDivider />
    <SectionTitle main>Experience</SectionTitle>
    <GridContainer>
    <BlogCard>
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            marginLeft: 10,
          }}
        >
          <HeaderThree>Tenderd</HeaderThree>
          <TagList>
            <Tag>Senior Software Engineer</Tag>
          </TagList>
          <HeaderFour>Apr 2023 - Present</HeaderFour>
        </div>

        <CardInfo className="card-info">
        - Participating in sprint plannings and defining sprint goals.
        <br />
        - Making sure the team is align as per sprint goals and taking up responsibility to deliver.
        <br />
        - Added Kafka to ingest data from different microservice managed by third party.
        <br />
        - Supervising and helping team members to achieve team goals.
        </CardInfo>
        <div></div>
        <UtilityList>
        </UtilityList>
      </BlogCard>
      <BlogCard>
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            marginLeft: 10,
          }}
        >
          <HeaderThree>Clozer.io</HeaderThree>
          <TagList>
            <Tag>Senior Software Engineer</Tag>
          </TagList>
          <HeaderFour>Jan 2023 - Mar 2024</HeaderFour>
        </div>

        <CardInfo className="card-info">
        - Led backend development:
        <br />
        - Developed an Intelligent service to get playable links of artist's popular tracks and albums from across multiple platforms e.g. Spotify, Apple Music, Deezer, Soundcloud, etc.
        <br />
        - Build custom events tracking tool for tracking user journey and added around 150 events across the platform. This also helped us provide artist's useful analytics to optimize their page and help them grow.
        <br />
        - Updated Authentication flow on the frontend.
        Managed the refactoring of platform including frontend and backend, added new features, integrations and drove product to overall growth.
        </CardInfo>
        <div></div>
        <UtilityList>
        </UtilityList>
      </BlogCard>
      <BlogCard>
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            marginLeft: 10,
          }}
        >
          <HeaderThree>Consultancy and Contracts (Independent)</HeaderThree>
          <TagList>
            <Tag>Software Consultant</Tag>
          </TagList>
          <HeaderFour>Jan 2023 - Sept 2023</HeaderFour>
        </div>
        <CardInfo className="card-info">
          • During this period I worked as a consultant to different Software businesses around the Middle East and the USA.
          <br />
          <br />
          • Sendmeatrainer/SendmeaPro
          <br />
          <JobPoints>- Worked on the whole product infrastructure and architecture including mobile, web, admin, backend, and CRM integrations.</JobPoints>
          <br />
          <JobPoints>- Added new features designing the database, developing UX, and managing timeline.</JobPoints>
          <br />
          <br />
          • GPS Dataviz
          <br />
          <JobPoints>- Worked on Frontend adding features, collaborating with clients about how can we make it more useful by adding simplified features and easy UX.</JobPoints>
          <br />
          <br />
          • Skip the call
          <br />
          <JobPoints>- Redefined application architecture backend mostly including new database designs and code infrastructure.</JobPoints>
        </CardInfo>
        <div></div>
        <UtilityList>
        </UtilityList>
      </BlogCard>
      <BlogCard>
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            marginLeft: 10,
          }}
        >
          <HeaderThree>Corel Corporation</HeaderThree>
          <TagList>
            <Tag>Software Engineer</Tag>
          </TagList>
          <HeaderFour>Aug 2022 - Dec 2022</HeaderFour>
        </div>

        <CardInfo className="card-info">
          - Significantly improved existing features, resolved bugs, and conducted comprehensive testing for Corel Vector products.
          <br />
          - Spearheaded a new project targeting casual designers, orchestrating successful teamwork and project initiation.
          <br />
          - Led the creation of a web-based frontend using Reactjs and TypeScript, from design inception to implementation.
          <br />
          - Enhanced graphics engine efficiency through targeted fixes and optimizations, resulting in performance gains.
          <br />
          - Designed and implemented Invoice PDF generation, setting the groundwork for an upcoming Subscription Feature.
        </CardInfo>
        <div></div>
        <UtilityList>
          {/* <ExternalLinks
            href={
              "https://drive.google.com/file/d/10YkIzsLGZgQvwLmNFT07uKNzfRCCTeYn/view?usp=drive_link"
            }
          >
            Experience Letter
          </ExternalLinks> */}
        </UtilityList>
      </BlogCard>
      <BlogCard>
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            marginLeft: 10,
          }}
        >
          <HeaderThree>Bykea</HeaderThree>
          <TagList>
            <Tag>Software Engineer</Tag>
          </TagList>
          <HeaderFour>Dec 2020 - Mar 2022</HeaderFour>
        </div>

        <CardInfo className="card-info">
          - Led and managed cross-functional teams, overseeing sprints, deliverables, and sprint planning, while also estimating project timelines.
          <br />
          - Engineered a robust support system for the CSR department, utilizing TypeScript, Nestjs, Reactjs, AWS DocumentDB, and Redis cache. Managed staging environments for QA on Linux servers.
          <br />
          - Integrated Kafka to replace Rabbitmq within internal services for streamlined event sourcing.
          <br />
          - Revamped and optimized back office and support system portal, enhancing server efficiency and overall performance.
          <br />
          - Collaborated in the successful launch of a supermarket feature, contributing to enhanced user experiences.
          <br />
          - Resolved live issues related to Queues, addressing TTL & delay concerns, providing support to the head of engineering.
          <br />
          - Efficiently optimized Redis cache usage by eliminating redundant keys, resulting in a nearly 50% reduction in cache size.
          <br />
          - Orchestrated database migrations and facilitated the deployment of microservices on staging servers.
        </CardInfo>
        <div></div>
        <UtilityList>
          {/* <ExternalLinks
            href={
              "https://drive.google.com/file/d/10YkIzsLGZgQvwLmNFT07uKNzfRCCTeYn/view?usp=drive_link"
            }
          >
            Experience Letter
          </ExternalLinks> */}
        </UtilityList>
      </BlogCard>
      <BlogCard>
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            marginLeft: 10,
          }}
        >
          <HeaderThree>Expando</HeaderThree>
          <TagList>
            <Tag>Full Stack Engineer</Tag>
          </TagList>
          <HeaderFour>July 2019 - Dec 2020</HeaderFour>
        </div>

        <CardInfo className="card-info">
          - Oversaw database migrations and managed cron jobs, ensuring seamless data management and task scheduling.
          <br />
          - Upgraded and managed a web annotator tool built with Vue.js and Node.js, enhancing its functionality and user experience.
          <br />
          - Led the creation of a web-based frontend using Reactjs and TypeScript, from design inception to implementation.
          <br />
          - Spearheaded the development of the backend for a Ridesharing app and the frontend of an admin portal.
          <br />
          - Implemented live location sharing using SSE, enhancing real-time communication and tracking capabilities.
          <br />
          - Led the creation of video calling and chat applications, integrating HTML canvas for interactive drawing features.
          <br />
          - Engineered AWS Lambda functions to initiate EC2 Instances via API calls, streamlining server management and scaling.
        </CardInfo>
        <div></div>
        <UtilityList>
          {/* <ExternalLinks
            href={
              "https://drive.google.com/file/d/10YkIzsLGZgQvwLmNFT07uKNzfRCCTeYn/view?usp=drive_link"
            }
          >
            Experience Letter
          </ExternalLinks> */}
        </UtilityList>
      </BlogCard>
      <BlogCard>
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            marginLeft: 10,
          }}
        >
          <HeaderThree>Panacloud</HeaderThree>
          <TagList>
            <Tag>Junior Full Stack Developer</Tag>
          </TagList>
          <HeaderFour>Jan 2018 - Feb 2019</HeaderFour>
        </div>

        <CardInfo className="card-info">
          - Enthusiastically acquired skills in constructing efficient web applications with streamlined code and user-friendly functionalities.
          <br />
          - Delved into React Native for mobile app development and honed expertise in Nestjs for backend solutions.
        </CardInfo>
        <div></div>
        <UtilityList>
          {/* <ExternalLinks
            href={
              "https://drive.google.com/file/d/10YkIzsLGZgQvwLmNFT07uKNzfRCCTeYn/view?usp=drive_link"
            }
          >
            Experience Letter
          </ExternalLinks> */}
        </UtilityList>
      </BlogCard>
    </GridContainer>
  </Section>
);

export default Experience;
