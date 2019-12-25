import React, { Fragment, useEffect, useReducer, Component } from "react";
import Section from "../components/Section";
import { setSelectedSection } from "../state";
import { connect } from "react-redux";
import { AccordionConsumer } from "../providers/accordionProvider";

const Accordion = () => {
  return (
    <Fragment>
      <AccordionConsumer>
        {({ state, dispatch }) => {
          localStorage.setItem("accordionState", JSON.stringify(state));

          return state.sections.map((section, i) => (
            <Fragment>
              <Section
                {...{
                  section: section,
                  selectedSection: state.selectedSection,
                  keyIdx: i,
                  dispatch,
                }}
                key={`section_${i}_${section.title}`}
              />
            </Fragment>
          ))
        }}
      </AccordionConsumer>
    </Fragment>
  );
};

export default Accordion;
