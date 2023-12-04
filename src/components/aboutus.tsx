import react from "react";
import Member from "./member";

const AboutUs: React.FC = () => {
  return (
    <section className="flex flex-col bg-white py-20 text-3xl md:text-4xl">
      <div className="container mx-auto px-11">
        <p className="leading-tight max-w-5xl mx-auto text-4xl tracking-tight">
          <strong>I'am want to a best programmer.</strong>Our team of expert
          engineers has created the best the best user experiences in some of
          the most papular apps worldwide.
        </p>
      </div>
      <div className="container mx-auto px-11 text-center mt-28">
        <h2>Our team</h2>
        <div className="mt-2">The &ldquo;Fuyu&rdquo;</div>
        <div className="mt-10 grid grid-col-2 md:grid-cols-3 grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-20">
          <Member
            id="Gary"
            name="Gary"
            socialId="@Gary"
            link="https://github.com/zero4835"
          ></Member>
          <Member
            id="Gary"
            name="Gary"
            socialId="@Gary"
            link="https://github.com/zero4835"
          ></Member>
          <Member
            id="Gary"
            name="Gary"
            socialId="@Gary"
            link="https://github.com/zero4835"
          ></Member>
          <Member
            id="Gary"
            name="Gary"
            socialId="@Gary"
            link="https://github.com/zero4835"
          ></Member>
          <Member
            id="Gary"
            name="Gary"
            socialId="@Gary"
            link="https://github.com/zero4835"
          ></Member>
          <Member
            id="Gary"
            name="Gary"
            socialId="@Gary"
            link="https://github.com/zero4835"
          ></Member>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
