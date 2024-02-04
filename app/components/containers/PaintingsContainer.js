'use client'

import PhotoAlbum from 'react-photo-album'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { mobileNavToggle } from '@/src/redux/features/nav-slice'

import {
  DESKTOP_GALLERY_ROWS,
  MOBILE_GALLERY,
  SMALL_SCREEN_BREAKPOINT,
} from 'src/data.js'

import { useWindowWidth } from '@/src/hooks/useWindowWidth'

function PaintingsContainer() {
  const dispatch = useDispatch()
  const windowWidth = useWindowWidth()

  useEffect(() => {
    dispatch(mobileNavToggle(false))
  }, [])

  return (
    <>
      <div className="flex flex-col gap-2">
        {windowWidth >= SMALL_SCREEN_BREAKPOINT &&
          DESKTOP_GALLERY_ROWS.map((row) => (
            <PhotoAlbum
              photos={row}
              layout="rows"
              spacing={8}
              key={Math.floor(Math.random() * 5984)}
            />
          ))}
        {windowWidth < SMALL_SCREEN_BREAKPOINT && (
          <PhotoAlbum
            photos={MOBILE_GALLERY}
            layout="columns"
            columns={(windowWidth) => {
              if (windowWidth < 878 && windowWidth > 500) return 2
              if (windowWidth < 500) return 1
            }}
            spacing={8}
            key={Math.floor(Math.random() * 5984)}
          />
        )}
      </div>
    </>
  )
}

export default PaintingsContainer
