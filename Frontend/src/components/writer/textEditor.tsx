
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function Texteditor(){
	const [value, setValue] = useState('');

  return(
		<div>
		 	<ReactQuill 
				theme="snow" 
				value={value} 
				onChange={setValue}
				className='h-48 mb-16'
			/>
		</div>
	)
};