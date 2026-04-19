import React from "react"
import Navbar from "./Navbar"
import Tabs from "./Tabs"
import SplitLayout from "./SplitLayout"

const Screen = () => {
  return (
    <div className="w-full h-screen flex flex-col">
      
      {/* Top Navbar */}
      <div className="h-12 w-full">
        <Navbar />
      </div>

      {/* Tabs */}
      <div className="h-10 w-full border-b border-gray-700">
        <Tabs />
      </div>

      {/* Main Area */}
      <div className="flex-1 w-full overflow-hidden">
        <SplitLayout />
      </div>

    </div>
  )
}

export default Screen