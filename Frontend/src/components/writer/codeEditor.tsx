import Editor from '@monaco-editor/react';
import { useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

interface Language{
	name : string;
	path : string;
	value : string;
}

const Langs : Language[] = [
	{
		name : 'javascript',
		path : 'script.js',
		value : '// script here'
	},
	{
		name : 'typescript',
		path : 'ts-script.ts',
		value : '// ts script here'
	},
	{
		name : 'css',
		path : 'style.css',
		value : '/* style here */'
	},
	{
		name : 'html',
		path : 'index.html',
		value : '<!-- html here -->'
	}
]

const Iter : number[] = [0, 1, 2, 3];


export default function Codeeditor() {
	const [contents, setContents] = useState<string>("");
	const [lang, setLang] = useState<number>(0);

  const handleLangChange = (
    event: React.MouseEvent<HTMLElement>,
    newLang: number,
  ) => {
    setLang(newLang);
  };
	const handleChange = (value : any)=>{
		setContents(value);
	}

  return (
		<div className='mb-6'>
			<ToggleButtonGroup
				color="primary"
				size='small'
				value={lang}
				exclusive
				onChange={handleLangChange}
				aria-label="Platform"
    		>
				{
					Iter.map((it) => {
						return <ToggleButton value={it}> {Langs[it].name} </ToggleButton>
					})
				}
    	</ToggleButtonGroup>
      <Editor
		theme='vs-dark'
        height="50vh"
        defaultLanguage={Langs[lang].name}
        defaultValue={Langs[lang].value}
		onChange={handleChange}
		value={contents}
		path={Langs[lang].path}
      />
		</div>
  )
}
