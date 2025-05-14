import React, { Suspense } from 'react'
import LatestRecipes from '../components/LatestRecipes'
import FeaturedCollections from '../components/FeaturedCollections'
import Newsletter from '../components/Newsletter'
import Herosection from '../components/Herosection'
import FoodCategorySkeleton from '../components/skeleton/FoodCategorySkeleton'
const FoodCategory=React.lazy(()=>import('../components/FoodCategory'))
const Homepage = () => {
  return (
    <div className='min-h-screen bg-white font-sans'>
        <Herosection />
      <Suspense fallback={<FoodCategorySkeleton />}>
        <FoodCategory />
      </Suspense>
      <LatestRecipes />
      <FeaturedCollections />
      <Newsletter />
    </div>
  )
}

export default Homepage
