import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Experience {
  company: string;
  type: string;
  period: string;
  duration: string;
  department: string;
  roles: string[];
};

export default function MultipleItems({ ...data }) {
  
  const settings = {
    dots: data.option,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: data.device > 1264 ? 3 : 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider-container">
      <Slider { ...settings }>
        {data.data.map((exp: Experience, index: number) => (
          <article className="px-2" key={index}>
            <div className="rounded-5 bg-white p-4">
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-column">
                  <div className="d-flex align-items-center mb-2">
                    <h5 className="m-0 me-2">{exp.company}</h5>
                    <span className="text-black-50 fs-8">{exp.type}</span>
                  </div>
                  <div className="text-black-50 mt-2">{exp.period}</div>
                  <div className="text-black-50 fs-8">{exp.duration}</div>
                </div>
                <div className="d-flex flex-column">
                  <div className="text-black-50 mb-2">{exp.department}</div>
                  <div className="fs-8">
                    {exp.roles.map((role, idx) => (
                      <div className="rounded-5 mb-2 text-center" key={idx}>
                        {role}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </Slider>
    </div>
  );
}