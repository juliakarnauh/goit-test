import React from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from "@mui/material";

const RadioFilter = ({ selectedOption, handleOptionChange }) => {
  return (
    <FormControl style={{ display: "flex", justifyContent: "center", marginRight: "170px" }}>
      <RadioGroup
        style={{ display: "flex", justifyContent: "flex-end" }}
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel
          style={{
            fontFamily: "Montserrat",
            fontWeight: 500,
            fontSize: "20px",
            lineHeight: "24px",
            textTransform: "uppercase",
            color: "#373737",
          }}
          type="radio"
          value="all"
          checked={selectedOption === "all"}
          onChange={handleOptionChange}
          control={<Radio style={{ color: "#471ca9" }} />}
          label="All"
        />
        <FormControlLabel
          style={{
            fontFamily: "Montserrat",
            fontWeight: 500,
            fontSize: "20px",
            lineHeight: "24px",
            textTransform: "uppercase",
            color: "#373737",
          }}
          type="radio"
          value="notSubscribed"
          checked={selectedOption === "notSubscribed"}
          control={<Radio style={{ color: "#471ca9" }} />}
          onChange={handleOptionChange}
          label="Follow"
        />
        <FormControlLabel
          style={{
            fontFamily: "Montserrat",
            fontWeight: 500,
            fontSize: "20px",
            lineHeight: "24px",
            textTransform: "uppercase",
            color: "#373737",
          }}
          type="radio"
          value="subscribed"
          checked={selectedOption === "subscribed"}
          onChange={handleOptionChange}
          control={<Radio style={{ color: "#471ca9" }} />}
          label="Followings"
        />
      </RadioGroup>
    </FormControl>
  );
};

export default RadioFilter;
