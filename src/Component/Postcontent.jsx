import React from 'react';
import "../Styles/postContent.css";
import { FaHeart, FaRetweet, FaShare, FaStar, FaTag } from "react-icons/fa";
import { BsChat } from "react-icons/bs";
import { Link } from 'react-router-dom';
import Pic1 from '../Img/22.jpeg';
import Pic2 from '../Img/33.jpeg';
import Pic3 from '../Img/44.jpeg';
import Pic4 from '../Img/55.jpeg';
import Pic5 from '../Img/66.jpeg';
import Pic6 from '../Img/77.jpeg';

const Postcontent = () => {
  return (
    <div id="post">
      <div className="post_holder">
        <div className="post-header">
          <h3>Favourite Stories</h3>
        </div>
        <div className="post-content">
          <div className="post-content-head">
            <div className="post_lab">
              <h1>Br</h1>
              <div className="post_name">
                <h5>Br</h5>
                <h6>Behance shared a story</h6>
                <div className="big_post">
                  <h3>Behance shared a story</h3>
                  <p className="tym">Today, 1:00PM</p>
                  <p className="post_com">
                    {/* Comment  */}
                    We have the team that helps institute the new tech ... read
                    more
                  </p>
                </div>
              </div>
            </div>
            <div className="post_tag">
              <FaTag />
            </div>
          </div>
          <div className="sma_post">
            <p className="tym">Today, 1:00PM</p>
            <p className="post_com">
              {/* Comment  */}
              We have the team that helps institute the new tech ... read more
            </p>
          </div>

          <div className="post_cont_image">
            {/* image  */}
            <div className="post_im_box">
              <div className="post_im_box1">
                <img src={Pic4} alt="image" />
              </div>
              <div className="p_im_holder">
                <div className="post_im_box2">
                  <img src={Pic3} alt="image" />
                </div>
                <div className="post_im_box3">
                  <img src={Pic6} alt="image" />
                </div>
              </div>
            </div>
            <div className="post-btn">
              <Link to="/donate" className="link">
                <a className="post-btn-1">DONATE NOW </a>
              </Link>
              <a className="post-btn-2">SHARE </a>
            </div>
            <div className="post_icons">
              <FaHeart className="post-ic-heart post_fa" />
              <span>20</span>
              <BsChat className="post-ic-chat post_fa" />
              <span>20</span>
              <FaRetweet className="post-ic-retweet post_fa" />
              <span>20</span>
              <FaShare className="post-ic-share post_fa" />
              <span>20</span>
            </div>
          </div>
        </div>
        <div className="post-content">
          <div className="post-content-head">
            <div className="post_lab">
              <h1>Br</h1>
              <div className="post_name">
                <h5>Br</h5>
                <h6>Behance shared a story</h6>
                <div className="big_post">
                  <h3>Behance shared a story</h3>
                  <p className="tym">Today, 1:00PM</p>
                  <p className="post_com">
                    {/* Comment  */}
                    We have the team that helps institute the new tech ... read
                    more
                  </p>
                </div>
              </div>
            </div>
            <div className="post_tag">
              <FaTag />
            </div>
          </div>
          <div className="sma_post">
            <p className="tym">Today, 1:00PM</p>
            <p className="post_com">
              {/* Comment  */}
              We have the team that helps institute the new tech ... read more
            </p>
          </div>

          <div className="post_cont_image">
            {/* image  */}
            <div className="post_im_box">
              <div className="post_im_box1">
                <img src={Pic4} alt="image" />
              </div>
              {/* <div className="p_im_holder">
                <div className="post_im_box2">
                  <img src="./image/44.jpeg" alt="image" />
                </div>
                <div className="post_im_box3">
                  <img src="./image/77.jpeg" alt="image" />
                </div>
              </div> */}
            </div>
            <div className="post-btn">
              <Link to="/donate" className="link">
                <a className="post-btn-1">DONATE NOW </a>
              </Link>
              <a className="post-btn-2">SHARE </a>
            </div>
            <div className="post_icons">
              <FaHeart className="post-ic-heart post_fa" />
              <span>20</span>
              <BsChat className="post-ic-chat post_fa" />
              <span>20</span>
              <FaRetweet className="post-ic-retweet post_fa" />
              <span>20</span>
              <FaShare className="post-ic-share post_fa" />
              <span>20</span>
            </div>
          </div>
        </div>
        {/* <div className="bt">
            <FaHeart />
        </div> */}
      </div>
    </div>
  );
}

export default Postcontent
