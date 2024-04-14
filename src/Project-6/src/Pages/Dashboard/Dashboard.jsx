import DashBoardLayout from "../../Components/DashboardLayout";
import PortfolioSection from "../../Components/PortfolioSection";
import Sidenav from "../../Components/Sidenav";
import Topnav from "../../Components/Topnav";
import {Flex , Box} from "@chakra-ui/react";
export default function Dashboard(){
    return(
        <div>
                <DashBoardLayout title="Dashboard" children="hello">
                    <PortfolioSection/>
                </DashBoardLayout>
        </div>
    )
}