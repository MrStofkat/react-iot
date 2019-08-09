import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu'
import './index.css';
import '../../App.css';


const MOBILE_WIDTH = 1024;


class Header extends Component {

  constructor(props) {
    super(props);
    this.onMenuStateChange = this.onMenuStateChange.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.state = {
      isMenuOpen: false,
    };

    this.state.windowWidth = window.innerWidth;
    window.onresize = () => {
      if (window.innerWidth != this.state.innerWidth) {
        this.setState({ windowWidth: window.innerWidth });
      }
    };


    window.addEventListener('beforeinstallprompt', (e) => {
      console.log('beforeinstallprompt');
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later.
      this.deferredPrompt = e;
    });
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (window.scrollY > 100 && window.scrollY > this.lastScrollY) {
      this.headerRef.style.top = '-55px';
    } else if (window.scrollY < this.lastScrollY) {
      this.headerRef.style.top = '0';
    }

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      this.headerRef.style.top = '0';
    }
    this.lastScrollY = window.scrollY;
  }

  closeMenu() {
    this.setState({ isMenuOpen: false });
  }

  installToDesktop() {
    //Trigger the installation prompt
    this.deferredPrompt.prompt();
  }

  onMenuStateChange(state) {
    this.setState({ isMenuOpen: state.isOpen })
  }



  render() {
    return (
      <header ref={(ref) => { this.headerRef = ref }} className="header">
        <Link to="/">
          <div className="header-logo">
            {/* <img src={require('../../assets/img/logo.svg')} className="app-logo" alt="logo" /> */}
            🏠
            <h1 className="App-title">Home Control</h1>
          </div>
        </Link>
        {this.state.windowWidth > MOBILE_WIDTH &&
          <div className="container-menu-items-desktop">
            <Link onClick={() => this.closeMenu()} className="menu-item menu-item-desktop" to="/">Home</Link>
            <Link onClick={() => this.closeMenu()} className="menu-item menu-item-desktop" to="/info">Info</Link>
            <Link onClick={() => this.closeMenu()} className="menu-item menu-item-desktop" to="/privacy">Privacy</Link>
          </div>
        }

        {this.state.windowWidth <= MOBILE_WIDTH &&
          <div>
            <Menu
              isOpen={this.state.isMenuOpen}
              pageWrapId={"page-wrap"}
              onStateChange={(state) => this.onMenuStateChange(state)}
              right
            >
              <Link onClick={() => this.closeMenu()} className="menu-item" to="/">Home</Link>
              <Link onClick={() => this.closeMenu()} className="menu-item" to="/info">Info</Link>
              <Link onClick={() => this.closeMenu()} className="menu-item" to="/privacy">Privacy policy</Link>
            </Menu>
          </div>
        }

      </header>
    );
  }
}

export default Header;
