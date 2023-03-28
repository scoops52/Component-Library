import React from "react";
import { BrowserRouter } from "react-router-dom";
import BoxLink from "./BoxLink";

export default {
    title: 'Links/ Box Link',
    component: BoxLink,
    tags: ['autodocs'],
  
}

export const Link = {
    args: {
        label: 'Box Link',
    },
    argTypes: {
        as: {
          options: ['a', 'NavLink'],
          control: { type: 'radio' },
        },
      },
}

export const RouterNavLink = {
    args: {
        label: 'Box NavLink',
        as: 'NavLink',
        active: false
    },
    argTypes: {
        as: {
          options: ['a', 'NavLink'],
          control: { type: 'radio' },
        },
      },
}

// export const Link = () => (<BoxLink label='Box Link' />);

// export const RouterNavLink = () => (<BoxLink as='NavLink' active={false} label='Box NavLink' />)
// RouterNavLink.parameters = {
//     active: { control: { type: 'boolean' } }
// }

// const Template = (args) => <BoxLink {...args} />

// export const Link = Template.bind({});
// Link.args = {
//     as: 'a',
//     label: 'Normal Link',
    
// };

// export const RouterNavLink = Template.bind({});
// RouterNavLink.args = {
//     as: 'NavLink',
//     label: 'NavLink',
//     active: false
// };

// RouterNavLink.decorators = [
//     (Story) => (
//         <BrowserRouter>
//           <Story />
//         </BrowserRouter>
//       )
// ];


// argTypes: {
//     active: { control: 'boolean'},
//     as: { 
//         options: ['a', 'NavLink'],
//         control: { type: 'radio' },
//         },
// },