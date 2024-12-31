
import { useRef, useState } from 'react';



export default function Imageeditor() {
  const inputRef = useRef(null);
  const [image, setImage] = useState(
    "https://www.americanexecutivecenters.com/wp-content/uploads/2016/06/Blog.jpg"
  );

  const handleImageclick = () => {
    //@ts-ignore
    inputRef.current?.click();
  }

  return (
    <div className=" w-full gap-8 ">
      <div className='w-full flex justify-center'>
        <div 
        className="lg:w-1/2"
        onClick={handleImageclick}
        >
          <img width={"100%"} height={"auto"} src={image} />
          <input
            className=' invisible'
            type="file"
            ref={inputRef}
            onChange={(e) => {
              const file = e.target.files;
              if (file) {
                // console.log(file[0]);
                // console.log(URL.createObjectURL(file[0]));
                setImage(URL.createObjectURL(file[0]));
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}
