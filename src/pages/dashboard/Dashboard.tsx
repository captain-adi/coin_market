import CoinList from '@/components/coinList'
import HighLights from '@/components/highlights'
import { Switch } from '@/components/ui/switch'
import { Link } from 'react-router-dom'


function Dashboard() {
  return (
    <div>
{/* top section  */}
    <div className='container flex justify-between mx-auto items-center px-4 border'>
      <div className='flex flex-col gap-2'>
        <h3 className='text-3xl '>Cryptocurrency Prices by Market Cap</h3>
        <p className='text-muted-foreground'>The global cryptocurrency market cap today is $3.73 Trillion, a <span className='text-red-600'> 4.5% </span>  change in the last 24 hours. <Link to={"#"}className='underline'>Read more</Link></p>
      </div>
      <div className='flex gap-2  items-center'>
        <span className='text-muted-foreground font-bold'>Highlight</span> <Switch className=''/>

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
