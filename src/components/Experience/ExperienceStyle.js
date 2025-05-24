import styled from "styled-components";

export const JobPoints = styled.span`
  padding-left: 25px;
`

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
`;

export const GridContainer = styled.section`
  display: block;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding-top: 3rem;
  padding-bottom: 3rem;
  column-gap: 1rem;
  row-gap: 3rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 1.5rem;
  }
`;
export const BlogCard = styled.div`
  border-radius: 10px;
  ${'' /* box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5); */}
  text-align: center;
  ${'' /* margin-bottom: 50px; */}
  // width: 400px;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
  margin-top: 4rem;
  margin-bottom: 0.7em;
  color: #a7cc9b;
  font-size: 1.8rem;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #a7cc9b;
  padding: 0.5rem 0;
  margin-top: 1rem;
  font-size: ${(props) => (props.title ? "3rem" : "2rem")};
`;

export const HeaderFour = styled.h4`
  font-weight: 500;
  letter-spacing: 2px;
  color: ${(props) =>
    props.condition == "Live"
      ? "red"
      : props.condition == "White Label App"
      ? "white"
      : "grey"};
  padding: 0.5rem 0;
  margin-top: 1rem;
  font-size: ${(props) => (props.title ? "3rem" : "1rem")};
`;

export const Hr = styled.hr`
  width: 98%;
  height: 3px;
  margin: 8px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: "Droid Serif", serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 10px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: left;
  margin-top: 2rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0 10px;
    font-size: 12px
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
  color: black;
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  background: white;
  border-radius: 15px;
  transition: 0.5s;
  &:hover {
    background: #801414;
    color: white;
  }
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 2rem;
  
`;
export const Tag = styled.li`
  color: #d8bfbf;
  font-size: 1.5rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 10px
  }
`;
