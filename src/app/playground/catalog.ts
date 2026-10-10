export const playgroundComponents = [
	{
		id: 'button',
		label: 'Button',
		description: 'Actions in primary, secondary, tertiary, destructive, and link styles.'
	},
	{
		id: 'badge',
		label: 'Badge',
		description: 'Compact status labels for size and color variants.'
	},
	{
		id: 'checkbox',
		label: 'Checkbox',
		description: 'A single checkbox that cycles states, plus a group with a parent indeterminate state.'
	},
	{
		id: 'dropdown',
		label: 'Dropdown',
		description: 'A selectable menu with a disabled state.'
	},
	{
		id: 'pagination',
		label: 'Pagination',
		description: 'Page controls with a configurable range of visible page numbers.'
	},
	{
		id: 'radio-cards',
		label: 'Radio Cards',
		description: 'Selectable option cards, including a disabled choice.'
	},
	{
		id: 'tabs',
		label: 'Tabs',
		description: 'A tab list that switches panel content.'
	},
	{
		id: 'text-input',
		label: 'Text Input',
		description: 'A labeled field with hint text, icons, and error and disabled states.'
	},
	{
		id: 'textarea',
		label: 'Textarea',
		description: 'A multiline field with a character count and an error state.'
	},
	{
		id: 'toast',
		label: 'Toast',
		description: 'A status message you can trigger in success, warning, error, and neutral styles.'
	},
	{
		id: 'tooltip',
		label: 'Tooltip',
		description: 'Contextual help that appears on hover or keyboard focus.'
	}
] as const

export type PlaygroundId = (typeof playgroundComponents)[number]['id']

export function isPlaygroundId(value: string | null): value is PlaygroundId {
	return playgroundComponents.some((item) => item.id === value)
}
