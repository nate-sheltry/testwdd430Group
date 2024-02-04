<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8026466 (Customized TailwindCSS colors, added google font and set metadata)
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Product',
};
<<<<<<< HEAD
=======
'use client';
=======
>>>>>>> 312aa7c (Componentized the Tab)

import { StaticImageData } from 'next/image';
import artOneImage from '../../../../public/images/art-1.jpg';
import artTwoImage from '../../../../public/images/art-2.jpg';
import artThreeImage from '../../../../public/images/art-3.jpg';
import artFourImage from '../../../../public/images/art-4.jpg';
import artOneThumbnail from '../../../../public/thumbnails/art-1.jpg';
import artTwoThumbnail from '../../../../public/thumbnails/art-2.jpg';
import artThreeThumbnail from '../../../../public/thumbnails/art-3.jpg';
import artFourThumbnail from '../../../../public/thumbnails/art-4.jpg';
import { ShoppingCartIcon, MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import ReviewsList from '@/app/ui/products/ReviewsList';
import ProductTab from '@/app/ui/products/ProductTab';

const reviews : Object[] = [

  {
    id: 1,
    date: '02-25-2022',
    fullName: 'John Doe',
    review: 'hic atque similique tempora autem eum, corrupti voluptas dolorem harum officia! Dolores incidunt a deserunt nostrum'
  },

  {
    id: 2,
    date: '01-25-2023',
    fullName: 'Jane Doe',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam aperiam deleniti voluptates delectus excepturi'
  },

  {
    id: 3,
    date: '10-25-2023',
    fullName: 'Matt Simpson',
    review: 'Deleniti sit commodi nesciunt tempora sequi, possimus accusamus aut dicta laboriosam accusantium quibusdam perspiciatis voluptas nisi'
  },

]
>>>>>>> c3afad1 (Added carousel, product, and review section)

export default function Page() {

  const tabImages : StaticImageData[] = [artOneImage, artTwoImage, artThreeImage, artFourImage];

  const tabThumbnails : StaticImageData[] = [artOneThumbnail, artTwoThumbnail, artThreeThumbnail, artFourThumbnail];

  return (

    <div>

      <div className='flex flex-col gap-10 mb-20 md:flex-row'>

        <ProductTab

          images={tabImages}

          thumbnails={tabThumbnails}

        />

        <div className='basis-1/2 shrink-0 md:px-5 md:py-2'>

          <h1 className='h3 mb-1'>Lorem ipsum dolor</h1>
          <p className='mb-5'>By Adipisci Unde</p>

          <p className='mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae repellendus dolores, ut, tempore laboriosam rerum facere ab, incidunt sint esse dolore accusantium necessitatibus. Adipisci repellat ipsum tempore eum quos. Unde.</p>

          <div className='mb-10 text-2xl font-bold'>

            $125

          </div>

          <div className='flex justify-between items-stretch flex-wrap gap-5 max-w-96'>

            <div className='flex bg-light-grayish-blue'>

              <button className='p-2 text-xl font-bold' type='button'>

                <MinusIcon className='w-5 h-5 font-bold text-orange pointer-events-none' />

              </button>

              <div className='p-2'>

                <span className='flex justify-center items-center font-bold h-6 w-6'>

                  0

                </span>

              </div>

              <button className='p-2 text-2xl font-bold' type='button'>

                <PlusIcon className='w-5 h-5 font-bold text-orange pointer-events-none' />

              </button>

            </div>

            <div>

              <button className='inline-flex items-center gap-x-2 px-8 py-2 bg-orange text-white rounded-md' type='button'>

                <ShoppingCartIcon className='w-5 h-5' />

                <span>Add To Cart</span>

              </button>

            </div>

          </div>

        </div>

      </div>

      <div className='mb-20'>

        <h2 className='h3'>Reviews</h2>

        <ReviewsList list={reviews} />

      </div>

      <div>

        <h2 className='h3'>Add A Review</h2>

        <form className='max-w-96' action="">

          <div className='flex flex-col gap-y-1 mb-4'>

            <label htmlFor="fullName">Full Name</label>

            <input className='focus:border-orange focus:ring-orange rounded-md' id='fullName' type="text"  />

          </div>

          <div className='flex flex-col gap-y-1 mb-8'>

            <label htmlFor="review">Review</label>

            <textarea className='focus:border-orange focus:ring-orange rounded-md' name='review' id='review' cols='30' rows='5'></textarea>

          </div>

          <button className='px-8 py-2 bg-orange text-white rounded-md' type='submit'>

            Submit Review

          </button>

        </form>

      </div>

    </div>

  );
<<<<<<< HEAD
}
=======
export default async function Page() {


    return (
      <main>
        <h1>Product by Id Page</h1>
      </main>
    );
  }
>>>>>>> f58ac01 (completed team setup)
=======

export default function Page() {
  return (
    <main>
      <h1>Product by Id Page</h1>
    </main>
  );
}
>>>>>>> 8026466 (Customized TailwindCSS colors, added google font and set metadata)
=======

}
>>>>>>> c3afad1 (Added carousel, product, and review section)
