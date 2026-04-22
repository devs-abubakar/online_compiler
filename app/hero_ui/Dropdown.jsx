"use client";

import React, { useEffect, useRef, useState } from "react";
import useEditorStore from "../store/useEditorStore";

export function Dropdownselection() {
  const languages = useEditorStore((s) => s.languages);
  const activeProject = useEditorStore((s) => s.activeProject);
  const setActiveProject = useEditorStore((s) => s.setActiveProject);
  const setActiveFile = useEditorStore((s) => s.setActiveFile);

  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  // close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!wrapperRef.current?.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (id) => {
    setActiveProject(id);

    // set default file for each project
    if (id === "vanilla") setActiveFile("index.html");
    if (id === "react") setActiveFile("App.js");
    if (id === "vue") setActiveFile("App.vue");

    setOpen(false);
  };

  const activeLabel =
    languages.find((item) => item.id === activeProject)?.label || "Language";

  return (
    <div className="relative" ref={wrapperRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(!open)}
        className="
          px-4 py-2 rounded-md
          bg-transparent
          text-white text-sm font-medium
          hover:bg-[#2a2a2a]
          transition-all duration-200
          border border-transparent hover:border-[#3a3a3a]
        "
      >
        {activeLabel}
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="
            absolute right-0 mt-2 w-64 z-50
            rounded-xl overflow-hidden
            border border-[#2f2f2f]
            bg-[#111111]
            shadow-2xl
          "
        >
          {/* Header */}
          <div className="px-4 py-3 border-b border-[#222]">
            <p className="text-xs uppercase tracking-wider text-gray-400">
              Select a Language
            </p>
          </div>

          {/* Items */}
          <div className="p-2">
            {languages.map(({ id, label }) => {
              const isActive = activeProject === id;

              return (
                <button
                  key={id}
                  onClick={() => handleSelect(id)}
                  className={`
                    w-full flex items-center justify-between
                    px-3 py-2 rounded-lg text-sm
                    transition-all duration-150
                    ${
                      isActive
                        ? "bg-white text-black"
                        : "text-gray-300 hover:bg-[#1d1d1d] hover:text-white"
                    }
                  `}
                >
                  <span>{label}</span>

                  {isActive && (
                    <span className="text-xs font-semibold">✓</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}