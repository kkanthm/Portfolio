
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Sanjita Sharma",
  title: "Hi,I am Sanjita",
  subTitle: emoji("A passionate DevOps/Cloud Engineer with experience in creating CI/CD pipelines using Ansible, Docker, Kubernetes and Terraform. Cloud enthusiast with well versed in using AWS tools and services. Highly interested to learn new tools and technique to automate everything for making people lives better."),
  resumeLink: "https://drive.google.com/file/d/1FGRAe4xLbvhUY9pscapX3gZPOHCrqFRY/view?usp=sharing",
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Your Social Media Link

const socialMediaLinks = {
    github: "https://github.com/Sanjita12",
    linkedin: "https://www.linkedin.com/in/sanjitasharmanp/",
  gmail: "sanjitasharmanp@gmail.com",
  //gitlab: "https://gitlab.com/saadpasta",
 // facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@sanjita_sharma",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Your Skills Section

const skillsSection = {
  title: "What I DO ? ",
  subTitle: "CLOUD/DEVOPS/SYSTEM/SOFTWARE ENTHUSIAST PASSIONATE TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Developing microservice architecture using Docker, K8s and monitoring those application using Prometheus and Grafana"),
    emoji("⚡ CI/CD pipeline management using Jenkins, Ansible, Github Organization by spinning EC2 servers as nodes"),
    emoji("⚡ Built Highly Available Web Application in AWS using Cloud formation, Route53, Load Balancer and IAM roles.")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
        skillName: "linux",
        fontAwesomeClassname: "fab fa-linux"
    },
    {
        skillName: "github",
        fontAwesomeClassname: "fab fa-github"
    },
    {
        skillName: "git",
        fontAwesomeClassname: "fab fa-git"
    },
    {
        skillName: "jenkins",
        fontAwesomeClassname: "fab fa-jenkins"
    },
    {
        skillName: "centos",
        fontAwesomeClassname: "fab fa-centos"
    },
    {
        skillName: "docker",
        fontAwesomeClassname: "fab fa-docker"
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
         skillName: "android",
         fontAwesomeClassname: "fab fa-android"
     },
    {
      skillName: "html",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
  {
    skillName: "js",
  fontAwesomeClassname: "fab fa-js"
  }
    
  ],

  display: true // Set false to hide this section, defaults to true
};

// Your education background

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Lamar University",
      logo: require("./assets/images/LU.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "August 2018 - May 2020",
      desc: "Worked as an Research Assistant.",
      descBullets: [
        "Conducted various research on threats associated with cybersecurity and Networking, backed such researches with simulation and practical experiments using MATLAB",
        "Built an IOT based docker container web application and ShowCase the Project on CICE",
        "Worked on creating Highly Available Lab Website using AWS services and Deploying microservice architecture to K8s"
      ]
    },
    {
      schoolName: "National College of Engineering",
      logo: require("./assets/images/tu-logo-.jpg"),
      subHeader: "Bachelor in Computer Engineering",
      duration: "Dec  2011 - Dec 2015",
      desc: "Ranked top 10% in the program. Took courses about C, C++, Data Structure, Enterprise Application, Artificial Intelligence, Networking.",
       
      descBullets: [
           "Participated in different hackathon and appathon event. Got an opportunity to learn from team, mentors and community through those events.",
           "Second Prize Winner at Child App Apathon Event Organizaed by UNDP and MIC Nepal",
      ]
    }
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "CI/CD Pipelines ",  //Insert stack or technology you have experience in
      progressPercentage: "70%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Cloud Design and Architecture ",
      progressPercentage: "60%"
    },
    {
      Stack: "Container Image and Orchestration : Docker,Kubernetes",
      progressPercentage: "60%"
    },
  {
      Stack: "IAC and Configuration Management",
      progressPercentage: "50%"
  },
  {
      Stack: "Git/Github",
      progressPercentage: "75%"
  },
  {
    Stack: "Scripting and Programming ",
  progressPercentage: "75%"
}
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};


// Your top 3 work experiences

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Research Assistant",
      company: "Lamar University",
      companylogo: require("./assets/images/LU.png"),
      date: "August 2018 – May 2020",
      descBullets: [
        "Built an IoT based docker containerized healthcare android application that connects physical devices such as weight scale, pulse meter, Omron blood pressure to the application through Bluetooth. ",
        "Written different infrastructure as a code to spin of the ec2 instance and manage the VPC on the AWS cloud",
        "Set-up and implemented ELK (Elastic search, Logstash and Kibana) stack on Kubernetes for logging"
      ]
    },
    {
        role: "DevOps/Cloud Engineer",
        company: "Ribera Solutions",
        companylogo: require("./assets/images/Ribera.PNG"),
        date: "March 2017 – July 2018",
        descBullets:[
            "Created POC of java projects for CI & CD Pipelines using GitHub organization -> Jenkins -> deployed to Kubernetes cluster.",
            "Configured and managed various AWS services including EC2, RDS, VPC, S3, Glacier, CloudWatch, CloudFront, ELB, SNS, SQS, SWF and Route 53.",
            "Used Ansible as Configuration management tool to automate repetitive tasks, quickly deploys critical applications."
        ]
    },
    {
      role: "Software/Android Developer",
      company: "Microsoft Innovation Center Nepal ",
      companylogo: require("./assets/images/MIC.PNG"),
      date: "Jan 2016 – Jun 2016",
      descBullets: [
          "Android Application Development with the Material Design UI and the android frameworks and services.",
          "Experienced with building REST APIs with Ruby-on-Rails.",
          "Designed intuitive graphical user interfaces using knowledge of HTML/CSS and design a database according to the project outlines. "
       ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "saadpasta", // Change to your github username to view your profile in Contact Section.
  showGithubProfile : "true",  // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Projects",
  subtitle: "Demo of the some designed sample application out of interest.",
  projects: [
    {
      title:  "Diet Monitoring Application",
      image: require("./assets/images/saayaHealthLogo.webp"),
      link: "http://saayahealth.com/"
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      link: "http://nextu.se/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Microsoft Specialist",
      subtitle: "Server Virtualization With Windows Server Hyper-V and System Center",
      image: require("./assets/images/mcert_2.jpg"),
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/1Gbqpg5ih01ADIBC1LyBy01XQqLErODJ3/view?usp=sharing" }
        //{ name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
       // { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
      ]
    },
    /*{
      title: "Google Assistant Action",
      subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [{ name: "View Google Assistant Action", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" }]
    }, */

  /*  {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
      ]
    } */
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
      
    }

  ],
  display: false// Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"],
  display: false  // Set false to hide this section, defaults to true
}; 

const contactInfo = {
    title: emoji("Contact Me ☎️"),
    subtitle: "I'd love to hear from you.",
    number: "+14092734291",
    emailAddress: "sanjitasharmanp@gmail.com",
};

//Twitter Section

/*const twitterDetails = {
  userName : "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
}; */
export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo}; 
