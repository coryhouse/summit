import React from "react";
import { storiesOf } from "@storybook/react";
import Header from "../src/Header";
import ModelOutputs from "../src/ModelOutputs";
import { modelInputs } from "../mockData";

storiesOf("Header", module)
  .add("default", () => <Header />)
  .add("set custom company", () => (
    <p>
      Here's my doc
      <Header companyName="Facebook" />
    </p>
  ));

storiesOf("ModelOutputs", module)
  .add("no records", () => <ModelOutputs modelInputs={[]} />)
  .add("with records", () => <ModelOutputs modelInputs={modelInputs} />);
