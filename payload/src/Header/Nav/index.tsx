import React from 'react'
import { cn } from '@/utilities/ui'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'

export const HeaderNav: React.FC<{ data: HeaderType; className?: string }> = ({
  data,
  className,
}) => {
  const navItems = data?.navItems || []

  return (
    <nav className={cn('flex items-center gap-6 lg:gap-10', className)}>
      {navItems.map(({ link }, i) => {
        return (
          <CMSLink
            key={i}
            {...link}
            appearance="link"
            className="text-sm tracking-widest uppercase text-muted-foreground transition-colors duration-300 hover:text-gold"
          />
        )
      })}
    </nav>
  )
}
