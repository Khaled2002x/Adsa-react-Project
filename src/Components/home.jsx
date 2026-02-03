import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ArticalCard from "./Artical-card";
import Footer from "./footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faPen } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import Data from "../main.json";
import Posts from "./Posts";
import CategoryStyle from "./Category";
export default function Home() {
  const [Post, SetPost] = useState([]);
  const [Category, SetCategory] = useState([]);

  useEffect(() => {
    const printed_post = [...Data.posts];
    printed_post.length = 3;
    SetPost(printed_post);
    SetCategory(Data.categories);
  }, []);

  return (
    <>
      <div className="main  text-white m-auto">
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
          <div className="info row my-4 g-3 m-auto">
            <div className="col-6 col-md-3">
              <div className="inner_info m-auto d-flex flex-column align-items-center  rounded-4 px-4 py-3  justify-content-center ">
                <span className="address_icon">
                  <FontAwesomeIcon icon={faAddressBook} />
                </span>
                <h3 className="m-0">+50</h3>
                <p className="journ m-0">مقالة</p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="inner_info m-auto d-flex flex-column align-items-center  rounded-4 px-4 py-3  justify-content-center ">
                <span className="address_icon">
                  <FontAwesomeIcon icon={faUsers} />
                </span>
                <h3 className="m-0">+10ألف</h3>
                <p className="journ m-0">قارئ</p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="inner_info d-flex m-auto flex-column align-items-center  rounded-4 px-4 py-3  justify-content-center ">
                <span className="address_icon">
                  <FontAwesomeIcon icon={faFolder} />
                </span>
                <h3 className="m-0">4</h3>
                <p className="journ m-0">تصنيفات</p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="inner_info d-flex m-auto flex-column align-items-center  rounded-4 px-4 py-3  justify-content-center ">
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
          <div className="Selected_Articles_inner   m-auto ">
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
                  <button className="Show_all ">
                    عرض الكل <FontAwesomeIcon icon={faArrowLeft} />{" "}
                  </button>
                </Link>
              </div>
            </div>
            <div className="Selected_Articles_main row   g-3">
              {Post.map((post) => {
                return <Posts key={post.id} post={post} />;
              })}
            </div>
          </div>
        </section>
        <section className="Category_section p-5">
          <div className="Category_section_content ">
            <div className="Category_section_content_top d-flex flex-column gap-3 text-center align-items-center">
              <span className="online mt-4">مرحباً بك في عدسة</span>
              <h2>استكشف حسب الموضوع</h2>
              <p>اعثر على محتوى مصمم حسب اهتماماتك</p>
            </div>
            <div className="Category_section_content_main">
              <div className="box row g-3">
                {Category.map((category, index) => {
                  return <CategoryStyle key={index} categories={category} />;
                })}
              </div>
            </div>
          </div>
        </section>
        <section className="recent_Articles  p-5 m-auto">
          <div className="recent_Articles_inner  m-auto">
            <div className="recent_Articles_inner_text d-flex justify-content-between align-items-center">
              <div className="recent_Articles_inner_top_right d-flex flex-column gap-3   align-items-start">
                <span className="online mt-4">الأحدث</span>
                <h1>الأحدث أحدث المقالات</h1>
                <p>محتوى جديد طازج من المطبعة</p>
              </div>
              <div className="recent_Articles_inner_top_left">
                <Link to={"/Blog"}>
                  <button className="Show_all  ">
                    عرض الكل <FontAwesomeIcon icon={faArrowLeft} />{" "}
                  </button>
                </Link>
              </div>
            </div>
            <div className="recent_Articles_card row gy-3 ">
              {Post.map((post) => {
                return <ArticalCard key={post.id} post={post} />;
              })}
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
