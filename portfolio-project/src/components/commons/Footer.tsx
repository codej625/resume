import Container from "react-bootstrap/Container";
import './../../assets/common.css'


export default function Footer() {
  return (
    <footer className="footer">
      <div className="bg-body-tertiary pt-3 pb-3">
        <Container className="container">
          <div className="row">
            <div className="col">
              <div className="footer__title"></div>
              <div>
                <p>Email dkwksla@naver.com</p> 
                <p>Phone <a href="tel:01012345678">010-2269-5901</a></p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  )
}