import React from "react";

import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";

import PrimaryBtn from "../common/primary-btn"; 
import SecondaryBtn from "../common/secondary-btn"; 

export default function Navbar() {
  return (
    <div>
      <div>Logo</div>

      <div>Item</div>

      <div>
        <PrimaryBtn
          content="Explore Plans"
          icon={
            <HugeiconsIcon
              icon={ArrowRight01Icon}
              size={15}
              strokeWidth={2}
            />
          }
          onClick={() => console.log("Explore Plans")}
        />

        <SecondaryBtn
          content="Client Login"
          onClick={() => console.log("Client Login")}
        />
      </div>
    </div>
  );
}