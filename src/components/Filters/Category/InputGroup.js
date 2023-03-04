import React from "react";

const InputGroup = ({ total, name, setEpisodeId }) => {
  return (
    <div class="input-group mb-3">
      <select
        onChange={(e) => setEpisodeId(e.target.value)}
        class="form-select"
        id={name}
      >
        {[...Array(total).keys()].map((x) => {
          return (
            <option value={x + 1}>
              {name} - {x + 1}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default InputGroup;
