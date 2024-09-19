import { useEffect, useMemo, useState } from "react";
import Card from "../componets/balance_card";
import Footer from "../componets/footer";
import Header from "../componets/header";
import SearchBox from "../componets/searchbox";
import Stack from "../componets/stack";
import {useNavigate} from 'react-router-dom'
import axios from "axios";


function Dashboard(){
    const navigate=useNavigate();
    const z=JSON.parse(localStorage.getItem("login"));
    const [bala,setbalane]=useState(0);
    const name=z.name;
    const token=z.token;
    async function bal(){
        
           let ans=await axios.get("http://localhost:3000/account/balance",{ headers: {
                'Authorization': token
              }})
        let z=parseFloat(ans.data.balance.toFixed(3));
     //   parseFloat(floatNum.toFixed(2))
        setbalane(z);


    }
    useEffect(()=>{

       bal();
    },[])
    
  
    if(z.login==true){
    

    return (<>
    
    <Header/>
    <div className="lg:pl-52 md:px-20 sm:px-10 pt-20">
        <Card name={name} bala={bala}/>
    </div>
    <div className="py-16">
    <SearchBox/>
    </div>
    <div className="px-10 pb-20">
    <Stack/>
    </div>

    <Footer/>

    
    </>
    )
}
else{
    navigate("/signin")

}
}

export default Dashboard;