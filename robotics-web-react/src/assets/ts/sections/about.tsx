import React from "react";

const AboutSection: React.FC = (): React.JSX.Element => {
    return (
        <section id="about" className="about-section pt-150">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="about-img mb-50">
                            <img src="assets/img/about/collage.png" alt="about" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content mb-50">
                            <div className="section-title mb-50">
                                <h1 className="mb-25">About Our Impact</h1>
                                <p>We aim to create a community in which friends and family can learn and immerse themselves
                                    in STEM. We host an annual Girl Powered STEM Day, inviting local K-12 students to our
                                    site to learn about STEM, promoting our future Women in STEM Initiative. Additionally,
                                    we participate in a district-wide STEAM-A-Palooza, exhibiting our team's yearly work for
                                    staff, parents, and students to enjoy. Other engagements within our school site include
                                    showing off our robots during Club Rush, rallies, Open House, Back-to-School Nights, and
                                    more. Through each event we host or participate in, our team builds a connection with
                                    our local community in order to promote STEM in the Anaheim Union High School District
                                    and Orange County. </p>
                            </div>
                            <div className="accordion pb-15" id="accordionExample">
                                <div className="single-faq">
                                    <button className="w-100 text-start" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne" aria-expanded="true">
                                        Mission Statement
                                    </button>
                                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne"
                                        data-bs-parent="#accordionExample">
                                        <div className="faq-content">
                                            OA Robotics aims to inspire a new generation of engineers, software developers, and
                                            business experts by creating a professional environment. Members work together to both
                                            create, program, and publicize their created robots centered around certain tasks.
                                            Teams across the world operate under the principle of “gracious professionalism,”
                                            where teams maintain a competitive environment but still look to help each other
                                            compete and improve their robots.
                                        </div>
                                    </div>
                                </div>
                                <div className="single-faq">
                                    <button className="w-100 text-start collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo" aria-expanded="false">
                                        Our History
                                    </button>
                                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo"
                                        data-bs-parent="#accordionExample">
                                        <div className="faq-content">
                                            In 2009, our first team, Vex Robotics 1774 - Quantum Leap, was started. The
                                            following year, Oxford Academy established its OASTEM program. However, it wasn't
                                            until 2012 that FIRST Robotics Team 4079 - Quantum Leap was started. Over the last
                                            few years, we have begun hosting a FIRST Girl-Powered STEM day, as well as attending
                                            our district Steam-A-Palooza. 2019 was our boom year, where we placed as
                                            Quarter-Finalists in Worlds (Carver), Finalists in Beach Blitz and the OCR, and
                                            Semi-Finalists in Battleship Blast. Recently, we've established an FTC team, meant
                                            to introduce robotics and STEM to younger students.
                                        </div>
                                    </div>
                                </div>
                                <div className="single-faq">
                                    <button className="w-100 text-start collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree" aria-expanded="false">
                                        What is FIRST®?
                                    </button>
                                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree"
                                        data-bs-parent="#accordionExample">
                                        <div className="faq-content">
                                            <a href="https://www.firstinspires.org/about/vision-and-mission">FIRST®</a> (For
                                            Inspiration and Recognition of Science and Technology) is a non-profit, international
                                            organization founded in 1989 by Dean Kamen, an inventor, and entrepreneur.<br /><br />The
                                            mission of FIRST® is to inspire young people to be science and technology leaders and
                                            innovators by engaging them in exciting mentor-based programs that build science,
                                            engineering, and technology skills, inspire innovation, and foster well-rounded life
                                            capabilities including self-confidence, communication, and leadership.<br /><br />Each year,
                                            FIRST® releases a new game for each program which poses an enormous challenge composed
                                            of various tasks. Teams must strategize, design, prototype, build, program, and test
                                            their robot during a build season, which lasts for six weeks. After build season,
                                            teams compete in regional tournaments to qualify for the world championships, held
                                            annually in St. Louis and in Houston.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;