import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
export default function ArticalCard({ post }) {
  const {
    id,
    slug,
    title,
    excerpt,
    content,
    category,
    author,
    image,
    date,
    readTime,
  } = post;
  const { name, avatar, role } = author;
  return (
    <>
      <div className="col-12 col-md-4">
        <div className="inner recent_Articles_card_inner rounded-3  position-relative ">
          <div className="recent_Articles_card_top h-50  w-100">
            <img
              src={image}
              alt={slug}
              className="w-100 h-100 object-fit-cover  rounded-top-3 "
            />
            <span className="techniq position-absolute top-0  end-0 rounded-5 px-3 py-1 mt-2 me-2">
              {category}
            </span>
          </div>
          <div className="recent_Articles_card_bottom p-3">
            <div className="recent_Articles_card_bottom_top">
              <p>
                {" "}
                <FontAwesomeIcon icon={faStopwatch} /> {readTime} {date}{" "}
              </p>
              <h2 className="  text-white">{title}</h2>
              <p>{excerpt}</p>
              <hr />
            </div>
            <div className="recent_Articles_card_bottom_bottom d-flex justify-content-between align-items-center">
              <div className="bottom_right  d-flex align-items-center gap-2">
                <div className="">
                  <img
                    src={avatar}
                    alt={role}
                    className="w-100 bottom_img_right rounded-circle object-fit-cover"
                  />
                </div>
                <div className="bottom_right_text">
                  <p className=" fw-bold text-white m-0">{name}</p>
                  <p className="m-0">{role}</p>
                </div>
              </div>
              <div className="recent_Articles_card_bottom_left">
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  className="arrow p-1 rounded-circle "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
