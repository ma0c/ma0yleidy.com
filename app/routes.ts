import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    // route("/", "routes/home.tsx"),
    route(":invitee", "routes/invitation.tsx")
] satisfies RouteConfig;
