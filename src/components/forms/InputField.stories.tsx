import type { ComponentMeta, ComponentStory } from "@storybook/react"
import InputField from "./InputField"

export default {
    title: "Forms/InputField",
    argTypes: {
        type: {
            control: "select",
            options: [
                "date",
                "datetime-local",
                "email",
                "month",
                "number",
                "password",
                "range",
                "search",
                "tel",
                "text",
                "time",
                "url",
                "week",
            ],
        },
        errorMessage: { control: "text" },
    },
} as ComponentMeta<typeof InputField>

const Template: ComponentStory<typeof InputField> = (args) => <InputField {...args} />

export const Base = Template.bind({})

Base.args = {
    type: "text",
    required: true,
    label: "Label",
    placeholder: "Placeholder here",
    isError: false,
    errorMessage: undefined,
}

export const Error = Template.bind({})

Error.args = {
    ...Base.args,
    isError: true,
    errorMessage: "error message here",
}
