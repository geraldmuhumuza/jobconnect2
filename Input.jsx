import React from "react";

export function Input({ value, onChange, placeholder, className }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 ${className}`}
    />
  );
}
