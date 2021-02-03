import React, { useEffect } from "react";

import { useUser } from "../providers/user";

export default function Home() {
  const { user, getUser } = useUser();

  useEffect(() => {
    if (!user) getUser();
  }, []);

  return <pre>{JSON.stringify(user, undefined, 2)}</pre>;
}
