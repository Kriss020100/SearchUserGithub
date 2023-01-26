import { SearchRes } from "@/types/SearchRes";
import React from "react";
import UserItems from "./UserItems";

export default function UserList({ result }: Props) {
  return (
    <div className="border rounded-[8px] w-full space-y-3 pb-10">
      <h1 className="text-center p-[20px]">
        Hasil Pencarian : <span className="font-bold">Budi</span>
      </h1>
      {result?.users.map((user, i) => (
        <UserItems key={i} user={user} />
      ))}
    </div>
  );
}

interface Props {
  result?: SearchRes;
}
