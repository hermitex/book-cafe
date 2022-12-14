import React from "react";

function Alert({ message, type }) {
  return (
    <div
      class="bg-green-100 rounded-lg py-5 px-6 mb-4 text-base text-green-700 mb-3 text-red-900"
      role="alert"
    >
      {message}
    </div>
  );
}

export default Alert;
