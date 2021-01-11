
/* Change this file to get your personal Portfolio */


// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Ritika Saxena",
  title: "Hi, I'm Ritika",
  subTitle: emoji("I'm a passionate software engineer working in Boston. I'm looking to go back to school to get a Master's in Human Computer Interaction, so that I can create accessibile and enjoyable technology."),
  resumeLink: "https://drive.google.com/file/d/19JiFek8U7Zl-yjYyX3iQrIZoPMxbX8ko/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  linkedin: "https://www.linkedin.com/in/ritika-saxena-18235b101/",
  gmail: "ritika4986@gmail.com",
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "Technologies 👩🏽‍💻",
  subTitle: "Through work, school, and extracurriculars, I am confident working with following technologies",
  skills: [
    "✨ Develop SMS Chatbots using Amazon Lex",
    "✨ Create observability dashboards using AWS CloudWatch and Splunk",
    "✨ Innovate designs using HCI principles"
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js-square"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    { 
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "bitbucket",
      fontAwesomeClassname: "fab fa-bitbucket"
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "android studio",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "confluence",
      fontAwesomeClassname: "fab fa-confluence"
    },
    {
      skillName: "jira",
      fontAwesomeClassname: "fab fa-jira"
    },
  ]
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "Brandeis University",
      logo: require("./assets/images/brandeisLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "August 2016 - December 2019",
      desc: "Computer Science Major & Economics Minor",
      descBullets: [
        "Relevant HCI Courses: Human-computer Interaction, Technology & the Learning Sciences, Software Entreprenuership (TA), Cognitive & Social Psychology of User-centered Design"
      ]
    },
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Object Oriented Programming",  //Insert stack or technology you have experience in
      progressPercentage: "80%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Functional Programming",
      progressPercentage: "60%"
    },
    {
      Stack: "User-Centered Design",
      progressPercentage: "95%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer/UX Product Designer",
      company: "Liberty Mutual",
      companylogo: require("./assets/images/workgridLogo.png"),
      date: "January 2021 – Present",
      desc: "Starting at the end of January, I will be joining the Workgrid team in a UX/Product role capacity. Workgrid is a Liberty Mutual launched and owned startup that focuses on improving employee experience through software. I'm excited to start this role soon! https://www.workgrid.com/company/ ",
    },
    {
      role: "Software Engineer",
      company: "Liberty Mutual",
      companylogo: require("./assets/images/libertyLogo.png"),
      date: "June 2020 – January 2021",
      desc: "Worked on a team comprised of 4 entry-level software engineers along with a product owner, scrum master, technical mentor, and manager",
      descBullets: [
        "Delivered the first SMS based chatbot at Liberty Mutual. Bot provides personalized billing information to customers, deflecting calls and amplifying the customer experience.",
        "Built AWS CloudWatch dashboards to provide operational observability to engineers, business team, and stakeholders",
        "Excelled at code coverage best practices through upholding unit testing and Sonarqube static analysis coverage consistently at 100%",
        "Mastered scrum processes, consistently communicated with the engineering squad, product owners, and external stake holders through scrum ceremonies; presented to 25+ leaders during biweekly sprint reviews"

      ]
    },
    {
      role: "Software Engineer",
      company: "Liberty Mutual",
      companylogo: require("./assets/images/libertyLogo.png"),
      date: "January 2020 – June 2020",
      desc: "Global Cybersecurity engineer intern",
      descBullets: [
        "Pioneered resource scaling plan for Ping Identity API capacity in order for team to allot Ping Identity API capacity efficiently",
        "Contributed to Ping Identity rollout, a federated authentication provider, by increasing code coverage through unit testing using Mockito testing framework and analyzing automation unit tests. Increased coverage from 60% to 90%.",
        "Enabled processes including multi-factor authentication and SAML configuration enterprise-wide using Microsoft Azure Active Directory"
      ]
    },
    {
      role: "Software Engineer",
      company: "Liberty Mutual",
      companylogo: require("./assets/images/libertyLogo.png"),
      date: "May 2019 – August 2019",
      desc: "Data engineering and analytics intern",
      descBullets: [
        "Implemented Splunk dashboards to visualize and monitor server level processes for proactive mitigation of issues",
        "Automated monitoring of authentication of accounts leveraging Python scripting to increase productivity and efficiency",
        "Utilized Python to write scripts to automate XML formatting of dashboards to streamline production of beneficial dashboards"
      ]
    },
    {
      role: "Brigham and Women's Hospital Digital Innovation Hub Intern",
      company: "Partners Healthcare",
      companylogo: require("./assets/images/bwhLogo.png"),
      date: "June 2018 – August 2018",
      desc: "Program manager intern at BWH iHub",
      descBullets: [ 
        "Delivered design framework, accessibility guidelines, and efficient app deployment protocol for all Brigham and Women’s hospital mobile apps. Allowed for a streamlined and structured process to standardize key features and functions of applications.",
        "Published and presented at Connected Health Conference 2018 on “The Impact of Structuring Digital Health Innovation within Academic Medical Centers” ", 
        "Launched Brigham Digital Innovation Hub’s 5th anniversary website using HTML/CSS/ and Bootstrap framework to host information regarding the event."
      ]
    },
    {
      role: "Makerlab Student Technician",
      company: "Brandeis Innovation Space",
      companylogo: require("./assets/images/makerlabLogo.png"),
      date: "June 2017 - December 2019",
      desc: "Student employee at the Digital Innovation Makerspace at Brandeis University.",
      descBullets: [ 
        "Provided hands on training, tutorials, and assistance to people looking to 3D print, scan, laser cut, solder, and use VR headsets",
        "Designed 3D logo for Brandeis’ Intercultural center leveraging Fusion 360 & TinkerCad software",
        "Conducted website redesign project for Brandeis’ Digital Innovation space"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  // githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  // githubUserName: "saadpasta", // Change to your github username to view your profile in Contact Section.
  // showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company

// Talks Sections

const talkSection = {
  // title: "TEST EXTRA CURRIC",
  // subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    // {
    //   title: "Build Actions For Google Assistant",
    //   subtitle: "Codelab at GDG DevFest Karachi 2019",
    //   slides_url: "https://bit.ly/saadpasta-slides",
    //   event_url: "https://www.facebook.com/events/2339906106275053/"
    // }
  ]
};
const bigProjects = {
  // title: "Extracurriculars",
  // subtitle: "Organizations and projects where I have held leadership roles or participated",
  projects: [
    // {
    //   image: require("./assets/images/saayaHealthLogo.webp"),
    //   link: "http://saayahealth.com/",
    //   desc: "just testing lorem ipsum blah blah blah blah blah "
    // },
    // {
    //   image: require("./assets/images/nextuLogo.webp"),
    //   link: "http://nextu.se/",
    //   desc: "I was a volunteer mentor and teacher lorem ipsue blah blah ljlkdj dd blhrrr ritika saxena "
    // },
    // {
    //   image: require("./assets/images/nextuLogo.webp"),
    //   link: "http://nextu.se/",
    //   desc: "I was a volunteer mentor and teacher lorem ipsue blah blah ljlkdj dd blhrrr ritika saxena "
    // },
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: "Achievements",
  subtitle: "Showcase of projects I've completed over the years that I am proud of.",

  achievementsCards: [
    {
      title: " Digital Health Publication",
      subtitle: "Published 'The Impact of Providing a Tool Kit for Innovators in an Academic Medical Center to Scale Digital Health Innovation' at the Connected Health Conference in 2018.",
      image: require("./assets/images/posterLogo.png"),
      footerLink: [
        { name: "See Publication", url: "https://www.iproc.org/2018/2/e11808" },
      ]
    },
    {
      title: "Girls Who Code Poster Presentation",
      subtitle: "Presented lesson plans and outcome of volunteering through Girls Who Code at Waltham High School the Watch:City Science & Technology Forum at Brandeis University in 2019.",
      image: require("./assets/images/gwcposterLogo.png"),
      footerLink: [{ name: "See Poster", url: "https://drive.google.com/file/d/1XPxKfDmauCrfO1cqofbHCt26BS9zLlVP/view?usp=sharing" }]
    },
    {
      title: "Codestellation",
      subtitle: "Codestellation is a 24 hour hackathon that Brandeis BITMAP hosts every year. For 3 years in college, I was on the E-Board of BITMAP where I spearheaded planning for the 200+ attendee hackathon. Along with logistical planning, I communicated with sponsors to raise over $15,000 in financing per year.",
      image: require("./assets/images/codestelLogo.png"),
      footerLink: [
        { name: "Learn More", url: "https://www.codestellation.io/" }
      ]
    },
    {
      title: "Coursigner",
      subtitle: "Software Entreprenuership project where my team created the design and business model using the lean startup method, for a web app that predicts a sample schedule for students based on major/minor & class year. This project recieved first place at the 'Shark Tank' style pitch session!",
      image: require("./assets/images/coursignerLogo.png"),
      footerLink: [
        { name: "Final Project", url: "https://drive.google.com/file/d/1-ks0-BFtinGcfXr-UEEuPxv4PVVAx-qa/view?usp=sharing" }
      ]
    },
    {
      title: "Takeout",
      subtitle: "As the final project for my Human-Computer Interaction class, my team created a comprehensive app design with justifications for each aspect of the design using HCI principles. Takeout is an app designed to connect students looking to eat a meal with someone new.",
      image: require("./assets/images/takeoutLogo.png"),
      footerLink: [
        { name: "Final Project", url: "https://drive.google.com/file/d/1QreOqT8b2KymRFkIJKmlRCo_Jz-yFl9L/view?usp=sharing" }
      ]
    },
    {
      title: "Uproar",
      subtitle: "Product that came out of an internal Liberty Mutual intern hackathon, where we used React to create a 'Waze'-like application for Liberty Mutual customers to alert one another in the case of weather-related catastrophes to reduce accidents, help customers avoid the need to file claims, and to keep communities safe. This project was awarded 'Most Technical Hack'.",
      image: require("./assets/images/ssUproar.PNG"),
      footerLink: [
        { name: "Final Project", url: "https://drive.google.com/file/d/1w5ia13nShruv3172SSdIsjKWy98CCAA6/view?usp=sharing" }
      ]
    },
    {
      title: "Waltham Chamber of Commerce",
      subtitle: "Competed at the DeisHacks Hackathon (Hack for Social Good) at Brandeis, where my team created a website that utilizes a newsfeed layout to alert members of the Waltham community of job offers at the Waltham Chamber of Commerce. This project won second place at the hackathon!",
      image: require("./assets/images/cocLogo.png"),
      footerLink: [
        { name: "Final Project", url: "https://devpost.com/software/chamberofcommerce" }
      ]
    }, 
    {
      title: "JTrack",
      subtitle: "Mentored a Girls Who Code team from Waltham High School at Codestellation in 2019. Together we built a device that can be attached to one's vaping device, that alerts them on how many puffs they have taken per day. The team used an Arduino to alert users by lights. The goal of this project was to help eradicate the vaping epidemic that has become so prevalent in high schools. We also printed a 3D model of the Juul and device to present the project.",
      image: require("./assets/images/jtrackLogo.png"),
      footerLink: [
        { name: "Final Project", url: "https://docs.google.com/presentation/d/1pT7RtKRkqOvK6pWspW0ZJJRcAtva0tkInB_qwpxgse8/edit?usp=sharing" }
      ]
    },
    {
      title: "SheInspiresTech",
      subtitle: "Platform to inspire young women in STEM to continue pursuing the field. This website will highlight important topics that pertain to encouraging women in technology. It will feature blog posts, podcasts, and highlights. This project is currently in the development process and will be coming soon!",
      image: require("./assets/images/sheinspiresLogo.png"),
      footerLink: [
        { name: "Coming Soon!", url: "" }
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

   title: "Extracurriculars",
   subtitle: "Extracurricular involvement throughout college and Liberty Mutual",

  blogs: [
    {
      url: "https://girlswhocode.com/",
      title: "Girls Who Code Volunteer Instructor",
      description: "Teacher and mentor for non-profit organization, Girls Who Code, at Waltham High School."
    },
    {
      url: "https://www.instagram.com/brandeis_bitmap/",
      title: "Executive Board Member of BITMAP (CS Club)",
      description: "Spearheaded planning for 24 hour hackathon, organized events encompassing educational workshops, women in STEM panels, and recreational bonding."
    },
    {
      url: "",
      title: "Women In Technology at Liberty Mutual",
      description: "Member of the employee resource group for Women in Technology at Liberty Mutual. Attended workshops, forums, and even got the opportunity to attend the Grace Hopper convention through WiT!"
    },
    {
      url: "https://www.instagram.com/brandeis_sasa/?hl=en",
      title: "SASA, Bhangra, A Capella",
      description: "Member of South Asian Student Association at Brandeis, Brandeis Bhangra dance team (Punjabi folk dance), and the folk-pop a capella group, Too Cheap for Instruments."
    }
  ]
};



// Podcast Section

const podcastSection = {
  // title: emoji("Podcast 🎙️"),
  // subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: []
};

const contactInfo = {
  title: "Contact Me ☎️",
  subtitle: "To get in touch, please send me a message!",
  number: "617-599-9146",
  email_address: "ritika4986@gmail.com"
};

//Twitter Section

const twitterDetails = {

  // userName : "twitter"//Replace "twitter" with your twitter username without @

};
export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
