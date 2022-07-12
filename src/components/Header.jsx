import React, { useState } from 'react';
import Logo from '../img/logo.png';
import Avatar from '../img/avatar.png';
import { MdShoppingBasket, MdAdd, MdLogout } from 'react-icons/md';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { app } from '../firebase.config';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';

const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{ user, cartShow }, dispatch] = useStateValue();
  const [isMenu, setIsMenu] = useState(false);

  const login = async () => {
    if (!user) {
      const { user: { refreshToken, providerData } } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0]
      })
      localStorage.setItem('user', JSON.stringify(providerData[0]));
    }
    else {
      setIsMenu(!isMenu);
    }
  }

  console.log(user);

  const logout = () => {
    localStorage.clear();
    setIsMenu(false);
    dispatch({
      type: actionType.SET_USER,
      user: null
    })
  }

  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow
    })
  }

  return (
    <header className='fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-primary'>
      {/**desktop and pc */}
      <div className='hidden md:flex w-full h-full items-center justify-between'>
        <Link to={'/'} className='flex items-center gap-2'>
          <img src={Logo} alt="logo"
            className='w-8 object-cover'
          />
          <p className='text-headingColor text-xl font-bold'>City</p>
        </Link>
        <div className='flex items-center gap-8'>
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className='flex items-center gap-8'
          >
            <li className='text-base text-textColor hover:text-headingColor
            duration-100 transition-all ease-in-out cursor-pointer
          '>
              Home</li>
            <li className='text-base text-textColor hover:text-headingColor
            duration-100 transition-all ease-in-out cursor-pointer
          '>
              Menu</li>
            <li className='text-base text-textColor hover:text-headingColor
            duration-100 transition-all ease-in-out cursor-pointer
          '>
              About Us</li>
            <li className='text-base text-textColor hover:text-headingColor
            duration-100 transition-all ease-in-out cursor-pointer
          '>
              Service</li>
          </motion.ul>

          <div className='relative flex items-center justify-center'
            onClick={showCart}
          >
            <MdShoppingBasket className='text-textColor text-2xl cursor-pointer' />
            <div className='absolute -top-2 -right-2 bg-cartNumBg rounded-full
              w-5 h-5 flex items-center justify-center
            '>
              <p className='text-xs text-white font-semibold leading-5'>2</p>
            </div>
          </div>

          <div className='relative'>
            <motion.img whileTap={{ scale: 0.6 }}
              src={user ? user.photoURL : Avatar}
              alt={user ? user.displayName : 'profile-user'}
              className='w-10 h-10 min-w-[40px] min-h-[40px] 
              drop-shadow-xl cursor-pointer rounded-full'
              onClick={login}
            />
            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className='w-40 flex flex-col absolute bg-gray-50 shadow-xl
                rounded-lg top-12 right-0
              '>
                {
                  user && user.email === 'duonghdse140501@fpt.edu.vn' && (
                    <Link to={'/createItem'}>
                      <p className='px-4 py-2 flex items-center gap-3 
                    cursor-pointer hover:bg-slate-200 transition-all
                    duration-100 ease-in-out text-textColor text-base rounded-lg
                  ' onClick={() => setIsMenu(false)}>New Item <MdAdd /></p>
                    </Link>
                  )
                }
                <p className='px-4 py-2 flex items-center gap-3 
                cursor-pointer hover:bg-slate-200 transition-all
                duration-100 ease-in-out text-textColor text-base rounded-lg
                ' onClick={logout}>Log Out <MdLogout /></p>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/**mobile */}
      <div className='flex items-center justify-between md:hidden w-full h-full'>
        <div className='relative flex items-center justify-center'
          onClick={showCart}
        >
          <MdShoppingBasket className='text-textColor text-2xl cursor-pointer' />
          <div className='absolute -top-2 -right-2 bg-cartNumBg rounded-full
              w-5 h-5 flex items-center justify-center
            '>
            <p className='text-xs text-white font-semibold leading-5'>2</p>
          </div>
        </div>
        <Link to={'/'} className='flex items-center gap-2'>
          <img src={Logo} alt="logo"
            className='w-8 object-cover'
          />
          <p className='text-headingColor text-xl font-bold'>City</p>
        </Link>
        <div className='relative'>
          <motion.img whileTap={{ scale: 0.6 }}
            src={user ? user.photoURL : Avatar}
            alt={user ? user.displayName : 'profile-user'}
            className='w-10 h-10 min-w-[40px] min-h-[40px] 
              drop-shadow-xl cursor-pointer rounded-full'
            onClick={login}
          />
          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className='w-40 flex flex-col absolute bg-gray-50 shadow-xl
                rounded-lg top-12 right-0
              '>
              {
                user && user.email === 'duonghdse140501@fpt.edu.vn' && (
                  <Link to={'/createItem'}>
                    <p className='px-4 py-2 flex items-center gap-3 
                    cursor-pointer hover:bg-slate-200 transition-all
                    duration-100 ease-in-out text-textColor text-base rounded-t-lg
                  '>New Item <MdAdd /></p>
                  </Link>
                )
              }
              <ul
                className='flex flex-col'
              >
                <li className='text-base text-textColor hover:text-headingColor
                  duration-100 transition-all ease-in-out cursor-pointer
                  px-4 py-2 hover:bg-slate-200
                ' onClick={() => setIsMenu(false)}>
                  Home</li>
                <li className='text-base text-textColor hover:text-headingColor
                  duration-100 transition-all ease-in-out cursor-pointer
                  px-4 py-2 hover:bg-slate-200
                ' onClick={() => setIsMenu(false)}>
                  Menu</li>
                <li className='text-base text-textColor hover:text-headingColor
                  duration-100 transition-all ease-in-out cursor-pointer
                  px-4 py-2 hover:bg-slate-200
                ' onClick={() => setIsMenu(false)}>
                  About Us</li>
                <li className='text-base text-textColor hover:text-headingColor
                  duration-100 transition-all ease-in-out cursor-pointer
                  px-4 py-2 hover:bg-slate-200
                ' onClick={() => setIsMenu(false)}>
                  Service</li>
              </ul>
              <p className='m-2 p-2 flex items-center justify-center gap-3 
              bg-gray-200 cursor-pointer hover:bg-gray-300 transition-all 
                duration-100 ease-in-out text-textColor text-base rounded-md 
                shadow-md'
                onClick={logout}
              >
                Log Out <MdLogout />
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header