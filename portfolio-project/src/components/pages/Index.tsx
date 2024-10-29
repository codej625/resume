import Header from "./../commons/Header";
import Footer from "./../commons/Footer";
import "./../../assets/common.css";

export default function Main() {
  return (
    <>
      <Header />
        <main>
          <section id="personalInformation">
            <div className="container">
              <div className="personal-information-body">
                <div>
                  <div className="self-introduction p-4">
                    <p><strong>간략 소개</strong></p><br />
                    <span>"뛰어난 1명의 개발자는 하나의 기업가치를 가진다"</span>라는<br />
                    신념을 갖고 있습니다.<br />
                    <br />
                    제가 잘하는 일은 문제를 인식하고,<br />
                    다양한 역할을 수행하며 해결하는 것입니다.<br />
                    <br />
                    요구사항을 파악하여 기술적인 해결책을 제시하고<br />
                    팀원, 협력부서 더 나아가 클라이언트와의<br />
                    원활한 커뮤니케이션 능력을 갖추고 있습니다.<br />
                    <br />
                    항상 겸손한 마음가짐으로 여러 경험을 쌓으며<br />
                    현재도 계속해서 발전해 나가고 있습니다.
                  </div>
                  <div className="identification-picture">
                    <figure>
                      <img src="./../public/identification_picture.jpg" alt="identification picture" />
                      <figcaption></figcaption>
                    </figure>
                    <p className="text-center">풀스택 개발자 이진우</p>
                  </div>
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
