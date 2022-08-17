import React from 'react'
import Image from 'next/image';
import {MenuIcon, ChevronDownIcon, HomeIcon,SearchIcon} from '@heroicons/react/solid'
import {BellIcon,ChatIcon, GlobeIcon, PlusIcon, SparklesIcon,SpeakerphoneIcon,VideoCameraIcon} from '@heroicons/react/outline'
type Props = {}

const Header = (props: Props) => {
  return (
    <div className='Header'>
      <div className='logo'>
        <Image src={`https://links.papareact.com/fqy`} objectFit='contain' layout='fill'/>
      </div>

      <div className='iconsWrapper'>
        <HomeIcon className='icon'/>
        <p>Home</p>
        <ChevronDownIcon className="icon" />
      </div>

      {/* search box */}
      <form className='form'>
        <SearchIcon className='icon'/>
        <input type="text" placeholder='Search Reddit'/>
        <button type="submit" hidden></button>
      </form>

      {/* icons and hamburger menu */}
      <div className='iconsWrapper2'>
        <SparklesIcon className='icon'/>
        <GlobeIcon className='icon'/>
        <VideoCameraIcon className='icon'/>
        <hr />
        <ChatIcon className='icon'/>
        <BellIcon className='icon'/>
        <PlusIcon className='icon'/>
        <SpeakerphoneIcon className='icon'/>
      </div>
      <div className='menu'>
        <MenuIcon className='icon'/>
      </div>

    {/* signin and signout button */}
      <div className='signInandOut'>
        <div className='inner'>

        <Image objectFit='contain' src={`https://links.papareact.com/23l`}
        layout='fill' alt=''/>
        </div>
        <p>Sign In</p>
      </div>
    </div>
  )
}

export default Header;