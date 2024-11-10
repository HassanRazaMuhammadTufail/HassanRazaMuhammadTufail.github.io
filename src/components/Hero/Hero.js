import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
  Link,
  Img,
  My_Section,
  My_SectionTitle,
  IntroName
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
import Image from "next/image";
const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <My_Section row nopadding>
          <Img style={{width:'40%'}} src="/images/img.png" />
          <My_SectionTitle center> Software Engineer / Lead</My_SectionTitle>
        </My_Section>
        <SectionTitle main center>
          Hey there,
        </SectionTitle>
        <SectionText>
          This is <IntroName>Hassan Raza</IntroName>. Passionate, Dynamic and Highly-motivated Seasoned Software
          Engineer, with expertise in full stack engineering. Having good experience in managing 
          and leading teams. Proactive and collaborative by nature. Interests in learning,
          networking and experimenting with new technologies around.
        </SectionText>
        <Button
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/files/resume.pdf";
          }}
        >
          My Resume
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
