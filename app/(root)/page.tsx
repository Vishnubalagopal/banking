import BalanceBox from '@/components/ui/BalanceBox'
import HeaderBox from '@/components/ui/HeaderBox'
import RightSideBar from '@/components/ui/RightSideBar'
import React from 'react'

const Home = () => {
    const loggedIn = { firstName : 'Vishnu',lastName :'Balagopal',email:'vbgcreations@gmail.com'}
  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox
                    type ='greeting'
                    title = 'Welcome'
                    user = {loggedIn?.firstName || 'Guest'}
                    subtext = 'Access & manage your account and transactions efficiently.'
                 />
                 <BalanceBox
                    accounts = {[]}
                    totalBanks = {1}
                    totalCurrentBalance = {5002.23}
                  />
            </header>
            recent transactions
        </div>
        <RightSideBar
            user = {loggedIn}
            transactions ={[]}
            banks = {[{currentBalance:9827},{currentBalance:6718}]}

        />
    </section>
  )
}

export default Home