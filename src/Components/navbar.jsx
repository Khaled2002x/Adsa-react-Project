import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo-GdqARQRt.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark position-fixed w-100 z-3 ">
      <div className="container container_nav ">
        <Link className="navbar-brand" to={"/"} end>
          <div className="content_brand d-flex justify-content-center align-items-center gap-3">
            <div className="brand_image">
              <img src={logo} className="w-100  logo_image" alt="" />
            </div>
            <div className="content_brand_text">
              <p className="m-0">عدسه</p>
              <p className="m-0 content_brand_text_P ">
                عالم التصوير الفوتوغرافي
              </p>
            </div>
          </div>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0 rounded-pill px-3  py-2">
            <li className="nav-item ">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                الرئيسيه
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="Blog"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                المدونه
              </NavLink>
            </li>
          </ul>
          <ul className="d-flex align-items-center justify-content-center gap-3">
            <li>
              <FontAwesomeIcon icon={faSearch} />
            </li>
            <li>
              <button className="btn read_btn">ابدأ القراءة</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
