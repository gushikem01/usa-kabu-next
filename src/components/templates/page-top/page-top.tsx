import {
  Box,
  Grid,
  GridItem
} from '@chakra-ui/react';
import {Header} from '@/components/organisms/header';
import { MenuTab } from '@/components/organisms/menu-tab';
import { Footer } from '@/components/organisms/footer';
import { Search } from '@/components/organisms/search';
/**
 * PageTop
 * this is a page top of this site
 * @returns
 */
const PageTop = ():JSX.Element => {
  return (
    <>
      <Grid
        templateAreas={`"header"
          "main"
          "footer"`
        }
      >
        <GridItem area={'header'}>
          <Header />
        </GridItem>
        <GridItem area={'main'}>
          <Search />
          <Box m={8} display='flex' justifyContent='center' alignItems='center'>
            <MenuTab />
          </Box>
        </GridItem>
        <GridItem area={'footer'}>
          <Footer/>
        </GridItem>
      </Grid>
    </>
  )
}
export default PageTop;
