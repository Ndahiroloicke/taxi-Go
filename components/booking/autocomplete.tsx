import React from "react";

const Autocomplete = () => {
  return (
    <div>
      <div className="mt-3">
        <input
          type="text"
          placeholder="Where From?"
          className="bg-white p-1 border-[1px] w-full rounded-md outline-none focus:border-orange-600"
        />
      </div>
      <div className="mt-3">
        <input
          type="text"
          placeholder="Where To?"
          className="bg-white p-1 border-[1px] w-full rounded-md outline-none focus:border-orange-600"
        />
      </div>
    </div>
  );
};

export default Autocomplete;
