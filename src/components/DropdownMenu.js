import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import {covid_data_ww} from '../covid_data_ww.js';


console.log(Object.keys(covid_data_ww))
const countryOptions = Object.keys(covid_data_ww).map( (country) => ({
  key: country,
  text: country,
  value: country,
}))
const handleChange = (e, { value }) => {
    console.log(value);
  };
const DropdownMSS = () => (
  <Dropdown
    placeholder='Seleccione los paises'
    fluid
    multiple
    search
    selection
    onChange={handleChange.bind(this)}
    options={countryOptions}
  />
)

export default DropdownMSS