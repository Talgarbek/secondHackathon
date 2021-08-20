import React, { useContext, useState } from 'react';
import { tourContext } from '../contexty/TourContexts';
import { alpha, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import { Button } from '@material-ui/core';
import { DirectionsBoat, Favorite, Grade } from '@material-ui/icons';
import './Navbar.css'
import { useHistory } from 'react-router-dom';
import '../Footer/Footer.css'
import { BottomNavigation } from '@material-ui/core';
import { BottomNavigationAction } from '@material-ui/core';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import TelegramIcon from '@material-ui/icons/Telegram';
import TwitterIcon from '@material-ui/icons/Twitter';
import { AlternateEmail, Home, Phone } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginTop: 5,
    height: 35,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const history = useHistory()
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [searchVal, setSearchVal] = useState(getSearchVal() || '')
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const { getTours } = useContext(tourContext)

  const [anchorEle, setAnchorEle] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEle(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEle(null);
  };

  const [anchorEle2, setAnchorEle2] = React.useState(null);

  const handleClick2 = (event) => {
    setAnchorEle2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEle2(null);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  function getSearchVal(){
    const search = new URLSearchParams(history.location.search)
    return search.get('q')
  }

  const handleValue = (e) => {
    const search = new URLSearchParams(history.location.search)
    search.set('q', e.target.value)
    history.push(`${history.location.pathname}?${search.toString()}`)
    setSearchVal(e.target.value)
    getTours(history)
  }

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorEle2={anchorEle2}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <Favorite />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircleIcon />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" className='navbarr'>
      <div className='footerTop'>
            <BottomNavigation style={{height: '40px', paddingTop: '8px'}}>
                <h6><Phone></Phone>+996(312) 00 00 00&ensp;|&ensp;</h6>
                <h6><AlternateEmail></AlternateEmail> Example@gmail.com&ensp;|&ensp;</h6>
                <h6><Home></Home> Example str. 123&ensp;|&emsp;&emsp;&emsp;&emsp;&emsp;</h6>
                <BottomNavigationAction label="YouTube" icon={<YouTubeIcon style={{color: 'red'}} />} href="https://www.youtube.com/"/>
                <BottomNavigationAction label="Instagram"icon={<InstagramIcon style={{color: 'red'}} />} href="https://instagram.com" />
                <BottomNavigationAction label="Telegram"icon={<TelegramIcon style={{color: 'blue'}} />} href="https://telegram.org" />
                <BottomNavigationAction label="Twitter"icon={<TwitterIcon style={{color: 'blue'}} />} href="https://twitter.com/?lang=ru" />
            </BottomNavigation>
        </div>

        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            < DirectionsBoat />
          </IconButton>
          <Typography className={classes.title} style={{marginRight: '20px'}} variant="h5" noWrap>
            DREAM
          </Typography>
          <Button className='navtext' aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                Горящие туры
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEle}
                keepMounted
                open={Boolean(anchorEle)}
                onClose={handleClose}
                >
            <MenuItem onClick={handleClose}>Турция</MenuItem>
            <MenuItem onClick={handleClose}>О.А.Э</MenuItem>
            <MenuItem onClick={handleClose}>Египет</MenuItem>
            </Menu>
            <Button className='navtext'>
                Туры по Кыргызстану
            </Button>
            <Button className='navtext' aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick2}>
                Наши услуги
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEle2}
                keepMounted
                open={Boolean(anchorEle2)}
                onClose={handleClose}
                >
            <MenuItem onClick={handleClose2}>Транспортные услуги</MenuItem>
            <MenuItem onClick={handleClose2}>Свадебные путешествия</MenuItem>
            <MenuItem onClick={handleClose2}>Раннее бронирование</MenuItem>
            </Menu>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 5 new mails" color="inherit">
              <Badge badgeContent={5} color="secondary">
                <Grade />
              </Badge>
            </IconButton>
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                <SearchIcon />
                </div>
                <InputBase
                placeholder="Search…"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                value = {searchVal}
                onChange = {handleValue}
                />
            </div>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircleIcon />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
