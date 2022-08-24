import type { ComponentMeta, ComponentStory } from "@storybook/react"
import { Tooltip } from "."

export default {
    title: "components/Tooltip",
    component: Tooltip,
    args: {
        placement: "auto",
    },
    argTypes: {
        placement: {
            // description: "tooltip placement position",
            type: { name: "string", required: false },
            control: "select",
            options: [
                "auto",
                "auto-start",
                "auto-end",
                "top",
                "bottom",
                "right",
                "left",
                "top-start",
                "top-end",
                "bottom-start",
                "bottom-end",
                "right-start",
                "right-end",
                "left-start",
                "left-end",
            ],
            defaultValue: "auto",
        },
    },
    decorators: [
        (Story) => (
            <div style={{ margin: "3em" }}>
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof Tooltip>

const Template: ComponentStory<typeof Tooltip> = (args) => (
    <Tooltip {...args}>
        <span>Hover Text Here</span>
    </Tooltip>
)

export const Base = Template.bind({})

Base.args = {
    content: "Tooltip text",
    placement: "auto",
}
