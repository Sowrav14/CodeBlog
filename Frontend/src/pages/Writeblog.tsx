
import Bodywriter from "../components/writer/body";
import Heading from "../components/writer/heading";
import SaveLoader from "../components/writer/saveButton";



export default function Writer() {


  return (
    <div className=" w-full p-12 flex flex-col gap-8">
      <p> Draft in Sowrav nath </p>
      
      <Heading />
      <Bodywriter />
      
      <SaveLoader/>
      
    </div>
  );
}
