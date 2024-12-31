

const Textdata = `<h3>Security<strong> </strong>is essential for any website to provide security,&nbsp;build the trust of visitors, and for better ranking.</h3><p>It’s necessary for the transactional or membership-based site to encrypt the sensitive data from a client to a server.</p><p>Improve your Website Security with&nbsp;<a href="https://geekflare.com/tls-101/" rel="noopener noreferrer" target="_blank" style="color: rgb(255, 74, 0);">SSL/TLS</a>&nbsp;Certificate.</p><p>HTTPS would also boost the&nbsp;<a href="https://googlewebmastercentral.blogspot.sg/2014/08/https-as-ranking-signal.html" rel="noopener noreferrer" target="_blank" style="color: rgb(255, 74, 0);">search engine ranking</a>, so you may consider having this for your blog as well.</p><p>If you are looking to have a certificate implemented on your website without spending $$$ then here are a few Certificate Authority houses (SSL providers) to help you with that.</p><p>The following acronyms are used below.</p><ul><li><strong>SSL </strong> - Secure Socket Layer</li><li><strong>TLS </strong> - Transport Layer Security</li><li><strong>CDN </strong> - Content Delivery Network</li><li><strong>DV</strong> - Domain Validated</li><li><strong>ACME</strong> - Automated Certificate Management Environment</li></ul><p><br></p><p>If you are looking for shared hosting that provides a free SSL certificate, you may try <em>SiteGround</em>. If you are wondering&nbsp;why <em><u>SiteGround</u></em>&nbsp;then, the following are some of the features.</p><ul><li>SiteGround operates on Google Cloud to create a powerful and technically superior hosting service.</li><li>The latest version of PHP</li><li>Unmatched customer support available 24/7 via chat, phone, tickets. Waiting time is up to 10 minutes, if at all.</li><li>An innovative approach to performance and security</li><li>Hosting plans come with tons of free and useful features</li><li>Free SSL</li><li>Free Cloudflare CDN</li><li>Free and quick site migration from other hosts</li><li>Free automated daily backup and restore</li></ul>`;
const Imagedata = "https://www.greengeeks.com/blog/wp-content/uploads/2019/05/ssl-certificate.jpg";
const Codedata = `
const x  = 41;
for(let i=1;i<=x;i++){
		console.log(i);
}

for(let i=1;i<=x;i++){
		console.log(i);
}

for(let i=1;i<=x;i++){
		console.log(i);
}

for(let i=1;i<=x;i++){
		console.log(i);
}

for(let i=1;i<=x;i++){
		console.log(i);
};

`

export default function Blogbody() {
  return (
    <div className="w-full">
			<div className="w-full h-[400px] bg-contain bg-no-repeat bg-center" style={{backgroundImage : `url(${Imagedata})`}}> </div>
			<div dangerouslySetInnerHTML={{__html:Textdata}} className="my-12 "/>
			<Codeview/>
    </div>
  )
}

import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import CheckIcon from '@mui/icons-material/Check';
import { useState } from 'react';

function Codeview(){
	const [copy, setCopy] = useState(false);

	const handleCopy = ()=>{
		setCopy(true);
		navigator.clipboard.writeText(Codedata);
		setTimeout(() => {
			setCopy(false);
		}, 2000);
	}

	return(
		<div className="w-full px-12 grid place-items-center">
			<div className='w-full bg-[#3a404d]'>
			{ 
			!copy ? 
				<div className='w-full flex px-4 justify-between items-center text-white'>
					<p className='py-1 inline-flex items-center gap-2'> Example code </p>
					<button onClick={handleCopy}>
						<span> <ContentPasteIcon/> </span>
						Copy code
					</button>
				</div>
			:
				<div className='w-full flex px-4 justify-between items-center text-white'>
					<p className='py-1 inline-flex items-center gap-2'> Example code </p>
					<button >
						<span> <CheckIcon/> </span>
						Copied
					</button>
				</div>
			}
			
				<SyntaxHighlighter language="javascript" style={atomOneDark} customStyle={{paddingLeft:'25px'}}>
      		{Codedata}
    		</SyntaxHighlighter>
			</div>
		</div>
	)
}
