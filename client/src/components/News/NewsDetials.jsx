import React from "react";
import { Link, useParams } from "react-router-dom";
import "./NewsDetials.css";

const newsList = [
  {
    id: 1,
    title: "AI Workshop Conducted Successfully",
    date: "April 10, 2025",
    summary:
      "A hands-on workshop on Artificial Intelligence was held with over 200 students participating actively.",
    image: "https://picsum.photos/400/250?random=1",
    fullContent:
      "The AI workshop was conducted successfully at our university, focusing on the fundamentals and practical applications of Artificial Intelligence. Over 200 students from various disciplines actively participated in the event, which was held in collaboration with leading AI practitioners and educators. The workshop aimed to provide an in-depth understanding of AI concepts, including machine learning algorithms, neural networks, and natural language processing. Additionally, participants were given hands-on sessions using popular AI frameworks such as TensorFlow and PyTorch. The workshop concluded with a group project in which teams applied the learned concepts to solve real-world problems using AI tools. The event was a massive success and provided students with the opportunity to learn from industry leaders, network with peers, and enhance their knowledge of AI technologies. Participants received certificates, and the event was praised for its engaging format and insightful content.",
  },
  {
    id: 2,
    title: "National Level Hackathon Winners",
    date: "March 25, 2025",
    summary:
      "Our students secured 1st position at the National Hackathon 2025 hosted by NIT Delhi.",
    image: "https://picsum.photos/400/250?random=2",
    fullContent:
      "The National Hackathon 2025, hosted by NIT Delhi, was a prestigious event where over 500 students from universities across India competed in various challenges related to coding, app development, and problem-solving. Our team of brilliant students secured 1st position in the competition, beating out top teams from IITs, NITs, and other renowned institutes. The team developed an innovative solution to a complex problem in real-time data processing, combining cutting-edge technologies like machine learning, cloud computing, and data analytics. Their winning project was a predictive system for optimizing transportation routes in large metropolitan cities, reducing fuel consumption, and minimizing traffic congestion. The judges praised the team's creativity, technical expertise, and the scalability of the solution. The victory at the National Hackathon not only demonstrated our students' technical skills but also showcased their ability to think outside the box and solve real-world problems using modern technologies.",
  },
  {
    id: 3,
    title: "Seminar on Career Opportunities",
    date: "March 5, 2025",
    summary:
      "Experts from top tech companies shared insights on career paths and emerging technologies.",
    image: "https://picsum.photos/400/250?random=3",
    fullContent:
      "On March 5, 2025, the university hosted a seminar on 'Career Opportunities in Emerging Technologies.' The seminar featured industry experts from top tech companies, including Google, Microsoft, and Amazon, who shared valuable insights on the current trends in the technology job market. The seminar provided students with a comprehensive understanding of the various career paths available in fields such as artificial intelligence, data science, cybersecurity, and cloud computing. The experts discussed the growing demand for tech professionals, the skills required to excel in these roles, and the importance of continuous learning and upskilling. In addition, the seminar included panel discussions on how emerging technologies like blockchain, quantum computing, and 5G are reshaping the job market. Students had the opportunity to ask questions and gain advice from the speakers, which provided them with a clearer vision for their future careers in technology. The seminar was a valuable resource for all students, offering them guidance on how to stay competitive and succeed in the rapidly evolving tech industry.",
  },
  {
    id: 4,
    title: "Annual Sports Meet Highlights",
    date: "February 20, 2025",
    summary:
      "The college hosted its annual sports meet with thrilling performances and enthusiastic participation.",
    image: "https://picsum.photos/400/250?random=4",
    fullContent:
      "The college's Annual Sports Meet, held on February 20, 2025, was a grand success, attracting enthusiastic participation from students across all departments. The event kicked off with an exciting opening ceremony, featuring performances by the college band and cheerleaders, followed by a torch relay. Various athletic competitions were held throughout the day, including track and field events, football, basketball, and volleyball. The highlight of the event was the relay race, where students showcased their speed and teamwork in front of an enthusiastic crowd. Several college records were broken, and some of the best athletes in the college earned well-deserved accolades. The sports meet concluded with a grand closing ceremony, where winners were awarded trophies and medals. The event not only fostered a spirit of healthy competition but also promoted fitness and teamwork among students. The success of the meet was attributed to the hard work of the organizing committee, the participation of faculty members, and the energetic involvement of students.",
  },
  {
    id: 5,
    title: "Coding Bootcamp Concludes",
    date: "February 12, 2025",
    summary:
      "A week-long coding bootcamp concluded with a project exhibition by the participants.",
    image: "https://picsum.photos/400/250?random=5",
    fullContent:
      "The week-long Coding Bootcamp, organized by the Computer Science Department, concluded on February 12, 2025, with an exciting project exhibition. The bootcamp, which aimed to teach participants modern software development techniques, covered topics such as web development, app development, and cloud computing. Over 150 students participated in the bootcamp, which included hands-on sessions, coding challenges, and expert lectures. The final exhibition showcased the innovative projects developed by participants, ranging from mobile apps to interactive websites. The participants demonstrated their skills by presenting working prototypes of their projects, which were evaluated by a panel of industry professionals. The bootcamp provided students with the opportunity to learn new technologies and improve their coding abilities in a collaborative environment. The event was a great success and served as a stepping stone for many students to launch their careers in the tech industry. The bootcamp was highly praised for its comprehensive curriculum, engaging sessions, and the support provided to participants throughout the week.",
  },
  {
    id: 6,
    title: "Guest Lecture on Cybersecurity",
    date: "January 30, 2025",
    summary:
      "Renowned cybersecurity expert Ankit Fadia addressed students on ethical hacking and security trends.",
    image: "https://picsum.photos/400/250?random=6",
    fullContent:
      "On January 30, 2025, the university hosted a guest lecture by renowned cybersecurity expert Ankit Fadia. The lecture, titled 'Ethical Hacking and the Future of Cybersecurity,' was attended by over 300 students from the Computer Science and Information Technology departments. During the lecture, Fadia discussed the evolving landscape of cybersecurity threats and the importance of ethical hacking in protecting systems from malicious attacks. He shared insights into various hacking techniques and demonstrated how ethical hackers can use these methods to identify vulnerabilities in systems and help organizations strengthen their security measures. Fadia also highlighted the importance of security certifications and career opportunities in the cybersecurity field. The lecture was highly interactive, with students asking questions and engaging in discussions on the ethical implications of hacking. The event provided valuable knowledge to students aspiring to pursue careers in cybersecurity and ethical hacking.",
  },
  {
    id: 7,
    title: "Alumni Talk Series Launched",
    date: "January 18, 2025",
    summary:
      "Successful alumni shared their journeys in tech and entrepreneurship in the first of a monthly series.",
    image: "https://picsum.photos/400/250?random=7",
    fullContent:
      "The Alumni Talk Series was launched on January 18, 2025, with a motivational session by successful alumni who have made significant contributions to the tech and entrepreneurship sectors. The event, which marked the beginning of a monthly series, featured three prominent alumni who shared their professional journeys and the challenges they overcame to reach their current positions. The speakers included a tech startup founder, a senior data scientist at a global IT company, and a former university student who now leads a cybersecurity consulting firm. Each speaker spoke about their experiences in the industry, the skills they acquired, and how they navigated the rapidly changing tech landscape. The event was aimed at inspiring current students and providing them with a real-world perspective on career opportunities in tech. The alumni also answered questions from students, offering guidance on how to build a successful career and the importance of networking and mentorship. The event was well-received and sparked the beginning of a series that will continue to inspire and educate students throughout the year.",
  },
  {
    id: 8,
    title: 'Cultural Fest "Udaan" a Grand Success',
    date: "December 22, 2024",
    summary:
      "The annual cultural fest witnessed vibrant performances, art exhibitions, and enthusiastic crowds.",
    image: "https://picsum.photos/400/250?random=8",
    fullContent:
      'The annual cultural fest "Udaan" was held on December 22, 2024, and was a grand success. The event featured a diverse range of performances, including dance, music, drama, and poetry, all showcasing the rich talent and creativity of our students. The cultural fest also included an art exhibition, where students displayed their paintings, sculptures, and digital art, reflecting their artistic skills and imagination. The festival was attended by students, faculty members, and alumni, all of whom enjoyed the energetic atmosphere and the vibrant performances. A highlight of the event was the closing ceremony, which featured a fusion dance performance that captivated the audience. "Udaan" was not only a celebration of art and culture but also an opportunity for students to express themselves, learn from one another, and come together as a community. The success of the event was attributed to the hard work of the organizing committee, the participation of performers, and the unwavering support from the faculty and alumni.',
  },
  {
    id: 9,
    title: "AI Workshop Conducted Successfully",
    date: "April 10, 2025",
    summary:
      "A hands-on workshop on Artificial Intelligence was held with over 200 students participating actively.",
    image: "https://picsum.photos/400/250?random=1",
    fullContent:
      "The AI workshop was conducted successfully at our university, focusing on the fundamentals and practical applications of Artificial Intelligence. Over 200 students from various disciplines actively participated in the event, which was held in collaboration with leading AI practitioners and educators. The workshop aimed to provide an in-depth understanding of AI concepts, including machine learning algorithms, neural networks, and natural language processing. Additionally, participants were given hands-on sessions using popular AI frameworks such as TensorFlow and PyTorch. The workshop concluded with a group project in which teams applied the learned concepts to solve real-world problems using AI tools. The event was a massive success and provided students with the opportunity to learn from industry leaders, network with peers, and enhance their knowledge of AI technologies. Participants received certificates, and the event was praised for its engaging format and insightful content.",
  },
  {
    id: 10,
    title: "National Level Hackathon Winners",
    date: "March 25, 2025",
    summary:
      "Our students secured 1st position at the National Hackathon 2025 hosted by NIT Delhi.",
    image: "https://picsum.photos/400/250?random=2",
    fullContent:
      "The National Hackathon 2025, hosted by NIT Delhi, was a prestigious event where over 500 students from universities across India competed in various challenges related to coding, app development, and problem-solving. Our team of brilliant students secured 1st position in the competition, beating out top teams from IITs, NITs, and other renowned institutes. The team developed an innovative solution to a complex problem in real-time data processing, combining cutting-edge technologies like machine learning, cloud computing, and data analytics. Their winning project was a predictive system for optimizing transportation routes in large metropolitan cities, reducing fuel consumption, and minimizing traffic congestion. The judges praised the team's creativity, technical expertise, and the scalability of the solution. The victory at the National Hackathon not only demonstrated our students' technical skills but also showcased their ability to think outside the box and solve real-world problems using modern technologies.",
  },
];

function NewsDetail() {
  const { id } = useParams(); // Get the ID from the URL
  const news = newsList.find((newsItem) => newsItem.id === parseInt(id)); // Find the news item by ID

  if (!news) {
    return <div>News not found</div>;
  }

  return (
    <div className="news-detail">
      <img src={news.image} alt={news.title} className="news-image" />
      <h2 className="news-title">{news.title}</h2>
      <div className="news-date">{news.date}</div>
      <p className="news-full-content">{news.fullContent}</p>
      <Link to="/news" className="back-to-news">
        Back to News
      </Link>
    </div>
  );
}

export default NewsDetail;
