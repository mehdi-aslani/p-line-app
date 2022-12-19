import React from "react";
import SipGlobals from "../sip/sip-globals/SipGlobals";
import SipProfileDetails from "../sip/sip-profile-details/SipProfileDetails";
import SipProfileForm from "../sip/sip-profiles/SipProfileForm";
import SipProfiles from "../sip/sip-profiles/SipProfiles";
import SystemSipSettings from "../sip/system-sip-settings/SystemSipSettings";

export interface IAppRouteNode {
  path: string;
  element: React.ReactNode;
}

export const AppRoutes = [
  { path: "/settings/sip-globals", element: <SipGlobals /> },
  { path: "/settings/system-sip-settings", element: <SystemSipSettings /> },
  { path: "/sip-profiles/index", element: <SipProfiles /> },
  { path: "/sip-profiles/edit/:id", element: <SipProfileForm /> },
  { path: "/sip-profiles/create", element: <SipProfileForm /> },
  { path: "/sip-profile-details/:id", element: <SipProfileDetails /> },

];
