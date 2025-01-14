import { Stack } from "@mui/material";
import GroceryLayout from "components/layouts/GroceryLayout";
import MobileNavigationBar2 from "components/mobile-navigation/MobileNavigationBar2";
import Grocery1SideNav from "components/page-sidenav/Grocery1SideNav";
import Setting from "components/Setting";
import SidenavContainer from "components/sidenav-container/SidenavContainer";
import AllProducts from "pages-sections/grocery1/AllProducts";
import DiscountSection from "pages-sections/grocery1/DiscountSection";
import GrocerySection1 from "pages-sections/grocery1/GrocerySection1";
import ProductCarousel from "pages-sections/grocery1/ProductCarousel";
import ServiceSection2 from "pages-sections/grocery1/ServiceSection2";
import GroceryFooter from "pages-sections/grocery2/GroceryFooter";
import api from "utils/api/grocery1-shop";

const Grocery1 = (props) => {
  const {
    grocery1NavList,
    popularProducts,
    trendingProducts,
    grocery1Services,
    grocery1ProductsList,
  } = props;
  return (
    <GroceryLayout showNavbar={false}>
      <GrocerySection1 />
      <ServiceSection2 id="grocery1Services" services={grocery1Services} />

      <SidenavContainer
        navFixedComponentID="grocery1Services"
        SideNav={() => <Grocery1SideNav navList={grocery1NavList} />}
      >
        <Stack spacing={6} mt={2}>
          <ProductCarousel
            products={popularProducts}
            title="Popular Products"
          />
          <ProductCarousel
            products={trendingProducts}
            title="Trending Products"
          />
          <AllProducts productsData={grocery1ProductsList} />
          <DiscountSection />
          <GroceryFooter />
        </Stack>
      </SidenavContainer>

      <Setting />

      <MobileNavigationBar2>
        <Grocery1SideNav navList={grocery1NavList} />
      </MobileNavigationBar2>
    </GroceryLayout>
  );
};

export async function getStaticProps() {
  const popularProducts = await api.getPopularProducts();
  const grocery1Services = await api.getGrocery1Services();
  const trendingProducts = await api.getTrendingProducts();
  const grocery1NavList = await api.getGrocery1Navigation();
  const grocery1ProductsList = await api.getGrocery1Products();
  return {
    props: {
      grocery1NavList,
      popularProducts,
      grocery1Services,
      trendingProducts,
      grocery1ProductsList,
    },
  };
}
export default Grocery1;
