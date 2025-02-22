import React, { useState, useEffect } from "react";
import Icons from "./components/Icons";
import Project from "./components/Project";
import Edu from "./components/Edu";

function App() {
    const [activeSection, setActiveSection] = useState("about");
    const [isAboutOpen, setIsAboutOpen] = useState(false); // State for showing/hiding about section

    const formatDate = (date) => {
        return date.toLocaleString("en-US", {
            month: "short",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
        }).replace(",", "");
    };

    useEffect(() => {
        const menuItems = document.querySelectorAll(".sidebar ul li");

        menuItems.forEach(item => {
            item.addEventListener("click", function () {
                menuItems.forEach(li => li.classList.remove("active"));
                this.classList.add("active");
            });
        });

        return () => {
            menuItems.forEach(item => {
                item.removeEventListener("click", function () {});
            });
        };
    }, []);

    const currentDate = new Date();

    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    return (
        <div>
            <div className="navbar">
                <p>{formatDate(currentDate)}</p>
            </div>

            {/* Home Icon to Open About Section */}
            <div className="home-icon" onClick={() => setIsAboutOpen(true)}>
                <Icons place="Images/Logos/user-home.png" />
                <p>About me</p>
            </div>

            <div className="left">
                <Icons onClick={() => (window.location.href='https://www.google.com')} place="Images/Logos/chromium.png" />
                <Icons place="/Images/Logos/vscode.png" />
                <Icons place="/Images/Logos/spotify.png" />
                <Icons onClick={() => setIsAboutOpen(true)} place="/Images/Logos/user-home.png"/>
                <Icons onClick={() => (window.location.href='https://github.com/Sumitchouhan774')} place="/Images/Logos/github.png" />
                <Icons onClick={() => (window.location.href='https://www.linkedin.com/in/sumit-chouhan-848674272/')} place="/Images/Logos/linkedin.png" />
                <hr />
                <Icons place="/Images/Logos/user-trash-full.png" />
            </div>

            {/* About Section - Conditionally Rendered */}
            {isAboutOpen && (
                <div className="about">
                    <div className="title-bar">
                        <p>About Sumit</p>
                        {/* Close Button */}
                        <img className="close" src="Images/Logos/close.png" alt="Close" onClick={() => setIsAboutOpen(false)} />
                    </div>

                    <div className="container">
                        <aside className="sidebar">
                            <ul>
                                <li className={activeSection === "about" ? "active" : ""} onClick={() => handleSectionChange("about")}>About</li>
                                <li className={activeSection === "skills" ? "active" : ""} onClick={() => handleSectionChange("skills")}>Skills</li>
                                <li className={activeSection === "projects" ? "active" : ""} onClick={() => handleSectionChange("projects")}>Projects</li>
                                <li className={activeSection === "education" ? "active" : ""} onClick={() => handleSectionChange("education")}>Education</li>
                            </ul>
                        </aside>

                        <main>
                            {activeSection === "about" && (
                                <div className="header">
                                <img src="Images/Avatar.png" alt="Avatar"/>
                                    <h1>My name is <span className="highlight">Sumit Chouhan</span>,</h1>
                                    <h2>I'm a <span className="highlight">Full Stack Developer</span></h2>
                                    <div className="details">
                                        <p>🎓 I'm currently pursuing a Bachelor's in Information Technology. I've completed my 2-month Java internship at Internsup, and now I'm looking for new opportunities to kick-start my career.</p>
                                        <p>👨‍💻 I enjoy building awesome software that solves practical problems.</p>
                                        <p>👾 Apart from coding, I have a strong passion for basketball and have competed in college-level tournaments.</p>
                                        <p>🌟 I also have a keen interest in AI tools and technologies.</p>
                                    </div>
                                </div>
                            )}

                            {activeSection === "skills" && (
                                <div className="skills-container">
                                    <h1>Technical Skills</h1>
                                    <p>I've worked with a wide variety of programming languages & frameworks.</p>
                                    <p>My areas of expertise are <span className="highlight">full-stack development, React.js, JavaScript & Node.js!</span></p>
                                    <p>Here are my most frequently used technologies:</p>

                                    <h3>Languages & Tools</h3>
                                    <div className="skills-wrapper">
                                        <span className="skill-box linux">Java</span>
                                        <span className="skill-box html">HTML</span>
                                        <span className="skill-box css">CSS</span>
                                        <span className="skill-box javascript">JavaScript</span>
                                        <span className="skill-box mongodb">MongoDB</span>
                                        <span className="skill-box css">PostgreSQL</span>
                                        <span className="skill-box git">GitHub</span>
                                    </div>

                                    <h3>Frameworks & Libraries</h3>
                                    <div className="skills-wrapper">
                                        <span className="skill-box nodejs">Node.js</span>
                                        <span className="skill-box express">Express.js</span>
                                        <span className="skill-box react">React.js</span>
                                        <span className="skill-box tailwind">Bootstrap</span>
                                        <span className="skill-box nodejs">Spring Boot</span>
                                    </div>
                                </div>
                            )}

                            {activeSection === "projects" && (
                                <div className="projects">
                                    <h1>Projects</h1>
                                    <Project name="Bakery Website" link="https://creamandcrumb.github.io/CreamAndCrumb/" date="(Feb 2025)" content="A fully responsive bakery website inspired by Wallflour Bakehouse, built using HTML, CSS, JavaScript." />
                                    <Project name="Ecommerce website" link="https://github.com/Sumitchouhan774/E-Commerce" date="(May 2024)" content="Developed a scalable e-commerce backend using Spring Boot and MongoDB for efficient data management." />
                                    <Project name="Bubble Game" link="https://github.com/Sumitchouhan774/Bubble-Game" date="(Dec 2024)" content="Bubble Game is an interactive and engaging browser-based game where players pop bubbles with specific numbers to score points within a set time limit." />
                                </div>
                            )}

                            {activeSection === "education" && (
                                <div className="education">
                                    <h1>Education</h1>
                                    <Edu name="M.L.V. Textile & Engineering College" date="2023-Present" field="Information Technology" number="7.25 SGPA" />
                                    <Edu name="Galaxy Sr. Sec. School" date="2022-2023" field="Science-Maths" number="81.40%" />
                                </div>
                            )}
                        </main>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
