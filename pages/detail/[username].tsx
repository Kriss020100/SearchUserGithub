import { useRouter } from "next/router";
import React from "react";

export default function Detail() {
  //dynamic routing for halaman detail
  const router = useRouter();
  const { username } = router.query;

  return <div>Detail halaman User : {username}</div>;
}
