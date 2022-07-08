import DeleteIcon from '@mui/icons-material/Delete';
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from '@mui/material';

export default function DeleteModal({ show, handleClose, handleDelete }) {
	return (
		<Dialog open={show} onClose={handleClose}>
			<DialogTitle>Delete Post</DialogTitle>
			<DialogContent>
				<DialogContentText>
					Are you sure want to delete this post?
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button variant='outlined' onClick={handleClose}>
					cancel
				</Button>
				<Button
					variant='contained'
					color='error'
					startIcon={<DeleteIcon />}
					onClick={handleDelete}
				>
					Delete
				</Button>
			</DialogActions>
		</Dialog>
	);
}
