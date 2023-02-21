import React, { useState } from 'react'
import {CircleMinusOutlineMinor} from '@shopify/polaris-icons';
import { Icon, Stack, Text } from '@shopify/polaris';
import {CirclePlusOutlineMinor} from '@shopify/polaris-icons';

export const Counter = () => {
    const [counter,setCounter] = useState(0)

    console.log("counter:",counter)

    const plusHandler =()=>{
        // console.log("plus:")
        setCounter(counter+1)
    }

    const minusHandler =()=>{
        // console.log("minus:")
        if(counter > 0){
            setCounter(counter-1)
        }
        
    }
  return (
    <div>
        
      
        <div className='counter_border'>
            <Stack>
                <Text>
                    Quantity
                </Text>
                <div className='minusHandler' onClick={minusHandler}>
                <Icon source={CircleMinusOutlineMinor}color="base"/>
                </div>
                
                <Text>
                    {counter}
                </Text>
                <div className='plusHandler' onClick={plusHandler}>
                <Icon source={CirclePlusOutlineMinor}color="base"/>
                </div>
                
            </Stack>
            
            
        </div>

    </div>
  )
}
