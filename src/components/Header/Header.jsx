import { HeaderSection, Container } from './Header.module';
import { PageNav } from './PageNav/PageNav';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import styles from './Header.module.css';

const Header = () => {
  return (
    <HeaderSection>
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" className={styles.AppBar}>
            <Toolbar>
              <PageNav></PageNav>
              <Typography sx={{ flexGrow: 1 }}></Typography>
            </Toolbar>
          </AppBar>
        </Box>
      </Container>
    </HeaderSection>
  );
};

export default Header;
