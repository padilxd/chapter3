"use client"


import { ButtonSuccess, ButtonWarning, ButtonDanger, Button1, Button2, Button3 } from "../../components/button";


const TestButton = () => {
   return(
       <div className="m-10">
           <ButtonSuccess type="button" onClick={() => alert("Success button clicked!")}>
               Success Button
           </ButtonSuccess>
           <ButtonWarning type="button" className="ml-2" onClick={() => alert("Warning button clicked!")}>
               Warning Button
           </ButtonWarning>
           <ButtonDanger type="button" className="ml-2" onClick={() => alert("Danger button clicked!")}>
               Danger Button
           </ButtonDanger>
           <Button1 type="button" className="ml-2" onClick={() => alert("Success Outline Button clicked!")}>
               Success Outline Button
           </Button1>
           <Button2 type="button" className="ml-2" onClick={() => alert("Danger Outline Button clicked!")}>
               Danger Outline Button
           </Button2>
           <Button3 type="button" className="ml-2" onClick={() => alert("Outline Info Button clicked!")}>
               Outline Info Button
           </Button3>
       </div>
   )
}


export default TestButton;  