import FilterList from "@mui/icons-material/FilterList";
import { Grid, IconButton } from "@mui/material";
import NavbarLayout from "components/layouts/NavbarLayout";
import ProductCardList from "components/products/ProductCard1List";
import ProductFilterCard from "components/products/ProductFilterCard";
import ShopIntroCard from "components/shop/ShopIntroCard";
import Sidenav from "components/sidenav/Sidenav";
import useWindowSize from "hooks/useWindowSize";
import React from "react";

const Shop = () => {
  const width = useWindowSize();
  const isTablet = width < 1025;
  return (
    <NavbarLayout>
      <ShopIntroCard />

      <Grid container spacing={3}>
        <Grid
          item
          md={3}
          xs={12}
          sx={{
            display: {
              md: "block",
              xs: "none",
            },
          }}
        >
          <ProductFilterCard />
        </Grid>

        <Grid item md={9} xs={12}>
          {isTablet && (
            <Sidenav
              position="left"
              handle={
                <IconButton
                  sx={{
                    marginLeft: "auto",
                    display: "block",
                  }}
                >
                  <FilterList fontSize="small" />
                </IconButton>
              }
            >
              <ProductFilterCard />
            </Sidenav>
          )}

          <ProductCardList />
        </Grid>
      </Grid>
    </NavbarLayout>
  );
};

export default Shop;
