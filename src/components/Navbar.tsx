import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface PageLiObject {
  tag: string;
  name: string;
}

interface Props {
  selectedTag: string;
}

export default function Navbar({ selectedTag }: Props) {
  const pages: PageLiObject[] = [
    { tag: "/", name: "Hjem" },
    { tag: "/OmOss", name: "Om oss" },
  ];
  const handleScrollToTop = () => {
    // const rootDiv = document.getElementById("body");
    const rootDiv = document.body;
    if (rootDiv) {
      rootDiv.scrollTo({
        top: 0,
      });
    }
  };

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          zIndex: 1000,
          padding: "10px 20px",
        }}
      >
        <ul>
          {pages.map((page) => {
            let selectedClass;
            if (page.tag == selectedTag) {
              selectedClass = "selected";
            } else {
              selectedClass = "";
            }
            return (
              <li className={selectedClass} onClick={handleScrollToTop}>
                <Link to={page.tag}>{page.name} </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <Box h={"0px"} />
    </>
  );
}
