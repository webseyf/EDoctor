import  { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Modal,
  Menu,
  MenuItem,
  Box,
  IconButton,
  Flex,
  Stack,
  useDisclosure,
  Collapse,
  useBreakpointValue,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {NavLink} from 'react-router-dom'
export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const [anchorEl, setAnchorEl] = useState(null);
  const [openSignIn, setOpenSignIn] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const open = Boolean(anchorEl);
  const handleMenuClick = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const handleSignInOpen = () => setOpenSignIn(true);
  const handleSignInClose = () => setOpenSignIn(false);
  const handleSignUpOpen = () => setOpenSignUp(true);
  const handleSignUpClose = () => setOpenSignUp(false);
  
  const handleLogout = () => {
    setIsLoggedIn(false);
    handleMenuClose();
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    handleSignInClose();
  };

  return (
    <>
      <AppBar position="sticky" color="default">
        <Toolbar>
          <NavLink to="/" style={{ marginRight: '20px', textDecoration: 'none', color: 'black' }}>
            <h2>EDoctor</h2>
          </NavLink>

          <Flex display={{ base: 'none', md: 'flex' }} flexGrow={1} justifyContent="space-between">
            <NavLink to="/doctors" style={{ textDecoration: 'none' }}>
              <Button>Doctors</Button>
            </NavLink>
            <Button onClick={handleMenuClick}>Specialties</Button>
            <NavLink to="/how-to-use" style={{ textDecoration: 'none' }}>
              <Button>How to use</Button>
            </NavLink>
            <NavLink to="/contact-us" style={{ textDecoration: 'none' }}>
              <Button>Contact Us</Button>
            </NavLink>
            <Box>
              {isLoggedIn ? (
                <div>
                  <Button onClick={handleMenuClick}>Profile</Button>
                  <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  </Menu>
                </div>
              ) : (
                <>
                  <Button variant="contained" onClick={handleSignInOpen}>Sign In</Button>
                  <Button variant="outlined" onClick={handleSignUpOpen} style={{ marginLeft: '10px' }}>Sign Up</Button>
                </>
              )}
            </Box>
          </Flex>

          {/* Hamburger Menu for Mobile */}
          <IconButton
            display={{ base: 'flex', md: 'none' }}
            onClick={onToggle}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>

        {/* Collapsible Navigation Links for Mobile */}
        <Collapse in={isOpen} style={{ backgroundColor: '#fff' }}>
          <Stack spacing={1} padding={2}>
            <NavLink to="/doctors" style={{ textDecoration: 'none' }}>
              <Button fullWidth>Doctors</Button>
            </NavLink>
            <Button onClick={handleMenuClick} fullWidth>Specialties</Button>
            <NavLink to="/how-to-use" style={{ textDecoration: 'none' }}>
              <Button fullWidth>How to use</Button>
            </NavLink>
            <NavLink to="/contact-us" style={{ textDecoration: 'none' }}>
              <Button fullWidth>Contact Us</Button>
            </NavLink>
            <Box>
              {!isLoggedIn && (
                <Button variant="outlined" onClick={handleSignUpOpen} fullWidth>Sign In/Up</Button>
              )}
            </Box>
          </Stack>
        </Collapse>
      </AppBar>

      {/* Sign In Modal */}
      <Modal open={openSignIn} onClose={handleSignInClose}>
        <Box sx={{ width: 400, margin: 'auto', mt: 5, p: 3, bgcolor: 'white', borderRadius: 1 }}>
          <h3>Sign In</h3>
          {/* Add your form elements here */}
          <Button onClick={handleLogin}>Submit</Button> {/* Handle actual login logic */}
        </Box>
      </Modal>

      {/* Sign Up Modal */}
      <Modal open={openSignUp} onClose={handleSignUpClose}>
        <Box sx={{ width: 400, margin: 'auto', mt: 5, p: 3, bgcolor: 'white', borderRadius: 1 }}>
          <h3>Sign Up</h3>
          {/* Add your form elements here */}
          <Button onClick={handleSignInClose}>Submit</Button> {/* Handle actual sign up logic */}
        </Box>
      </Modal>
    </>
  );
}

