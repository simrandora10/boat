import React from "react";
import Blog1 from "../../assets/blogs/blog1.jpg";
import Blog2 from "../../assets/blogs/blog2.jpg";
import Blog3 from "../../assets/blogs/blog3.jpg";
import Blog4 from "../../assets/blogs/blog4.jpg";
import Blog5 from "../../assets/blogs/blog5.jpeg"; // Image for the 5th blog
import Blog6 from "../../assets/blogs/blog6.jpg";  // Image for the 6th blog
import Blog7 from "../../assets/blogs/blog7.jpg";  // Image for the 7th blog
import Blog8 from "../../assets/blogs/blog8.jpg";  // Image for the 8th blog
import { UpdateFollower } from "react-mouse-follower";

const BlogsData = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, aliquid?",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum nulla magni molestiae distinctio dicta voluptas culpa consequuntur random",
    link: "#",
    img: Blog1,
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, aliquid?",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum nulla magni molestiae distinctio dicta voluptas culpa consequuntur random",
    link: "#",
    img: Blog2,
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, aliquid?",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum nulla magni molestiae distinctio dicta voluptas culpa consequuntur random",
    link: "#",
    img: Blog3,
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, aliquid?",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum nulla magni molestiae distinctio dicta voluptas culpa consequuntur random",
    link: "#",
    img: Blog4,
  },
  {
    id: 5,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, aliquid?",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum nulla magni molestiae distinctio dicta voluptas culpa consequuntur random what do you thing about this headphones>",
    link: "#",
    img: Blog5,
  },
  {
    id: 6,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, aliquid?",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum nulla magni molestiae distinctio dicta voluptas culpa consequuntur random",
    link: "#",
    img: Blog6,
  },
  {
    id: 7,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, aliquid?",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum nulla magni molestiae distinctio dicta voluptas culpa consequuntur random",
    link: "#",
    img: Blog7,
  },
  {
    id: 8,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, aliquid?",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum nulla magni molestiae distinctio dicta voluptas culpa consequuntur random",
    link: "#",
    img: Blog8,
  },
];

const Blogs = () => {
  return (
    <section id="blog" className="bg-green-50">
      <div className="container py-14">
        <h1 className="text-3xl font-bold text-center font-poppins pb-8">Blogs</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {BlogsData.map((data) => (
            <UpdateFollower
              key={data.id}
              mouseOptions={{
                backgroundColor: "black",
                zIndex: 9999,
                followSpeed: 1.5,
                text: "read",
                textFontSize: "3px",
                scale: 5,
              }}
            >
              <div className="flex flex-col items-center justify-center gap-6 p-5 max-w-[300px] mx-auto shadow-lg rounded-md bg-white hover:-translate-y-2 duration-300">
                <img src={data.img} alt="" className="w-full h-auto" />
                <div className="space-y-2">
                  <h1 className="text-xl font-bold">{data.title}</h1>
                  <p>{data.desc}</p>
                </div>
              </div>
            </UpdateFollower>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
