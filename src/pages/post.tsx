import React from 'react';

import { Helmet } from 'react-helmet';

import PostWork from "components/PostWork";

const PostPage = () => (
  <>
    <Helmet>
      <title>Profile</title>
    </Helmet>
    <main id="main">
      <PostWork />
    </main>
  </>
);

export default PostPage;
