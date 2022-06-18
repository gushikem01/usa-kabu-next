import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Lists } from '../lists';
const MenuTab = ():JSX.Element => {
  return (
    <>
      <Tabs variant='enclosed' boxShadow="2xl">
        <TabList>
          <Tab>Tab1</Tab>
          <Tab>Tab2</Tab>
          <Tab>Tab3</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Lists />
          </TabPanel>
          <TabPanel>
            <p>111</p>
          </TabPanel>
          <TabPanel>
            <p>コメントが入ります3。</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  )
}
export default MenuTab;
