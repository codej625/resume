import Container from "react-bootstrap/Container";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./../../assets/css/common.css";


export default function Footer() {
  return (
    <footer className="footer">
      <div className="bg-body-tertiary pt-3 pb-3">
        <Container className="container">
          <div className="row">
            <div className="col">
              <div className="footer__title"></div>
              <div className="d-flex justify-content-center">
                <div className="pe-1">✉️</div>
                <div className="pe-5 gradient-color">dkwksla@naver.com</div>
                <div className="pe-1">📞</div>
                <div className="pe-5"><a className="gradient-color" href="tel:01022695901">010-2269-5901</a></div>
                <div className="pe-1">💻</div>
                <div className="gradient-color">codej625</div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  )
}