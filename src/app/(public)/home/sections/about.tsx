 "use client";

import ContentSection from "@/components/common/content-section";

export default function About() {

  return (
    <ContentSection
      id="about-section"
      title="Titulo"
      description="Description"
      buttonLabel="Button"
      buttonHref="/educational/history/bzdc-details"
      images={["/images/home/home_1.jpg", "/images/home/home_2.jpg"]}
    />
  );
}
