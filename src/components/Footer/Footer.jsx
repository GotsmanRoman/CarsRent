import styles from './Footer.module.scss';
import { FooterNav } from './FooterNav/FooterNav';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

const Footer = () => {
  return (
    <div className={styles.Container}>
      <Box sx={{ flexGrow: 1, paddingTop: '40px' }}>
        <Toolbar>
          <FooterNav></FooterNav>
        </Toolbar>
      </Box>
    </div>
  );
};

export default Footer;
