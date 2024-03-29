import Head from "next/head";

import { useRouter } from "next/router";
import React from "react";
import { capitalise } from "../utils/capitalise";

type IMeta = {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
};

const Meta: React.FC<IMeta> = ({
  title,
  description = "A ReactJS/React Native developer, Android developer, UI / UX designer and tech enthusiast.",
  keywords = "React, Android, Javascript, Typescript ,Kotlin, Java",
  image = "https://res.cloudinary.com/teo1996/image/upload/v1681184234/lkauudqm9kgkrkmt6mvv.png",
}) => {
  const router = useRouter();

  let pageTitle;
  if (router.pathname === "/") {
    pageTitle = "Kevin | Software Engineer";
  } else {
    const path = router.pathname.split("/").pop();
    pageTitle = `Kevin | ${capitalise(path)}`;
  }

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:image" content={image} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={pageTitle} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <title>{pageTitle}</title>
    </Head>
  );
};

export default Meta;
