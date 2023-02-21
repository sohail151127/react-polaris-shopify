import React from 'react';
import '@shopify/polaris/build/esm/styles.css';
import {Button, Card, Icon, Link, List, SkeletonTabs, Stack, Text, TextContainer} from '@shopify/polaris';
import abc from "../img/abc.png";
import { SelectExample } from './Selector';
import { Counter } from './Counter';
import {ChevronLeftMinor} from '@shopify/polaris-icons';
import {ChevronRightMinor} from '@shopify/polaris-icons';


export const AddToCart = () => {
  return (
   
    <Card title="" sectioned>
        <Stack distribution='equalSpacing'>
        
            <Stack >
            <Icon source={ChevronLeftMinor}       color="base"
                />
            <Text variant="bodyMd" as="p">
                Previous Offer
            </Text>
        
            </Stack>
        
        
            <Stack >
            
            <Text variant="bodyMd" as="p">
                Next Offer
            </Text>
            <Icon source={ChevronRightMinor}       color="base"
                />
            </Stack>
        
        </Stack>
        
        <Stack distribution="center">
            
            <SkeletonTabs count={3} />
            
        </Stack>
        
        
        <div className='main__title'>
            <Text variant="heading3xl" as="h2">
                    Upgrade Your Cart Now
            </Text>
        </div>
        <div className='special__offer'>
            <Text variant="bodyMd" as="p">
                Special Offer
            </Text>
        </div>
        

{/* main lower body stack */}
    <Stack distribution="fillEvenly">
      <Card.Section>
    
    {/* .........1st stack.............. */}
   
        <Stack vertical>
            <div className="left__stack">
                <div className='text_above_img'>
                    <Text variant="bodyMd" as="p" alignment="center">
                        Our Most Demanding Formal Suit For Groom is Finally available
                    </Text>
                </div>

                <img className='img' src={abc} alt="abc" />
            </div>
            
        </Stack>
    
        
      </Card.Section>

      <Card.Section>

   {/* ...........2nd stack ...............     */}
        <Stack vertical>
            <TextContainer spacing="tight">
                <Text variant="headingMd" as="h2">
                    Animal Graphic T-Shirt
                </Text>
                <Stack>
                    <div className='comparative__price'>
                        <Text variant="headingMd"       as="h2">
                            $24.00
                        </Text>
                    </div>
                    <div className='final__price'>
                        <Text variant="headingMd" as="h2">
                            $16.00
                        </Text>
                    </div>
                </Stack>
                <div className='savings__percentage'>
                    <Text variant="headingMd" as="h2">
                        10% Savings
                    </Text>
                </div>
            
            <Text variant="headingSM" as="h2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Text>
            <List type="bullet">
                <List.Item>Solid Shirt with pant jackt</List.Item>
                <List.Item>Blue Pant with pant jackt</List.Item>
                <List.Item>Blue Brazer with pant jackt</List.Item>
                <List.Item>Blue Brazer with pant jackt</List.Item>
            </List>
            <div className='readMore__link'>
                <Link url="https://help.shopify.com manual">Read More
                </Link>
            </div>
            
            </TextContainer>
        
        <SelectExample />
        <Counter />
        
        <div className='addButton'>
            <Button fullWidth>Add to Order</Button>
        </div>
        <div className="skip__checkout" >
            <Button fullWidth monochrome outline>
                Skip & Checkout
            </Button>
        </div>
        </Stack>
        
      </Card.Section>
    </Stack>
    </Card>
        
   
  )
}
