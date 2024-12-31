import { useState } from "react";
import OpenIconSpeedDial from "./addButton";
import Texteditor from "./textEditor";
import Imageeditor from "./imageEditor";
import Codeeditor from "./codeEditor";

interface Element{
	type : 'text' | 'image' | 'code';
	content : string;
};

export default function Bodywriter(){

	const [elements, setElements] = useState<Element[]>([]);
	const handleAdd = (type : any)=>{
		const el : Element = {
			type : type,
			content : " "
		};
		const els = [...elements, el];
		setElements(els);
	}

  return(
		<div className="flex-row w-full justify-center gap-8">
			{/* <Editor value={value} setValue={setValue}/> */}
			{
				elements.map((element, id) => {
					if(element.type == 'text'){
						return <Texteditor/>
					} else if(element.type == 'image'){
						return <Imageeditor/>
					} else{
						return <Codeeditor/>
					}
				})
			}
			<OpenIconSpeedDial handleAdd={handleAdd}/>
		</div>
	)
}