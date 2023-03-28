import React from "react";
import SubmitButton from "./SubmitButton";

export default {
    title: 'Buttons/Submit',
    component: SubmitButton,
    args: {
        label: 'Submit',
        backgroundColor: 'white',
        color: 'black',
    },
}
const Template = args => <SubmitButton {...args} />

export const Primary = Template.bind({});
Primary.args = {
    label: 'Submit',
}