// OTHER CODE
//001 auto remove progress bar
// FUNCTIONS
//001 Resorces for the carousel images
//002 adding extra header
//003 to remove extra header
//004 event on clicking next
//005 event on clicking Previous
//006 open close icon change on click
//007 on clicking previous year
//364 home()
//009 aboutUs()
//010 contactUs()
//011 section for books
//012 semesterWisePreviousYearQuestionPaper()
//013 live learning function
//014 BCA Gpt learning function
//015 submit function
//016 Arrival Function
//017 Arrival Function
//018 on clicking image
// 773 showMore()

//  Appendices



// loader auto vanish
window.addEventListener("load",()=>{

      setTimeout(() => {
        
        document.getElementById("preloader").remove();
      }, 2000);

 
})

// Auto change option in header
const options = [
  "Books",
  "Previous Year Questions",
  "BCA GPT",
  "Live Learning Section",
  "Contact Us ",
  "About Us",
  "Home",
  "Codeathons",
  "Quick Revision"
];
const optionRelatedFunctions = [
  "books()",
  "pyq()",
  "bcaGpt()",
  "liveLearning()",
  "contactUs()",
  "aboutUs()",
  "home()",
  "createArray()",
  "getQuestion()"
];
document.getElementById(
  "slideOptions"
).innerHTML = `<p onclick="${optionRelatedFunctions[6]},removeExtraHeader(),iconChange()">${options[6]}</p>`;
document.getElementById("slideOptions").style =
  "animation: slideOptions 2s ease 0s 1 forwards;";
function changeOptions() {
  setTimeout(() => {
    document.getElementById(
      "slideOptions"
    ).innerHTML = `<p onclick="${optionRelatedFunctions[0]},removeExtraHeader(),iconChange()">${options[0]}</p>`;
    document.getElementById("slideOptions").style =
      "animation: slideOptions 2s ease 0s 1 forwards;";
  }, 2000);
  setTimeout(() => {
    document.getElementById(
      "slideOptions"
    ).innerHTML = `<p onclick="${optionRelatedFunctions[1]},removeExtraHeader(),iconChange()">${options[1]}</p>`;
  }, 4000);
  setTimeout(() => {
    document.getElementById(
      "slideOptions"
    ).innerHTML = `<p onclick="${optionRelatedFunctions[2]},removeExtraHeader(),iconChange()">${options[2]}</p>`;
  }, 6000);
  setTimeout(() => {
    document.getElementById(
      "slideOptions"
    ).innerHTML = `<p onclick="${optionRelatedFunctions[3]},removeExtraHeader(),iconChange()">${options[3]}</p>`;
  }, 8000);
  setTimeout(() => {
    document.getElementById(
      "slideOptions"
    ).innerHTML = `<p onclick="${optionRelatedFunctions[4]},removeExtraHeader(),iconChange()">${options[4]}</p>`;
  }, 10000);
  setTimeout(() => {
    document.getElementById(
      "slideOptions"
    ).innerHTML = `<p onclick="${optionRelatedFunctions[5]},removeExtraHeader(),iconChange()">${options[5]}</p>`;
  }, 12000);
  setTimeout(() => {
    document.getElementById(
      "slideOptions"
    ).innerHTML = `<p onclick="${optionRelatedFunctions[6]},removeExtraHeader(),iconChange()">${options[6]}</p>`;
  }, 14000);
  setTimeout(() => {
    document.getElementById(
      "slideOptions"
    ).innerHTML = `<p onclick="${optionRelatedFunctions[7]},removeExtraHeader(),iconChange()">${options[7]}</p>`;
  }, 16000);
  setTimeout(() => {
    document.getElementById(
      "slideOptions"
    ).innerHTML = `<p onclick="${optionRelatedFunctions[8]},removeExtraHeader(),iconChange()">${options[8]}</p>`;
  }, 18000);
}
changeOptions();
setInterval(() => {
  changeOptions();
}, 18000);











//001 Resorces for the carousel images
const sources = ["assets/c (1).jpg", "assets/c (2).jpg", "assets/c (4).jpg"];
function changeCarouselImages() {
  setInterval(() => {
    setTimeout(() => {
      try {
        document.getElementById("carouselImage").src = sources[2];
      } catch (error) {}
    }, 1000);
    setTimeout(() => {
      try {
        document.getElementById("carouselImage").src = sources[1];
      } catch (error) {}
    }, 2000);
    setTimeout(() => {
      try {
        document.getElementById("carouselImage").src = sources[0];
      } catch (error) {}
    }, 3000);
  }, 3000);
}

changeCarouselImages();

function pauseImage() {
  //  console.log("pauseImage()");
  document.getElementById("carouselImage").style = "animation:none;";
  sources[0] = document.getElementById("carouselImage").src;
  sources[1] = document.getElementById("carouselImage").src;
  sources[2] = document.getElementById("carouselImage").src;
}

function resumeImage() {
  document.getElementById("carouselImage").style =
    "animation:carouselImage 1s ease 0s 100 forwards;";
  //  console.log("resumeImage()");
  sources[0] = "assets/c (1).jpg";
  sources[1] = "assets/c (2).jpg";
  sources[2] = "assets/c (4).jpg";
}

// 002 adding extra header
function extraHeader() {
 document.getElementById("top").click();
  let a = document.createElement("div");
  a.innerHTML = ` <div id="extra-header"  class="contactForm" onmouseleave="iconChange()">
  <div class="container" onclick="removeExtraHeader()" >
    <u id="options-in-extra-header" onclick="pauseImage()"
    onmousemove="resumeImage()"">
      <li class=" mx-3 my-2 fs-5  overflow-y-hidden" onclick="home()" >Home </li>
      <li class=" mx-3 my-2 fs-5  h-5 overflow-y-hidden" onclick="books()">Books</li>
      <li class=" mx-3 my-2  fs-5 overflow-y-hidden" onclick="pyq()" id="test">PYQs</li>
      <li class=" mx-3 my-2  fs-5 overflow-y-hidden" onclick="bcaGpt()">BCA GPT </li>
      <li class=" mx-3 my-2  fs-5 overflow-y-hidden" onclick="liveLearning()">Live Learning </li>
      <li class=" mx-3 my-2  fs-5 overflow-y-hidden" onclick="getQuestion()">Quick Revision</li>
      <li class=" mx-3 my-2  fs-5 overflow-y-hidden" onclick="createArray()">Codeathons</li>
      <li class=" mx-3 my-2  fs-5 overflow-y-hidden" onclick="contactUs()">Contact Us</li>
      <li class=" mx-3 my-2  fs-5 overflow-y-hidden" onclick="aboutUs()">About Us</li>
    </u>
    <div id="login-signup">
    <button type="button" class="mx-3 my-5 cnow" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="iconChange()">Login
</button>
    <button type="button" class="mx-3 my-5 cnow" data-bs-toggle="modal" data-bs-target="#exampleSignUpModal"  onclick="iconChange()">SignUp
</button>
    
    
    </div>
  </div>
</div>`;

  document.getElementById("header").after(a);
}

//003 to remove extra header
function removeExtraHeader() {
  try {
    document.getElementById("extra-header").remove();
  } catch (e) {}
}

// 004 event on clicking next
let previousNotes;
function next() {
  previousNotes = document.getElementById("notes").innerHTML;

  document.getElementById(
    "notes"
  ).outerHTML = `  <div class="container"  id="notes">


    <!-- java -->
    <a  href="https://drive.google.com/file/d/1EiPwYuB6uFEMn6nCZqqFkITEXj8OIXMK/view?usp=sharing"
    target="_blank">
    <div class="card notesCard">
      <img src="assets/java.png" class=" size" alt="Java Notes">
      <div class="card-body cardBody">
        <h5 class="card-title">Java Notes</h5>
        <p class="card-text">Get handwritten notes of Java</p>
        </div>
        </div>
        </a>



    <!-- Python -->
    <a  href="https://drive.google.com/file/d/1EiPwYuB6uFEMn6nCZqqFkITEXj8OIXMK/view?usp=sharing"
    target="_blank">
    <div class="card notesCard">
  
      <img src="assets/python.png" class=" size" alt=" Python Notes">
      <div class="card-body cardBody">
        <h5 class="card-title">Python Notes</h5>
        <p class="card-text">Get handwritten notes of Python</p>
        </div>
        </div>
        </a>


    <!-- HTML -->
    <a  href="https://drive.google.com/file/d/1EiPwYuB6uFEMn6nCZqqFkITEXj8OIXMK/view?usp=sharing"   target="_blank">
    <div class="card notesCard">
 
      <img src="assets/html.png" class=" size" alt="Notes">
      <div class="card-body cardBody">
        <h5 class="card-title">HTML Notes</h5>
        <p class="card-text">Get handwritten notes of HTML</p>
        </div>
        </div>
        </a>

  
    
  </div>
`;
  document.getElementById(
    "next-prev"
  ).innerHTML = `<div class="container"  id="next-prev">
      
<button onclick="prev()" id="prev">Previous</button>

</div>`;
}

// 005 event on clicking Previous
function prev() {
  // console.log(previousNotes);

  document.getElementById("notes").innerHTML = previousNotes;
  document.getElementById(
    "next-prev"
  ).innerHTML = `<div class="container"  id="next-prev">
  
  <button onclick="next()" id="next">Next</button>
  </div>`;

  previousNotes = document.getElementById("notes").innerHTML;
}

// 006 open close icon change on click
function iconChange() {

  let a = document.getElementById("open-close-icon");
  // console.log(a.src);
  if (
    a.src == "http://127.0.0.1:5500/assets/open.png" ||
    a.src == "https://ankit-gour.github.io/bcaAspirants/assets/open.png"
  ) {
    a.src = "assets/close.png";
    extraHeader();
    // console.log("if");
  } else {
    // console.log("else");

    removeExtraHeader();

    a.src = "assets/open.png";
  }
}

// 007 on clicking previous year
function pyq() {
  iconChange();
  document.getElementById("main").innerHTML = `

  <div class="container my-3" id="pyqContainer">
<p id="pyqSectionHeading">Semester Wise Previous Year Questions</p>

    <!-- First Sem-->
    <div class=" pyqCard">
      
    <a  target="_blank"  style="cursor:pointer;"onclick="semesterWisePreviousYearQuestionPapers(First_Semester,'First'),iconChange(),removeExtraHeader()"  >
    <div class="card-body cardBody">
        <h5 class="card-title">First Semester PYQs</h5>
        <p class="card-text">Get yearwise Previous Year Questions of First Semester</p>
        </div>
        </a>
    </div>

    <!-- Second Sem-->
    <div class=" pyqCard">
      
    <a  target="_blank"  style="cursor:pointer;"onclick="semesterWisePreviousYearQuestionPapers(Second_Semester,'Second'),iconChange(),removeExtraHeader()" >
    <div class="card-body cardBody">
        <h5 class="card-title">Second Semester PYQs</h5>
        <p class="card-text">Get yearwise Previous Year Questions of Second Semester</p>
        </div>
        </a>
    </div>
    <!-- Third Sem-->
    <div class=" pyqCard">
    
    <a  target="_blank"  style="cursor:pointer;"onclick="semesterWisePreviousYearQuestionPapers(Third_Semester,'Third'),iconChange(),removeExtraHeader()" >
    <div class="card-body cardBody">
    <h5 class="card-title">Third Semester PYQs</h5>
    <p class="card-text">Get yearwise Previous Year Questions of Third Semester</p>
    </div>
    </a>
    </div>
    <!-- Fourth Sem-->
    <div class=" pyqCard">
    
    <a  target="_blank"  style="cursor:pointer;"onclick="semesterWisePreviousYearQuestionPapers(Fourth_Semester,'Fourth'),iconChange(),removeExtraHeader()">
    <div class="card-body cardBody">
    <h5 class="card-title">Fourth Semester PYQs</h5>
    <p class="card-text">Get yearwise Previous Year Questions of Fourth Semester</p>
    </div>
    </a>
    </div>
    
    <!-- Fifth Sem-->
    <div class="pyqCard">

    <a  target="_blank"  style="cursor:pointer;"onclick="semesterWisePreviousYearQuestionPapers(Fifth_Semester,'Fifth'),iconChange(),removeExtraHeader()">
      <div class="card-body cardBody">
        <h5 class="card-title">Fifth Semester PYQs</h5>
        <p class="card-text">Get yearwise Previous Year Questions of Fifth Semester</p>
        </div>
        </a>
    </div>
    <!-- Sixth S
    em-->
    <div class=" pyqCard">
      
    <a  target="_blank"  style="cursor:pointer;" onclick="semesterWisePreviousYearQuestionPapers(Sixth_Semester,'Sixth'),iconChange(),removeExtraHeader()" >
      <div class="card-body cardBody">
        <h5 class="card-title">Sixth Semester PYQs</h5>
        <p class="card-text">Get yearwise Previous Year Questions of Sixth Semester</p>
        </div>
        </a>
        </div>
    
    
    
    
    
    
    </div> 
    
`;
}

// 008 what happens on clicking home button



function home() {
  removeExtraHeader();
  iconChange()
  document.getElementById("main").innerHTML = `<div id="superMainContainer" >
  <!-- 1login modal -->
  <!-- 2Signup modal -->
  <!-- 3main -->
  
  
     <!--  Login Modal -->
           <div
       class=" modal fade"
     id="exampleModal"
     tabindex="-1"
     aria-labelledby="exampleModalLabel"
     aria-hidden="true"
   >
     <div   class=" modal-dialog">
       <div   class=" modal-content">
         <div   class=" modal-header">
           <h1   class=" modal-title fs-5" id="exampleModalLabel">Login</h1>
           <button
             type="button"
               class=" btn-close"
             data-bs-dismiss="modal"
             aria-label="Close"
           ></button>
         </div>
         <div   class=" modal-body">
           <!--modal body  -->
           <form>
             <div   class=" mb-3">
               <label for="exampleInputEmail1"   class=" form-label"
                 >Email address</label
               >
               <input
                 type="email"
                   class=" form-control"
                 id="exampleInputEmail1"
                 aria-describedby="emailHelp"
               />
               <div id="emailHelp"   class=" form-text">
                 We'll never share your email with anyone else.
               </div>
             </div>
             <div   class=" mb-3">
               <label for="exampleInputPassword1"   class=" form-label"
                 >Password</label
               >
               <input
                 type="password"
                   class=" form-control"
                 id="exampleInputPassword1"
               />
               <div   class=" center">
                 <button type="submit"   class=" cnow my-5">Login</button>
               </div>
             </div>
           </form>
         </div>
       </div>
     </div>
          </div>
  
   <!--  signup Modal -->
          <div
       class=" modal fade"
     id="exampleSignUpModal"
     tabindex="-1"
     aria-labelledby="exampleModalLabel"
     aria-hidden="true"
   >
     <div   class=" modal-dialog">
       <div   class=" modal-content">
         <div   class=" modal-header">
           <h1   class=" modal-title fs-5" id="exampleModalLabel">Sign Up</h1>
           <button
             type="button"
               class=" btn-close"
             data-bs-dismiss="modal"
             aria-label="Close"
           ></button>
         </div>
         <div   class=" modal-body">
           <!--modal body  -->
           <form>
             <div   class=" mb-3">
               <label for="exampleInputEmail1"   class=" form-label"
                 >Email address</label
               >
               <input
                 type="email"
                   class=" form-control"
                 id="exampleInputEmail1"
                 aria-describedby="emailHelp"
               />
               <div id="emailHelp"   class=" form-text">
                 We'll never share your email with anyone else.
               </div>
             </div>
             <div   class=" mb-3">
               <label for="exampleInputPassword1"   class=" form-label"
                 >Password</label
               >
               <input
                 type="password"
                   class=" form-control"
                 id="exampleInputPassword1"
               />
               <div   class=" center">
                 <button type="submit"   class=" cnow my-5">Sign Up</button>
               </div>
             </div>
           </form>
         </div>
       </div>
     </div>
          </div>
  
          <main id="main">
       
        <!-- alert -->
        
        <!-- carousel -->
  
        <div id="carouselContainer">
          <div>
            <img
              src="assets/c (1).jpg"
              id="carouselImage"
              onclick="pauseImage()"
              onmousemove="resumeImage()"
            />
          </div>
        </div>
  
        <div   class=" container" id="notes">
          <a          href="https://drive.google.com/file/d/1EiPwYuB6uFEMn6nCZqqFkITEXj8OIXMK/view?usp=sharing"
            target="_blank"  >
          <!-- c++ -->
          <div   class=" card notesCard">
            <img src="assets/c++.png"   class=" size" alt="Notes" />
            <div   class=" card-body cardBody">
              <h5   class=" card-title">C++ Notes</h5>
              <p   class=" card-text">Get handwritten notes of C++</p>
              </div>
            </div>
          </a        >
  
          <!-- Javascript -->
          <a
            href="https://drive.google.com/file/d/1EiPwYuB6uFEMn6nCZqqFkITEXj8OIXMK/view?usp=sharing"
            target="_blank">
          <div   class=" card notesCard">
            <img src="assets/js.png"   class=" size" alt="Notes" />
            <div   class=" card-body cardBody">
              <h5   class=" card-title">Javascript Notes</h5>
              <p   class=" card-text">Get handwritten notes of Javascript</p>
              </div>
            </div>
          </a        >
  
          <!-- c++ -->
          <a  href="https://drive.google.com/file/d/1EiPwYuB6uFEMn6nCZqqFkITEXj8OIXMK/view?usp=sharing"
            target="_blank" >
          <div   class=" card notesCard">
            <img src="assets/c.png"   class=" size" alt="Notes" />
            <div   class=" card-body cardBody">
              <h5   class=" card-title">C Notes</h5>
              <p   class=" card-text">Get handwritten notes of C</p>
            </div>
          </div>
        </div>
      </a>
  
        <!-- for the Next and prev button -->
        <div   class=" container" id="next-prev">
          <button onclick="next()" id="next">Next</button>
        </div>
  
  
  
        <!-- features of The Website -->
                
        
        <div id="features"   class=" container-fluid">
  
            <div   class=" featuresHeadingFirst" onclick="arrival()"> <p>Features</p></div>   
        
        </div>
          </main>
  
  
    </div>
`;
  document.getElementById("footer").before(main);
}

//009  About us page
function aboutUs() {
  // console.log("aboutUs function called");
  iconChange();
  document.getElementById("main").innerHTML = `
  <main id="main">
  <div id="aboutUs" class="card">

  
  <h2 id="aboutUsHeading"><strong>
    About Us
  </strong> </h2>
  
  <P id="aboutUsText">

  <h4 class="subHeadings">Welcome to our BCA Hub!</h4>         
          <p class="subHeadingDescription">
  
  At our BCA Hub, we are dedicated to providing a comprehensive platform for all things related to coding. Whether you are a beginner taking your first steps into the world of programming or an experienced developer seeking to sharpen your skills, we've got you covered. Our mission is to empower individuals with the knowledge and resources they need to thrive in the fast-paced and ever-changing world of coding.
  <p/>
  <h4 class="subHeadings">Our Vision:</h4>         
          <p class="subHeadingDescription">
  We believe that coding is not just a skill but a powerful tool that can unlock endless possibilities. Our vision is to make coding accessible to everyone, regardless of their background or experience. We strive to create a vibrant and inclusive community where learners can engage, collaborate, and inspire one another.
  <p/>
  
  <h4 class="subHeadings">Quality Content:</h4>         
          <p class="subHeadingDescription">
  At the heart of our BCA Hub is our extensive collection of high-quality coding-related content. We offer a wide range of programming tutorials, from the basics of popular languages like Python, JavaScript, and C++ to advanced topics such as data structures, algorithms, and web development. Our team of experienced instructors ensures that each tutorial is clear, concise, and easy to follow, making the learning process enjoyable and effective.
  <p/>

  <h4 class="subHeadings">Coding Notes:</h4>         
          <p class="subHeadingDescription">
  For those who prefer bite-sized information, our Coding Notes section provides quick references and cheat sheets on various programming concepts. These notes serve as handy companions during coding sessions, helping you quickly find syntax, commands, and best practices without getting lost in lengthy documentation.  <p/>
  
 
  <h4 class="subHeadings" >Practice Makes Perfect:</h4>         
          <p class="subHeadingDescription">
  We understand that coding is a skill that improves with practice. That's why we offer a diverse set of coding challenges and exercises to put your newfound knowledge to the test. Our coding challenges cater to all skill levels, ranging from simple exercises for beginners to complex projects for experienced coders. By working through these challenges, you can strengthen your problem-solving skills and gain the confidence to take on real-world coding tasks.  <p/>
  
 <h4 class="subHeadings">Python Quizzes (PYQs):</h4>         
          <p class="subHeadingDescription"> 
  Python is one of the most popular and versatile programming languages, and we recognize its significance in the coding community. In our PYQs section, you'll find a curated collection of Python interview questions and practice quizzes. These questions cover a wide array of Python topics, including loops, functions, object-oriented programming, and more. Whether you're preparing for a job interview or just want to deepen your Python expertise, our PYQs section is a valuable resource.  <p/>
  

  <h4 class="subHeadings"  >Community Engagement:</h4>         
          <p class="subHeadingDescription">
  We believe that learning is a collaborative process, and our BCA Hub fosters a supportive community where learners can engage with each other. Our discussion forums provide a space for asking questions, sharing knowledge, and seeking guidance from peers and experienced developers. Additionally, we organize live coding webinars and interactive sessions where participants can interact with instructors and gain real-time insights.
  <p/>

  <h4 class="subHeadings"  >Open Source Contributions:</h4>         
          <p class="subHeadingDescription">
  We are strong advocates of open source software and its impact on the coding community. As part of our commitment to giving back, we actively encourage and support open source contributions from our members. We believe that contributing to open source projects not only enhances coding skills but also promotes a culture of collaboration and innovation.
  
  Join our BCA Hub today and embark on a transformative coding journey. Whether you're a beginner or an experienced developer, our platform has something to offer for everyone. Let's learn, code, and grow together as we explore the fascinating world of programming!</P>

  
</div>
</main>
`;
}

//010  contact us page
function contactUs() {
  iconChange();
  document.getElementById("main").innerHTML = `<main id="main">
  <div class="contact-form ">
        <h4 class="subHeadings">Contact Us</h4>         
          <p class="subHeadingDescription">
          What do you suggest?
          </p>
        <form >
        <div class="form-floating  ">
        <input type="email" class="form-control w-100" id="floatingInput" placeholder="Rohan" required>

        <label for="floatingInput">Name</label>
      </div>

      <div class="form-floating  ">
      <input type="email" class="form-control w-100" id="floatingInput" placeholder="rohan245@gmail.com" required>
      <label for="floatingInput">Email address</label>
    </div>
    
            
            <div class="form-floating ">
  <textarea class="form-control w-100" placeholder="Leave a comment here" id="Textarea" required></textarea>
  <label for="floatingTextarea">Comments</label>
</div>
<div id="whatsapp" >
<a href="https://wa.me/qr/4QHVKLZRGHVFJ1">
<p>send your messages on</p>
<img src="assets/whatsapp.png" ></a>
</div>



            <button type="button" class="cnow" onclick="success()" id="contactFormSubmitButton">Submit  </button>

        </form>
    </div>
  </main>`;
}

// 011 section for books
function books() {
  iconChange();

  document.getElementById("main").innerHTML = `
 <main id="main">
  <h2 id="recommendedBooks">Recommended Books For Computer Science</h2>
<div id="bookShelf">


 <div class="bookContainer">
 <a href="https://drive.google.com/file/d/1zqjlmRLRCbFpbIYtu01mssl2asDV6IvM/view?usp=sharing" download target="" data-book_id="2705694" data-isbn="" class="downloadButton">
 
 <div class="bookImageContainer">
   <img src="assets/javaBook.jpg" class="bookImage">
 </div>
 <div class="bookDetails">
   <p class="bookName">Programming with Java a Primer </p>
   <p class="bookAuthor"><strong>E. Balagurusamy</strong></p>
   <p class="bookSummary">Programming with JAVA, 3e incorporates all the updates and enhancements added to Java 2 and J2SE 5.0 release. The book presents the language concepts in an extremely simple and easy-to-understand style with illustrations and examples whereever necessary. </p>
    
 </a>
 </div>
</div>



 <div class="bookContainer">
 <a href="https://drive.google.com/file/d/1pURfy8K6T050T8SkrW_4P3K38ZXGfCBJ/view?usp=sharing" target="" data-book_id="2705694" data-isbn="" class="downloadButton">
 
 <div class="bookImageContainer">
   <img src="assets/dataStructureBook.jpg" class="bookImage">
 </div>
 <div class="bookDetails">
   <p class="bookName">Data structures using C++ </p>
   <p class="bookAuthor"><strong>Varsha H. Patil</strong></p>
   <p class="bookSummary">Data Structures Using C++ is designed to serve as a textbook for undergraduate engineering students of computer science and information technology as well as postgraduate students of computer applications. The book aims to provide a comprehensive coverage of all the topics related to data structures.
   </p>
    
 </a>
 </div>
</div>

 <div class="bookContainer">
 <a href="https://drive.google.com/file/d/1RKFSUq67HjGm5m8gBXT6DjMV48CMwNg8/view?usp=sharing" target="" data-book_id="2705694" data-isbn="" class="downloadButton">
 
 <div class="bookImageContainer">
   <img src="assets/programmingBook.jpg" class="bookImage">
 </div>
 <div class="bookDetails">
   <p class="bookName">Concepts of Programming Languages </p>
   <p class="bookAuthor"><strong>Chris Ford</strong></p>
   <p class="bookSummary">For undergraduate students in Computer Science and Computer Programming courses. Now in its Tenth Edition, Concepts of Programming Languages introduces students to the main constructs of contemporary programming languages and provides the tools needed to critically evaluate existing and future programming languages. Readers gain a solid foundation for understanding the fundamental concepts of programming languages through the author's presentation of design issues for various language constructs, the examination of the design choices for these constructs in some of the most common languages, and critical comparison of the design alternatives. In addition, Sebesta strives to prepare the reader for the study of compiler design by providing an in-depth discussion of programming language structures, presenting a formal method of describing syntax, and introducing approaches to lexical and syntactic analysis. 
   </p>
    
 </a>
 </div>
</div>

 <div class="bookContainer">
 <a href="https://drive.google.com/file/d/1FeXBng80UUtGUR2SKFKs8J6-xSTjUlJc/view?usp=sharing" target="" data-book_id="2705694" data-isbn="" class="downloadButton">
 
 <div class="bookImageContainer">
   <img src="assets/pythonBook.jpg" class="bookImage">
 </div>
 <div class="bookDetails">
   <p class="bookName">Learn Python Programming Quickly </p>
   <p class="bookAuthor"><strong>Robert W. Sebesta</strong></p>
   <p class="bookSummary">Warning: Developing these skills might make your dreams come true.

   Do you sit there day after day and dream of ways your mobile applications could be better?
   
   Maybe, when you look at today's systems, you recognize some weak spots where they might become compromised… and you want to help fix these problems?
   
   Perhaps your goals are even bigger than this?
   </p>
    
 </a>
 </div>
</div>


</div>


</main>;`;

  // setTimeout(() => {
  //   document.getElementById("main").innerHTML = `
  //   <main id="main">

  //  </main>;`;
  // }, 1000);
}

//012  semesterWisePreviousYearQuestionPaper()
function semesterWisePreviousYearQuestionPapers(x, y) {
  iconChange();

  document.getElementById("main").innerHTML = `<main id="main">
  <div id="xSemester">
  <p id="sNumber">${y} Semester Academic Year 2023</p>

  <div id="mid1Container">
  <h2 id="mid1Heading">Mid 1</h2>
  <ul>
  <li class="papers"><a class="paperLink" href="${x.paperLinksMid[0]}">${x.paperNames[0]}</a></li>
  <li class="papers"><a class="paperLink" href="${x.paperLinksMid[1]}">${x.paperNames[1]}</a></li>
  <li class="papers"><a class="paperLink" href="${x.paperLinksMid[2]}">${x.paperNames[2]}</a></li>
  <li class="papers"><a class="paperLink" href="${x.paperLinksMid[3]}">${x.paperNames[3]}</a></li>

  </ul>
  </div>

  <div id="mid1Container">
  <h2 id="mid1Heading">Final</h2>
  <ul>
  <li class="papers"><a class="paperLink" href="${x.paperLinksFinal[0]}">${x.paperNames[0]}</a></li>
  <li class="papers"><a class="paperLink" href="${x.paperLinksFinal[1]}">${x.paperNames[1]}</a></li>
  <li class="papers"><a class="paperLink" href="${x.paperLinksFinal[2]}">${x.paperNames[2]}</a></li>
  <li class="papers"><a class="paperLink" href="${x.paperLinksFinal[3]}">${x.paperNames[3]}</a></li>
  </ul>
  </div>
  
  </div>
  </main>`;
}

//013  live learning function
function liveLearning() {
  iconChange();
  document.getElementById(
    "main"
  ).innerHTML = `<main id="main" class="d-flex justify-content-center align-items-center "><div class="spinner-grow text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
</main>`;

  setTimeout(() => {
    document.getElementById(
      "main"
    ).innerHTML = `<main id="main" class="mainInLiveLearningPage"><div><p class="liveLearningFirstHeading">This is live learning section. You can learn anything that is under the ambit of computer science</p>
  <div class="resources">
  <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Oe421EPjeBE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/8jLOx1hD3_o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/1WpKsY9LBlY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/gtjxAH8uaP0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/GnodscC2p-A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/-fW2X7fh7Yg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/nDGA3km5He4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/MsnQ5uepIaE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  
  </div>
  </div></main>`;
  }, 1000);
}

// 014 BCA Gpt learning function
function bcaGpt() {
  // console.log("BCA gpt function is called");
  iconChange();

  document.getElementById("main").innerHTML = `<main id="main">
  <div><p class="liveLearningFirstHeading">This is BCA GPT Section here you will find usefull videos related to programming along with their compiler/interpreter</p>

  <div class="resources">
  <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/ZSPZob_1TOk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen allow="fullscreen"></iframe>
  <iframe width="560" height="315" src="https://www.programiz.com/c-programming/online-compiler/" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/hKB-YGF14SY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  <iframe width="560" height="315" src="https://www.programiz.com/javascript/online-compiler/" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/yGB9jhsEsr8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  <iframe width="560" height="315" src="https://www.programiz.com/cpp-programming/online-compiler/" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/fqF9M92jzUo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  <iframe width="560" height="315" src="https://www.programiz.com/python-programming/online-compiler/" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  
  </div>
  </div>
  </main>
  
  `;
}

// 015 submit function
function success() {
  // console.log("submit function called");
  setTimeout(() => {
    document.getElementById(
      "main"
    ).innerHTML = `<main id="main" class="d-flex justify-content-center align-items-center ">
    <div class="card" id="successCard" style="width: 18rem;">
    <img src="https://is.gd/AruEOF" id="success">
    <div class="card-body">
      <h5 class="id="query">Your query is succesfully registered with us.</h5>
         <a onclick="home()" class="btn btn-success w-25">OK</a>
    </div>
  </div>
  </main>`;
  }, 1000);
}

//17 Arrival Function
function arrival() {
  document.getElementById("features").innerHTML = `
  <div class="featuresHeadingFirst" > <p>Features</p></div> 
                 
  
  <div id="pyqFeature" class="featureBox">
 <h3 class="featureHeading">Previous Year Question Papers</h3>
 <p class="messageInsideFeaturesBox">Welcome to our PYQ (Previous Year Questions) section! Prepare for success with our vast collection of past exam questions and their detailed solutions. Ace your exams by practicing with real questions from previous years, gaining valuable insights into the exam pattern and improving your problem-solving skills. Let's excel together!</p>
 </div>
 
 <div id="notesFeature" class="featureBox">
 <h3 class="featureHeading">Notes of all the subjects</h3>
 <p class="messageInsideFeaturesBox">Discover a treasure trove of knowledge in our Notes section! Access comprehensive and well-organized study materials, lecture summaries, and topic-wise notes to fuel your learning journey. From concise summaries to in-depth explanations, our Notes section will help you grasp concepts effortlessly. Enhance your understanding and boost your academic performance with us!</p>
 </div>
 </div> 
 
 
 <div id="liveLearningFeature" class="featureBox">
 <h3 class="featureHeading">Learn anything in Live Learning section</h3>
 <p class="messageInsideFeaturesBox">Welcome to our Live Learning section - where education comes to life! Join our interactive virtual classrooms led by expert instructors. Engage in real-time discussions, ask questions, and collaborate with fellow learners worldwide. Experience personalized learning, receive instant feedback, and unlock your full potential. Enrich your education in real-time!</p>
 </div> 
 
 
 <div id="bcaGptFeature" class="featureBox" >
 <h3 class="featureHeading">BCA GPT section to learn and practice coding</h3>
 <p class="messageInsideFeaturesBox">Unlock the world of coding in our Programming section! Whether you're a beginner or a seasoned developer, we have resources to elevate your skills. Explore a wide range of programming languages, step-by-step tutorials, and coding projects. Embrace the art of problem-solving and innovation as you embark on an exciting programming journey with us!</p>
 </div> 
  
  </div>
  </div>
  `;
}

//018 on clicking image
document.getElementById("carouselImage").addEventListener("click", () => {
  document.getElementById("carouselImage").style = "cursor:wait";
});
document.getElementById("carouselImage").addEventListener("mousemove", () => {
  document.getElementById("carouselImage").style = "cursor:pointer";
});








//codingCompetiton()
var competitionArray=[]

const createArray= ()=>{
  
  console.log("create array");
  
  competitionArray=[];

  fetch("https://kontests.net/api/v1/all")
    .then((data) => {
    
      return data.json();
    })
    .then((data) => {
      document.getElementById("main").innerHTML = `
     
      <main id="main" class="mainCompetition">
    <p id="codingHeading">Live coding competitions and future events</p>
      <div id="liveLiveSoonButtons">
      <button id="live"  class="buttons"  onclick="liveOnly()">Live</button>
      <button id="all"  class="buttons"  onclick="createArray()">All</button>
      <button id="liveSoon"  class="buttons"  onclick="liveSoon()">Live Soon</button>
     
      </div>
      </div></div>
    
      <div id="codingResults"></div>
      
      </main>`;
      data.forEach((e)=>{

        competitionArray.push(e);

        let status, style;
        if (e.status == "CODING") {
          status = "Live";
          style = `background:green`;
        } else {
          status = "Live Soon";
          style = `background:orange`;
        }

        document.getElementById(
          "codingResults"
        ).innerHTML += ` <div class="codingCard" >
      <a href="${e.url}" class="card-link" >
      <div class="codingCardBody">
        <h5 class="card-title CodingName">${e.name}</h5>
        <h6 class=" codingSiteName">${e.site}</h6>
        <p class="card-text codingStatus" style="${style}">${status}</p>
        <p>Duration:${(e.duration / 3600).toFixed(2)} Hrs</p>
        <p>Competition will Start on ${e.start_time.slice(
          0,
          10
        )} at ${e.start_time.slice(11, 16)} Hrs</p>
        <p>Competition will End on ${e.end_time.slice(
          0,
          10
        )} at ${e.end_time.slice(11, 16)} Hrs</p>
    
        </div>
        </a>
    </div>`;
      })
   
    
      });

}


// createArray()

const liveOnly=()=>{

console.log(competitionArray);



  document.getElementById("main").innerHTML = `<main id="main" class="mainCompetition">
  <p id="codingHeading">Live coding competitions </p>
  <div id="liveLiveSoonButtons">
    
      <button id="liveSoon"  class="buttons"  onclick="liveSoon()">Live Soon</button>
      <button id="live"  class="buttons"  onclick="liveOnly()">Live</button>
      <button id="all"  class="buttons"  onclick="createArray()">All</button></div></div>
      <div id="codingResults"></div>
  </main>`;
competitionArray.forEach((e)=>{
if(e.status==="CODING"){

        let status, style;
        if (e.status == "CODING") {
          status = "Live";
          style = `background:green`;
        } else {
          status = "Live Soon";
          style = `background:orange`;
        }

        document.getElementById( "codingResults" ).innerHTML += ` <div class="codingCard" >
      <a href="${e.url}" class="card-link" >
      <div class="codingCardBody">
        <h5 class="card-title CodingName">${e.name}</h5>
        <h6 class=" codingSiteName">${e.site}</h6>
        <p class="card-text codingStatus" style="${style}">${status}</p>
        <p>Duration:${(e.duration / 3600).toFixed(2)} Hrs</p>
        <p>Competition will Start on ${e.start_time.slice(
          0,
          10
        )} at ${e.start_time.slice(11, 16)} Hrs</p>
        <p>Competition will End on ${e.end_time.slice(
          0,
          10
        )} at ${e.end_time.slice(11, 16)} Hrs</p>
    
        </div>
        </a>
    </div>`;}

  })
    





  }
const liveSoon=()=>{

console.log("live soon function called");

  document.getElementById("main").innerHTML = `<main id="main" class="mainCompetition">
  <p id="codingHeading">Future coding events</p>
  <div id="liveLiveSoonButtons">
  <button id="live"  class="buttons"  onclick="liveOnly()">Live</button>
  <button id="liveSoon"  class="buttons"  onclick="liveSoon()">Live Soon</button>
  <button id="all"  class="buttons"  onclick="createArray()">All</button></div></div>
  <div id="codingResults"></div>
  </main>`;
competitionArray.forEach((e)=>{
if(e.status==="BEFORE"){

        let status, style;
        if (e.status == "CODING") {
          status = "Live";
          style = `background:green`;
        } else {
          status = "Live Soon";
          style = `background:orange`;
        }

        document.getElementById(
          "codingResults"
        ).innerHTML += ` <div class="codingCard" >
      <a href="${e.url}" class="card-link" >
      <div class="codingCardBody">
        <h5 class="card-title CodingName">${e.name}</h5>
        <h6 class=" codingSiteName">${e.site}</h6>
        <p class="card-text codingStatus" style="${style}">${status}</p>
        <p>Duration:${(e.duration / 3600).toFixed(2)} Hrs</p>
        <p>Competition will Start on ${e.start_time.slice(
          0,
          10
        )} at ${e.start_time.slice(11, 16)} Hrs</p>
        <p>Competition will End on ${e.end_time.slice(
          0,
          10
        )} at ${e.end_time.slice(11, 16)} Hrs</p>
    
        </div>
        </a>
    </div>`;}

  })
    





  }





// darkMode()

function darkMode() {
  let b = document.getElementById("light-dark-icon");

  let a = document.createElement("a");
  if (
    b.src == "http://127.0.0.1:5500/assets/light.gif" ||
    b.src == "https://ankit-gour.github.io/bcaAspirants/assets/light.gif"
    
  ) {
    // console.log("if");
    darkCss.href = "dark.css";
  } else {
    setTimeout(() => {
      
      darkCss.href=``
    },10);
  }
}

function iconChangeLightDark() {
  let a = document.getElementById("light-dark-icon");

  if (
    a.src == "http://127.0.0.1:5500/assets/dark.gif" ||
    a.src == "https://ankit-gour.github.io/bcaAspirants/assets/dark.gif"
  ) {
    a.src = "assets/light.gif";
  } else {
    a.src = "assets/dark.gif";
  }
}


// challenge



function getQuestion(){

  iconChange();
 
  
  document.getElementById("main").innerHTML=` <main id="main"> <div id="questionContainer" class="questionContainer"></div></main>`;
  fetch("https://opentdb.com/api.php?amount=1&category=18&difficulty=easy&type=multiple").then((data)=>{
    return data.json();
  }).then((data)=>{
    document.getElementById("main").innerHTML=`<main id="main">
    <div id="questionContainer">
    <h4 id="question1">${data.results[0].question}</h4>
    <h5 id="question2">${data.results[0].correct_answer}</h5>
    <button onclick="getQuestion(),removeExtraHeader();" id="question3">Next</button>
    </div>
    </main>`


    
  })
}







function goToTop(){
  document.getElementById("goTop").click()
}

// Appendices
const First_Semester = {
  paperNames: [
    "C Programming",
    "PC Software",
    "Fundamentals Of Computer Science",
    "Mathematics for Computer Science",
  ],
  paperLinksMid: [
    "https://drive.google.com/file/d/1pFZwpCRbvEXB_RvoCSOAnESvWSxnUHIe/view?usp=sharing",
    "https://drive.google.com/file/d/1pFZwpCRbvEXB_RvoCSOAnESvWSxnUHIe/view?usp=sharing",
    "https://drive.google.com/file/d/1pFZwpCRbvEXB_RvoCSOAnESvWSxnUHIe/view?usp=sharing",
    "https://drive.google.com/file/d/1pFZwpCRbvEXB_RvoCSOAnESvWSxnUHIe/view?usp=sharing",
  ],
  paperLinksFinal: [
    "https://drive.google.com/file/d/1pFZwpCRbvEXB_RvoCSOAnESvWSxnUHIe/view?usp=sharing",
    "https://drive.google.com/file/d/1pFZwpCRbvEXB_RvoCSOAnESvWSxnUHIe/view?usp=sharing",
    "https://drive.google.com/file/d/1pFZwpCRbvEXB_RvoCSOAnESvWSxnUHIe/view?usp=sharing",
    "https://drive.google.com/file/d/1pFZwpCRbvEXB_RvoCSOAnESvWSxnUHIe/view?usp=sharing",
  ],
};
const Second_Semester = {
  paperNames: [
    "OOPS using C++",
    "Computer Organization",
    "Data Structures",
    "Computer Network",
  ],
  paperLinksMid: [
    "https://drive.google.com/file/d/1pFZwpCRbvEXB_RvoCSOAnESvWSxnUHIe/view?usp=sharing",
    "https://drive.google.com/file/d/1pFZwpCRbvEXB_RvoCSOAnESvWSxnUHIe/view?usp=sharing",
    "https://drive.google.com/file/d/1pFZwpCRbvEXB_RvoCSOAnESvWSxnUHIe/view?usp=sharing",
    "https://drive.google.com/file/d/1pFZwpCRbvEXB_RvoCSOAnESvWSxnUHIe/view?usp=sharing",
  ],
  paperLinksFinal: [
    "https://drive.google.com/file/d/1pFZwpCRbvEXB_RvoCSOAnESvWSxnUHIe/view?usp=sharing",
    "https://drive.google.com/file/d/1pFZwpCRbvEXB_RvoCSOAnESvWSxnUHIe/view?usp=sharing",
    "https://drive.google.com/file/d/1pFZwpCRbvEXB_RvoCSOAnESvWSxnUHIe/view?usp=sharing",
    "https://drive.google.com/file/d/1pFZwpCRbvEXB_RvoCSOAnESvWSxnUHIe/view?usp=sharing",
  ],
};
const Third_Semester = {
  paperNames: [
    "OOPS using C++",
    "Computer Organization",
    "Data Structures",
    "Computer Network",
  ],
  paperLinksMid: [
    "OOPS using C++ link",
    "https://drive.google.com/file/d/1pFZwpCRbvEXB_RvoCSOAnESvWSxnUHIe/view?usp=sharing",
    "https://drive.google.com/file/d/1pFZwpCRbvEXB_RvoCSOAnESvWSxnUHIe/view?usp=sharing",
    "https://drive.google.com/file/d/1pFZwpCRbvEXB_RvoCSOAnESvWSxnUHIe/view?usp=sharing",
    "https://drive.google.com/file/d/1pFZwpCRbvEXB_RvoCSOAnESvWSxnUHIe/view?usp=sharing",
  ],
  paperLinksFinal: [
    "https://drive.google.com/file/d/1pFZwpCRbvEXB_RvoCSOAnESvWSxnUHIe/view?usp=sharing",
    "https://drive.google.com/file/d/1pFZwpCRbvEXB_RvoCSOAnESvWSxnUHIe/view?usp=sharing",
    "https://drive.google.com/file/d/1pFZwpCRbvEXB_RvoCSOAnESvWSxnUHIe/view?usp=sharing",
    "https://drive.google.com/file/d/1pFZwpCRbvEXB_RvoCSOAnESvWSxnUHIe/view?usp=sharing",
  ],
};
const Fouth_Semester = {
  paperNames: [
    "OOPS using C++",
    "Computer Organization",
    "Data Structures",
    "Computer Network",
  ],
  paperLinksMid: [
    "OOPS using C++ link",
    "https://drive.google.com/file/d/1pFZwpCRbvEXB_RvoCSOAnESvWSxnUHIe/view?usp=sharing",
    "https://drive.google.com/file/d/1pFZwpCRbvEXB_RvoCSOAnESvWSxnUHIe/view?usp=sharing",
    "https://drive.google.com/file/d/1pFZwpCRbvEXB_RvoCSOAnESvWSxnUHIe/view?usp=sharing",
    "https://drive.google.com/file/d/1pFZwpCRbvEXB_RvoCSOAnESvWSxnUHIe/view?usp=sharing",
  ],
  paperLinksFinal: [
    "https://drive.google.com/file/d/1pFZwpCRbvEXB_RvoCSOAnESvWSxnUHIe/view?usp=sharing",
    "https://drive.google.com/file/d/1pFZwpCRbvEXB_RvoCSOAnESvWSxnUHIe/view?usp=sharing",
    "https://drive.google.com/file/d/1pFZwpCRbvEXB_RvoCSOAnESvWSxnUHIe/view?usp=sharing",
    "https://drive.google.com/file/d/1pFZwpCRbvEXB_RvoCSOAnESvWSxnUHIe/view?usp=sharing",
  ],
};
const Fifth_Semester = {
  paperNames: [
    "OOPS using C++",
    "Computer Organization",
    "Data Structures",
    "Computer Network",
  ],
  paperLinksMid: [
    "OOPS using C++ link",
    "https://drive.google.com/file/d/1pFZwpCRbvEXB_RvoCSOAnESvWSxnUHIe/view?usp=sharing",
    "https://drive.google.com/file/d/1pFZwpCRbvEXB_RvoCSOAnESvWSxnUHIe/view?usp=sharing",
    "https://drive.google.com/file/d/1pFZwpCRbvEXB_RvoCSOAnESvWSxnUHIe/view?usp=sharing",
    "https://drive.google.com/file/d/1pFZwpCRbvEXB_RvoCSOAnESvWSxnUHIe/view?usp=sharing",
  ],
  paperLinksFinal: [
    "https://drive.google.com/file/d/1pFZwpCRbvEXB_RvoCSOAnESvWSxnUHIe/view?usp=sharing",
    "https://drive.google.com/file/d/1pFZwpCRbvEXB_RvoCSOAnESvWSxnUHIe/view?usp=sharing",
    "https://drive.google.com/file/d/1pFZwpCRbvEXB_RvoCSOAnESvWSxnUHIe/view?usp=sharing",
    "https://drive.google.com/file/d/1pFZwpCRbvEXB_RvoCSOAnESvWSxnUHIe/view?usp=sharing",
  ],
};
const Sixth_Semester = {
  paperNames: [
    "OOPS using C++",
    "Computer Organization",
    "Data Structures",
    "Computer Network",
  ],
  paperLinksMid: [
    "OOPS using C++ link",
    "https://drive.google.com/file/d/1pFZwpCRbvEXB_RvoCSOAnESvWSxnUHIe/view?usp=sharing",
    "https://drive.google.com/file/d/1pFZwpCRbvEXB_RvoCSOAnESvWSxnUHIe/view?usp=sharing",
    "https://drive.google.com/file/d/1pFZwpCRbvEXB_RvoCSOAnESvWSxnUHIe/view?usp=sharing",
    "https://drive.google.com/file/d/1pFZwpCRbvEXB_RvoCSOAnESvWSxnUHIe/view?usp=sharing",
  ],
  paperLinksFinal: [
    "https://drive.google.com/file/d/1pFZwpCRbvEXB_RvoCSOAnESvWSxnUHIe/view?usp=sharing",
    "https://drive.google.com/file/d/1pFZwpCRbvEXB_RvoCSOAnESvWSxnUHIe/view?usp=sharing",
    "https://drive.google.com/file/d/1pFZwpCRbvEXB_RvoCSOAnESvWSxnUHIe/view?usp=sharing",
    "https://drive.google.com/file/d/1pFZwpCRbvEXB_RvoCSOAnESvWSxnUHIe/view?usp=sharing",
  ],
};
