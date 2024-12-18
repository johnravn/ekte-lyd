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
    // { tag: "/LoggInn", name: "Logg inn" },
  ];

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          zIndex: 1000,
          padding: "10px 20px",
          // backgroundColor: "rgba(40,40,40,.15)",
          // borderBottomLeftRadius: "20px",
          // borderBottomRightRadius: "20px",
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
              <li className={selectedClass}>
                <Link to={page.tag}>{page.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <Box h={"0px"} />
    </>
  );
}
