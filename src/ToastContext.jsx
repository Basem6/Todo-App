import { createContext ,useState , useContext} from "react";
import {Snacbar} from './Snac.jsx'
const Alertshow = createContext({})
export function ToastContext({children}){
    const [showalert , setshowalert] =useState({statue:false , type : "" ,  content:""});
    function showAlert(type , content){
        setshowalert({statue:true , type : type ,  content:content})
        setTimeout(() => {
        setshowalert({statue:false , type : type ,  content:content})
        }, 1500);
    }
    
    return(
            <Alertshow.Provider value={showAlert}>
                <Snacbar open={showalert.statue} statue={showalert.type} content={showalert.content}></Snacbar>
                {children}
            </Alertshow.Provider>
    ) 
}
export  const useToast = ()=>{
    return useContext(Alertshow)
} 
