import Link from "next/link";

const OurAim = () => {
  const aimItems = [
    {
      title: "About us",
      heading: "Your Comfort is Our Priority",
      text: "At Sinad Solutions, innovation is at the core of everything we do. As a dynamic software development and digital marketing agency, we blend creativity with technical expertise to empower businesses for success in the digital age.",
      list: [
        "Amazing communication.",
        "Best trending designing experience.",
        "Measurable Results, and Unwavering Support.",
      ],
      link: "/pages-menu/about-us-v1",
    },
  ];

  const imageItems = [
    { src: "/images/innovation.avif", alt: "shape" },
    {
      src: "/images/shape/shape_09.svg",
      alt: "shape",
      className: "shapes shape-one",
    },
    {
      src: "/images/shape/shape_10.svg",
      alt: "shape",
      className: "shapes shape-two",
    },
    {
      src: "/images/shape/shape_11.svg",
      alt: "shape",
      className: "lazy-img shapes shape-four",
    },
    {
      src: "/images/shape/shape_12.svg",
      alt: "shape",
      className: "lazy-img shapes shape-five",
    },
    {
      src: "/images/shape/shape_13.svg",
      alt: "shape",
      className: "lazy-img shapes shape-seven",
    },
  ];

  const cardItem = {
    imgSrc: "/images/icon/icon_06.svg",
    name: "- Ahmed Tibin",
    position: "CTO",
    text: "Driving Digital Success, Always Innovating.",
  };

  return (
    <div className="row">
      <div className="col-lg-5 col-md-6 ms-auto order-md-last">
        {aimItems.map((item, index) => (
          <div
            className="block-style-one pt-35"
            data-aos="fade-left"
            key={index}
          >
            <div className="title-style-one">
              <div className="sc-title text-uppercase">{item.title}</div>
              <h2 className="main-title fw-bold tx-dark m0">{item.heading}</h2>
            </div>
            <p className="text-lg tx-dark pt-35 pb-40 lg-pb-20">{item.text}</p>
            <ul className="style-none list-item fs-18">
              {item.list.map((listItem, index) => (
                <li key={index}>{listItem}</li>
              ))}
            </ul>
          </div>
        ))}

       {/*  <Link
          href="/pages-menu/about-us-v1"
          className="more-btn tran3s fw-500 fs-18"
          data-aos="fade-left"
        >
          Discover More <i className="bi bi-arrow-right"></i>
        </Link> */}
      </div>
      {/* End .col */}

      <div className="col-md-6 order-md-first " data-aos="fade-right">
        <div className="img-meta d-inline-block position-relative ps-3 ps-lg-5 pb-50 md-mt-50 sm-mt-80">
          {imageItems.map((item, index) => (
            <img
              key={index}
              src={item.src}
              alt={item.alt}
              className={item.className}
            />
          ))}

          <div className="card-one" data-aos="fade-up" data-aos-delay="200">
            <div className="icon d-flex align-items-center justify-content-center rounded-circle">
              <img src={cardItem.imgSrc} alt="shape" className="lazy-img" />
            </div>
            <div className="name fs-18 fw-500 tx-dark mb-10">
              - {cardItem.name},{" "}
              <span className="opacity-50">{cardItem.position}</span>
            </div>
            <p className="fs-18 m0">{cardItem.text}</p>
          </div>
          {/* /.card-one */}
        </div>
        {/* /.img-meta */}
      </div>
    </div>
  );
};

export default OurAim;
