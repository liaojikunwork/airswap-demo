import React from 'react';
import styled from 'styled-components';

const WidgetCardContainer = styled.div`
  width: 400px;
  height: 200px;
  background-color: white;
  box-shadow: 0px 20px 75px 0px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  background-color: white;
  justify-content: center;
  align-items: center;
`

const Title = styled.p`
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  color: black;
`

interface WidgetCardProps {
  title: string;
  children: React.ReactNode;
}

export default function WidgetCard(props: WidgetCardProps) {
  return (
    <WidgetCardContainer>
      <Title>{props.title}</Title>
      <ContentContainer>{props.children}</ContentContainer>
    </WidgetCardContainer>
  )
}
