import HeaderBox from '@/components/HeaderBox';
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react'

const Home = async() => {
    const loggedIn =  await getLoggedInUser();
    // ussed this to debug and fixing the issues
    // console.log(loggedIn);
    // const loggedInUser = await getLoggedInUser();
    // console.log(loggedInUser);
  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox 
                    //props
                    type = "greeting"
                    title = "Welcome"
                    user = {loggedIn?.name || 'Guest'}
                    subtext  = "Access and manage your account and transactions effieciently." 
                />
                <TotalBalanceBox 
                    accounts = {[]}
                    totalBanks= {1}
                    totalCurrentBalance = {1912.85}                    
                />
            </header>

            RECENT TRANSACTIONS

        </div>
        <RightSidebar 
            user = {loggedIn}
            transaction = {[]}
            banks = {[{currentBalance: 1673.50},{currentBalance:1456.78}]}
        />
    </section>
  )
}

export default Home