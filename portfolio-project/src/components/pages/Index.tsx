import Header from "./../commons/Header";
import Footer from "./../commons/Footer";
import "./../../assets/common.css";

export default function Main() {
  return (
    <>
      <Header />
      <main>
        <section id="personal-information"></section>
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
