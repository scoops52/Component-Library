import React from "react";
import { action } from "@storybook/addon-actions";
import Button from "./Button";

export default {
    title: 'Buttons/Basic Button',
    component: Button,
    args: {
        backgroundColor: '#007bff',
        onHoverBackgroundColor: '#0062cc',
    },
    argTypes: { onClick: { action: 'clicked' } }
}

const Template = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Primary',
}

export const Yes = Template.bind({});
Yes.args = {
    label: 'Yes',
    backgroundColor: '#1aa260',
    onHoverBackgroundColor: '#179156',

}

export const No = Template.bind({});
No.args = {
    label: 'No',
    backgroundColor: '#de5246',
    onHoverBackgroundColor: '#b14138',
}

export const Reset = Template.bind({});
Reset.args = {
    label: 'Reset',
    backgroundColor: '#9b0000',
    onHoverBackgroundColor: '#8b0000',
}