import CircularProgress from '@mui/material/CircularProgress';
import * as React from 'react';
import { Backdrop } from '@mui/material';

export default function Loading({ show }) {
	return (
		<Backdrop
			sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
			open={show}
		>
			<CircularProgress color='inherit' />
		</Backdrop>
	);
}
