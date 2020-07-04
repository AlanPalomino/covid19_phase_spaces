import faker from "faker";
import _ from "lodash";
import React from "react";
import { Dropdown } from "semantic-ui-react";

const addressDefinitions = faker.definitions.address;
const stateOptions = _.map(addressDefinitions.state, (state, index) => ({
  key: addressDefinitions.state_abbr[index],
  text: state,
  value: addressDefinitions.state_abbr[index]
}));

const handleChange = (e, { value }) => {
  console.log(value);
};

const DropdownExampleMultipleSearchSelection = () => (
  <Dropdown
    placeholder="State"
    fluid
    multiple
    search
    selection
    onChange={handleChange.bind(this)}
    options={stateOptions}
  />
);

export default DropdownExampleMultipleSearchSelection;
