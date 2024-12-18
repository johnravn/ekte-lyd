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
          position: "fixed", // Makes the navbar sticky
          top: 0, // Sticks it to the top of the viewport
          zIndex: 1000,
          padding: "10px 20px", // Add some padding for better appearance
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
