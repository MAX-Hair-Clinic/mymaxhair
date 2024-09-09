// /src/components/page/blog/DynamicBlogContent.tsx
import React from "react";
import { BlogContent } from "@/types/blogData";
import Image from "next/image";
import images from "@/assets";

interface DynamicBlogContentProps {
  content: BlogContent[];
}

const DynamicBlogContent: React.FC<DynamicBlogContentProps> = ({ content }) => {
  const renderContent = (item: BlogContent) => {
    const Topic_Component = () => {
      return (
        <div className="">
          <h2 className="">{item.topic}</h2>
        </div>
      );
    };

    const Heading_Component = () => {
      return (
        <div className="">
          <h2 className="">{item.heading}</h2>
        </div>
      );
    };

    const SubHeading_Component = () => {
      return (
        <div className="">
          <h4>{item.subHeading}</h4>
        </div>
      );
    };

    const Content_Component = () => {
      return (
        <div className="">
          {item.content?.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      );
    };

    const Image_Component = () => {
      return (
        <div className="">
          <Image
            src={item?.image || images.blog.blog1}
            alt={item.heading || "Blog Image"}
            className=""
          />
        </div>
      );
    };

    const List_Component = () => {
      return (
        <div className="">
          <ul className="">
            {item.items?.map((listItem, index) => (
              <li key={index}>{listItem}</li>
            ))}
          </ul>
        </div>
      );
    };

    const HalfSection_Component = () => {
      return (
        <div className="">
          {item.halfSection?.map((subItem, index) => (
            <div key={index}>{renderContent(subItem)}</div>
          ))}
        </div>
      );
    };

    switch (item.type) {
      case "topic":
        return <Topic_Component />;

      case "heading":
        return <Heading_Component />;

      case "subHeading":
        return <SubHeading_Component />;

      case "content":
        return <Content_Component />;

      case "image":
        return <Image_Component />;

      case "list":
        return <List_Component />;

      case "halfSection":
        return <HalfSection_Component />;

      default:
        return <div>Unsupported content type</div>;
    }
  };

  return (
    <div>
      {content.map((item, index) => (
        <div key={index}>{renderContent(item)}</div>
      ))}
    </div>
  );
};

export default DynamicBlogContent;
