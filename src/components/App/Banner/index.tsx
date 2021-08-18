import React from 'react';

import { StyledBanner } from './styles';

const bannerURL =
  'https://previews.123rf.com/images/sabelskaya/sabelskaya1906/sabelskaya190600403/128170491-chinese-new-year-festival-decoration-banner-red-lanterns-from-china-and-traditional-oriental-style-f.jpg';

const Banner: React.FC = () => (
  <StyledBanner>
    <img alt="none" src={bannerURL} />
  </StyledBanner>
);

export default Banner;
