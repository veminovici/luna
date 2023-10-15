import React, { Fragment } from 'react'
import SocialNavElement from './social-nav-element'
import { socialNavItems } from '@config/social-nav-items'

export default function SocialNav() {
  return (
    <>
    {
      socialNavItems?.length ? (
        socialNavItems?.map((item, index) => item.href && (
          <Fragment key={index}>
            <SocialNavElement item={item} />
          </Fragment>
        ))
      ) : null
    }
   </>
  )
}
