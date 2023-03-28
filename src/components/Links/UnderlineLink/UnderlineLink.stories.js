import React from "react";
import { UnderlineLink as UnderlineLinkComponent } from "./UnderlineLink";

export default {
    title: 'Links/ Underline Link',
    component: UnderlineLinkComponent,
    tags: ['autodocs'],
}

export const UnderlineLink = {
    args: {
        label: 'Link',
    },
    argTypes: {
        as: {
          options: ['a', 'NavLink'],
          control: { type: 'radio' },
        },
      },
}

export const UnderlineNavLink = {
    args: {
        label: 'NavLink',
        as: 'NavLink',
        isActive: true
    },
    argTypes: {
        as: {
          options: ['a', 'NavLink'],
          control: { type: 'radio' },
        },
      },
}