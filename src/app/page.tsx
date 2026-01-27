import FunFact from "@/component/home/FunFact";
import Hero from "@/component/home/Hero";
import PortfolioSlider from "@/component/home/PortfolioSlider";
import ServiceSection from "@/component/home/ServiceSection";
import Div from "@/component/ui/Div";
import SectionHeading from "@/component/ui/SectionHeading";
import Spacing from "@/component/ui/Spacing";
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
      {/* Start Service Section */}

      <ServiceSection />
      {/* End Service Section */}

{/* Start Portfolio Section */}
      <Spacing lg="150" md="50" />
      <Div>
        <Div className="container">
          <SectionHeading
            title="Portfolio to explore"
            subtitle="Latest Projects"
            variant="cs-style1 text-center"
          />
          <Spacing lg="90" md="45" />
        </Div>
        <PortfolioSlider data={homeData?.portfolioData} />
      </Div>
      {/* End Portfolio Section */}

    </>
  );
}
