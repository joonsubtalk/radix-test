import type { Meta, StoryObj } from '@storybook/react';

import GtyAccordion from '../components/GtyAccordion';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/GTYAccordion',
  component: GtyAccordion,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    items: {
        control: {
            type: 'array',
        },
    },
    isDisabled: {
        control: {
            type: 'boolean',
        },
    },
  },
} satisfies Meta<typeof GtyAccordion>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
    args: {
      isDisabled: false,
      items: [
        { headerLabel: 'Apps with Link',
            content: [
                { url: "https://gty.org/apps", className: 'something-class-name', itemLabel: 'Grace To You Sermons'},
                { url: "https://studybible.org", className: 'something-class-name', itemLabel: 'The Study Bible'}
            ],
        },
        {
            headerLabel: 'Sermons',
            content: [],
        },
        { headerLabel: 'Donate',
            content: [
                { url:"", className: 'something-class-name', itemLabel: 'Donate Now'},
                { url:"", className: 'u-accordion--highlight', itemLabel: 'Automatic Giving w/ css'},
                { url:"", className: 'something-class-name', itemLabel: 'Legacy Giving'},
                { url:"", className: 'something-class-name', itemLabel: 'Ways to Give'},
            ],
        }
      ]
    },
  };