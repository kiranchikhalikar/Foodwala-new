import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

const About = () => {
  return (
    <div className="max-w-[1320px] py-[40] flex max-auto">
      {/* <h1>About</h1> */}
      <div className="basis-[45%]">
        <UserClass
          name={"Kiran Chikhalikar (class)"}
          location={"Pune (Class)"}
        />
        <UserContext.Consumer>
          {({ loggedInUser }) => (
            <h1 className="text-xl font-bold pt-5">{loggedInUser}</h1>
          )}
        </UserContext.Consumer>
      </div>

      {/* <User name= {"Kiran Chikhalikar (Function)"} /> */}
      <div className="basis-[55%]">
        <h1 className="text-3xl pb-5">
          "About Foodwala: Where Taste Meets Convenience"
        </h1>
        <p className="py-2">
          Welcome to Foodwala – the culinary destination that brings
          deliciousness to your doorstep! We believe in the magic of sharing a
          great meal with your loved ones, and our mission is to make that
          experience effortlessly accessible. At Foodwala, we're more than just
          a delivery service; we're your connection to the finest local flavors
          and the comfort of home-cooked meals, delivered with care.
        </p>
        <p className="py-2">
          Our journey began with a passion for exceptional food and a desire to
          simplify the way you enjoy it. From handpicked restaurants to curated
          menus, we take pride in offering a diverse selection that caters to
          every palate. Whether you crave the sizzling spices of international
          cuisines or the comforting warmth of familiar dishes, we've got you
          covered.
        </p>
        {/* <p>
          At Foodwala, we understand that convenience is key. That's why our
          user-friendly platform lets you explore, order, and indulge in
          culinary delights effortlessly. From quick bites to elaborate feasts,
          we're here to elevate your dining experience, one delivery at a time.
        </p> */}
        <p className="py-3">
          Thank you for choosing Foodwala as your gastronomic partner. Join us
          on this delectable journey, and let's savor the flavors of life
          together!
        </p>
      </div>
    </div>
  );
};

export default About;
