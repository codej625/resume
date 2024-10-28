import Header from "./../commons/Header";
import Footer from "./../commons/Footer";
import "./../../assets/common.css";

export default function Main() {
  return (
    <>
      <Header />
        <main>
          <section id="personalInformation" className="mt-4">
            <div className="container">
              <div className="personal-information-body">
                <div>
                  
                </div>
                <div>
                  <div>
                    second
                  </div>
                  <div>
                    third
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="selfIntroduction">
            <div className="container">
              <div className="self-introduction-body">
                
              </div>
            </div>
          </section>
          <section id="workExperience">
            <div className="container">
              <div className="work-experience-body">
                
              </div>
            </div>
          </section>
          <section id="projects">
            <div className="container">
              <div className="projects-body">
                
              </div>
            </div>
          </section>
          <section id="skills">
            <div className="container">
              <div className="skills-body">
                
              </div>
            </div>
          </section>
          <section id="others">
            <div className="container">
              <div className="others-body">
                
              </div>
            </div>
          </section>
        </main>
      <Footer />
    </>
  );
}
