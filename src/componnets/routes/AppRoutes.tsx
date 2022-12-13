import React from "react";
import SipGlobals from "../sip/sip-globals/SipGlobals";
import SystemSipSettings from "../sip/system-sip-settings/SystemSipSettings";

export interface IAppRouteNode {
  path: string;
  element: React.ReactNode;
}

export const AppRoutes = [
  { path: "/settings/sip-globals", element: <SipGlobals /> },
  { path: "/settings/system-sip-settings", element: <SystemSipSettings /> },
];
