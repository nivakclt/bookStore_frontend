
import { Link } from 'react-router-dom'
import {
  FaBookOpen,
  FaHome,
  FaSearch
} from 'react-icons/fa'

function Pnf() {
  return (
    <>
      <style>{`
        .notfound-page {
          min-height: 90vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 70px 20px;
          background: #faf9f6;
          overflow: hidden;
          position: relative;
        }

        .notfound-container {
          width: 100%;
          max-width: 1000px;
          margin: auto;
          position: relative;
          z-index: 2;
        }

        .notfound-content {
          text-align: center;
        }

        .notfound-label {
          display: inline-block;
          padding: 10px 20px;
          background: #f0ede6;
          border: 1px solid #e7dfd2;
          border-radius: 50px;
          color: #99764b;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 3px;
        }

        .notfound-number {
          margin: 20px 0 0;
          color: #292723;
          font-size: clamp(140px, 25vw, 260px);
          font-weight: 800;
          line-height: 0.95;
          letter-spacing: -15px;
          font-family: Georgia, serif;
        }

        .notfound-number span {
          color: #b49a7a;
          font-style: italic;
          font-weight: 400;
        }

        .notfound-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 82px;
          height: 82px;
          margin-top: 30px;
          background: #292723;
          border-radius: 50%;
          color: #fff;
          font-size: 30px;
          box-shadow: 0 12px 30px #29272320;
          transition: all 0.4s ease;
        }

        .notfound-icon:hover {
          transform: rotate(-12deg) scale(1.08);
          background: #99764b;
        }

        .notfound-title {
          margin-top: 28px;
          color: #292723;
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 400;
          letter-spacing: -1.5px;
          font-family: Georgia, serif;
        }

        .notfound-description {
          max-width: 470px;
          margin: 18px auto 0;
          color: #77736d;
          font-size: 15px;
          line-height: 2;
        }

        .notfound-buttons {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 15px;
          margin-top: 35px;
        }

        .notfound-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 11px;
          padding: 15px 28px;
          border: 1px solid #292723;
          border-radius: 3px;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.5px;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .notfound-btn-primary {
          background: #292723;
          color: white;
        }

        .notfound-btn-primary:hover {
          background: #99764b;
          border-color: #99764b;
          color: white;
          transform: translateY(-3px);
          box-shadow: 0 8px 20px #99764b25;
        }

        .notfound-btn-secondary {
          background: transparent;
          color: #292723;
          border-color: #d8d2c8;
        }

        .notfound-btn-secondary:hover {
          background: #f0ede6;
          border-color: #b49a7a;
          color: #99764b;
          transform: translateY(-3px);
        }

        .notfound-bottom {
          margin-top: 65px;
          padding-top: 25px;
          border-top: 1px solid #e8e3da;
          color: #999187;
          font-size: 11px;
          letter-spacing: 2px;
        }

        .notfound-bottom svg {
          margin-right: 9px;
          color: #99764b;
        }

        .notfound-decoration {
          position: absolute;
          color: #eae4d9;
          font-size: 110px;
          opacity: 0.6;
          pointer-events: none;
        }

        .notfound-decoration-left {
          top: 15%;
          left: 8%;
          transform: rotate(-20deg);
        }

        .notfound-decoration-right {
          right: 8%;
          bottom: 12%;
          transform: rotate(18deg);
        }

        .notfound-decoration-top {
          top: 12%;
          right: 18%;
          font-size: 45px;
          opacity: 0.4;
          transform: rotate(15deg);
        }

        @media (max-width: 576px) {
          .notfound-page {
            min-height: 80vh;
            padding: 50px 18px;
          }

          .notfound-number {
            font-size: 135px;
            letter-spacing: -8px;
          }

          .notfound-icon {
            width: 68px;
            height: 68px;
            font-size: 25px;
          }

          .notfound-title {
            font-size: 27px;
            line-height: 1.3;
          }

          .notfound-description {
            font-size: 14px;
          }

          .notfound-buttons {
            flex-direction: column;
            align-items: stretch;
            max-width: 300px;
            margin: 30px auto 0;
          }

          .notfound-btn {
            width: 100%;
          }

          .notfound-bottom {
            margin-top: 45px;
            line-height: 2;
            font-size: 9px;
          }

          .notfound-decoration {
            font-size: 55px;
          }

          .notfound-decoration-left {
            top: 7%;
            left: 3%;
          }

          .notfound-decoration-right {
            right: 3%;
            bottom: 5%;
          }

          .notfound-decoration-top {
            right: 8%;
            top: 8%;
            font-size: 25px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .notfound-btn,
          .notfound-icon {
            transition: none;
          }
        }
      `}</style>

      <section className="notfound-page">

        <FaBookOpen className="notfound-decoration notfound-decoration-left" />
        <FaBookOpen className="notfound-decoration notfound-decoration-right" />
        <FaBookOpen className="notfound-decoration notfound-decoration-top" />

        <div className="notfound-container">
          <div className="notfound-content">

            <span className="notfound-label">
              OOPS! PAGE NOT FOUND
            </span>

            <h1 className="notfound-number">
              4<span>0</span>4
            </h1>

            <div className="notfound-icon">
              <FaBookOpen />
            </div>

            <h2 className="notfound-title">
              Looks like this page is missing.
            </h2>

            <p className="notfound-description">
              Looks like this story took an unexpected turn.
              The page you're looking for doesn't exist or
              may have been moved. Let's get you back to
              something worth reading.
            </p>

            <div className="notfound-buttons">

              <Link
                to="/"
                className="notfound-btn notfound-btn-primary"
              >
                <FaHome />
                Back to Home
              </Link>

              <Link
                to="/booklist"
                className="notfound-btn notfound-btn-secondary"
              >
                <FaSearch />
                Explore Books
              </Link>

            </div>

            <div className="notfound-bottom">
              <FaBookOpen />
              EVERY LOST PAGE LEADS TO A NEW STORY
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Pnf
