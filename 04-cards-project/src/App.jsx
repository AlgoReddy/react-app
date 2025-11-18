import React from "react";
import { Bookmark } from "lucide-react";
import Card from "./components/card";
const App = () => {
  const jobOpenings = [
    {
      brandLogo: "https://cdn-icons-png.flaticon.com/128/6033/6033716.png",
      companyName: "Meta",
      datePosted: "5 days ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$58/hr",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://cdn-icons-png.flaticon.com/128/10096/10096351.png",
      companyName: "Amazon",
      datePosted: "2 weeks ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$72/hr",
      location: "Bengaluru, India",
    },
    {
      brandLogo: "https://cdn-icons-png.flaticon.com/128/731/731985.png",
      companyName: "Apple",
      datePosted: "10 days ago",
      post: "iOS Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$65/hr",
      location: "Hyderabad, India",
    },
    {
      brandLogo: "https://cdn-icons-png.flaticon.com/128/300/300221.png",
      companyName: "Google",
      datePosted: "3 weeks ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$62/hr",
      location: "Gurugram, India",
    },
    {
      brandLogo: "https://cdn-icons-png.flaticon.com/128/732/732228.png",
      companyName: "Netflix",
      datePosted: "1 week ago",
      post: "Data Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$85/hr",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://cdn-icons-png.flaticon.com/128/732/732221.png",
      companyName: "Microsoft",
      datePosted: "4 days ago",
      post: "Cloud Solutions Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$76/hr",
      location: "Bengaluru, India",
    },
    {
      brandLogo: "https://cdn-icons-png.flaticon.com/128/16183/16183663.png",
      companyName: "Tesla",
      datePosted: "2 days ago",
      post: "AI Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$92/hr",
      location: "Pune, India",
    },
    {
      brandLogo: "https://cdn-icons-png.flaticon.com/128/882/882625.png",
      companyName: "IBM",
      datePosted: "5 weeks ago",
      post: "Java Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$54/hr",
      location: "Chennai, India",
    },
    {
      brandLogo: "https://cdn-icons-png.flaticon.com/128/5968/5968914.png",
      companyName: "Salesforce",
      datePosted: "6 days ago",
      post: "DevOps Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$78/hr",
      location: "Hyderabad, India",
    },
    {
      brandLogo: "https://cdn-icons-png.flaticon.com/128/888/888835.png",
      companyName: "Adobe",
      datePosted: "9 days ago",
      post: "UI/UX Designer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$48/hr",
      location: "Bengaluru, India",
    },
  ];
  console.log(jobOpenings);
  return (
    <div className="parent">
      {jobOpenings.map(function (elem , idx ) {
        return <div key={idx}>
            <Card   companyName={elem.companyName}  post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} brandLogo={elem.brandLogo} datePosted={elem.datePosted}  />
        </div>
      })}
    </div>
  );
};

export default App;
