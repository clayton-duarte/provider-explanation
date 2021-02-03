import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const userId = router.query;

  useEffect(() => {
    router.replace(`[userId]`, `/1`);
  }, [userId]);

  return null;
}
