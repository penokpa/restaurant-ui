import React from "react";

import { Helmet as HelmetComponent } from "react-helmet";

const Helmet = HelmetComponent as any;

type Props = {
  seo_title: string;
  meta_description: string;
  meta_keywords: string;
};

const Seo = ({ seo_title, meta_description, meta_keywords }: Props) => {
  if (!seo_title && !meta_description && !meta_keywords) {
    return <span />;
  }

  return (
    <Helmet>
      {seo_title && <title data-testid="seo-title-id">{seo_title}</title>}
      {meta_description && (
        <meta
          name="description"
          content={meta_description}
          data-testid="seo-description-id"
        />
      )}
      {meta_keywords && (
        <meta
          name="keyword"
          content={meta_keywords}
          data-testid="seo-meta-id"
        />
      )}
    </Helmet>
  );
};

export default Seo;
