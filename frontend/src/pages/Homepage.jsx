import React, { Suspense } from 'react'
import FoodCategory from '../components/FoodCategory'
import LatestRecipes from '../components/LatestRecipes'
import FeaturedCollections from '../components/FeaturedCollections'
import Newsletter from '../components/Newsletter'
import LoadingBar from '../components/skeleton/LoadingBar'

const Herosection = React.lazy(() => import('../components/Herosection'));
const FoodCategorySkeleton = React.lazy(() => import('../components/skeleton/FoodCategorySkeleton'))
const Homepage = () => {
  return (
    <div className='min-h-screen bg-white font-sans'>
      <Suspense fallback={<LoadingBar />}>
        <Herosection />
      </Suspense>
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
