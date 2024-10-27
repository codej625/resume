import Header from "./../commons/Header";
import Footer from "./../commons/Footer";
import { Container, Card } from 'react-bootstrap';


import "./../../assets/common.css";

export default function Main() {
  return (
    <>
      <Header />
      <main>
        <section id="personal-information">
          <Container fluid className="pt-5">
            <div className="row">
              <div className="col">
                <Card style={{ width: '15rem' }}>
                  <Card.Img variant="top" src="./../../public/img.jpg" />
                  <Card.Body>
                    <Card.Title className="mx-1">인적사항</Card.Title>
                    <Card.Text>
                      <div>
                        <span className="me-2"><strong>이름</strong></span>
                        <span>이진우</span>
                      </div>
                      <div>
                        <span className="me-2"><strong>생년월일</strong></span>
                        <span>91.06.25</span>
                      </div>
                      <div>
                        <span className="me-2"><strong>전화번호</strong></span>
                        <span>010-2269-5901</span>
                      </div>
                      <div>
                        <span className="me-2"><strong>주소</strong></span>
                        <span>경기도 군포시 금정동</span>
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </Container>
        </section>
        <section id="self-introduction"></section>
        <section id="work-experience"></section>
        <section id="projects"></section>
        <section id="skills"></section>
        <section id="others"></section>
      </main>
      <Footer />
    </>
  );
}
