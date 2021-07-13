import React from "react";

function TearmsAndConditionsNavbar() {
    return (
        <div className={"gray-navbar"}>
            <p className={"left-item"}>TEARMS AND CONDITIONS </p>
            <div className={"right-item"}>
                <p>SHOP/</p>
                <p>TEARMS AND CONDITIONS</p>
            </div>
        </div>
    )
}

function TearmsAndConditionsComponent() {
    return (
        <div className={"main"}>
            <TearmsAndConditionsNavbar/>
            <div></div>
            <div className={"page-privacy"}>
                <h1 className={"title-privacy"}>Introduction</h1>
                <div className={"text-privacy"}>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged. It was popularised in
                        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of
                        Lorem Ipsum.
                        <br/>
                    </p>
                    <h3>Some title here</h3>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged. It was popularised in
                        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of
                        Lorem Ipsum.
                    </p>
                    <h3>Some title here</h3>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged. It was popularised in
                        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of
                        Lorem Ipsum.
                    </p>
                </div>
            </div>
        </div>
    )
}

function TearmsAndConditions() {
    return (
        <div>
            <TearmsAndConditionsComponent/>
        </div>
    )
}

export default TearmsAndConditions;