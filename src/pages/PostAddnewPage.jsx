import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import AddPostContainer from "../components/post/AddPostContainer";
import AddPostImage from "../components/post/AddPostImage";
import AddPostLink from "../components/post/AddPostLink";

const boardItem = [
  {
    name: "Post",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
        />
      </svg>
    ),
    iconSolid: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path
          fillRule="evenodd"
          d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 0 0 3 3h15a3 3 0 0 1-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H12Zm-.75-2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM6 12.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5H6Zm-.75 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 6.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 9 6.75H6Z"
          clipRule="evenodd"
        />
        <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 0 1-3 0V6.75Z" />
      </svg>
    ),
    url: "/post-addnew/post",
  },
  {
    name: "Image & Video",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
        />
      </svg>
    ),
    iconSolid: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path
          fillRule="evenodd"
          d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
          clipRule="evenodd"
        />
      </svg>
    ),
    url: "/post-addnew/image",
  },
  {
    name: "Link",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
        />
      </svg>
    ),
    iconSolid: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2.5"
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
        />
      </svg>
    ),
    url: "/link",
  },
  // Thêm các đối tượng khác nếu cần
];

const PostAddNewPage = () => {
  const [activeButton, setActivebutton] = useState("Post");
  const handleButtonCLick = (type) => {
    setActivebutton(type);
  };

  return (
    <div className="container flex gap-5">
      <div className="flex-1 w-full mt-5">
        <div className="p-4 mt-16 text-xl font-semibold normal-case border-b-2 border-border-color">
          Create a post
        </div>
        {/* info */}
        <div className="flex items-center gap-2 px-5 py-2 normal-case bg-main-dark-gray w-full max-w-[300px] rounded mt-3">
          <div className="h-6 max -w-6">
            <img
              srcSet="https://songhuuco.com.vn/wp-content/uploads/2019/04/1_222462.jpg 2x"
              className="object-cover w-full h-full rounded-full"
              alt=""
            />
          </div>
          <span className="text-sm font-semibold normal-case ">
            r/mondaybroken
          </span>
        </div>
        {/* board */}
        <div className="w-full mt-5 max-w-[750px] rounded bg-main-dark-gray min-h-[430px]">
          {/* type */}
          <div className="grid items-center w-full grid-cols-4 border-b border-border-color">
            {boardItem.length > 0 &&
              boardItem.map((item) => (
                <div
                  key={item.name}
                  className={`w-full max-w-[200px] border-r border-border-color transition-all`}
                >
                  <div
                    to={item.url}
                    onClick={() => handleButtonCLick(item.name)}
                    className={`flex items-center font-semibold justify-center text-base gap-2 px-5 py-4 border-b border-main-dark-lite  ${
                      activeButton === item.name
                        ? "text-white border-b border-text-color"
                        : "text-text-color"
                    }`}
                  >
                    {activeButton === item.name ? item.iconSolid : item.icon}
                    {item.name}
                  </div>
                </div>
              ))}
          </div>
          {/* form */}
          <div className="px-5">
            {activeButton === "Post" ? (
              <AddPostContainer activeButton={activeButton}></AddPostContainer>
            ) : activeButton === "Image & Video" ? (
              <AddPostImage activeButton={activeButton}></AddPostImage>
            ) : activeButton === "Link" ? (
              <AddPostLink activeButton={activeButton}></AddPostLink>
            ) : (
              ""
            )}
            {/* category */}
            {/* line */}
            <div className="w-full h-[1px] bg-border-color mt-10 "></div>
          </div>
        </div>
      </div>
      {/* right */}
      <div className=" w-full px-5 max-w-[350px] mt-32 rounded h-[350px] bg-main-dark-lite ">
        <div className="flex items-center gap-3 py-3 font-semibold border-b border-border-color">
          <div className="max-w-[50px] h-[60px]">
            <img
              className="object-cover w-full h-full"
              srcSet="/avatar-reddit.png 2x"
              alt=""
            />
          </div>
          <h1 className="font-semibold ">Posting to Reddit</h1>
        </div>
        <ol className="">
          <li className="px-2 py-3 text-sm font-semibold border-b border-border-color ">
            <span>1.</span> chủ ground dep zai
          </li>
          <li className="px-2 py-3 text-sm font-semibold border-b border-border-color">
            <span>2.</span> thang nao doc lam cho
          </li>
          <li className="px-2 py-3 text-sm font-semibold border-b border-border-color">
            <span>3.</span> posting is gay
          </li>
          <li className="px-2 py-3 text-sm font-semibold border-b border-border-color">
            <span>4.</span> lorem is lum
          </li>
          <li className="px-2 py-3 text-sm font-semibold border-b border-border-color">
            <span>5.</span> be xuan mai lon to
          </li>
        </ol>
      </div>
    </div>
  );
};

export default PostAddNewPage;
