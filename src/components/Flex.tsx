import styled from 'styled-components'

export interface FlexProps {
  $direction?: string;
  $justify?: string;
  $align?: string;
  $wrap?: string;
  $expand?: boolean
  $height?: string
  $shrink?: number;
  $children?: React.ReactNode
  $opacity?: number
}

const Flex = styled.div<FlexProps>`
  display: flex;
  box-sizing: border-box;
  flex-direction: ${({ $direction }) => $direction || 'column'};
  justify-content: ${({ $justify }) => $justify || 'flex-start'};
  align-items: ${({ $align }) => $align || 'center'};
  flex-wrap: ${({ $wrap }) => $wrap || 'nowrap'};
  width: ${({ $expand }) => ($expand ? '100%' : 'auto')};
  opacity: ${({ $opacity }) => ($opacity !== undefined ? $opacity : 1)};
  flex-shrink: ${({ $shrink }) => $shrink || 'auto'};
  height: ${({ $height }) => $height || 'auto'};
`
Flex.displayName = 'Flex'
Flex.defaultProps = {
  $direction: 'column',
  $justify: 'flex-start',
  $align: 'center',
  $wrap: 'nowrap',
}

export default Flex
