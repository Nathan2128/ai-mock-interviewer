import Agent from "@/app/components/Agent";
import React from "react";

const Page = () => {
  return (
    <>
      <h3>Generate an interview.</h3>
      <Agent userName="You" type="generate" userId={1} />
    </>
  );
};

export default Page;
