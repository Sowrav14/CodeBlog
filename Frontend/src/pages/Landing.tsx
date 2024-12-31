
import {
  EditorBubble,
  EditorBubbleItem,
  EditorCommand,
  EditorCommandItem,
  EditorContent,
  EditorRoot,
} from "novel";
import { useState } from "react";


export default function Landing(){
	const [content, setContent] = useState(null);
  return(
		<div className='b-2 border-slate-600 p-12'>
			<EditorRoot>
				<EditorContent
					initialContent={content}
					onUpdate={({ editor }) => {
						const json = editor.getJSON();
						setContent(json);
					}}
				/>
    	</EditorRoot>
		</div>
	)
};
