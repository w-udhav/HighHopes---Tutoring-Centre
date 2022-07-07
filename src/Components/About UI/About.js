import Navbar from "../navbar/Navbar";
import './_about.scss'

const About = () => {
    return (
        <div className="aboutPage-container">
            <div className="about-head-wrapper">
                <div className="head-nav">
                    <Navbar />
                </div>
                <div className="about-head">
                    <p> About Us </p>
                </div>
            </div>
            <div className="whoContainer">
                <div className="who-para-wrapper">
                    <p> Who are we? </p>
                    <p>
                        We believe in empowering students with
                        the study skills and learning resources
                        they need to achieve academic success.
                        Our talented and professional team provide
                        tutoring services to students of all ages,
                        levels of experience, and subjects.
                    </p>
                </div>
            </div>
            <div className="ourStoryContainer">
                <div className="ourProfile">
                    <div class="content">
                        <h2 class="text_shadows">Profile</h2>
                    </div>
                </div>
                <div className="storyWrapper">
                    <div className="storyFlexbox">
                        <div className="dirIma">
                            <p> <img src={require('../../assets/mukta.jpeg')} alt='muktaSodi    ' /> </p>
                        </div>
                        <div className="dirInfo">
                            <p>
                                <b>Mrs. Mukta Sodhi</b> is the director and principal founder of the High Hopes Tutoring centre. She has completed bachelor of science in India and studied further in Australia and completed Post Graduation in Education from University of Western Australia. She has been working as a Full time Mathematics and Science Teacher in various High schools in Perth since 2017.
                            </p>
                            <p>
                                With having the extensive knowledge of the Australian curriculum and fully conscious of the standards of teaching students in Australia gained by her studies & work experience, she can guide the students best and bring best out of them.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Faculty Details */}
            <div className="facultyContainer">
                <p className="facultyBanner formSubtitle"> Faculty Members </p>
                <div className="facWrapper">
                    <div className="facMembers">
                        <div className="imgContainer"> <img src={require('../../assets/dp.jpeg')} /> </div>
                        <div className="facInfo">
                            <p> Mrs. Mukta Sodhi </p>
                            <p> Founder of High Hopes Tutoring Centre </p>
                        </div>
                        <div className="facOtherInfo">
                            <p> Education Details: </p>
                            <p> BSC in Mathematics, Physics & Chemistry </p>
                            <p> Post Grad Dip in teaching from <b>University of Western Australia</b> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;

// Education details

// BSC (Mathematics Physics Chemistry )

// Post Grad Dip in teaching ( University of Western Australia)