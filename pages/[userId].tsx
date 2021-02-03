import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { useUser } from "../providers/user";

export default function Home() {
  const { user } = useUser();
  const {
    query: { userId },
  } = useRouter();

  if (!user) return null;

  return (
    <>
      <h1>Name: {user.name}</h1>
      {userId && (
        <Link href="[userId]" as={`${Number(userId) + 1}`}>
          next user
        </Link>
      )}
    </>
  );
}
