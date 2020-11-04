import React from "react";
import Badge from "./Badge";
import { Directions } from "utils/helpers";
import { getOnSelectAction, DropdownOnSelectActions } from "./dropdownHelpers";
import { CustomizedDropdownProps } from "./index";
import { User } from "constants/userConstants";
import _ from "lodash";

// const switchDropdown = (
//   orgs: Org[],
//   currentOrg: Org,
// ): CustomizedDropdownProps => ({
//   sections: [
//     {
//       isSticky: true,
//     },
//     {
//       options: orgs
//         .filter(org => org.id !== currentOrg.id)
//         .map(org => ({
//           content: org.name,
//           onSelect: () =>
//             getOnSelectAction(DropdownOnSelectActions.DISPATCH, {
//               type: ReduxActionTypes.SWITCH_ORGANIZATION_INIT,
//               payload: {
//                 orgId: org.id,
//               },
//             }),
//         })),
//     },
//   ],
//   trigger: {
//     text: "Switch Organization",
//   },
//   openDirection: Directions.RIGHT,
//   openOnHover: true,
// });

export const options = (
  user: User,
  orgName: string,
  orgId: string,
): CustomizedDropdownProps => {
  return {
    sections: [
      {
        options: [
          {
            content: (
              <Badge text={orgName} imageURL="https://via.placeholder.com/32" />
            ),
            disabled: true,
            shouldCloseDropdown: false,
          },
          {
            content: "Organization Settings",
            onSelect: () =>
              getOnSelectAction(DropdownOnSelectActions.REDIRECT, {
                path: `/org/${orgId}/settings`,
              }),
          },
          {
            content: "Share",
            onSelect: () => _.noop("Share option selected"),
          },
          {
            content: "Members",
            onSelect: () =>
              getOnSelectAction(DropdownOnSelectActions.REDIRECT, {
                path: `/org/${orgId}/settings`,
              }),
          },
        ],
      },
    ],
    trigger: {
      icon: "ORG_ICON",
      text: orgName,
      outline: false,
    },
    openDirection: Directions.DOWN,
  };
};

export default options;
