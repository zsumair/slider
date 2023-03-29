import React from "react";

function FAQ() {
  return (
    <div className="py-5">
      <div className="md:3/4 py-5">
        <div className="text-center">
          <h2 className="text-xl md:text-3xl mb-2 font-extrabold font-sans dark:text-zinc-300">
            Frequently asked questions
          </h2>
        </div>
      </div>
      <div className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-3">
        <input type="checkbox" className="peer" />
        <div className="collapse-title text-xl font-medium peer-checked:bg-base-400 ">
          Click me to show/hide content
        </div>
        <div className="collapse-content  peer-checked:bg-base-400 ">
          <p>This is just a dummy text</p>
        </div>
      </div>

      <div className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-3">
        <input type="checkbox" className="peer" />
        <div className="collapse-title text-xl font-medium peer-checked:bg-base-400 ">
          Click me to show/hide content
        </div>
        <div className="collapse-content  peer-checked:bg-base-400 ">
          <p>This is just a dummy text</p>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
