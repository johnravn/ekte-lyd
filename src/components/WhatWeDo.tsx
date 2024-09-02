import { VStack } from "@chakra-ui/react";
import WhatWeDoPart from "./WhatWeDoPart";
import { useWindowSize } from "@uidotdev/usehooks";

import prodImage from "../assets/images/prod.png";
import eqImage from "../assets/images/eq.png";
import personelImage from "../assets/images/personel.png";
import prodImageSml from "../assets/images/prodSml.png";
import eqImageSml from "../assets/images/eqSml.png";
import personelImageSml from "../assets/images/personelSml.png";
import WhatWeDoPartSml from "./WhatWeDoPartSml";

interface wwwData {
  title: string;
  underTitle: string;
  image: string;
  imageSml: string;
  flip: number;
}

export default function WhatWeDo() {
  const size = useWindowSize();

  const wwwData: wwwData[] = [
    {
      title: "Produksjoner",
      underTitle: "Vi jobber for at din produksjon skal bli så bra som mulig",
      image: prodImage,
      imageSml: prodImageSml,
      flip: 0,
    },
    {
      title: "Utstyr",
      underTitle: "Vi har utstyr av topp kvalitet som vi stoler på",
      image: eqImage,
      imageSml: eqImageSml,
      flip: 1,
    },
    {
      title: "Mannskap",
      underTitle: "Vi har dyktige teknikere som kan fagfeltet sitt",
      image: personelImage,
      imageSml: personelImageSml,
      flip: 0,
    },
  ];

  return (
    <>
      <VStack
        spacing={"55px"}
        w={"100%"}
        maxW={"1600px"}
        justifyContent={"center"}
      >
        {wwwData.map((section) => {
          if (size.width != null) {
            if (size.width > 600) {
              return (
                <WhatWeDoPart
                  title={section.title}
                  underTitle={section.underTitle}
                  image={section.image}
                  flip={section.flip}
                />
              );
            } else {
              return (
                <WhatWeDoPartSml
                  title={section.title}
                  underTitle={section.underTitle}
                  imageSml={section.imageSml}
                  flip={section.flip}
                />
              );
            }
          }
        })}
      </VStack>
    </>
  );
}
