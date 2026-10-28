
import React, { useState } from "react";

function PostCard({ title, body }) {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(true);
  }

  return (
    <div
      onClick={handleClick}
      className={`${
        clicked ? "bg-blue-100" : "bg-white"
      } p-4 rounded-lg shadow hover:shadow-md transition-colors cursor-pointer`}
    >
      <h2 className="text-lg font-semibold text-gray-800 mb-2">
        {title}
      </h2>

      <p className="text-gray-600 text-sm">
        {body}
      </p>
    </div>
  );
}

export default PostCard;
