import React, { useEffect, useState } from "react";
import Footer from "./footer";
import Data from "../main.json";
import Posts from "./Artical-card";

export default function Blog() {
  const [category, Setcategory] = useState("all");
  const [Post, Setpost] = useState(Data.posts);

  useEffect(() => {
    category === "all"
      ? Setpost(Data.posts)
      : Setpost(Data.posts.filter((post) => post.category === category));
  }, [category]);

  return (
    <>
      <div className="main p-5 ">
        <div className="hero m-auto mt-5 p-3 ">
          <div className="hero_inner  d-flex flex-column gap-3 align-items-center text-white p-4 text-center">
            <span className="online ">مرحباً بك في عدسة</span>
            <h1 className="text-center m-0">
              استكشف <span className="fn"> مقالاتنا</span>
            </h1>
            <p className=" advice text-center">
              اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
            </p>
          </div>
          <div className="select_category d-flex flex-md-row w-100   gap-4 flex-column   justify-content-between align-items-center ">
            <div className=" w-100">
              <input
                type="text"
                placeholder="بحث في مقالات "
                className=" px-3 py-2 rounded-3 search_input text-white"
              />
            </div>

            <div className="select_category_button  w-100 row  g-3 ">
              <div className="col-4 col-md-3">
                <div
                  className={`category_btn ${category === "all" ? "active" : ""}  rounded-4 text-white border-0`}
                >
                  <button
                    onClick={() => {
                      Setcategory("all");
                    }}
                    className={`categoryBtn  text-white `}
                  >
                    جميع المقالات{" "}
                  </button>
                </div>
              </div>
              <div className="col-4 col-md-3">
                <div
                  className={`category_btn  ${category === "إضاءة" ? "active" : ""} rounded-4 text-white border-0`}
                >
                  <button
                    onClick={() => {
                      Setcategory("إضاءة");
                    }}
                    className={`categoryBtn   text-white`}
                  >
                    إضاءة{" "}
                  </button>
                </div>
              </div>
              <div className="col-4 col-md-3">
                <div
                  className={`category_btn ${category === "بورتريه" ? "active" : ""}  rounded-4 text-white border-0`}
                >
                  <button
                    onClick={() => {
                      Setcategory("بورتريه");
                    }}
                    className={`categoryBtn   text-white`}
                  >
                    بورتريه
                  </button>
                </div>
              </div>
              <div className="col-4 col-md-3">
                <div
                  className={`category_btn text-center ${category === "تقنيات" ? "active" : ""} rounded-4 text-white border-0`}
                >
                  <button
                    onClick={() => {
                      Setcategory("تقنيات");
                    }}
                    className={`categoryBtn  text-white `}
                  >
                    تقنيات
                  </button>
                </div>
              </div>
              <div className="col-4 col-md-3">
                <div
                  className={`category_btn ${category === "معدات" ? "active" : ""} rounded-4 text-white border-0`}
                >
                  <button
                    onClick={() => {
                      Setcategory("معدات");
                    }}
                    className={`categoryBtn text-white`}
                  >
                    معدات
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="main_contenet">
            <div className="main_contenet_text">
              <div className="main_contenet_text_right">
                <p>
                  عرض {Post.length} مقالات في{" "}
                  {category === "all" ? "" : category}
                </p>
              </div>
            </div>
            <div className="row g-3 w-100 m-auto">
              {Post.map((post) => {
                return <Posts post={post} key={post.id} />;
              })}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
