import Table from "../../components/Table/Table";
import Box from "@mui/material/Box";
import { DrawerHeader } from "../../components/DrawerHeader";

export default function MainForm() {
    return (
        //remove Box and DrawHeader if you want to use the classic NavBar
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <DrawerHeader />
            <Table />
        </Box>
    )
}