import Card from "../componets/balance_card";
import Footer from "../componets/footer";
import Header from "../componets/header";
import SearchBox from "../componets/searchbox";
import Stack from "../componets/stack";


function Dashboard(){
    return (<>
    
    <Header></Header>
    <div className="lg:pl-52 md:px-20 sm:px-10 pt-20">
        <Card></Card>
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

export default Dashboard;