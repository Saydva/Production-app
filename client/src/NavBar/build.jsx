import React from "react";
function BuildPage() {
  return (
    <div className="flex flex-col justify-start gap-3">
      <h4 className="pl-2">Build Your Data</h4>
      <div>
        <input
          type="text"
          placeholder="Name of your part"
          className="input input-ghost w-full max-w-xs"
        />
      </div>
    </div>
  );
}

export default BuildPage;
