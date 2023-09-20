import React from "react";

export default function New() {
  return (
    <div>
      <div>
        <h2>Create Pokemon</h2>
        <form
          style={{ display: "flex", justifyContent: "space-around" }}
          action="/pokemon"
          method="POST"
        >
          Pokemon Name: <input type="text" name="name" />
          Image URL:
          <input type="text" name="img" />
          <input
            type="submit"
            name=""
            style={{ width: "15%", borderRadius: "4px" }}
            value="make pokemon"
          />
        </form>
      </div>
    </div>
  );
}
