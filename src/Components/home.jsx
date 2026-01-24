import React from "react";
import { Link } from "react-router-dom";
import src from "../assets/images/OIP.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faPen, faStar } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
export default function Home() {
  return (
    <>
      <div className="main  text-white">
        <section className="hero_section gap-3 d-flex flex-column justify-content-center align-items-center">
          <span className="online mt-4">مرحباً بك في عدسة</span>
          <h1 className="text-center m-0">
            اكتشف <span className="fn">فن</span>
            <br /> التصوير الفوتوغرافي
          </h1>
          <h3 className=" advice text-center">
            انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في <br />
            التصوير.
          </h3>
          <div className="hero_buttons d-flex justify-content-center align-items-center gap-3">
            <Link to={"/Blog"}>
              <button className=" arrow_btn read_btn p-2">
                استكشف المقالات <FontAwesomeIcon icon={faArrowLeft} />{" "}
              </button>
            </Link>
            <button className="learn_more rounded-4  p-2">اعرف المزيد</button>
          </div>
          <div className="info row my-4">
            <div className="col-6 col-md-3">
              <div className="inner_info d-flex flex-column align-items-center  rounded-4 px-4 py-3  justify-content-center ">
                <span className="address_icon">
                  <FontAwesomeIcon icon={faAddressBook} />
                </span>
                <h3 className="m-0">+50</h3>
                <p className="journ m-0">مقالة</p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="inner_info d-flex flex-column align-items-center  rounded-4 px-4 py-3  justify-content-center ">
                <span className="address_icon">
                  <FontAwesomeIcon icon={faUsers} />
                </span>
                <h3 className="m-0">+10ألف</h3>
                <p className="journ m-0">قارئ</p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="inner_info d-flex flex-column align-items-center  rounded-4 px-4 py-3  justify-content-center ">
                <span className="address_icon">
                  <FontAwesomeIcon icon={faFolder} />
                </span>
                <h3 className="m-0">4</h3>
                <p className="journ m-0">تصنيفات</p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="inner_info d-flex flex-column align-items-center  rounded-4 px-4 py-3  justify-content-center ">
                <span className="address_icon">
                  <FontAwesomeIcon icon={faPen} />
                </span>
                <h3 className="m-0">6</h3>
                <p className="journ m-0">كاتب</p>
              </div>
            </div>
          </div>
        </section>
        <section className="Selected_Articles p-5">
          <div className="Selected_Articles_inner  m-auto ">
            <div className="top d-flex justify-content-between align-items-center">
              <div className="Selected_Articles_top ">
                <div className="Selected_Articles_top_right d-flex flex-column gap-3 justify-content-center  align-items-start">
                  <span className="online ">مميز</span>
                  <h1> مقالات مختارة</h1>
                  <p>محتوى منتقى لبدء رحلة تعلمك عرض الكل</p>
                </div>
              </div>
              <div className="Selected_Articles_top_left ">
                <Link to={"/Blog"}>
                  <button className="Show_all">
                    عرض الكل <FontAwesomeIcon icon={faArrowLeft} />{" "}
                  </button>
                </Link>
              </div>
            </div>
            <div className="Selected_Articles_main row   g-3">
              <div className="col-12">
                <div className="inner_card  overflow-hidden   rounded-4 ">
                  <div className="inner_card_right w-50 position-relative">
                    <img
                      src={src}
                      className="w-100  object-fit-cover h-100"
                      alt=""
                    />
                    <span className=" position-absolute top-0 end-0 mt-2 mx-3 rounded-4 spechial">
                      <FontAwesomeIcon icon={faStar} />
                      مميز
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
