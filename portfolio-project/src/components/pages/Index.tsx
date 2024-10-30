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
                <div className="bg-body-tertiary p-4">
                  <div className="self-introduction p-4">
                    <h2 className="fs-2 fw-bold">👤 간략 소개</h2>
                    <br />
                    <p className="fs-6 fw-normal">
                      <strong>"뛰어난 1명의 개발자는 하나의 기업가치를 가진다"</strong>
                      라는<br />신념을 갖고 있습니다.
                    </p>
                    <br />
                    <p className="fs-6 fw-normal">
                      제가 잘하는 일은 문제를 인식하고,<br />
                      다양한 역할을 수행하며 해결하는 것입니다.
                    </p>
                    <br />
                    <p className="fs-6 fw-normal">
                      요구사항을 파악하여 기술적인 해결책을 제시하고<br />
                      팀원, 협력부서 더 나아가 클라이언트와의<br />
                      원활한 커뮤니케이션 능력을 갖추고 있습니다.
                    </p>
                    <br />
                    <p className="fs-6 fw-normal">
                      항상 겸손한 마음가짐으로 여러 경험을 쌓으며<br />
                      현재도 계속해서 발전해 나가고 있습니다.
                    </p>
                  </div>
                  <div className="identification-picture">
                    <figure>
                      <img src="./../public/identification_picture.jpg" alt="identification picture" />
                      <figcaption></figcaption>
                    </figure>
                    <div className="mt-3">
                      <table>
                        <tbody>
                          <tr>
                            <th>이름</th>
                            <td className="text-center">이 진 우 / Jin-woo Lee</td>
                          </tr>
                          <tr>
                            <th>생년월일</th>
                            <td className="text-center">1991.06.25</td>
                          </tr>
                          <tr>
                            <th>전화번호</th>
                            <td className="text-center"><a href="tel:01022695901">010-2269-5901</a></td>
                          </tr>
                          <tr>
                            <th>이메일</th>
                            <td className="text-center">dkwksla@naver.com</td>
                          </tr>
                          <tr>
                            <th>주소</th>
                            <td className="text-center">경기도 군포시 금정동</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
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
