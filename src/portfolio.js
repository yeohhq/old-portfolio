/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//Home Page
const greeting = {
  title: "Yeoh Hui Qing",
  logo_name: "YeohHuiQing",
  nickname: "Yeoh",
  subTitle:
    "A Year 2 Computer Science undergraduate passionate about UI/UX Design and software development, actively looking for internships! :).",
  resumeLink:
    "https://drive.google.com/file/d/1_6YuSZ0TvqXjjMV1RU-oje--u9fk1zCZ/view?usp=sharing",
  portfolio_repository: "https://github.com/yeohhq/masterPortfolio",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/yeohhq",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/yeohhuiqing/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:yeohhuiqing00@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/yeohhuiqing/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Developing mobile applications using Flutter, Andriod Studio and Google Firebase",
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
  ],
};

const degrees = {
  degrees: [
    {
      title: "National University of Singapore (NUS)",
      subtitle: "Bachelors of Computing (Honours) in Computer Science",
      logo_path: "nus_soc_logo.png",
      alt_name: "NUS SoC",
      duration: "2019 - Present",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, OS etc.",
        "⚡ Apart from this, I have done courses on Software Engineering, Computer Organisation, Computer Graphics etc.",
        "⚡ I am also looking to expand my knowledge in the fields of Game Development and UI/UX Design.",
      ],
      website_link: "https://www.comp.nus.edu.sg/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Orbital - Apollo 11 (Advanced)",
      subtitle: "- CP2106 Independent Software Development Project",
      logo_path: "orbital.png",
      certificate_link:
        "https://credentials.nus.edu.sg/434ffe76-f9b9-4151-b476-c5fb9f69d88b",
      alt_name: "Orbital",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Co-Curricular Activities, Competitions",
  description:
    "I have exposed myself to different fields of programming, but am particularly involved with front-end developments and UI/UX designs as I have found myself loving the experience of creating beautiful and intuitive user interfaces for users.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Deputy Director for Graphic & Content",
          company: "NUS Students' Computing Club",
          company_url: "https://nuscomputing.com/",
          logo_path: "nus_compclub.png",
          duration: "Aug 2019 - Sept 2020",
          location: "Singapore",
          description:
            "I was in charge of curating beautiful and attractive graphic content for various social media platforms to engage the student body regarding events held by the Computing Club. During my term, I also started various initiatives such as sticker packs, light-hearted comics to spice up the student body's school experience.",
          color: "#000000",
        },
        {
          title: "UI/UX Designer",
          company: "Reportise",
          company_url: "https://www.reportise.com",
          logo_path: "uiux.png",
          duration: "May 2020 - Jul 2020",
          location: "Singapore",
          description:
            "As the main UI/UX designer, I was in charge of revamping the whole website for Reportise. Reportise is a news reading site that seeks to summarise news into consolidated and easy-to-digest content, and help readers earn by sharing news.",
          color: "#000000",
        },
        {
          title: "Shopee Product & Design Challenge 2021 - Semi-finalist (On-going)",
          company: "Shopee",
          company_url: "https://www.shopee.sg",
          logo_path: "shopee.png",
          duration: "Dec 2020 - Jan 2020",
          location: "Singapore",
          description: "Open to all undergraduates, post-graduates and professionals in Singapore, for talented Product & Design Professionals and Students to ideate and design the ultimate feature for the Shopee app.",
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools to create both mobile and PC applications, with a mixture of brown-field and green-field projects!",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Yeoh.png",
    description:
      "I am available on Telegram, Instagram, LinkedIn, and via email. You can reach out to me for internship/job offers, or just to get to know me via a message and I will reply promptly! :)",
  },
  blogSection: {
    title: "Other Interests",
    subtitle: "I love doing digital illustrations and modern calligraphy during my free time, so feel free to check out my art portfolio!",
    link: "https://instagram.com/doodlylines",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Telegram Handle",
    subtitle:
      "Reach me the quickest via Telegram! :)",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://telegram.me/yeohhuiqing",
  },
  phoneSection: {
    title: "Email",
    subtitle: "yeohhuiqing00@gmail.com",
  },
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
