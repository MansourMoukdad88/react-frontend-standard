import React from 'react';


import Input from '../../shared/components/FormElements/Input';
import {VALIDATOR_REQUIRE} from '../../shared/util/validators';
import './NewPlace.css';

const NewPlace = (props) => {
  return (
    <form className="place-form">
      <Input element="input" type="text" label="Title" validators={[VALIDATOR_REQUIRE()]} errorText= 'Please Enter a Vaild Title'/>
    </form>
  );
};

export default NewPlace;