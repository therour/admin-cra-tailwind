import { Button } from "./Button"
import { ComponentStory, ComponentMeta } from "@storybook/react"

export default {
    title: "components/Button",
    component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})

Primary.args = {
    color: "primary",
    children: "Primary",
}
