<a href='https://titanwarlord007.github.io/portfolio/'>https://titanwarlord007.github.io/portfolio/</a>
/* <div class="fade-in"> 
  <h1>Hello World!</h1> 
</div> */

/* CSS */
.fade-in {
  opacity: 0;
  transition: opacity 1s ease-in-out;
}
.fade-in.active {
  opacity: 1;
}

/* HTML */
/* <div class="slide-fade-in">
  <h1>Hello World!</h1>
</div> */

/* CSS */
.slide-fade-in {
  opacity: 0;
  transform: translateY(20%);
  transition: all 0.5s ease-in-out;
}
.slide-fade-in.active {
  opacity: 1;
  transform: translateY(0%);
}

/* HTML */
/* <h1 class="typing">Frontend Developer</h1> */

/* CSS */
.typing {
  overflow: hidden;
  border-right: 0.15em solid orange;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: 0.15em;
  animation:
    typing 3s steps(30, end),
    blink-caret 0.75s step-end infinite;
}
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
@keyframes blink-caret {
  from, to {
    border-color: transparent;
  }
  50% {
    border-color: orange;
  }
}

/* HTML */
/* <button class="bounce-on-hover">Click me!</button> */

/* CSS */
.bounce-on-hover {
  background-color: blue;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  transition: transform 0.5s ease-in-out;
}
.bounce-on-hover:hover {
  transform: translateY(-5px);
  animation: bounce 0.5s ease-in-out infinite alternate;
}
@keyframes bounce {
  from {
    transform: translateY(-5px);
  }
  to {
    transform: translateY(0px);
  }
}

/* //////////////////////// */

    Homepage:

    An introduction that highlights your skills and experience as a frontend developer
    A section for your portfolio projects
    A section for your skills and technologies you are proficient in
    A call-to-action button for clients to contact you

    Portfolio Projects:

    Include 3-5 of your best projects that showcase your skills in frontend development
    For each project, include a short description, screenshots, and a link to the live website or GitHub repository
    Emphasize the problem you were trying to solve and how you approached it
    Highlight the technologies you used and any special features you implemented

    Skills and Technologies:

    List the skills and technologies you are proficient in, such as HTML, CSS, JavaScript, jQuery, React, etc.
    Include any relevant certifications or training you have completed

    About Me:

    A brief bio that explains your background and experience as a frontend developer
    Highlight your strengths and how you can add value to clients
    Include a professional photo of yourself

    Contact:

    A form or contact details that clients can use to get in touch with you
    Make sure to include your email, phone number, and links to your social media profiles (if applicable)

Remember to keep your portfolio simple, easy to navigate, and visually appealing. Use high-quality images and keep your descriptions concise and to the point. With a well-designed portfolio, you can showcase your skills and expertise in frontend development and attract potential clients.
