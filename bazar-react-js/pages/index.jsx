import { Box } from "@mui/material";
import Setting from "components/Setting";
import Footer from "pages-sections/landing/Footer";
import Section1 from "pages-sections/landing/Section1";
import Section2 from "pages-sections/landing/Section2";
import Section3 from "pages-sections/landing/Section3";
import Section4 from "pages-sections/landing/Section4";

const IndexPage = () => {
  return (
    <Box id="top" overflow="hidden" bgcolor="background.paper">
      <Setting />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </Box>
  );
};

export default IndexPage;
