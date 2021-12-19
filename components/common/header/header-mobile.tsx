import { Box } from '@mui/material'

export interface HeaderMobileProps {}

export function HeaderMobile({}: HeaderMobileProps) {
	return <Box display={{ xs: 'block', md: 'none' }}>Header Mobile</Box>
}
