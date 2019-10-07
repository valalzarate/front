import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import ProductCategories from './modules/views/ProductCategories';
import ProductSmokingHero from './modules/views/ProductSmokingHero';
import AppFooter from './modules/views/AppFooter';
import ProductHero from './modules/views/ProductHero';
import ProductCTA from './modules/views/ProductCTA';
import AppAppBar from './modules/views/AppAppBar';
import Album from "./modules/components/eventCard.js";
function Index() {
  return (
    <React.Fragment>
      <AppAppBar />
      <ProductHero />
      <ProductCategories />
      <Album/>
      <ProductCTA />
      <ProductSmokingHero />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);
