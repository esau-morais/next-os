import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Button } from '@/components'

describe('Button', () => {
  it('should render atom correctly', () => {
    render(<Button label='any' />)
    expect(screen.getByText('any')).toBeDefined()
  })

  it('should apply styling besides the default one', () => { })

  it('should able to use different sizes and themes', () => { })
})
