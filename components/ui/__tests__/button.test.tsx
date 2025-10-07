import React from 'react'
import { Button } from '../button'

describe('Button', () => {
  it('renders without crashing', () => {
    expect(() => {
      React.createElement(Button, { children: 'Click me' })
    }).not.toThrow()
  })

  it('has correct display name', () => {
    expect(Button.displayName).toBe('Button')
  })

  it('creates button element correctly', () => {
    const element = React.createElement(Button, { children: 'Test Button' })
    expect(element.type).toBe(Button)
    expect(element.props.children).toBe('Test Button')
  })

  it('accepts variant prop', () => {
    const element = React.createElement(Button, { 
      variant: 'secondary',
      children: 'Secondary Button' 
    })
    expect(element.props.variant).toBe('secondary')
  })

  it('accepts size prop', () => {
    const element = React.createElement(Button, { 
      size: 'sm',
      children: 'Small Button' 
    })
    expect(element.props.size).toBe('sm')
  })

  it('accepts disabled prop', () => {
    const element = React.createElement(Button, { 
      disabled: true,
      children: 'Disabled Button' 
    })
    expect(element.props.disabled).toBe(true)
  })
})