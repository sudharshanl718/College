import React from 'react'

const Courses = () => {
  return (
    <div>
        <div className='courses1'>
        <div className='ch1'>
            <h1>Courses We Offered</h1>
            <p>we provide a wide range of programs designed to empower students with the skills and knowledge they need to succeed in their chosen fields. Our courses are designed with a focus on both theoretical and practical learning.</p>
        </div>
        <div className='c1'>
            <div className='card'>
                <h3>Diploma Programs</h3>
                <p>Our Diploma programs offer foundational knowledge and hands-on training in various fields. These programs are ideal for students looking to start their careers early or pursue further studies.</p>
                <ul>
                  <a href='/Apply'><li>Diploma in Civil Engineering</li></a>
                  <a href='/Apply'><li>Diploma in Mechanical Engineering</li></a>
                  <a href='/Apply'><li>Diploma in Electrical Engineering</li></a>
                  <a href='/Apply'><li>Diploma in Computer Science Engineering</li></a>
                  <a href='/Apply'><li>Diploma in Electronics and Communication Engineering</li></a>
                </ul>
            </div>
            <div className='card'>
                <h3>Undergraduate Programs (B.Tech)</h3>
                <p>Our B.Tech programs are designed to provide in-depth knowledge and expertise in the chosen discipline, preparing students for successful careers in engineering and technology.</p>
                <ul>
                <a href='Apply'><li>B.tech in Civil Engineering</li></a>
                <a href='/Apply'><li>B.tech in Mechanical Engineering</li></a>
                <a href='/Apply'><li>B.tech in Electrical Engineering</li></a>
                <a href='/Apply'><li>B.tech in Computer Science Engineering</li></a>
                <a href='/Apply'><li>B.tech in Electronics and Communication Engineering</li></a>
                </ul>
            </div>
            <div className='card'>
                <h3>Postgraduate Programs (M.Tech)</h3>
                <p>Our M.Tech programs aim to offer advanced specialization and research opportunities, helping students to achieve mastery in their fields.</p>
                <ul>
                <a href='/Apply'><li>M.Tech in Structural Engineering</li></a>
                <a href='/Apply'><li>M.Tech in Computer Science and Engineering</li></a>
                <a href='/Apply'><li>M.Tech in Power Systems</li></a>
                <a href='/Apply'><li>M.Tech in VLSI Design</li></a>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Courses