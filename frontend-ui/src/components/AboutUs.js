import React from "react";

function AboutUsNavbar() {
    return (
        <div className={"gray-navbar"}>
            <p className={"left-item"}>ABOUT US </p>
            <div className={"right-item"}>
                <p>SHOP/</p>
                <p>ABOUT US</p>
            </div>
        </div>
    );
}

function AboutUsComponent() {
    return (
        <div className={"main"}>
            <AboutUsNavbar/>
            <div></div>
            <div className={"page"}>
                <div className={"grid-title"}>
                    <h1 className={"title"}>About Us</h1>
                    <div className={"text"}>
                        <p>
                            An About Us page helps your company make a good first impression, and is critical
                            for building customer trust and loyalty. An About Us page should make sure to cover
                            basic information about the store and its founders, explain the company's purpose and how it
                            differs from the competition, and encourage discussion and interaction. Here are some free
                            templates, samples,
                            and example About Us pages to help your ecommerce store stand out from the crowd.
                            When it comes to personalizing your online store, nothing is more effective than
                            an About Us page. This is a quick summary of your company's history and purpose,
                            and should provide a clear overview of the company's brand story.
                            A great About Us page can help tell your brand story, establish customer loyalty,
                            and turn your bland ecommerce store into an well-loved brand icon.
                            <br/>
                            <br/>
                            Most importantly, it will give your customers a reason to shop from your brand.
                            In this post, we'll give you three different ways to create a professional about
                            us page for your online store, blog, or other website - use our about us page generator,
                            use the fill-in-the-blank about us template below,
                            or create your own custom page using the about us examples within this article.
                            So let's get started! Since we know you're busy and probably just looking
                            for something to copy/paste, we'll jump right into the About Us Page template.
                            Just fill in the blanks and you'll have a professional-looking page in minutes.
                            After that, we encourage you to read the rest of the article.
                            It explains why About Us pages are extra important for ecommerce sites,
                            gives you some tips on how to build the perfect
                            About Us page that your customers will love,
                            and shows some great example About Us pages to help inspire you.
                        </p>
                    </div>
                </div>
                <div className={"pictures-right"}>
                    <div></div>
                    <div className={"grid-first-row"}>
                        <img className={"pic"} src={"images/picture1.jpg"}/>
                    </div>
                    <div className={"grid-second-row"}>
                        <img className={"pic pic-bottom"} src={"images/picture2.jpg"}/>
                        <img className={"pic pic-bottom"} src={"images/picture3.png"}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

function AboutUs() {
    return (
        <div className={"about-us-final-page"}>
            <AboutUsComponent/>
        </div>
    )
}
export default AboutUs;