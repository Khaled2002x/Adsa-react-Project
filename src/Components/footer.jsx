import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import {
  faGithub,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";

export default function Footer() {
  return (
    <>
      <section className=" footer">
        <div className="footer_inner p-5">
          <div className="footer_inner_top row  gx-5 gy-3">
            <div className="col-12 col-lg-3">
              <div className="inner_footer m-auto d-flex flex-column gap-2">
                <div className="inner_footer_text d-flex gap-2 align-items-center">
                  <span className="glass rounded-2 fw-bold px-3 py-2">ع</span>
                  <p>عدسة</p>
                </div>
                <div className="inner_footer_text_middel">
                  <p>
                    مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار
                    المحترفين ونصائح عملية لتطوير مهاراتكم.
                  </p>
                </div>
                <div className="inner_footer_text_Icons d-flex   align-items-start gap-3">
                  <span className="icon1">
                    <FontAwesomeIcon icon={faTwitter} />
                  </span>
                  <span className="icon1">
                    <FontAwesomeIcon icon={faGithub} />
                  </span>
                  <span className="icon1">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </span>
                  <span className="icon1">
                    <FontAwesomeIcon icon={faYoutube} />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3">
              <div className="inner_footer_middel d-flex flex-column gap-4">
                <div className="col_top">
                  <h4 className="bord">استكشف</h4>
                </div>
                <div className="col_main  d-flex flex-column gap-2">
                  <Link to={"/"} className=" link_router text-decoration-none">
                    الرئيسيه
                  </Link>
                  <Link
                    to={"/Blog"}
                    className="link_router text-decoration-none"
                  >
                    المدونه
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3">
              <div className="inner_footer_middel d-flex flex-column gap-4">
                <div className="col_top">
                  <h4 className="bord">التصنيفات</h4>
                </div>
                <div className="col_main  d-flex flex-column gap-2">
                  <Link to={"/"} className=" link_router text-decoration-none">
                    إضاءة
                  </Link>
                  <Link
                    to={"/Blog"}
                    className="link_router text-decoration-none"
                  >
                    بورتريه
                  </Link>
                  <Link
                    to={"/Blog?category=تقنيات"}
                    className="link_router text-decoration-none"
                  >
                    تقنيات
                  </Link>
                  <Link
                    to={"/Blog"}
                    className="link_router text-decoration-none"
                  >
                    مناظر طبيعية
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3">
              <div className="inner_footer_middel d-flex flex-column gap-4">
                <div className="col_top">
                  <h4 className="bord">ابقى على اطلاع</h4>
                </div>
                <div className="col_main  d-flex flex-column gap-3 ">
                  <p>اشترك للحصول على أحدث المقالات والتحديثات.</p>
                  <input
                    type="email"
                    className=" rounded-3 p-3  input_email "
                    placeholder="أدخل بريدك الإلكتروني"
                  />
                  <button className="subscribe_btn p-3 rounded-5 text-white">
                    اشترك
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
