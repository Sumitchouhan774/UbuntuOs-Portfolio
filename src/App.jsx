import React, { useState, useEffect } from "react";
import Icons from "./components/Icons";
import Project from "./components/Project";
import Edu from "./components/Edu";
import Loader from "./components/Loader";

function App() {
    const [activeSection, setActiveSection] = useState("about");
    const [isAboutOpen, setIsAboutOpen] = useState(false); // State for showing/hiding about section
    const [loading, setLoading] = useState(true);

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
        // Simulate a delay (e.g., fetching data)
        setTimeout(() => {
          setLoading(false);
        }, 3000); // Adjust the time as needed
      }, []);

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
        <div>
      {loading ? (
        <Loader /> // Show the loading screen
      ) : 
      null}
    </div>
            <div className="navbar">
                <p>{formatDate(currentDate)}</p>
            </div>

            {/* Home Icon to Open About Section */}
            <div className="home-icon" onClick={() => setIsAboutOpen(true)}>
                <Icons place="Images/Logos/user-home.webp" />
                <p>About me</p>
            </div>

            <div className="left">
                <Icons onClick={() => (window.location.href='https://www.google.com')} place="Images/Logos/chromium.webp" />
                <Icons onClick={() => (window.location.href='https://codesandbox.io/p/github/Sumitchouhan774/UbuntuOs-Portfolio/draft/reverent-waterfall?file=%2Fsrc%2FApp.jsx&workspaceId=ws_TZpUUFPLUcRb8unGguKeUH')} place="/Images/Logos/vscode.webp" />
                <Icons onClick={() => setIsAboutOpen(true)} place="/Images/Logos/user-home.webp"/>
                <Icons onClick={() => window.location.href='https://mail.google.com/mail/u/0/?fs=1&to=chouhansumit1807@gmail.com&tf=cm'} place="/Images/Logos/gmail.webp"/>
                <Icons onClick={() => (window.location.href='https://github.com/Sumitchouhan774')} place="/Images/Logos/github.webp" />
                <Icons onClick={() => (window.location.href='https://www.linkedin.com/in/sumit-chouhan-848674272/')} place="/Images/Logos/linkedin.webp" />
                <hr />
                <Icons onClick={() => (window.location.href='https://open.spotify.com/playlist/37i9dQZF1DZ06evO1mWvp6')} place="/Images/Logos/spotify.webp" />
            </div>

            {/* About Section - Conditionally Rendered */}
            {isAboutOpen && (
                <div className="about">
                    <div className="title-bar">
                        <p>About Sumit</p>
                        {/* Close Button */}
                        <img className="close" src="Images/Logos/close.webp" alt="Close" onClick={() => setIsAboutOpen(false)} />
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
                                <img src="Images/Avatar.webp" alt="Avatar"/>
                                    <h1>My name is <span className="highlight">Sumit Chouhan</span>,</h1>
                                    <h2>I'm a <span className="highlight">Full Stack Developer</span></h2>
                                    <div className="details">
                                        <p>🎓 I'm currently pursuing a Bachelor's in Information Technology. I've completed my 2-month Java internship at Internsup, and now I'm looking for new opportunities to kick-start my career.</p>
                                        <p>👨‍💻 I enjoy building awesome software that makes a real impact and enhances user experiences.</p>
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
                                        <img className="skills" src="https://img.icons8.com/?size=100&id=13679&format=png&color=000000" alt="skills"/>
                                        <img className="skills" src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000" alt="skills"/>
                                        <img className="skills" src="https://img.icons8.com/?size=100&id=21278&format=png&color=000000" alt="skills"/>
                                        <img className="skills" src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000" alt="skills"/>
                                        <img className="skills" src="https://img.icons8.com/?size=100&id=8rKdRqZFLurS&format=png&color=000000" alt="skills"/>
                                        <img className="skills" src="https://img.icons8.com/?size=100&id=LwQEs9KnDgIo&format=png&color=000000" alt="skills"/>
                                        <img className="skills" src="https://img.icons8.com/?size=100&id=LoL4bFzqmAa0&format=png&color=000000" alt="skills"/>
                                        <img className="skills" src="https://img.icons8.com/?size=100&id=QEQQKirln6Tf&format=png&color=000000" alt="skills"/>
                                    </div>
                                    <h3>Frameworks & Libraries</h3>
                                    <div className="skills-wrapper">
                                        <img className="skills" src="https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000" alt="skills"/>
                                        <img className="skills" src="https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000" alt="skills"/>
                                        <img className="skills" src="https://img.icons8.com/?size=100&id=NfbyHexzVEDk&format=png&color=000000" alt="skills"/>
                                        <img className="skills" src="https://img.icons8.com/?size=100&id=PndQWK6M1Hjo&format=png&color=000000" alt="skills"/>
                                        <img className="skills" src="https://img.icons8.com/?size=100&id=90519&format=png&color=000000" alt="skills"/>
                                    </div>
                                    <h3>UI/UX Tools</h3>
                                    <div className="skills-wrapper">
                                        <img className="skills" src="https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000" alt="skills"/>
                                        <img className="skills" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqZNnVO2DrF2rAvBrzcg9Yjfh3QFNsEpgGcA&s" alt="skills"/>
                                        <img className="skills" src="https://img.icons8.com/?size=100&id=iWw83PVcBpLw&format=png&color=000000" alt="skills"/>
                                    </div>
                                </div>
                            )}

                            {activeSection === "projects" && (
                                <div className="projects">
                                    <h1>Projects</h1>
                                    <Project name="UbuntuOs Portfolio" link="https://github.com/Sumitchouhan774/UbuntuOs-Portfolio" date="Feb 2025" content="Ubuntu-Style Portfolio is a personal portfolio website inspired by the Ubuntu OS. It features a dynamic about section, and interactive project showcases, built using ReactJs."/>
                                    <Project name="DBank" link="https://github.com/Sumitchouhan774/D_Bank" date="Feb 2025" content="A cutting-edge decentralized banking application built on Web3 technologies using Dfinity Canisters. This project enables seamless transactions, allowing users to deposit and withdraw funds securely on the Internet Computer blockchain."/>
                                    <Project name="Bakery Website" link="https://creamandcrumb.github.io/CreamAndCrumb/" date="Jan 2025" content="A fully responsive bakery website inspired by Wallflour Bakehouse, built using HTML, CSS, JavaScript." />
                                    <Project name="K-Raven AI" link="https://github.com/Sumitchouhan774/K-Raven.?tab=readme-ov-file" date="Feb 2025" content="A sleek, smart, and lightning-fast AI chatbot powered by Google's Generative AI!"/>
                                    <Project name="Ecommerce website" link="https://github.com/Sumitchouhan774/E-Commerce" date="May 2024" content="Developed a scalable e-commerce backend using Spring Boot and MongoDB for efficient data management." />
                                    <Project name="Bubble Game" link="https://github.com/Sumitchouhan774/Bubble-Game" date="Dec 2024" content="Bubble Game is an interactive and engaging browser-based game where players pop bubbles with specific numbers to score points within a set time limit." />
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
