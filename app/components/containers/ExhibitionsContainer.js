'use client'

import PhotoAlbum from 'react-photo-album'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { mobileNavToggle } from '@/src/redux/features/nav-slice'

import { EXHIBITIONS_GALLERY } from '@/src/data'

function ExhibitionsContainer() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(mobileNavToggle(false))
  }, [])

  return (
    <div className="md:text-md flex flex-col justify-center font-bold sm:text-sm lg:text-lg">
      <p className="md:pb-1">
        <i>SNY NIE SĄ TYM CZYM SIĘ WYDAJĄ</i>, Galeria Miejska, Wrocław, 2023
      </p>
      <div className="flex flex-col gap-2">
        <PhotoAlbum
          photos={EXHIBITIONS_GALLERY}
          layout="columns"
          columns={1}
          spacing={8}
          key={Math.floor(Math.random() * 5984)}
        />
      </div>
    </div>
  )
}

export default ExhibitionsContainer
