
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
          min-height: 85vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 60px 20px;
          background: #f8f6f1;
          overflow: hidden;
        }

        .notfound-container {
          width: 100%;
          max-width: 1100px;
          margin: auto;
        }

        .notfound-content {
          text-align: center;
        }

        .notfound-label {
          display: inline-block;
          padding: 9px 18px;
          background: #eee7dc;
          border-radius: 30px;
          color: #99764b;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .notfound-number {
          margin: 15px 0 0;
          color: #292720;
          font-size: clamp(120px, 23vw, 240px);
          font-weight: 900;
          line-height: 1;
          letter-spacing: -12px;
        }

        .notfound-number span {
          color: #b89b75;
        }

        .notfound-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 90px;
          height: 90px;
          margin-top: 25px;
          background: #292720;
          border-radius: 50%;
          color: #fff;
          font-size: 36px;
          transform: rotate(-10deg);
          box-shadow: 0 12px 30px #29272020;
        }

        .notfound-title {
          margin-top: 30px;
          color: #292720;
          font-size: clamp(27px, 4vw, 40px);
          font-weight: 800;
          letter-spacing: -1px;
        }

        .notfound-description {
          max-width: 450px;
          margin: 15px auto 0;
          color: #77736d;
          font-size: 15px;
          line-height: 1.9;
        }

        .notfound-buttons {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 14px;
          margin-top: 30px;
        }

        .notfound-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 14px 24px;
          border: 1px solid #292720;
          border-radius: 5px;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .notfound-btn-primary {
          background: #292720;
          color: white;
        }

        .notfound-btn-primary:hover {
          background: #99764b;
          border-color: #99764b;
          color: white;
          transform: translateY(-3px);
        }

        .notfound-btn-secondary {
          background: transparent;
          color: #292720;
          border-color: #d5d0c7;
        }

        .notfound-btn-secondary:hover {
          background: white;
          border-color: #99764b;
          color: #99764b;
        }

        .notfound-bottom {
          margin-top: 55px;
          padding-top: 22px;
          border-top: 1px solid #e5dfd5;
          color: #918b80;
          font-size: 12px;
          letter-spacing: 1px;
        }

        .notfound-bottom svg {
          margin-right: 7px;
          color: #99764b;
        }

        .notfound-decoration {
          position: absolute;
          color: #e8e0d4;
          font-size: 100px;
          opacity: 0.5;
          pointer-events: none;
        }

        .notfound-decoration-left {
          top: 15%;
          left: 7%;
          transform: rotate(-20deg);
        }

        .notfound-decoration-right {
          right: 7%;
          bottom: 12%;
          transform: rotate(18deg);
        }

        @media (max-width: 576px) {
          .notfound-page {
            min-height: 80vh;
            padding: 45px 18px;
          }

          .notfound-number {
            font-size: 130px;
            letter-spacing: -7px;
          }

          .notfound-icon {
            width: 70px;
            height: 70px;
            font-size: 28px;
          }

          .notfound-title {
            font-size: 27px;
          }

          .notfound-description {
            font-size: 14px;
          }

          .notfound-buttons {
            flex-direction: column;
            align-items: stretch;
          }

          .notfound-btn {
            width: 100%;
          }

          .notfound-bottom {
            margin-top: 40px;
            line-height: 1.8;
          }

          .notfound-decoration {
            font-size: 55px;
          }

          .notfound-decoration-left {
            top: 8%;
            left: 3%;
          }

          .notfound-decoration-right {
            right: 3%;
            bottom: 7%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .notfound-btn {
            transition: none;
          }
        }
      `}</style>

      <section className="notfound-page position-relative">
        <FaBookOpen className="notfound-decoration notfound-decoration-left" />
        <FaBookOpen className="notfound-decoration notfound-decoration-right" />

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
