import React, { useState } from "react";

const ShortCirEval = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <h1>
        {name || (
          <>
            <h1>this is so cool yaar</h1>
            <h1>i hate egoistic people stay out me telling you 100 times</h1>
          </>
        )}
      </h1>
      <h1>{name && "salma"}</h1>
    </div>
  );
};

export default ShortCirEval;
