import { Box } from '@mui/material'

export interface HeaderProps {}

export function Header({}: HeaderProps) {
	return (
		<Box component="header" py={2} textAlign="center">
			Header
		</Box>
	)
}
