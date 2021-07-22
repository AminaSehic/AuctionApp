import React from "react";
import "@testing-library/jest-dom/extend-expect"
import {expect} from 'chai'
import 'mocha';
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";
import LandingPage from "../components/LandingPage";

describe("test suite", () => {
    let container = null;
    beforeEach(() => {
        container = document.createElement("div");
        document.body.appendChild(container);
    });

    afterEach(() => {
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    });
    it("Expect page have content", () => {
        act(() => {
            render(<LandingPage/>, container);
        });
        expect(document.body.innerHTML.toString().length).to.not.equal(0);
    });
    it("Expect have button", () => {
        act(() => {
            render(
                <LandingPage/>, container
            )
        });
        expect(document.getElementsByClassName("button-group").length).to.not.be.equal(0);
    });
    it("Expect have tabs", () => {
        act(() => {
            render(
                <LandingPage/>, container
            )
        });
        expect(document.getElementsByClassName("tabs").length).to.not.be.equal(0);
    })
    it("Expect have landing main", () => {
        act(() => {
            render(
                <LandingPage/>, container
            )
        });
        expect(document.getElementsByClassName("landing-main").length).to.not.be.equal(0);
    })
    it("Expect have new arrivals content", () => {
        act(() => {
            render(
                <LandingPage/>, container
            )
        });
        expect(document.getElementsByClassName("new-arrivals-content").length).to.not.be.equal(0);
    })
    it("Expect have last chance content", () => {
        act(() => {
            render(
                <LandingPage/>, container
            )
        });
        expect(document.getElementsByClassName("last-chance-content").length).to.not.be.equal(0);
    })
})