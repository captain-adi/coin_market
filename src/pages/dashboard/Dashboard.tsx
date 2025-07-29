
import HighLights from '@/components/highlights'
import LanguageDropDown from '@/components/languageDropdown'
import React from 'react'
const CoinList = React.lazy(() => import('@/components/coinList'))



function Dashboard() {

  return (
    <div className='container h-full mx-auto flex flex-col gap-5'>
{/* top section  */}
    <div className=' flex justify-between items-center p-4'>
      <div className='flex flex-col gap-2'>
        <h3 className='text-3xl '>Cryptocurrency Prices by Market Cap</h3>
      </div>
      <div className='flex gap-9 items-center'>
        <LanguageDropDown/>

      </div>
     
    </div>
    {/* highlights section */}

<HighLights/>

    <div className=' mt-5 '>
      <React.Suspense fallback={<div>Loading...</div>}>
        <CoinList />
      </React.Suspense>

    </div>
    </div>
  )
}

export default Dashboard
