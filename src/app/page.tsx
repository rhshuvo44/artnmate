import FunFact from "@/component/home/FunFact";
import Hero from "@/component/home/Hero";
import homeData from "@/DB/home.json";
export default function Home() {
  return (
    <>
      {/* Start Hero Section */}
      <Hero
        title="Creativity In <br/>Our Blood Line"
        subtitle="We deliver best problem solving solution for our client and provide finest finishing product in present and upcoming future."
        btnText="Get a Quote"
        btnLink="/contact"
        scrollDownId="#service"
        socialLinksHeading="Follow Us"
        heroSocialLinks={homeData?.heroSocialLinks}
        bgImageUrl="/images/hero_bg.jpeg"
      />
      {/* End Hero Section */}
       {/* Start FunFact Section */}
      <div className="container">
        <FunFact
          variant="cs-type1"
          title="Our fun fact"
          subtitle="Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis."
          data={homeData?.funfaceData}
        />
      </div>
      {/* End FunFact Section */}
    </>
  );
}
