import './index.css';
import Card from "./components/Card";
import { Car } from 'lucide-react';

const App = () => { 
  const jobOpenings = [
    {
      brandLogo:
        "https://www.gesi.org/wp-content/uploads/2024/08/google-logo-png-open-2000.png",
      company: "Google",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag: "Full Time",
      pay: "$45/hr",
      location: "Mumbai, India",
    },
    {
      brandLogo:
        "https://thumbs.dreamstime.com/b/amazon-logo-white-background-montreal-canada-july-printed-paper-98221126.jpg",
      company: "Amazon",
      datePosted: "2 weeks ago",
      post: "Software Development Engineer",
      tag: "Full Time",
      pay: "$50/hr",
      location: "Indore, India",
    },
    {
      brandLogo:
        "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
      company: "Apple",
      datePosted: "1 week ago",
      post: "iOS Developer",
      tag: "Full Time",
      pay: "$55/hr",
      location: "Gurugram, India",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShFGV-kmuuMoVSUi5SxXoGJ-2u3oYJjGR3IQ&s",
      company: "Meta",
      datePosted: "3 days ago",
      post: "React Developer",
      tag: "Part Time",
      pay: "$40/hr",
      location: "Noida, India",
    },
    {
      brandLogo:
        "https://yt3.googleusercontent.com/3b73AYEMMfa3SX5KJMeygio9smTPvrPrpicuQZbfQ_2DN7dV_ApiRM4CdYjSprEy1YYvt_9b=s900-c-k-c0x00ffffff-no-rj",
      company: "Netflix",
      datePosted: "10 days ago",
      post: "UI Engineer",
      tag: "Full Time",
      pay: "$60/hr",
      location: "Karnataka, India",
    },
    {
      brandLogo:
        "https://yt3.googleusercontent.com/H4L6_GZ4lS3MqX3Rw9XnqAfltj1GZscDT4144uypXqNuVYhqLmUiTRiWygg7cnhMdM2nfxo9KFM=s160-c-k-c0x00ffffff-no-rj",
      company: "Microsoft",
      datePosted: "4 days ago",
      post: "Backend Engineer",
      tag: "Full Time",
      pay: "$52/hr",
      location: "Banglore, India",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFAkwq5rkkbUsQuJvSThsHS05SkYYejcUijA&s",
      company: "NVIDIA",
      datePosted: "2 days ago",
      post: "Machine Learning Engineer",
      tag: "Full Time",
      pay: "$65/hr",
      location: "Pune, India",
    },
    {
      brandLogo:
        "https://media.licdn.com/dms/image/v2/D560BAQHilaKdJueUVg/company-logo_200_200/B56ZodIp56HUAM-/0/1761425400480?e=2147483647&v=beta&t=-tNun5V2BRDck_2umtf0ZcPnEoaTicnbr3RnWud4Eag",
      company: "Adobe",
      datePosted: "6 days ago",
      post: "Frontend Engineer",
      tag: "Part Time",
      pay: "$42/hr",
      location: "Delhi, India",
    },
    {
      brandLogo:
        "https://media.licdn.com/dms/image/v2/D560BAQHilaKdJueUVg/company-logo_200_200/B56ZodIp56HUAM-/0/1761425400480?e=2147483647&v=beta&t=-tNun5V2BRDck_2umtf0ZcPnEoaTicnbr3RnWud4Eag",
      company: "Uber",
      datePosted: "1 week ago",
      post: "Full Stack Developer",
      tag: "Full Time",
      pay: "$48/hr",
      location: "Chennai, India",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaAx4OMNKDO78w1GtSY9IKw8zy3RPjRMbWyg&s",
      company: "Salesforce",
      datePosted: "3 weeks ago",
      post: "Cloud Engineer",
      tag: "Full Time",
      pay: "$53/hr",
      location: "Delhi, India",
    },
  ];

  return (
    <div className="parent">
      {jobOpenings.map((elem,idx) => {
        return (
          <div key={idx}>
            <Card
              company={elem.company}
              logo={elem.brandLogo}
              date={elem.datePosted}
              post={elem.post}
              tag={elem.tag}
              pay={elem.pay}
              location={elem.location}
            />
          </div>
        );
      })}
    </div>
  );
}
export default App;