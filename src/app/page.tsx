
import Feauture from '@/component/feauture'
 import Mainsection from '@/component/mainsection'
import React from 'react'
import Topcategory from "../component/topcategory"
import Newstyle from '@/component/newstyle'
import OurProduct from '@/component/ourproduct'
import Footer from '@/component/footer'

export default function Home() {
  return (
    <div className='m-3'>
      <Mainsection/>
      <Feauture/>  
      <Topcategory/>
      <Newstyle/>
      <OurProduct/>
      <Footer/>
      
    </div>
  )
}
