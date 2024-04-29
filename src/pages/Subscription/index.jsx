import Footer from 'components/Footer'
import Header from 'components/Header'
import React from 'react'
import { CheckIcon } from '@heroicons/react/20/solid'

const includedFeatures = [
  'Private forum access',
  'Member resources',
  'Entry to annual conference',
  'Official member t-shirt',
]
const Subscription = () => {
  return ( <>
    <div class="flex flex-col text-center w-full bg-gray-900 ">
   
    <div class="w-40 mx-auto bg-gray-900">
        <h2
            class="font-heading mb-4 bg-orange-100 text-orange-800 px-4 py-2 rounded-lg md:w-36 md:mx-auto text-xs font-semibold tracking-widest uppercase title-font">
            Pricing
        </h2>
    </div>

    <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-200">We get paid only if you get paid!</h1>
   
    <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
       SkillSphere innovative way to connect to freelancers 
    </p>

    <div class="flex mx-auto border-2 hover:bg-gray-500  border-orange-500 rounded overflow-hidden mt-6">
        <button class="py-1 px-4 bg-orange-500 text-white focus:outline-none">Monthly</button>
        <button class="py-1 px-4  bg-white-A700 focus:outline-none">Annually</button>
    </div>

</div>

<div class="flex bg-gray-900 flex-wrap">

   
    <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
        <div class="h-full p-6 rounded-lg border-2 hover:bg-gray-600  border-gray-300 flex flex-col relative overflow-hidden">
            <h2 class="text-sm text-gray-200 font-quicksand tracking-widest title-font mb-1 font-medium">START</h2>
            <h1 class="text-5xl text-gray-700 pb-4 mb-4 border-b border-gray-200 leading-none">Free</h1>
            <p class="flex items-center text-gray-200 font-quicksand   mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0"> <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24"> <path d="M20 6L9 17l-5-5"></path> </svg> </span>5% transaction fee
            </p>
            <p class="flex items-center text-gray-600 mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0"> <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24"> <path d="M20 6L9 17l-5-5"></path> </svg> </span>-
            </p>
            <p class="flex items-center text-gray-200 mb-6">
                <span class="w-4 h-4 mr-2 inline-flex  text-gray-200 items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0"> <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24"> <path d="M20 6L9 17l-5-5"></path> </svg> </span>Unlimited Paid Transactions
            </p>
            <button class="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Your Plan <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24"> <path d="M5 12h14M12 5l7 7-7 7"></path> </svg> </button>
            <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
        </div>
    </div>


   
    <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
        <div class="h-full p-6 rounded-lg border-2 hover:bg-gray-600  border-orange-500 flex flex-col relative overflow-hidden">
            <span class="bg-orange-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
            <h2 class="text-sm tracking-widest  text-gray-200 title-font mb-1 font-medium">PRO</h2>
            <h1 class="text-5xl  text-gray-200  leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                <span>₹299</span> <span class="text-lg ml-1 font-normal text-gray-500">/mo</span>
            </h1>
            <p class="flex items-center text-gray-200  mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0"> <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24"> <path d="M20 6L9 17l-5-5"></path> </svg> </span>Basic ML Advancement
            </p>
            <p class="flex items-center  text-gray-200 mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0"> <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24"> <path d="M20 6L9 17l-5-5"></path> </svg> </span>5 free transactions
            </p>
            <p class="flex items-center text-gray-200 mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0"> <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24"> <path d="M20 6L9 17l-5-5"></path> </svg> </span>3% Transaction Fees
            </p>
            <p class="flex items-center text-gray-200 mb-6">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0"> <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24"> <path d="M20 6L9 17l-5-5"></path> </svg> </span>2 Months Premium Contact Support
            </p>
            <button class="flex items-center mt-auto text-gray-200 text-white bg-orange-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-orange-600 rounded">Buy now <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24"> <path d="M5 12h14M12 5l7 7-7 7"></path> </svg> </button>
            <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
        </div>
    </div>


 
    <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
        <div class="h-full p-6 rounded-lg border-2 hover:bg-gray-600 border-gray-300 flex flex-col relative overflow-hidden">
            <h2 class="text-sm tracking-widest text-gray-200 title-font mb-1 font-medium">PREMIUM</h2>
            <h1 class="text-5xl text-gray-200 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                <span>₹799</span> <span class="text-lg ml-1 font-normal text-gray-500">/mo</span>
            </h1>
            <p class="flex items-center text-gray-200 mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0"> <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24"> <path d="M20 6L9 17l-5-5"></path> </svg> </span>Advance Filter Search
            </p>
            <p class="flex items-center text-gray-200 mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0"> <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24"> <path d="M20 6L9 17l-5-5"></path> </svg> </span>15 free transactions
            </p>
            <p class="flex items-center text-gray-200 mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0"> <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24"> <path d="M20 6L9 17l-5-5"></path> </svg> </span>3% Transaction Fees
            </p>
            <p class="flex items-center text-gray-200 mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0"> <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24"> <path d="M20 6L9 17l-5-5"></path> </svg> </span> Premium Support 24/7
            </p>
            <p class="flex items-center text-gray-200 mb-6">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0"> <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24"> <path d="M20 6L9 17l-5-5"></path> </svg> </span> Advance chatbot Support
            </p>
            <button class="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Buy now <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24"> <path d="M5 12h14M12 5l7 7-7 7"></path> </svg> </button>
            <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
        </div>
    </div>


   
    <div class="p-4 xl:w-1/4  hover: md:w-1/2 w-full">
        <div class="h-full p-6  hover:bg-gray-600 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
            <h2 class="text-sm tracking-widest title-font text-gray-200 mb-1 font-medium">SPECIAL</h2>
            <h1 class="text-5xl text-gray-200 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                <span>₹7999</span> <span class="text-lg ml-1 font-normal text-gray-500">/Lifetime</span>
            </h1>
            <p class="flex items-center text-gray-200 mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0"> <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24"> <path d="M20 6L9 17l-5-5"></path> </svg> </span>Advance ML Advancement
            </p>
            <p class="flex items-center text-gray-200 mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0"> <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24"> <path d="M20 6L9 17l-5-5"></path> </svg> </span> Top in Priority List
            </p>
            <p class="flex items-center text-gray-200 mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0"> <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24"> <path d="M20 6L9 17l-5-5"></path> </svg> </span> Premium Support LifeTime
            </p>
            <p class="flex items-center text-gray-200 mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0"> <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24"> <path d="M20 6L9 17l-5-5"></path> </svg> </span>100+ Free Transactions
            </p>
            <p class="flex items-center text-gray-200 mb-6">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0"> <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24"> <path d="M20 6L9 17l-5-5"></path> </svg> </span>2% Transaction Fee Afterwards
            </p>
            <button class="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Buy now <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24"> <path d="M5 12h14M12 5l7 7-7 7"></path> </svg> </button>
            <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
        </div>
    </div>
</div></>
  )
}

export default Subscription