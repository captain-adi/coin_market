
import HighLights from '@/components/highlights'
import LanguageDropDown from '@/components/languageDropdown'
import CoinList from '@/components/coinList'; 



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
     
        <CoinList />
    

    </div>
    </div>
  )
}

export default Dashboard
