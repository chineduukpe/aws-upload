import React from 'react'
import {
    Flex,
} from '@chakra-ui/react'

import DashboardLayout from '../components/layout/dashboard.layout'

export default function Dashboard() {
    return (
        <DashboardLayout>

            <Flex
                h={[null, null, "100vh"]}
                maxW="2000px"
                flexDir={["column", "column", "row"]}
                overflow="hidden"
            >

            </Flex>
        </DashboardLayout>
    )
}
