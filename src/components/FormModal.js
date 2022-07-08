import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postPostStart } from '../redux/actions/posts';

export default function FormModal({ show, handleClose }) {
	const dispatch = useDispatch();
	const [input, setInput] = useState({
		title: '',
		body: '',
		userId: '',
	});

	const handleInputChange = (event) => {
		const name = event.target.name;
		const newValue = event.target.value;
		setInput((prevState) => ({ ...prevState, [name]: newValue }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(postPostStart(input));
	};

	return (
		<div>
			<Dialog open={show} onClose={handleClose}>
				<form onSubmit={handleSubmit}>
					<DialogTitle>Add Post Data</DialogTitle>
					<DialogContent>
						<TextField
							autoFocus
							margin='dense'
							id='title'
							name='title'
							label='Title'
							fullWidth
							variant='standard'
							onChange={handleInputChange}
						/>
						<TextField
							// autoFocus
							margin='dense'
							id='body'
							name='body'
							label='Description'
							fullWidth
							variant='standard'
							onChange={handleInputChange}
						/>
						<TextField
							// autoFocus
							margin='dense'
							id='userId'
							name='userId'
							label='User ID'
							fullWidth
							variant='standard'
							onChange={handleInputChange}
						/>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleClose}>Cancel</Button>
						<Button type='submit'>Add Post</Button>
					</DialogActions>
				</form>
			</Dialog>
		</div>
	);
}
