import { PageHead, TypewriterEffect, MotionDiv, Card } from "@/components";
import { personalInfo, slidingText, socialLinks, projects } from "@/data";
import { AiFillLinkedin, AiFillGithub, AiFillFacebook, AiFillMediumSquare, AiOutlineFundProjectionScreen } from "react-icons/ai";
import { ImStackoverflow } from "react-icons/im";
import { useRef } from "react";

export default function Home() {
  const projectsRef = useRef<HTMLDivElement>(null); // Ref to projects section

  const scrollToProjects = () => projectsRef.current?.scrollIntoView({ behavior: "smooth" });

  const getSocialIcon = (name: string) => {
    switch (name) {
      case "Facebook":
        return <AiFillFacebook />;
      case "Linkedin":
        return <AiFillLinkedin />;
      case "Github":
        return <AiFillGithub />;
      case "Medium":
        return <AiFillMediumSquare />;
      case "Stackoverflow":
        return <ImStackoverflow />;
      default:
        return <AiFillLinkedin />;
    }
  };

  const getAnimationDirection = (index: number) => {
    switch (index) {
      case 0:
        return "right";
      case 1:
        return "up";
      case 2:
        return "left";

      default:
        return "down";
    }
  }

  return (
    <>
      <PageHead />
      <main>
        {/* Hero Section */}
        <section className="hero bg-dark">
          <div className="container">
            <div className="personal-info d-flex justify-content-center align-items-center flex-column">
              <img
                src="/shwetank.jpg"
                alt={personalInfo?.name}
                className="rounded profile-pic"
              />
              <h2 className="text-center mt-sm-3 mt-2 text-white">
                {personalInfo?.name}
              </h2>
              <div className="d-flex gap-1 mt-sm-1 sliding-text fs-5 text-white">
                <p>Senior Full Stack</p>
                <TypewriterEffect
                  textArray={slidingText || ["Developer", "Engineer"]}
                />
              </div>
              <p className="text-center mt-1 text-secondary about-info">
                {personalInfo?.about}
              </p>
            </div>
          </div>

          <div className="social-links mt-sm-4 mt-3">
            {
              socialLinks?.map((link) => (
                <a
                  href={link?.url}
                  target="_blank"
                  rel="noreferrer"
                  key={link?.name}
                  className="social-link"
                >
                  {
                    getSocialIcon(link?.name)
                  }
                </a>
              ))
            }
          </div>

          <div>
            <button
              className="btn btn-outline-light btn-lg fw-bold mt-sm-5 mt-4"
              onClick={scrollToProjects}
            >
              Projects <AiOutlineFundProjectionScreen size={30} />
            </button>
          </div>
        </section>

        {/* Projects Section */}
        <section className="projects bg-dark py-5" ref={projectsRef}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="text-center text-white">Projects</h2>
              </div>
            </div>
            <div className="row mt-5">
              {
                projects?.map((item: any, index: number) => {
                  return (
                    <div className="col-12 col-md-6 col-lg-4 my-4" key={index}>
                      <MotionDiv
                        delay={0.1}
                        direction={getAnimationDirection(index)}
                      >
                        <Card
                          title={item?.name}
                          text={item?.description.slice(0, 50)}
                          image={item?.img ? item?.img : "/default.jpg"}
                          url={item?.url}
                        />
                      </MotionDiv>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
