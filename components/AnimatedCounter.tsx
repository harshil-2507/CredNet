"use client";
import React from 'react'
import CountUp from 'react-countup'

const AnimatedCounter = ({amount}:{amount : number}) => {
  return (
    <div>
      <CountUp
        start={0}
        end={amount}
        duration={1.75} 
        decimals={2}
        decimal=","
        prefix="₹"
        />
    </div>
  )
}

export default AnimatedCounter
