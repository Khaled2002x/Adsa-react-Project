import React, { useEffect, useState } from "react";
import Footer from "./footer";
import { useSearchParams } from "react-router-dom";
import Data from "../main.json";
import Posts from "./Artical-card";

export default function Blog() {
  const [Post, SetPost] = useState([]);
  const [category, Setcategory] = useState("all");
  const [categoryFromHome] = useSearchParams();
  const SelectedCategory = categoryFromHome.get("category");

  useEffect(() => {
    category === "all"
      ? SetPost(Data.posts)
      : SetPost(
          Data.posts.filter((post) => {
            return post.category === category;
          }),
        );
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
          <div className="select_category d-flex  justify-content-between align-items-center ">
            <div className="">
              <input
                type="text"
                placeholder="بحث في مقالات "
                className=" px-3 py-2 rounded-3 search_input text-white"
              />
            </div>
            <div className="select_category_button  d-flex  align-items-center gap-3">
              <button
                onClick={() => {
                  Setcategory("all");
                }}
                className="category_btn  p-3 rounded-4 text-white border-0"
              >
                جميع المقالات{" "}
              </button>
              <button
                onClick={() => {
                  Setcategory("إضاءة");
                }}
                className="category_btn p-3 rounded-4 text-white border-0"
              >
                إضاءة{" "}
              </button>

              <button
                onClick={() => {
                  Setcategory("بورتريه");
                }}
                className="category_btn p-3 rounded-4 text-white border-0"
              >
                بورتريه
              </button>
              <button
                onClick={() => {
                  Setcategory("تقنيات");
                }}
                className="category_btn p-3 rounded-4 text-white border-0"
              >
                تقنيات
              </button>
              <button
                onClick={() => {
                  Setcategory("معدات");
                }}
                className="category_btn p-3 rounded-4 text-white border-0"
              >
                معدات
              </button>
              <button
                onClick={() => {
                  Setcategory("مناظر طبيعية");
                }}
                className="category_btn p-3 rounded-4 text-white border-0"
              >
                مناظر طبيعية{" "}
              </button>
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
