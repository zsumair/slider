import React from "react";

function Title() {
  return (
    <div className="mx-auto md:w-3/4 py-5">
      <div class="text-center">
        <h2 class="text-xl md:text-4xl mb-2 font-extrabold font-sans dark:text-zinc-300">
          This is a title declaration section for main highlights of the site
        </h2>
        <p className="text-xs md:text-xl mb-6 md:mb-14 py-4 font-semibold text-gray-500 dark:text-zinc-300">
          Remove this title by commenting it out in the index.js or place it as
          you like anywhere on the pages
        </p>
      </div>
    </div>
  );
}

export default Title;
