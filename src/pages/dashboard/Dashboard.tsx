import CoinList from '@/components/coinList'
import HighLights from '@/components/highlights'
import LanguageDropDown from '@/components/languageDropdown'
import { useTheme } from '@/components/themeProvider'
import { Switch } from '@/components/ui/switch'


function Dashboard() {
  const {theme,setTheme} = useTheme()
  const toggleTheme = ()=>{
    setTheme(theme === "dark" ? 'light' : "dark")
  }
  return (
    <div>
{/* top section  */}
    <div className='container flex justify-between mx-auto items-center p-4'>
      <div className='flex flex-col gap-2'>
        <h3 className='text-3xl '>Cryptocurrency Prices by Market Cap</h3>
      </div>
      <div className='flex gap-9 items-center'>
        <LanguageDropDown/>
        <span className='text-muted-foreground font-bold flex justify-center items-center gap-3'>{theme === 'dark' ? "Light Mode" : "Dark Mode "}<Switch onClick={toggleTheme} className=''/></span> 

      </div>
     
    </div>
    {/* highlights section */}
    <div className=' container mx-auto gap-11 grid grid-cols-2'>
 <HighLights title='Trending' value={[
  {name: 'Bitcoin', value: {price : '$45,000', change: '2.5%'}},
  {name: 'Ethereum', value: {price : '$45,000', change: '2.5%'}},
 ]}/>
 <HighLights title='Top Gainers' value={[
  {name: 'Bitcoin', value: {price : '$45,000', change: '2.5%'}},
  {name: 'Ethereum', value: {price : '$45,000', change: '2.5%'}},
 ]}/>
    </div>


    <div className='container mx-auto mt-10 '>
<CoinList/>

    </div>
    </div>
  )
}

export default Dashboard
