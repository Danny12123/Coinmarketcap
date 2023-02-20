import React from 'react';
import { FaFacebookMessenger } from 'react-icons/fa';
import NavBar from '../Component/NavBar';
import "../Styles/donate.css";

//Route

//component
//icons
const Donate = () => {

  return (
    <div>
      <NavBar />

      <div className="donate">
        <div className="donate_box">
          <div className="don_box_1">
            <img src="./image/77.jpeg" alt="image" />
          </div>

          <div className="don_box_2">
            <h5>John Benson reshared a Story.</h5>
            <p>Landslide Road due to Heavy Rain, Let’s help!!!</p>
            <h6>Campaign by:</h6>
            <div className="don_box_pro">
              <img src="./image/55.jpeg" alt="image_profile" />
              <div>
                <h6>Olivia Royce</h6>
                <p>Verified user</p>
              </div>
              <div className="don_ic">
                <FaFacebookMessenger />
              </div>
            </div>
            <div>
              <div>
                <h6>1000.0 $</h6>
                <p>110 Paticipants</p>
              </div>
              <div className="prog_bar"></div>
              <div className="don_btn">
                <a href="#" className="don_btn_1">
                  DONATE NOW
                </a>
                <a href="#" className="don_btn_2">
                  SHARE
                </a>
              </div>
            </div>
          </div>
        </div>

        <section id="donate_sec">
          <div className="don_nav">
            <ul>
              <li>Story</li>
              <li>FAQ</li>
              <li>Update</li>
              <li>Comment</li>
            </ul>
          </div>
          <div className="don_cont">
            <h6>Short summary</h6>
            <p>
              HÀ GIANG — The northern mountainous province of Hà Giang is
              urgently reporting several roads that have been severely damaged
              by landslides due to many days of heavy rain. District People’s
              Committee, Hà Giang Province, said the highway from Mèo Vạc
              District centre to some communes including Tát Ngà, Nậm Ban,
              Earthquakes are a major cause of landslides. Landslides occur when
              masses of rock, earth material, or debris flows move down a slope
              due to gravity. Landslides can occur on any terrain if the
              conditions are right, and cause significant damage and casualties
              to people and property. In this lesson, students learn about
              earthquake-induced landslides and the associated hazards, and how
              and why landslides occur. In addition, students discuss steps they
              can take to reduce landslide hazards. Unlike previous lessons,
              Lesson 8 begins with a Tabletop Exercise. The objective of a
              Tabletop Exercise is to simulate a complex situation with multiple
              possible responses before the students have obtained all of the
              knowledge of the lesson concepts. The historical basis that served
              as the impetus for the Tabletop Exercise was the 2004 Southeast
              Asian tsunami, and the story of ten-year-old Tilly Smith. A
              British tourist traveling with her family in Thailand, she
              recognized the receding shoreline and strange surface bubbles from
              a tsunami lesson conducted just weeks before the event. She
              immediately warned her parents, who warned beachgoers and hotel
              staff of the impending tsunami. She is directly credited with
              saving hundreds of lives as a result of her timely and
              knowledgeable actions.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}


export default Donate
