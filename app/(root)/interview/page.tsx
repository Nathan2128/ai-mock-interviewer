import Agent from "@/app/components/Agent";
import { getCurrentUser } from "@/lib/actions/auth.action";
import React from "react";

const Page = async () => {
  const user = await getCurrentUser();
  return (
    <>
      <h3>Generate an interview.</h3>
      <Agent userName={user?.name || ""} type="generate" userId={user?.id} />
    </>
  );
};

export default Page;
