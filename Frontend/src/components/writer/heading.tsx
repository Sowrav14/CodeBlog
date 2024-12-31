import TextField from '@mui/material/TextField';
import { useRef, useState } from 'react';
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useDispatch } from 'react-redux';
import { updateCat, updateDes, updateImg, updateTitle } from '../../reduxStore/slices/blogwriter/category';

const Categories: string[] = ["Cp", "ml", "dp", "gp", "graph"];


export default function Heading() {
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();


  const inputRef = useRef(null);
  const [image, setImage] = useState(
    "https://www.americanexecutivecenters.com/wp-content/uploads/2016/06/Blog.jpg"
  );

  const handleImageclick = () => {
    //@ts-ignore
    inputRef.current?.click();
  }

  return (
    <div className=" w-full gap-8 lg:flex lg:flex-row-reverse">
      <div className='w-full lg:w-1/2 flex justify-center'>
        <div 
          className=" justify-center content-center"
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
                dispatch(updateImg(image));
                alert(image);
              }
            }}
          />
        </div>
      </div>
      <div className="flex flex-col gap-8 lg:w-1/2">
        <TextField
          id="outlined-multiline-flexible"
          label="Title"
          multiline
          required
          rows={2}
          maxRows={3}
          // value={title}
          onChange={(e)=>{dispatch(updateTitle(e.target.value))}}
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Short Description"
          multiline
          required
          rows={5}
          maxRows={5}
          // value={shortDes}
          onChange={(e)=>{dispatch(updateDes(e.target.value))}}
        />
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          displayEmpty
          value={category}
          onChange={(e) => {setCategory(e.target.value); dispatch(updateCat(e.target.value))}}
        >
          <MenuItem value={""} selected>
            Select Category
          </MenuItem>
          {Categories.map((Category) => {
            return <MenuItem value={Category}> {Category} </MenuItem>;
          })}
        </Select>
      </div>
    </div>
  );
}
