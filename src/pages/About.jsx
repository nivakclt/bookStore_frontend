import { Link } from 'react-router-dom'
import {
  FaBookOpen,
  FaHeart,
  FaUsers,
  FaArrowRight,
  FaQuoteLeft
} from 'react-icons/fa'

function About() {
  return (
    <>
      <style>{`
        .about-page {
          color: #292720;
          overflow: hidden;
        }

        .about-hero {
          background: #f8f6f1;
          padding: 65px 0;
        }

        .about-container {
          max-width: 1200px;
          margin: auto;
        }

        .about-label {
          display: inline-block;
          color: #99764b;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 3px;
        }

        .about-title {
          font-size: clamp(42px, 5vw, 70px);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -2px;
        }

        .about-title span,
        .about-heading span {
          color: #99764b;
        }

        .about-description {
          max-width: 500px;
          color: #77736d;
          font-size: 16px;
          line-height: 1.9;
        }

        .about-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 13px 22px;
          border: 1px solid #292720;
          border-radius: 5px;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          transition: 0.3s ease;
        }

        .about-btn-dark {
          background: #292720;
          color: white;
        }

        .about-btn-dark:hover {
          background: #99764b;
          border-color: #99764b;
          color: white;
          transform: translateY(-3px);
        }

        .about-btn-light {
          color: #292720;
          border-color: #d5d0c7;
        }

        .about-btn-light:hover {
          background: white;
          border-color: #99764b;
          color: #99764b;
        }

        .about-trust {
          display: flex;
          flex-wrap: wrap;
          gap: 22px;
          margin-top: 35px;
        }

        .about-trust-item {
          display: flex;
          align-items: center;
          gap: 9px;
          color: #68645d;
          font-size: 13px;
        }

        .about-trust-item svg {
          color: #99764b;
        }

        .about-hero-image {
          position: relative;
          padding: 0 0 30px 20px;
        }

        .about-hero-image::before {
          content: "";
          position: absolute;
          top: -18px;
          right: -12px;
          width: 65%;
          height: 75%;
          background: #e5ddcf;
          border-radius: 6px;
        }

        .about-hero-image img {
          position: relative;
          width: 100%;
          height: 440px;
          object-fit: cover;
          border-radius: 6px;
          box-shadow: 0 18px 45px #29272018;
        }

        .about-image-note {
          position: absolute;
          bottom: 0;
          left: 0;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 17px;
          background: white;
          border-radius: 5px;
          box-shadow: 0 8px 25px #00000012;
        }

        .about-image-note > svg {
          color: #99764b;
          font-size: 25px;
        }

        .about-image-note h6 {
          margin: 0 0 5px;
          font-size: 13px;
          font-weight: 700;
        }

        .about-image-note p {
          margin: 0;
          color: #77736d;
          font-size: 11px;
        }

        .about-story {
          padding-top: 100px;
          padding-bottom: 100px;
        }

        .about-story-image {
          position: relative;
          padding: 0 20px 20px 0;
        }

        .about-story-image::after {
          content: "";
          position: absolute;
          z-index: -1;
          right: 0;
          bottom: 0;
          width: 65%;
          height: 65%;
          background: #eee7dc;
        }

        .about-story-image img {
          display: block;
          width: 100%;
          height: 420px;
          object-fit: cover;
          border-radius: 5px;
        }

        .about-image-caption {
          position: absolute;
          bottom: 35px;
          left: 12px;
          max-width: calc(100% - 40px);
          padding: 12px 16px;
          background: white;
          color: #514b42;
          font-size: 12px;
          box-shadow: 0 5px 20px #00000010;
        }

        .about-heading {
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 800;
          line-height: 1.2;
          letter-spacing: -1px;
        }

        .about-paragraph {
          color: #77736d;
          font-size: 14px;
          line-height: 1.9;
        }

        .about-text-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-top: 12px;
          color: #99764b;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
        }

        .about-text-link svg {
          transition: transform 0.3s ease;
        }

        .about-text-link:hover {
          color: #6e5231;
        }

        .about-text-link:hover svg {
          transform: translateX(5px);
        }

        .about-mission {
          padding: 85px 20px;
          background: #f8f6f1;
          text-align: center;
        }

        .about-mission-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 58px;
          height: 58px;
          margin: 0 auto 25px;
          background: #eae1d3;
          border-radius: 50%;
          color: #99764b;
          font-size: 22px;
        }

        .about-mission-text {
          max-width: 620px;
          margin: 20px auto 0;
          color: #77736d;
          font-size: 14px;
          line-height: 1.9;
        }

        .about-features {
          padding-top: 95px;
          padding-bottom: 95px;
        }

        .about-feature-card {
          position: relative;
          height: 100%;
          padding: 30px;
          background: white;
          border: 1px solid #eae6df;
          border-radius: 6px;
          transition: transform 0.3s ease,
            box-shadow 0.3s ease, border-color 0.3s ease;
        }

        .about-feature-card:hover {
          transform: translateY(-7px);
          border-color: #d5c5ad;
          box-shadow: 0 15px 35px #29272012;
        }

        .about-feature-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 52px;
          height: 52px;
          margin-bottom: 24px;
          background: #f5f0e8;
          border-radius: 5px;
          color: #99764b;
          font-size: 21px;
        }

        .about-feature-number {
          position: absolute;
          top: 25px;
          right: 23px;
          color: #e6e0d7;
          font-size: 32px;
          font-weight: 800;
        }

        .about-feature-card h4 {
          margin-bottom: 12px;
          font-size: 19px;
          font-weight: 700;
        }

        .about-feature-card p {
          margin: 0;
          color: #77736d;
          font-size: 13px;
          line-height: 1.9;
        }

        .about-quote {
          padding: 75px 20px;
          background: #292720;
          text-align: center;
        }

        .about-quote-icon {
          margin-bottom: 20px;
          color: #c8a77b;
          font-size: 28px;
        }

        .about-quote h2 {
          color: white;
          font-size: clamp(27px, 4vw, 42px);
          font-weight: 700;
          line-height: 1.5;
        }

        .about-quote p {
          margin: 18px 0 0;
          color: #c9c4bb;
          font-size: 13px;
        }

        .about-cta-section {
          padding-top: 75px;
          padding-bottom: 75px;
        }

        .about-cta {
          padding: 60px 20px;
          background: #f8f6f1;
          border: 1px solid #eee8de;
          border-radius: 7px;
          text-align: center;
        }

        .about-cta-label {
          color: #99764b;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .about-cta h2 {
          margin-top: 20px;
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 800;
          line-height: 1.25;
        }

        .about-cta p {
          margin: 18px 0;
          color: #77736d;
          font-size: 14px;
        }

        @media (max-width: 991px) {
          .about-hero {
            padding: 45px 0;
          }

          .about-title {
            font-size: clamp(40px, 6vw, 58px);
          }

          .about-hero-image img {
            height: 370px;
          }

          .about-story {
            padding-top: 70px;
            padding-bottom: 70px;
          }

          .about-story-image img {
            height: 360px;
          }

          .about-features {
            padding-top: 70px;
            padding-bottom: 70px;
          }
        }

        @media (max-width: 767px) {
          .about-hero {
            padding: 35px 0 55px;
          }

          .about-title {
            font-size: clamp(38px, 10vw, 54px);
            letter-spacing: -1px;
          }

          .about-description {
            font-size: 14px;
          }

          .about-trust {
            gap: 14px;
          }

          .about-trust-item {
            font-size: 12px;
          }

          .about-hero-image {
            margin-top: 20px;
            padding-left: 12px;
          }

          .about-hero-image img {
            height: 340px;
          }

          .about-story {
            padding-top: 60px;
            padding-bottom: 60px;
          }

          .about-story-image img {
            height: 320px;
          }

          .about-story-content {
            margin-top: 15px;
          }

          .about-heading {
            font-size: 34px;
          }

          .about-mission {
            padding: 65px 20px;
          }

          .about-features {
            padding-top: 65px;
            padding-bottom: 65px;
          }

          .about-feature-card {
            padding: 26px;
          }

          .about-quote {
            padding: 60px 20px;
          }

          .about-cta-section {
            padding-top: 45px;
            padding-bottom: 45px;
          }

          .about-cta {
            padding: 45px 18px;
          }
        }

        @media (max-width: 400px) {
          .about-btn {
            width: 100%;
          }

          .about-hero-image img {
            height: 280px;
          }

          .about-story-image img {
            height: 260px;
          }

          .about-trust {
            flex-direction: column;
          }

          .about-image-note {
            padding: 12px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .about-page *,
          .about-page *::before,
          .about-page *::after {
            transition: none !important;
          }
        }
      `}</style>

      <div className="about-page">

        {/* Hero Section */}
        <section className="about-hero">
          <div className="container about-container">
            <div className="row align-items-center g-5">
              <div className="col-lg-7">
                <span className="about-label">
                  OUR STORY
                </span>

                <h1 className="about-title mt-3">
                  Every book opens
                  <br />
                  <span>a new world.</span>
                </h1>

                <p className="about-description mt-4">
                  More than just a bookstore, we are a place
                  where imagination grows, ideas come alive,
                  and every reader finds a story worth keeping.
                </p>

                <div className="d-flex flex-wrap gap-3 mt-4">
                 

                  <a
                    href="#our-story"
                    className="about-btn about-btn-light"
                  >
                    Discover Our Story
                  </a>
                </div>

                <div className="about-trust">
                  <div className="about-trust-item">
                    <FaBookOpen />
                    Stories for everyone
                  </div>

                  <div className="about-trust-item">
                    <FaHeart />
                    Made for book lovers
                  </div>
                </div>
              </div>

              <div className="col-lg-5">
                <div className="about-hero-image">
                  <img
                    src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1000&q=85"
                    alt="Library filled with books"
                  />

                  <div className="about-image-note">
                    <FaBookOpen />

                    <div>
                      <h6>Find your next favourite</h6>
                      <p>One book can change everything.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section
          className="container about-container about-story"
          id="our-story"
        >
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="about-story-image">
                <img
                  src="https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&w=1000&q=85"
                  alt="A reader enjoying a book"
                  loading="lazy"
                />

                <div className="about-image-caption">
                  A little escape between the pages.
                </div>
              </div>
            </div>

            <div className="col-lg-6 about-story-content">
              <span className="about-label">
                WHO WE ARE
              </span>

              <h2 className="about-heading mt-3">
                A little about
                <br />
                <span>BookStore.</span>
              </h2>

              <p className="about-paragraph mt-4">
                We believe books have the power to inspire,
                educate, comfort, and bring people together.
                Every page holds a possibility, and every
                reader has a story of their own.
              </p>

              <p className="about-paragraph">
                From captivating fiction to knowledge that
                sparks new ideas, BookStore makes discovering
                and exploring books a simple, enjoyable
                experience.
              </p>

              <p className="about-paragraph">
                Our goal is to create a welcoming space where
                readers can discover their next favourite book
                and give their own books a new home.
              </p>

              <Link
                to="/booklist"
                className="about-text-link"
              >
                Find your next read
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="about-mission">
          <div className="container">
            <div className="about-mission-icon">
              <FaHeart />
            </div>

            <span className="about-label">
              WHAT WE BELIEVE
            </span>

            <h2 className="about-heading mt-3">
              Stories bring us
              <br />
              <span>closer together.</span>
            </h2>

            <p className="about-mission-text">
              Our mission is to connect readers with meaningful
              stories, encourage curiosity, and make the joy
              of reading accessible to everyone.
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="container about-container about-features">
          <div className="text-center mb-5">
            <span className="about-label">
              THE BOOKSTORE EXPERIENCE
            </span>

            <h2 className="about-heading mt-3">
              A little more than
              <br />
              <span>just books.</span>
            </h2>

            <p className="about-paragraph mt-3">
              Everything we do begins with a love for reading.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="about-feature-card">
                <div className="about-feature-icon">
                  <FaBookOpen />
                </div>

                <span className="about-feature-number">
                  01
                </span>

                <h4>Discover</h4>

                <p>
                  Explore different genres, uncover hidden
                  gems, and find stories that speak to you.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="about-feature-card">
                <div className="about-feature-icon">
                  <FaHeart />
                </div>

                <span className="about-feature-number">
                  02
                </span>

                <h4>Connect</h4>

                <p>
                  Discover new perspectives and share the
                  experiences that make reading special.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="about-feature-card">
                <div className="about-feature-icon">
                  <FaUsers />
                </div>

                <span className="about-feature-number">
                  03
                </span>

                <h4>Share</h4>

                <p>
                  Give pre-loved books another chapter and
                  let great stories reach new readers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quote */}
        <section className="about-quote">
          <div className="container">
            <FaQuoteLeft className="about-quote-icon" />

            <h2>
              "A book is a little world
              <br className="d-none d-md-block" />
              waiting to be discovered."
            </h2>

            <p>For every reader, there is a story.</p>
          </div>
        </section>

        {/* Closing Section */}
        <section className="container about-container about-cta-section">
          <div className="about-cta">
            <span className="about-cta-label">
              YOUR NEXT CHAPTER STARTS HERE
            </span>

            <h2>
              Ready to find your
              <br />
              next great read?
            </h2>

            <p>
              Turn the page and discover something wonderful.
            </p>

          
          </div>
        </section>

      </div>
    </>
  )
}

export default About
