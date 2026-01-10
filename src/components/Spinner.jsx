import React from "react";
import { Loader2 } from "lucide-react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center py-6">
      <Loader2
        className="h-6 w-6 animate-spin text-slate-600"
        style={{ transformOrigin: "center" }}
      />
    </div>
  );
};

export default Spinner;
