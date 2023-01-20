const { Grid } = require("@aws-amplify/ui-react")

import { Amplify } from 'aws-amplify';
import awsExports from '../../src/aws-exports';
Amplify.configure({ ...awsExports, ssr: true });

import { Button, withAuthenticator } from '@aws-amplify/ui-react'

const DashboardLayout = ({ children, signOut, user }) => {
    return <Grid row>
        <p>Hello {user?.attributes?.email} <br /> <Button style={{ maxWidth: '150px' }} variation='warning' onClick={signOut}>Logout</Button></p>

        {children}
    </Grid>
}

export default withAuthenticator(DashboardLayout);