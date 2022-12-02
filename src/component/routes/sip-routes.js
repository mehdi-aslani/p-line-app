import SipGlobals from "../sip/sip-globals/SipGlobals";
import SipProfileDetails from "../sip/sip-profile-details/SipProfileDetails";
import SipProfileForm from "../sip/sip-profiles/SipProfileForm";
import SipProfilesList from "../sip/sip-profiles/SipProfilesList";
import SipTrunkForm from "../sip/sip-trunks/SipTrunkForm";
import SipTrunkList from "../sip/sip-trunks/SipTrunkList";
import UserGroupForm from "../sip/sip-user-groups/UserGroupForm";
import UserGroupList from "../sip/sip-user-groups/UserGroupList";
import SipUserForm from "../sip/sip-user/SipUserForm";
import SipUserList from "../sip/sip-user/SipUserList";
import SystemSipSettings from "../sip/system-sip-settings/SystemSipSettings";

export const SipRoutes = [
  { path: "/settings/sip-globals", element: <SipGlobals /> },
  { path: "/sip-profile-details/:id", element: <SipProfileDetails /> },
  { path: "/settings/system-sip-settings", element: <SystemSipSettings /> },
  { path: "/sip-trunks/index", element: <SipTrunkList /> },
  { path: "/sip-trunks/create", element: <SipTrunkForm /> },
  { path: "/sip-trunks/edit/:id", element: <SipTrunkForm /> },
  { path: "/sip-user-groups/create", element: <UserGroupForm /> },
  { path: "/sip-user-groups/edit/:id", element: <UserGroupForm /> },
  { path: "/sip-user-groups/index", element: <UserGroupList /> },
  { path: "/sip-users/index", element: <SipUserList /> },
  { path: "/sip-users/edit/:id", element: <SipUserForm /> },
  { path: "/sip-users/create", element: <SipUserForm /> },
  { path: "/sip-profiles/index", element: <SipProfilesList /> },
  { path: "/sip-profiles/create", element: <SipProfileForm /> },
  { path: "/sip-profiles/edit/:id", element: <SipProfileForm /> },
];
