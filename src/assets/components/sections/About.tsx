import React from "react";
import '../../scss/sections/About.scss';

interface Descriptor {
    title: string;
    description: string;
}

const About: React.FC = (): React.JSX.Element => {
    const [isClicked, setIsClicked] = React.useState<boolean[]>([]);
    const descriptors = React.useMemo((): Descriptor[] => [
        {
            title: "Mission Statement",
            description: "OA Robotics aims to inspire a new generation of engineers, software developers, and business experts by creating a professional environment. Members work together to both create, program, and publicize their created robots centered around certain tasks. Teams across the world operate under the principle of “gracious professionalism,” where teams maintain a competitive environment but still look to help each other compete and improve their robots."
        },
        {
            title: "Our History",
            description: "In 2009, our first team, Vex Robotics 1774 - Quantum Leap, was started. The following year, Oxford Academy established its OASTEM program. However, it wasn't until 2012 that FIRST Robotics Team 4079 - Quantum Leap was started. Over the last few years, we have begun hosting a FIRST Girl-Powered STEM day, as well as attending our district Steam-A-Palooza. 2019 was our boom year, where we placed as Quarter-Finalists in Worlds (Carver), Finalists in Beach Blitz and the OCR, and Semi-Finalists in Battleship Blast. Recently, we've established an FTC team, meant to introduce robotics and STEM to younger students."
        },
        {
            title: "Our Achievements",
            description: "We aim to create a community in which friends and family can learn and immerse themselves in STEM. We host an annual Girl Powered STEM Day, inviting local K-12 students to our site to learn about STEM, promoting our future Women in STEM Initiative. Additionally, we participate in a district-wide STEAM-A-Palooza, exhibiting our team's yearly work for staff, parents, and students to enjoy. Other engagements within our school site include showing off our robots during Club Rush, rallies, Open House, Back-to-School Nights, and more. Through each event we host or participate in, our team builds a connection with our local community in order to promote STEM in the Anaheim Union High School District and Orange County."
        },
        {
            title: "What is FIRST®?",
            description: "FIRST® (For Inspiration and Recognition of Science and Technology) is a non-profit, international organization founded in 1989 by Dean Kamen, an inventor, and entrepreneur. The mission of FIRST® is to inspire young people to be science and technology leaders and innovators by engaging them in exciting mentor-based programs that build science, engineering, and technology skills, inspire innovation, and foster well-rounded life capabilities including self-confidence, communication, and leadership. Each year, FIRST® releases a new game for each program which poses an enormous challenge composed of various tasks. Teams must strategize, design, prototype, build, program, and test their robot during a build season, which lasts for six weeks. After build season, teams compete in regional tournaments to qualify for the world championships, held annually in St. Louis and in Houston."
        }
    ], []);

    const setClicked = (index: number): void => {
        setIsClicked(new Array(descriptors.length).fill(false));
        setIsClicked((prev: boolean[]): boolean[] => {
            const temp: boolean[] = prev.slice();
            temp[index] = !temp[index];
            return temp;
        });
    }

    React.useEffect((): void => {
        setIsClicked(new Array(descriptors.length).fill(false));
    }, [descriptors]);

    return (
        <section id="about">
            <div id="container">
                <div id="left">
                    <img src="https://via.placeholder.com/200" alt="About" />
                    <img src="https://via.placeholder.com/200" alt="About" />
                    <img src="https://via.placeholder.com/200" alt="About" />
                </div>
                <div id="right">
                    <div id="top">
                        <h1 id="title">About Us</h1>
                        <p id="description">
                        We are OA Robotics, a team of engineers and developers located in Orange County, California. 
                        We are based at Oxford Academy in Cypress, and strive to promote robotics and STEM within our communities.
                        Our teams design, assemble, and test competitive robots, while learning and teaching the scientific and technical concepts behind it.
                        Our students are passionate about robotics and aim to promote and continue the culture of innovation and creativity throughout the team as a whole.
                        </p>
                    </div>
                    <div id="bottom">
                        {
                            descriptors.map((descriptor: Descriptor , index: number): React.JSX.Element => {
                                return (
                                    <div key={index} className="about_org" onClick={(): void => setClicked(index)}>
                                        <h1 className="about_title">
                                            {descriptor["title"]}
                                        </h1>
                                        {
                                            <div className={`about_desc_holder ${isClicked[index] ? "active" : ""}`}>
                                                <p className="about_desc">
                                                    {descriptor["description"]}
                                                </p>
                                            </div>
                                        }
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
};

export default About;