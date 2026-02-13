import type { Route } from "./+types/invitation";
import { Invitation } from "../final_invitation/invitation";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Ma0 & Leidy's Wedding" },
    { name: "description", content: "Save the Date: 2026-07-25" },
  ];
}

export default function InvitationRoute() {
  return <Invitation />;
}
