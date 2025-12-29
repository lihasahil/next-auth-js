"use client";

import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export const Social = () => {
  return (
    <div className="flex items-center w-full gap-x-2">
      <Button
        className="w-full flex-1"
        size="lg"
        variant="outline"
        onClick={() => {}}
      >
        <FaGithub />
      </Button>
      <Button
        className="w-full flex-1"
        size="lg"
        variant="outline"
        onClick={() => {}}
      >
        <FcGoogle />
      </Button>
    </div>
  );
};
