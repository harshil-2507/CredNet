import HeaderBox from '@/components/HeaderBox';
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
    const loggedIn = {firstName: 'Harshil',lastName: 'Andhariya',
    email: 'harshilandhariya@gmail.com'
    };
  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox 
                    //props
                    type = "greeting"
                    title = "Welcome"
                    user = {loggedIn?.firstName || 'Guest'}
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