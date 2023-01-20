import DashboardLayout from "@/components/layout/dashboard.layout";
import { Button, Grid } from "@aws-amplify/ui-react";


const ProtectedPage = () => {
    return <Grid>
        <h3>Hello there!</h3>
    </Grid>
}


ProtectedPage.getLayout = function getLayout(page) {
    return <DashboardLayout>{page}</DashboardLayout>
}

export default ProtectedPage;