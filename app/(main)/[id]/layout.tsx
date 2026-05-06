import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
     

    <div>sidebar left</div>

      <div>{children}</div>
      <div>sidebar right</div>
    
    </div>
  );
}
