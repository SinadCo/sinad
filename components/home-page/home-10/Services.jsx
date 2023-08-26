import Link from "next/link";

const servicesData = [
  {
    bgColor: "rgba(255, 171, 51, 0.18)",
    iconSrc: "/images/icon/icon_01.svg",
    title: "Software Excellence.",
    description:
      "Sinad Solutions excels in software development, creating tailored solutions for web, mobile, and desktop, while prioritizing user-centric design and top-notch performance.",
  },
  {
    bgColor: "rgba(100, 219, 226, 0.18)",
    iconSrc: "/images/icon/icon_02.svg",
    title: "Professional Support by Expert.",
    description:
      "Experience top-notch, hands-on support from our seasoned experts, ensuring your projects run smoothly, efficiently, and successfully.",
  },
  {
    bgColor: "rgba(255, 160, 194, 0.18)",
    iconSrc: "/images/icon/icon_03.svg",
    title: "Your Digital Growth Partner.",
    description:
      "Sinad Solutions transforms your online presence with expert digital marketing strategies, from SEO to social media, driving growth and success for your brand.",
  },
  {
    bgColor: "rgba(246, 243, 255, 1)",
    iconSrc: "/images/icon/icon_04.svg",
    title: "Automated Customer Communication",
    description:
      "We excel in facilitating seamless customer communication and optimizing automation strategies for peak operational efficiency.",
  },
];

const Services = () => {
  return (
    <>
      {servicesData.map((service, index) => (
        <div
          key={index}
          className={`col-lg-3 col-sm-6`}
          data-aos="fade-up"
          data-aos-delay={`${index * 100}`}
        >
          <div className="card-style-one pe-xxl-5 position-relative mt-40">
            <div
              className="icon d-flex align-items-center justify-content-center"
              style={{ backgroundColor: service.bgColor }}
            >
              <img src={service.iconSrc} alt="icon" className="lazy-img" />
            </div>
            <h5 className="fw-500 mt-35 mb-25">
            {service.title}
              
            </h5>
            <p className="mb-25">{service.description}</p>
            {/* <Link href="/pages-menu/service-details">
              <img
                src="/images/icon/icon_05.svg"
                alt="icon"
                className="lazy-img"
              />
            </Link> */}
          </div>
          {/* /.card-style-one */}
        </div>
      ))}
    </>
  );
};

export default Services;
