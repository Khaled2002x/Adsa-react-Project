import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Category({ categories }) {
  const { name, count } = categories;
  return (
    <>
      <Link
        className="col-6 col-lg-3 text-decoration-none"
        to={`/Blog?category=${encodeURIComponent(name)}`}
      >
        <div>
          <div className="inner_box p-3  d-flex align-items-start flex-column gap-2 ">
            <span className="icon p-2 rounded-3">
              {" "}
              <FontAwesomeIcon icon={faGear} />{" "}
            </span>
            <p className=" fw-bold text-white">{name}</p>
            <p>{count} مقاله</p>
          </div>
        </div>
      </Link>
    </>
  );
}
