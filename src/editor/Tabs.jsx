import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import ContentTab from './tabs/Content';
import StyleTab from './tabs/Style';
import AdvanceTab from './tabs/Advance';

function OptionTabs({theme, setTheme }){
  return(
    <Tabs isFitted variant='enclosed' colorScheme='green'>
      <TabList>
        <Tab>Content</Tab>
        <Tab>Style</Tab>
        <Tab>Advance</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <ContentTab theme={theme} setTheme={setTheme} />
        </TabPanel>

        <TabPanel>
          <StyleTab />
        </TabPanel>

        <TabPanel>
          <AdvanceTab />
        </TabPanel>

      </TabPanels>
    </Tabs>
  )
}

export default OptionTabs;