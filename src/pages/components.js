import { ArrowLink } from '@/components/Links/ArrowLink/ArrowLink'
import { BoxLink } from '@/components/Links/BoxLink/BoxLink'
import { UnderlineLink } from '@/components/Links/UnderlineLink/UnderlineLink'
import { BrowserRouter, NavLink } from 'react-router-dom';
import React from 'react';
import Router from 'next/router';

const components = () => {
  return (
    <>
   
    <UnderlineLink label='underline' />
    
    </>
  )
}

export default components
