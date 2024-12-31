import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import SpringModal from './Modal';


const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const login = false;

  const [modalOpen, setModalOpen] = React.useState(false);
  const handleModalOpen = () => {setModalOpen(true); handleCloseNavMenu}
  const handleModalClose = () => setModalOpen(false);


  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{color:'white', bgcolor:'#2B303A'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
            <div className='w-full flex justify-between shadow-2xl'>
                <div className='flex gap-8 justify-end items-center'>
                    
                    <CodeOffIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h4"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 900,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        }}
                    >
                        Code-Blog
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                        >
                        <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            <MenuItem key={'About Us'} onClick={handleCloseNavMenu}>
                                <Typography sx={{ textAlign: 'center' }}> {!login ? "About Us" : "Blog-Feed"} </Typography>
                            </MenuItem>
                            <MenuItem key={'About Us'} onClick={handleCloseNavMenu}>
                                <Typography sx={{ textAlign: 'center' }}> {!login ? "Contact Us" : "Blog-Writer"} </Typography>
                            </MenuItem>
                            {login && 
                            <MenuItem key={'About Us'} onClick={handleCloseNavMenu}>
                                <Typography sx={{ textAlign: 'center' }}> Messages </Typography>
                            </MenuItem>}
                            {!login && 
                            <> <MenuItem key={'About Us'} onClick={handleModalOpen}>
                                <Typography sx={{ textAlign: 'center' }}> Get Started </Typography>
                            </MenuItem>
                            <SpringModal open={modalOpen} handleClose={handleModalClose} /> </> }

                        </Menu>
                    </Box>
                    
                    <CodeOffIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                        mr: 2,
                        display: { xs: 'flex', md: 'none' },
                        flexGrow: 1,
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        }}
                    >
                        Code-Blog
                    </Typography>
                </div>
                {/* should be changed accordingly */}
                <div className='flex gap-8 justify-end items-center'>
                    <Box sx={{ display: { xs: 'none', md: 'flex', alignItems:'center', gap:10 } }}>
                        <Button
                            key={'AboutUs'}
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        > {login ? "Blog-Feed" : "About Us"} </Button>
                        <Button
                            key={'ContactUs'}
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        > {login ? "Blog-Writer" : "Contact Us"} </Button>
                        {!login && <>
                        <Button
                            key={'GetStarted'}
                            onClick={handleModalOpen}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        > Get Started </Button>
                        <SpringModal open={modalOpen} handleClose={handleModalClose} /> </> }
                        <Badge badgeContent={100} color="success" max={99} >
                            <MailIcon color="action" sx={{height:40, width:40, color:'white'}}/>
                        </Badge>
                    </Box>
                    {login && 
                    <Box sx={{  }}>
                        <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                        </IconButton>
                        </Tooltip>
                        <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                        >
                        {settings.map((setting) => (
                            <MenuItem key={setting} onClick={handleCloseUserMenu}>
                            <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                            </MenuItem>
                        ))}
                        </Menu>
                    </Box>}
                </div>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
