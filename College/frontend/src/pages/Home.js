import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='main'>
      <div className='home' id='home'>
        <div className='hd1'>
          <h1 className='h1'>World's Biggest University</h1> <br/>
          <p className='p1'>
            Best University College offers world-class education with a blend of theoretical knowledge and practical insights. Experienced lecturers and teachers guide students from diploma to postgraduate levels. The state-of-the-art facilities and vibrant campus life prepare students for successful careers and fulfilling lives.
          </p> <br/> <br/>
          <button className='bt1'><a href='#courses'>Visit us to know more</a></button>
        </div>
      </div>

      <div className='courses' id='courses'>
        <div className='ch1'>
            <h1>Courses We Offered</h1>
            <p>we provide a wide range of programs designed to empower students with the skills and knowledge they need to succeed in their chosen fields. Our courses are designed with a focus on both theoretical and practical learning.</p>
        </div>
        <div className='c1'>
            <div className='card'>
                <h3>Diploma Programs</h3>
                <p>Our Diploma programs offer foundational knowledge and hands-on training in various fields. These programs are ideal for students looking to start their careers early or pursue further studies.</p>
                <button className='bt1'><Link to={"/Courses"}>View more</Link></button>
            </div>
            <div className='card'>
                <h3>Undergraduate Programs (B.Tech)</h3>
                <p>Our B.Tech programs are designed to provide in-depth knowledge and expertise in the chosen discipline, preparing students for successful careers in engineering and technology.</p>
                <button className='bt1'><Link to={"/Courses"}>View more</Link></button>
            </div>
            <div className='card'>
                <h3>Postgraduate Programs (M.Tech)</h3>
                <p>Our M.Tech programs aim to offer advanced specialization and research opportunities, helping students to achieve mastery in their fields.</p>
                <button className='bt1'><Link to={"/Courses"}>View more</Link></button>
            </div>
        </div>
      </div>

      <div className='campus'>
        <div className='ch2'>
          <h1>Our Multiple Campuses</h1>
          <p>Best University College offers unparalleled education across multiple vibrant campuses. Experience world-class facilities and a dynamic learning environment in Bengaluru, Chennai, and Hyderabad. Our dedicated faculty and state-of-the-art infrastructure empower students to excel and innovate</p>
        </div>
        <div className='campus-card'>
          <div className='campus-card1'>
            <h1>Bengaluru</h1>
          </div>
          <div className='campus-card2'>
            <h1>Chennai</h1>
          </div>
          <div className='campus-card3'>
            <h1>Hyderabad</h1>
          </div>
        </div>
      </div>

      <div className='facility'>
        <div className='ch3'>
          <h1>Our facilities</h1>
          <p>Discover our state-of-the-art library, expansive playground for all sports, and savor nutritious meals crafted to energize you throughout the day.</p>
        </div>
        <div className='f-card'>
          <div className='f-card1'>
            <h3>World Class Library</h3>
            <p>Access to a world-class library that fuels curiosity and sparks innovation.</p> <br/> <br/><br/>
          </div>
          <div className='f-card2'>
            <h3>Largest Play Ground</h3>
            <p>Experience endless fun and fitness with our expansive playground.</p>
          </div>
          <div className='f-card3'>
            <h3>Tasty and Healthy Food</h3>
            <p>Enjoy a delightful array of tasty and healthy food options.</p>
          </div>
        </div>
      </div>
      

      <div className='review-h'>
        <div className='ch4'>
          <h1>What Our Students Says</h1>
          <p>Our students' experiences speak for themselves! Read what our alumni and current students have to say about their journey at Best University, and explore their insights on academics, campus life, and personal growth.</p>
        </div>
        <div class="review-section">
          <div class="review">
            <div class="student-name">John Doe</div>
            <div class="rating">
                <span class="star">&#9733;</span><span class="star">&#9733;</span><span class="star">&#9733;</span><span class="star">&#9733;</span><span class="star">&#9734;</span>
            </div>
            <div class="review-text">
                The college has a great environment for learning. The faculty is supportive, and the campus infrastructure is excellent. I enjoyed my time here!
            </div>
          </div>

          <div class="review">
            <div class="student-name">Emily Smith</div>
            <div class="rating">
                <span class="star">&#9733;</span><span class="star">&#9733;</span><span class="star">&#9733;</span><span class="star">&#9733;</span><span class="star">&#9733;</span>
            </div>
            <div class="review-text">
                Amazing experience! The college offers various opportunities for students to grow academically and personally. I highly recommend it!
            </div>
          </div>

          <div class="review">
            <div class="student-name">Michael Johnson</div>
            <div class="rating">
                <span class="star">&#9733;</span><span class="star">&#9733;</span><span class="star">&#9733;</span><span class="star">&#9734;</span><span class="star">&#9734;</span>
            </div>
            <div class="review-text">
                The college is good overall, but there are some areas that could be improved, like more extracurricular activities.
            </div>
          </div>

          <div class="review">
            <div class="student-name">Sophia Williams</div>
            <div class="rating">
                <span class="star">&#9733;</span><span class="star">&#9733;</span><span class="star">&#9733;</span><span class="star">&#9733;</span><span class="star">&#9733;</span>
            </div>
            <div class="review-text">
                Excellent faculty and infrastructure. The placement support is also commendable. Had a great learning experience!
            </div>
          </div>
        </div>
      </div>

      <div className='enroll'>
        <div className='ed'>
          <h1>Enroll for our various online courses anywhere from the world</h1>
          <Link to={"/Contact"}><button>CONTACT US</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Home