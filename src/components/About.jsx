import Timeline from '@mui/lab/Timeline';
import {TimelineItem,TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent, timelineOppositeContentClasses} from '@mui/lab';
import { teal } from '@mui/material/colors';

const tealColor = teal[300];

const About = () => {

  return (
    <div
      name="About"
      className="w-full h-screen bg-gradient-to-b from-gray-800 via-gray to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-500">
            About Me
          </p>
        </div>

        <p className="text-xl mt-10">
        Hey there 👋
        <br />
        I am Mohammad Faisal Sayed, you can call me <span className="text-pink-500">Faisal</span>
        <br />
        A <span className="text-pink-500">CSE</span> graduate from <span className="text-pink-500">M.H Saboo Siddik College of Engineering </span> - Mumbai University.
        <br />
        </p>
        <br />
          <Timeline position="right"
          sx={{
            [`& .${timelineOppositeContentClasses.root}`]: {
              flex: 0.2,
            },
          }}>
          <TimelineItem>
            <TimelineOppositeContent color={tealColor}>
              2023
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot variant="outlined"
              sx={{
                borderColor: '#4db6ac'
              }}
              />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent color ={tealColor}>Freelancing + GATE CSE AIR 4k</TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent color="primary">
              2022
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot variant="outlined" color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent color ="primary">GATE CSE AIR 2152</TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent color="secondary">
              2021
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot variant="outlined" color="secondary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent color="secondary">Joined MITR Learning & Media, Qualified GATE CSE.</TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent color="orange">
              2019
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot variant="outlined" color="warning" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent color="#ED6C02">Won Smart India Hackathon 2019 <span className="text-blue-400 underline"><a href="https://twitter.com/iitroorkee/status/1102163586246311936"/>#team TechLegionz</span></TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent color="red">
              2017
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot variant="outlined" color="error"/>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent color="red">Joined M.H Saboo Siddik College of Engineering</TimelineContent>
          </TimelineItem>
    </Timeline>
      </div>
    </div>
  );
};

export default About;