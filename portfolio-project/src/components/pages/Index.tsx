import { useEffect, useRef, useState } from "react";
import Header from "./../commons/Header";
import Footer from "./../commons/Footer";
import Slider from "./MultipleItems";
import { workExperience, option } from "../../assets/js/data.ts";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./../../assets/css/common.css";
import identificationPicture from "./../../assets/img/identification_picture.jpg";

export default function Main() {

  const [device, setDevice] = useState<number>(0);
  const size = useRef<any>(null);

  useEffect(() => {
    const main: number = size.current?.offsetWidth;
    if (main) setDevice(main);
  }, []);

  return (
    <>
      <Header />
        <main ref={size}>
          <section id="personalInformation">
            <div className="container">
              <div className="personal-information-body">
                <div className="bg-body-tertiary p-4">
                  <div className="self-introduction p-4">
                    <h2 className="fs-2 fw-bold">👤 간략 소개</h2>
                    <br />
                    <p className="fs-6 fw-normal">
                      <strong>"뛰어난 한 명의 개발자는 하나의 기업가치를 가진다"</strong>
                      라는
                      <br />
                      신념을 갖고 있습니다.
                    </p>
                    <br />
                    <p className="fs-6 fw-normal">
                      제가 잘하는 일은 문제를 인식하고,
                      <br />
                      다양한 역할을 수행하며 해결하는 것입니다.
                    </p>
                    <br />
                    <p className="fs-6 fw-normal">
                      요구사항을 파악하여 기술적인 해결책을 제시하고
                      <br />
                      팀원, 협력부서 더 나아가 클라이언트와의
                      <br />
                      원활한 커뮤니케이션 능력을 갖추고 있습니다.
                    </p>
                    <br />
                    <p className="fs-6 fw-normal">
                      항상 겸손한 마음가짐으로 다양한 도전과 경험을 통해
                      <br />
                      기술적으로나 인간적으로 더 나은 개발자가 되기 위해 노력하고 있습니다.
                    </p>
                  </div>
                  <div className="identification-picture">
                    <figure>
                      <img src={identificationPicture} alt="identification picture" />
                      <figcaption></figcaption>
                    </figure>
                    <div className="mt-3">
                      <table>
                        <tbody>
                          <tr>
                            <th>이름</th>
                            <td className="text-center">이 진 우</td>
                          </tr>
                          <tr>
                            <th>생년월일</th>
                            <td className="text-center">1991.06.25</td>
                          </tr>
                          <tr>
                            <th>전화번호</th>
                            <td className="text-center">
                              <a href="tel:01022695901">📞 010-2269-5901</a>
                            </td>
                          </tr>
                          <tr>
                            <th>이메일</th>
                            <td className="text-center">dkwksla@naver.com</td>
                          </tr>
                          <tr>
                            <th>주소</th>
                            <td className="text-center">🇰🇷 경기도 군포시 금정동</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="bg-body-tertiary p-4">
                    <h3 className="fs-4 fw-bold">🥇 Core Skills</h3>
                    <div>
                      <div className="d-flex mt-3">
                        <div className="rounded-5 bg-white p-2 me-2">Java</div>
                        <div className="rounded-5 bg-white p-2 me-2">Spring Boot</div>
                        <div className="rounded-5 bg-white p-2 me-2">Thymeleaf</div>
                        <div className="rounded-5 bg-white p-2">JSP</div>
                      </div>
                      <div className="d-flex mt-2">
                        <div className="rounded-5 bg-white p-2 me-2">Javascript</div>
                        <div className="rounded-5 bg-white p-2 me-2">React</div>
                        <div className="rounded-5 bg-white p-2 me-2">jQuery</div>
                        <div className="rounded-5 bg-white p-2">Zustand</div>
                      </div>
                      <div className="d-flex mt-2">
                        <div className="rounded-5 bg-white p-2 me-2">React Query</div>
                        <div className="rounded-5 bg-white p-2 me-2">MySQL</div>
                        <div className="rounded-5 bg-white p-2 me-2">PostgreSQL</div>
                        <div className="rounded-5 bg-white p-2">AWS</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-body-tertiary p-4">
                    <h3 className="fs-4 fw-bold">🥈 Additional Skills</h3>
                    <div>
                      <div className="d-flex mt-3">
                        <div className="rounded-5 bg-white p-2 me-2">Node.js</div>
                        <div className="rounded-5 bg-white p-2 me-2">Express</div>
                        <div className="rounded-5 bg-white p-2">PHP(Legacy version 5.x)</div>
                      </div>
                      <div className="d-flex mt-2">
                        <div className="rounded-5 bg-white p-2 me-2">Docker</div>
                        <div className="rounded-5 bg-white p-2 me-2">HTML5</div>
                        <div className="rounded-5 bg-white p-2 me-2">CSS3</div>
                        <div className="rounded-5 bg-white p-2">Web Publishing</div>
                      </div>
                      <div className="d-flex mt-2">
                        <div className="rounded-5 bg-white p-2 me-2">Linux(Ubuntu)</div>
                        <div className="rounded-5 bg-white p-2 me-2">Typescript</div>
                        <div className="rounded-5 bg-white p-2">Git / GitHub</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section style={{marginTop: '1.4rem'}}>
            <div className="container">
              <div>
                <div className="bg-body-tertiary p-4">
                  <h3 className="fs-4 fw-bold mb-3">🪖 병역 사항</h3>
                  <table>
                    <tbody>
                      <tr className="d-flex justify-content-center align-items-center" style={{width: 1200}}>
                        <th>병역구분</th>
                        <td className="ps-3 pe-5">
                          <div className="text-center rounded-5 bg-white pt-2 pb-2">필</div>
                        </td>
                        <th>군별</th>
                        <td className="ps-3 pe-5">
                          <div className="text-center rounded-5 bg-white pt-2 pb-2">전투경찰</div>
                        </td>
                        <th>최종계급</th>
                        <td className="ps-3 pe-5">
                          <div className="text-center rounded-5 bg-white pt-2 pb-2">병장</div>
                        </td>
                        <th>복무기간</th>
                        <td className="ps-3 w-auto">
                          <div className="text-center rounded-5 bg-white px-5 pt-2 pb-2">2012.12.06 ~ 2014.09.05</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
          <section style={{marginTop: '1.4rem'}}>
            <div className="container">
              <div>
                <div className="bg-body-tertiary p-4">
                  <h3 className="fs-4 fw-bold mb-3">🎓 학력</h3>
                  <div className="d-flex">
                    <article className="ps-2" style={{ width: 250 }}>
                      <div className="text-end rounded-5 bg-white p-4">
                        <div className="d-flex justify-content-center">
                          <div className="d-flex flex-column">
                            <h5 className="text-center m-0 me-2">서울디지털대학교</h5>
                            <div className="text-center fs-8 mt-1">💻 컴퓨터공학전공</div>
                            <div className="text-black-50 fs-8 mt-3">2022.03 ~ 2024.02 졸업</div>
                            <div className="text-black-50 fs-8">학점 3.19/4.5</div>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article className="ps-4" style={{ width: 250 }}>
                      {/* <div className="text-end rounded-5 bg-white p-4">
                        <div className="d-flex justify-content-center">
                          <div className="d-flex flex-column">
                            <h5 className="text-center m-0 me-2">학점은행제</h5>
                            <div className="text-center fs-8 mt-1">💵 경영 전공</div>
                            <div className="text-black-50 fs-8 mt-3">2019.08 ~ 2021.02 졸업</div>
                            <div className="text-black-50 fs-8">학점 3.13/4.5</div>
                          </div>
                        </div>
                      </div> */}
                    </article>
                    <article className="ps-4" style={{ width: 250 }}>
                      <div className="text-end rounded-5 bg-white p-4">
                        <div className="d-flex justify-content-center">
                          <div className="d-flex flex-column">
                            <h5 className="text-center m-0 me-2">소사고등학교</h5>
                            <div className="text-center fs-8 mt-1">📖 문과</div>
                            <div className="text-black-50 fs-8 mt-3">2007.03 ~ 2010.02 졸업</div>
                            <div className="text-white">-</div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section style={{marginTop: '1.4rem'}}>
            <div className="container">
              <div className="honors-body">
                <div className="bg-body-tertiary p-4">
                  <h3 className="fs-4 fw-bold mb-3">🏆 수상 경력</h3>
                  <table>
                    <tbody>
                      <tr className="d-flex justify-content-center align-items-center" style={{width: 1200}}>
                        <th>수상명</th>
                        <td className="ps-3 pe-5">
                          <div className="text-center rounded-5 bg-white px-3 pt-2 pb-2">애드테크 은상</div>
                        </td>
                        <th>수여기관</th>
                        <td className="ps-3 pe-5">
                          <div className="text-center rounded-5 bg-white px-3 pt-2 pb-2">(사)한국디지털광고협회</div>
                        </td>
                        <th>수상연도</th>
                        <td className="ps-3 pe-5">
                          <div className="text-center rounded-5 bg-white px-2 pt-2 pb-2">2022</div>
                        </td>
                        <th>수여내용</th>
                        <td className="ps-3 w-auto">
                          <div className="text-center rounded-5 bg-white px-3 pt-2 pb-2">AI기술을 활용한 디지털마케팅플랫폼, 키딕 (KeyDig)</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
          <section style={{marginTop: '1.4rem'}}>
            <div className="container">
              <div className="work-experience-body">
                <div className="bg-body-tertiary p-4">
                  <h3 className="fs-4 fw-bold mb-3">📁 경력 사항</h3>
                  <Slider data={workExperience} option={option} device={device} />
                </div>
              </div>
            </div>
          </section>
        </main>
      <Footer />
    </>
  );
}
