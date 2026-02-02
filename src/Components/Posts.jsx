import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faStar,
  faStopwatch,
} from "@fortawesome/free-solid-svg-icons";
export default function Posts({ post }) {
  const {
    image,
    id,
    title,
    excerpt,
    content,
    category,
    author,
    readTime,
    featured,
    date,
  } = post;
  const { name, avatar, role } = post;
  return (
    <>
      <div className="col-12">
        <div className="inner_card  overflow-hidden   d-flex    rounded-4 ">
          <div className="inner_card_right w-50  h-100">
            <img
              src={image}
              loading="lazy"
              className="w-100 Selected_Articles_main_image object-fit-cover h-100 "
              alt=""
            />
            <span className=" position-absolute top-0 end-0 mt-2 mx-3 rounded-4 spechial p-3">
              <FontAwesomeIcon icon={faStar} />
              مميز
            </span>
          </div>
          <div className="inner_card_left w-50 h-100 p-2 d-flex  flex-column gap-3 p-5 position-relative">
            <div className="inner_card_left_top d-flex  align-items-start gap-3">
              <span className="online  ">{category}</span>
              <span className="read_only rounded-3 p-2">
                <FontAwesomeIcon icon={faStopwatch} />
                {readTime}
              </span>
            </div>
            <div className=" d-flex flex-column gap-">
              {" "}
              <h2>{title}</h2>
              <p>{excerpt}</p>
            </div>
            <div className="inner_card_footer d-flex justify-content-between align-items-center mt-5 w-100">
              <div className="inner_card_footer_right  d-flex align-items-center justify-content-center gap-4 ">
                <div className="">
                  <img
                    loading="lazy"
                    src={avatar}
                    className="w-100 object-fit-cover footer_image "
                    alt={role}
                  />
                </div>
                <div className="inner_card_footer_right_text ">
                  <h4 className="">{name} </h4>
                  <p className=" "> {date}</p>
                </div>
              </div>
              <div className="inner_card_footer_left">
                <p className=" text-white">
                  اقرأ المقال <FontAwesomeIcon icon={faArrowLeft} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
